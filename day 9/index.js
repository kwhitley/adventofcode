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

  let knots = Array(length).fill(0).map(v => ({ x, y, prev: { x, y } }))
  let tail = knots[knots.length-1]

  const visitedByTail = {
    '0,0': true
  }

  for (const [dir, steps] of moves) {
    const [dx, dy] = directions[dir]
    // console.log('moving', dir, 'for', steps)


    for (let i=0; i<steps; i++) {
      // for (let k=0; k<length; k++) {
      //   knots[k].prev.x = knots[k].x
      //   knots[k].prev.y = knots[k].y
      // }

      for (let k=1; k<length; k++) {
        let a = knots[k-1]
        let b = knots[k]

        // console.log('comparing knots', k, a, 'and', k-1, b )

        // for the first pass we move the head
        if (k === 1) {
          // a.prev = { x: a.x, y: a.y }
          a.x += dx
          a.y += dy
          // console.log('moving head to', a)
        }

        const touching = isTouching(a, b)

        if (touching) break

        const diffX = Math.abs(b.x - a.x)
        const diffY = Math.abs(b.y - a.y)

        if (b.x !== a.x && b.y !== a.y) {
          // diagonal move
          b.x += a.x > b.x ? 1 : -1
          b.y += a.y > b.y ? 1 : -1

          // console.log('moving', k, 'diagonally to', b)
        } else {
          if (diffX > 1) {
            b.x += a.x > b.x ? 1 : -1
            // console.log('moving', k, 'horizontally to', b)
          }

          if (diffY > 1) {
            b.y += a.y > b.y ? 1 : -1
            // console.log('moving', k, 'vertically to', b)
          }
        }

        // if (!touching) {
          // b.prev = { x: b.x, y: b.y }
          // console.log('moving', k, 'to', a.prev, 'from', b)

          // b.x = a.prev.x
          // b.y = a.prev.y

          // console.log('knots are now', knots)
        // }
      }
      visitedByTail[`${tail.y},${tail.x}`] = true
    }

    // console.log('knots are', knots)
  }

  // console.log({ visitedByTail })

  return Object.keys(visitedByTail).length
}

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
