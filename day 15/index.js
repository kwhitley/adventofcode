import { numbers } from 'supergeneric'

export const run = (input, part2) => {
  let grid = input.split('\n').map(line => line.split('').map(numbers))

  if (part2) {
    let width = grid[0].length
    let height = grid.length

    for (let y=0; y<5*height; y++) {
      for (let x=0; x<5*width; x++) {
        const risk = (y/height|0) + (x/width|0);
        grid[y] = grid[y] || []
        grid[y][x] = grid[y][x] || (grid[y%height][x%width] + risk)
        if (grid[y][x] > 9) {
          grid[y][x] = grid[y][x] % 9
        }
      }
    }
  }

  const bottom = grid.length - 1
  const right = grid[0].length - 1

  const cost = {}
  const queue = [[0, 0, 0]]
  const visited = new Set()

  while (queue.length) {
    const [c, y, x] = queue.shift()
    const key = `${y}.${x}`
    const existingCost = cost[key] || Infinity

    if (!visited.has(key)) {
      visited.add(key)
      cost[key] = c

      for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        const newX = x + dx
        const newY = y + dy

        if (newY >= 0 && newY <= bottom && newX <= right && newX >= 0)
          queue.push([grid[newY][newX] + c, newY, newX])
      }

      queue.sort((a, b) => a[0] > b[0] ? 1 : -1)
    }
  }

  return cost[`${bottom}.${right}`]
}
