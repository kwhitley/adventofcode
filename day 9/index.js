import { sum, onlyNumbers } from 'supergeneric'

export const getRisk = (input, part2) => {
  const rowLength = input.split('\n')[0].length
  const grid = input.split('\n').map(row => row.split('').map(Number))

  let risk = 0

  for (let r=0; r<grid.length; r++) {
    for (let c=0; c<grid[r].length; c++) {
      const adjacent = [
        grid[r-1]?.[c],
        grid[r]?.[c-1],
        grid[r]?.[c+1],
        grid[r+1]?.[c],
      ]

      const isLowest = Math.min(...onlyNumbers(adjacent)) > grid[r][c]

      if (isLowest) {
        risk += (grid[r][c] + 1)
      }
    }
  }

  return risk
}
