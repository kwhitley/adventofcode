import { numbers, sum } from 'supergeneric'

export const setup = input => {
  let [ draws, ...boards ] = input.split('\n\n')
  draws = draws.split(',').map(numbers)
  boards = boards.map(b => b.replace(/\s+/gi, ' ').split(' ').map(numbers))

  for (const board of boards) {
    board.plays = {
      rows: Array(5).fill(0),
      cols: Array(5).fill(0),
    }
  }

  return [ draws, boards ]
}

export const play = input => {
  const [ draws, boards ] = setup(input)

  for (const draw of draws) {
    for (const board of boards) {
      let index = board.indexOf(draw)

      if (index === -1) continue

      board[index] = null

      const col = index % 5
      const row = Math.floor(index / 5)

      board.plays.rows[row]++
      board.plays.cols[col]++

      // console.log('playing', draw, 'against board', board, 'found at row=', row, 'col=', col)

      if (board.plays.cols[col] === 5 || board.plays.rows[row] === 5) {
        // game over
        // console.log('GAME OVER WITH BOARD', board)

        return [
          draw,
          sum(board),
        ]
      }
    }
  }


  // console.log('board 1', boards[0], tally(boards[0]))


}
