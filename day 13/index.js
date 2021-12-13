import { numbers, sum } from 'supergeneric'

export const run = (input, maxInstructions = 1, part2) => {
  const [dots, instructions] = input
                                .split('\n\n')
                                .map((set, i) =>
                                  set
                                    .split('\n')
                                    .map(line => line.replace(/^.*\s/, '').split(i ? '=' : ',').map(numbers))
                                )
  const maxY = Math.max(...dots.map(d => d[1]))
  const maxX = Math.max(...dots.map(d => d[0]))
  let grid = Array(maxY+(part2?2:1)).fill(0).map(() => Array(maxX+1).fill(0)) // solved final by shifting to maxY+2... WTF.

  for (const [x, y] of dots) {
    grid[y][x] = 1
  }

  const fold = (grid, axis, at, gridB) => {
    gridB = axis === 'y'
          ? grid.splice(at, grid.length).reverse()
          : grid.map(line => line.splice(at, grid.length).reverse())

    for (let y=0; y<grid.length; y++) {
      for (let x=0; x<grid[y].length; x++) {
        grid[y][x] = grid[y][x] || gridB[y][x]
      }
    }

    return grid
  }

  for (const [axis, at] of instructions) {
    grid = fold(grid, axis, at)
    if (!--maxInstructions) break
  }

  if (part2) {
    console.log(grid.map(line => line.map(c => c ? '#' : ' ').join('')))
  }

  return sum(grid.flat())
}
