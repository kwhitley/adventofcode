import { sum } from 'supergeneric/sum'

export const part1 = input => {
  const trees = input.split('\n')
  const visible = {}
  const cols = trees[0].length
  const rows = trees.length
  const all = {}

  // from left/right
  for (let y=0; y<rows; y++) {
    let maxHeight = -1
    for (let x=0; x<cols; x++) {
      let h = Number(trees[y][x])
      let key = `${y},${x}`
      all[key] = h

      if (h > maxHeight) {
        visible[key] = h
        maxHeight = h
      }

      if (h === 9) break
    }

    maxHeight = -1
    for (let x=cols-1; x>0; x--) {
      let h = Number(trees[y][x])
      let key = `${y},${x}`

      if (h > maxHeight) {
        visible[key] = h
        maxHeight = h
      }

      if (h === 9) break
    }
  }


  // from top/bottom
  for (let x=0; x<cols; x++) {

    let maxHeight = -1
    for (let y=0; y<rows; y++) {
      let h = Number(trees[y][x])
      let key = `${y},${x}`

      if (h > maxHeight) {
        visible[key] = h
        maxHeight = h
      }

      if (h === 9) break
    }

    maxHeight = -1
    for (let y=rows-1; y>0; y--) {
      let h = Number(trees[y][x])
      let key = `${y},${x}`

      if (h > maxHeight) {
        visible[key] = h
        maxHeight = h
      }

      if (h === 9) break
    }
  }

  return {
    count: Object.keys(visible).length,
    visible,
    trees,
    all
  }
}

export const part2 = input => {
  const { trees, all, visible } = part1(input)
  let bestScore = 0

  for (var [coordinates, height] of Object.entries(visible)) {
    const [y, x] = coordinates.split(',').map(Number)
    let visibility = {
      up: 0,
      down: 0,
      left: 0,
      right: 0,
    }
    let bestInDirection = 0

    // look up
    bestInDirection = 0
    for (let i=1; i<10000; i++) {
      let h = trees[y-i]?.[x]
      if (h === undefined) break
      visibility.up++
      if (h >= height) break
    }

    // look down
    bestInDirection = 0
    for (let i=1; i<10000; i++) {
      let h = trees[y+i]?.[x]
      if (h === undefined) break
      visibility.down++
      if (h >= height) break
    }

    // look left
    bestInDirection = 0
    for (let i=1; i<10000; i++) {
      let h = trees[y][x-i]
      if (h === undefined) break
      visibility.left++
      if (h >= height) break
    }

    // look right
    bestInDirection = 0
    for (let i=1; i<10000; i++) {
      let h = trees[y][x+i]
      if (h === undefined) break
      visibility.right++
      if (h >= height) break
    }

    const treeScore = visibility.up * visibility.down * visibility.left * visibility.right

    if (treeScore > bestScore) {
      bestScore = treeScore
    }
  }

  return bestScore
}
