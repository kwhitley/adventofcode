import { sum } from 'supergeneric/sum'
import { min } from 'supergeneric/min'
import { max } from 'supergeneric/max'

export const part1 = (input, isPart2 = false) => {
  const paths = input.split('\n').map(row => row.split(' -> ').map(pair => pair.split(',').map(Number)))
  const grid = {}
  let maxY = 0

  const addPoint = (x, y) => {
    grid[x] = grid[x] || {}
    grid[x][y] = 1
    return true
  }

  const drawPath = ([x1,y1], [x2,y2]) => {
    maxY = max([maxY, y1, y2])
    if (x1 === x2) {
      for (let y=y1; y!==y2; y+=(y2 > y1 ? 1 : -1)) {
        addPoint(x1,y)
      }
      addPoint(x1,y2)
    } else {
      for (let x=x1; x!==x2; x+=(x2 > x1 ? 1 : -1)) {
        addPoint(x,y1)
      }
      addPoint(x2,y1)
    }
  }

  for (const path of paths) {
    for (let i=0; i<path.length-1; i++) {
      drawPath(path[i], path[i+1])
    }
  }

  const addSand = (grain) => {
    let [x,y] = [500,0]
    let attempts = 1000

    if (isPart2 && grid[x]?.[y]) return false // stop when start is blocked

    while (attempts) {
      attempts--
      if (isPart2 && y === maxY + 1) {
        return addPoint(x, y)
      }
      if (!grid[x]?.[y+1]) {
        y++
        continue
      }
      if (!grid[x-1]?.[y+1]) {
        x--
        y++
        continue
      }
      if (!grid[x+1]?.[y+1]) {
        x++
        y++
        continue
      }
      return addPoint(x,y)
    }

    return false
  }

  let grainsAdded = 0
  while (addSand(grainsAdded)) {
    grainsAdded++
  }

  return grainsAdded
}
