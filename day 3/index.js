import { sum } from 'supergeneric/sum'

const getPriority = v => {
  let value = v.charCodeAt() - 96
  if (value < 0) {
    value += 58
  }
  return value
}

export const part1 = input => {
  const sacks = input
                .split('\n')
                .map(sack => [
                  sack.slice(0, sack.length/2),
                  sack.slice(sack.length/2)
                ])

  const matched = sacks.map(([a, b]) => {
    for (let i=0; i<a.length; i++) {
      if (b.includes(a[i])) return a[i]
    }
  })

  const points = matched.map(getPriority)

  return sum(points)
}
export const part2 = input => {
  const sacks = input
                .split('\n')
  const priorities = []

  while (sacks.length) {
    const group = sacks
                    .splice(0, 3)
                    .sort((a, b) => a.length - b.length)

    for (let i=0; i<group[0].length; i++) {
      let target = group[0][i]

      if (group[1].includes(target) && group[2].includes(target)) {
        priorities.push(target)
        break
      }
    }
  }

  return sum(priorities.map(getPriority))
}
