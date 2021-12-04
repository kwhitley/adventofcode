import { sum } from 'supergeneric'

export const play = (input, part2 = false) => {
  let [draws, ...boards] = input.split('\n\n')
  draws = draws.split(',').map(Number)
  boards = boards.map(b => b.trim().replace(/\s+/gi, ' ').split(' ').map(Number))

  for (const board of boards) {
    board.plays = {
      rows: Array(5).fill(0),
      cols: Array(5).fill(0),
    }
  }

  for (const draw of draws) {
    for (const board of boards) {
      const index = board.indexOf(draw)
      const [row, col] = [Math.floor(index / 5), index % 5]
      board[index] = null
      board.plays.rows[row]++
      board.plays.cols[col]++

      if (board.plays.cols[col] > 4 || board.plays.rows[row] > 4) {
        boards = boards.filter(b => b !== board)

        if (!part2 || !boards.length)
          return [draw, sum(board)]
      }
    }
  }
}
