import { sum } from 'supergeneric'

export const play = (input, part2) => {
  let [draws, ...boards] = input.split('\n\n')
  draws = draws.split(',').map(Number)
  boards = boards.map(b => [b.trim().replace(/\s+/gi, ' ').split(' ').map(Number), Array(5).fill(0), Array(5).fill(0)])

  for (const draw of draws) {
    for (const [board, rows, cols] of boards) {
      const index = board.indexOf(draw)
      const [row, col] = [Math.floor(index / 5), index % 5]
      board[index] = null
      rows[row]++
      cols[col]++

      if (rows[row] > 4 || cols[col] > 4) {
        boards = boards.filter(b => b[0] !== board)

        if (!part2 || !boards.length)
          return [draw, sum(board)]
      }
    }
  }
}
