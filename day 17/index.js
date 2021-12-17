import { sum } from 'supergeneric'

const between = (a, b) => c => c >= Math.min(a, b) && c <= Math.max(a, b)

export const run = (input, part2) => {
  const target = input.split('=').slice(1).map(pair => pair.split('..').map(c => Number(c.replace(/[^\d-]/g, ''))))
  const inBoundsX = between(...target[0])
  const inBoundsY = between(...target[1])
  const pastTarget = (x, y) => x > target[0][1]
  const inBounds = (x, y) => inBoundsX(x) && inBoundsY(y)

  const play = (v, target) => {
    let pos = [0, 0]
    let ticks = 0
    const inPlay = ([x, y]) => x < target[0][1] && y > target[1][0]
    let maxY = -Infinity
    const advance = (p, v) => {
      p[0] += v[0]
      p[1] += v[1]
      v[1] -= 1
      v[0] = Math.max(0, v[0]-1)
      maxY = Math.max(maxY, p[1])
    }

    while (inPlay(pos)) {
      ticks++
      advance(pos, v)
      if (inBounds(...pos)) return [true, false, maxY]
    }

    return [false, pastTarget]
  }

  const queue = [[5, 7]]
  const visited = new Set()
  const hits = []
  let tries = 0

  while (queue.length && tries < 1000000) {
    tries++
    const [x, y] = queue.shift()
    const key = `${x},${y}`

    if (!visited.has(key)) {
      visited.add(key)
      // console.log('trying velocity', [x, y])

      const [hit, pastX, maxY] = play([x, y], target)

      if (hit) {
        hits.push([maxY, x, y])
      }

      for (const [dx, dy] of [[0, 1], [1, 0], [0, -1]]) {
        const newX = x + dx
        const newY = y + dy

        queue.push([newX, newY])
      }
    }
  }

  return part2 ? hits.length : Math.max(...hits.map(h => h[0]))
}
