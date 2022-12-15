export const part1 = (input, row = 10) => {
  const sensorLocations = input.split('\n').map(v => v.match(/-?\d+/g).map(Number))
  const grid = {}
  const sensors = new Set() // not used
  const beacons = new Set() // not used
  const rowCoverage = new Set()

  const addToGrid = (x, y, type) => {
    grid[y] = grid[y] || {}
    grid[y][x] = grid[y][x] || type
    if (row === y && grid[y][x] !== 'B')
      rowCoverage.add(`${x},${y}`)
  }

  for (const [sx, sy, bx, by] of sensorLocations) {
    addToGrid(sx, sy, 'S')
    addToGrid(bx, by, 'B')
    sensors.add(`${sx},${sy}`) // not used
    beacons.add(`${bx},${by}`) // not used
    const distance = Math.abs(sx - bx) + Math.abs(sy - by)
    const distanceToRow = Math.abs(sy - row)

    if (distance >= distanceToRow) {
      for (let x=-1*(distance-distanceToRow); x<=distance-distanceToRow; x++) {
        addToGrid(sx + x, row, '#')
      }
    }
  }

  return rowCoverage.size
}
