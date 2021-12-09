import { ascending, onlyNumbers } from 'supergeneric'

export const getRisk = (input, part2, risk = 0, basins = []) => {
  const rowLength = input.split('\n')[0].length
  const grid = input.split('\n').map(row => row.split('').map(Number))

  for (let r=0; r<grid.length; r++) {
    for (let c=0; c<grid[r].length; c++) {
      const adjacent = [
        grid[r-1]?.[c],
        grid[r]?.[c-1],
        grid[r]?.[c+1],
        grid[r+1]?.[c],
      ]

      if (Math.min(...onlyNumbers(adjacent)) > grid[r][c]) {
        risk += (grid[r][c] + 1)
        const scanned = []
        const basin = []

        const getBasin = (r, c, coordinates = `${r},${c}`) => {
          if (scanned.includes(coordinates) || grid[r][c] === 9) return undefined
          scanned.push(coordinates)
          basin.push(coordinates)
          r > 0 && getBasin(r-1, c)
          r < grid.length - 1 && getBasin(r+1, c)
          c > 0 && getBasin(r, c-1)
          c < grid[0].length - 1 && getBasin(r, c+1)
        }

        getBasin(r, c)
        basins.push(basin.length)
        basins = basins.sort(ascending).slice(-3)
      }
    }
  }

  return part2 && basins.reduce((acc, b) => b * acc, 1) || risk
}
