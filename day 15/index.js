import { numbers } from 'supergeneric'

export const run = (input, steps = 1) => {
  const grid = input.split('\n').map(line => line.split('').map(numbers))

  const bottom = grid.length - 1
  const right = grid[0].length - 1
  const end = `${bottom}.${right}`

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

  return cost[end]
}
