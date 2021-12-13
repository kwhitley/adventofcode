import { numbers, sum } from 'supergeneric'

export const run = (input, maxInstructions = 1, part2) => {
  const [dots, instructions] = input
                                .split('\n\n')
                                .map((set, i) => set.split('\n').map(line => line.replace(/^.*\s/, '').split(i ? '=' : ',').map(numbers)))
  const maxY = Math.max(...dots.map(d => d[1]))
  const maxX = Math.max(...dots.map(d => d[0]))
  let grid = Array(((maxY+1)/2|0)*2+1).fill(0).map(() => Array(((maxX+1)/2|0)*2+1).fill(0))
  dots.forEach(([x, y]) => grid[y][x] = 1)

  for (const [axis, at] of instructions) {
    const gridB = axis === 'y'
                ? grid.splice(at, grid.length).reverse()
                : grid.map(line => line.splice(at, grid.length).reverse())
    grid = grid.map((line, y) => line.map((v, x) => v || gridB[y][x]))

    if (!--maxInstructions) return sum(grid.flat())
  }

  return grid.map(line => line.map(c => c ? '#' : ' ').join(''))
}
