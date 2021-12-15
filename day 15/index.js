import { numbers } from 'supergeneric'

export const run = (input, part2) => {
  let grid = input.split('\n').map(line => line.split('').map(numbers))
  let width = grid[0].length
  let height = grid.length
  let bottom = height * (part2 ? 5 : 1) - 1
  let right = width * (part2 ? 5 : 1) - 1

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

        if (newY >= 0 && newY <= bottom && newX <= right && newX >= 0) {
          let weight = (grid[newY % height][newX % width] + (newY/height|0) + (newX/width|0) - 1) % 9 + 1
          queue.push([weight + c, newY, newX])
        }

      }

      queue.sort((a, b) => a[0] > b[0] ? 1 : -1) // sort queue to ascending by cost
    }
  }

  return cost[`${bottom}.${right}`]
}
