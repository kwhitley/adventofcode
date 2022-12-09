import { sum } from 'supergeneric/sum'

const directions = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0],
}

const isTouching = (a, b) => {
  if (Math.abs(a.x - b.x) > 1) return false
  if (Math.abs(a.y - b.y) > 1) return false

  return true
}

export const part1 = (input, length = 2) => {
  const moves = input
                  .split('\n')
                  .map(row => row.split(' '))
                  .map(([dir, value]) => [dir, Number(value)])

  let x = 0
  let y = 0

  let knots = Array(length).fill(0).map(v => ({ x, y }))
  let tail = knots[knots.length-1]

  const visitedByTail = {
    '0,0': true
  }

  for (const [dir, steps] of moves) {
    const [dx, dy] = directions[dir]

    for (let i=0; i<steps; i++) {
      for (let k=1; k<length; k++) {
        let a = knots[k-1]
        let b = knots[k]

        // for the first pass we move the head
        if (k === 1) {
          a.x += dx
          a.y += dy
        }

        if (isTouching(a, b)) break

        const diffX = Math.abs(b.x - a.x)
        const diffY = Math.abs(b.y - a.y)

        if (b.x !== a.x && b.y !== a.y) {
          b.x += a.x > b.x ? 1 : -1
          b.y += a.y > b.y ? 1 : -1
        } else {
          if (diffX > 1) {
            b.x += a.x > b.x ? 1 : -1
          }

          if (diffY > 1) {
            b.y += a.y > b.y ? 1 : -1
          }
        }
      }
      visitedByTail[`${tail.y},${tail.x}`] = true
    }
  }

  return Object.keys(visitedByTail).length
}
