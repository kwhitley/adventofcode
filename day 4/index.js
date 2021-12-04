import { numbers, sum } from 'supergeneric'

export const setup = input => {
  let [draws, ...boards] = input.split('\n\n')
  draws = draws.split(',').map(numbers)
  boards = boards.map(b => b.trim().replace(/\s+/gi, ' ').split(' ').map(numbers))

  for (const board of boards) {
    board.plays = {
      rows: Array(5).fill(0),
      cols: Array(5).fill(0),
    }
  }

  return [draws, boards]
}

export const play = (input, part2 = false) => {
  const [draws, boards] = setup(input)
  let available = [...boards]

  d: for (const draw of draws) {
    for (const board of boards) {
      let index = board.indexOf(draw)

      if (index === -1) continue

      const col = index % 5
      const row = Math.floor(index / 5)
      board[index] = null
      board.plays.rows[row]++
      board.plays.cols[col]++

      if (board.plays.cols[col] > 4 || board.plays.rows[row] > 4) {
        available = available.filter(b => b !== board)

        if (!part2 || !available.length) {
          return [
            draw,
            sum(board),
          ]
        }
      }
    }
  }
}
