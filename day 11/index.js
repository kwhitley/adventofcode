import { median } from 'supergeneric'

export const run = (input, part2, grid = input.split('\n').map(l => l.split('').map(Number))) => {
  let flashes = 0
  let step = 0

  while (step < 100 || part2) {
    step++
    let flashesThisRound = 0

    for (let r=0; r<grid.length; r++) {
      for (let c=0; c<grid[r].length; c++) {
        grid[r][c]++
      }
    }

    while (grid.flat().find(v => v > 9)) {
      for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[r].length; c++) {
          if (grid[r][c] > 9) {
            flashes++
            flashesThisRound++
            grid[r][c] = undefined
            r > 0 && grid[r-1][c]++
            r < grid.length - 1 && grid[r+1][c]++
            c > 0 && grid[r][c-1]++
            c < grid[0].length - 1 && grid[r][c+1]++
            r > 0 && c > 0 && grid[r-1][c-1]++ // diag up left
            r > 0 && c < grid[0].length - 1 && grid[r-1][c+1]++ // diag up right
            r < grid.length - 1 && c > 0 && grid[r+1][c-1]++ // diag down left
            r < grid.length - 1 && c < grid[0].length - 1 && grid[r+1][c+1]++ // diag down right
          }
        }
      }
    }

    if (part2 && flashesThisRound === grid.flat().length) {
      return step
    }

    // reset
    grid = grid.map(r => r.map(c => Number.isFinite(c) ? c : 0))
  }

  return flashes
}
