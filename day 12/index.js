const allPaths = {}

function bfs(grid, start, end) {
  // Create a queue to store the positions to visit
  const queue = [{ pos: start, steps: 0, path: [] }]
  const startKey = `${start.row},${start.col}`
  const endKey = `${end.row},${end.col}`

  // Create a set to store the positions that have been visited
  const visited = new Set([startKey])
  const maxRows = grid.length
  const maxCols = grid[0].length

  const getHeight = (c) => {
    if (c === 'S') return 0
    if (c === 'E') return 26
    return c.charCodeAt() - 97
  }

  // Loop while the queue is not empty
  while (queue.length > 0) {
    // Get the next position to visit from the queue
    const { pos, steps, path } = queue.shift()
    const { row, col } = pos
    const key = `${pos.row},${pos.col}`
    const value = grid[row][col]
    const height = getHeight(value)

    if (key === endKey) {
      return steps
    }

    // Loop over the four possible directions
    for (const [dy, dx, direction] of [[-1, 0, 'up'], [0, 1, 'right'], [1, 0, 'down'], [0, -1, 'left']]) {
      // Calculate the next position in this direction
      const nextPos = { row: pos.row + dy, col: pos.col + dx }
      const nextKey = `${nextPos.row},${nextPos.col}`

      // Check if the next position is out of bounds or has been visited
      if (nextPos.row < 0 || nextPos.row >= maxRows || nextPos.col < 0 || nextPos.col >= maxCols || visited.has(nextKey)) {
        continue
      }

      const nextValue = grid[nextPos.row][nextPos.col]
      const nextHeight = getHeight(nextValue)

      if (nextHeight - height > 1) {
        continue
      }

      // Add the next position to the queue and the set of visited positions
      queue.push({ pos: nextPos, steps: steps + 1, path: [...path, nextKey] })
      visited.add(nextKey)
    }
  }

  // If we reach this point, we have not found the end position
  return Infinity
}

export const part1 = (input) => {
  const map = input
                  .split('\n')
                  .map(row => row.split(''))

  let end
  let start

  for (let y=0; y<map.length; y++) {
    for(let x=0; x<map[0].length; x++) {
      if (map[y][x] === 'S') {
        start = { row: y, col: x }
      }
      if (map[y][x] === 'E') {
        end = { row: y, col: x }
      }
    }
  }

  return bfs(map, start, end)
}

export const part2 = (input) => {
  const map = input
                  .split('\n')
                  .map(row => row.split(''))

  let end
  let start

  const possibleStarts = []

  for (let y=0; y<map.length; y++) {
    for(let x=0; x<map[0].length; x++) {
      if (map[y][x] === 'S' || map[y][x] === 'a') {
        possibleStarts.push({ row: y, col: x })
      }
      if (map[y][x] === 'E') {
        end = { row: y, col: x }
      }
    }
  }

  // console.log(map)

  const paths = []
  for (const start of possibleStarts) {
    paths.push(bfs(map, start, end))
  }

  paths.sort((a, b) => a - b)

  // console.log('paths =', paths)

  return paths[0]
}
