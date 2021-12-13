import { numbers, sum } from 'supergeneric'

export const run = (input, maxInstructions = 1, part2) => {
  const [dots, instructions] = input
                                .split('\n\n')
                                .map((set, i) => set.split('\n').map(line => line.replace(/^.*\s/, '').split(i ? '=' : ',').map(numbers)))
  const maxY = Math.max(...dots.map(d => d[1]))
  const maxX = Math.max(...dots.map(d => d[0]))
  let grid = Array(maxY+(part2?2:1)).fill(0).map(() => Array(maxX+1).fill(0)) // solved final by shifting to maxY+2... WTF.
  dots.forEach(([x, y]) => grid[y][x] = 1)

  const fold = (grid, axis, at) => {
    const gridB = axis === 'y'
                ? grid.splice(at, grid.length).reverse()
                : grid.map(line => line.splice(at, grid.length).reverse())

    return grid.map((line, y) => line.map((v, x) => v || gridB[y][x]))
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
