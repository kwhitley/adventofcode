import { sum } from 'supergeneric/sum'

const compare = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number')
    return a < b ? 1 : a > b ? -1 : 0

  if (typeof a === 'number') return compare([a], b)
  if (typeof b === 'number') return compare(a, [b])

  for (let i=0; i<a.length; i++) {
    if (b[i] === undefined) return -1
    let comparison = compare(a[i], b[i])
    if (comparison) return comparison // only return -1 / +1
  }

  return a.length < b.length ? 1 : 0
}

export const part1 = (input) => {
  const sets = input
                  .split('\n\n')
                  .map(pair => pair.split('\n').map(JSON.parse))
  const goodsets = []

  for (let i=0; i<sets.length; i++) {
    let [left, right] = sets[i]

    if (compare(left, right) >= 0) goodsets.push(i+1)
  }

  return sum(goodsets)
}

export const part2 = (input) => {
  const a = [[6]]
  const b = [[2]]
  const sets = input
                  .split('\n')
                  .filter(v => v)
                  .map(JSON.parse)
                  .concat()
  sets.push(a, b)

  const sorted = sets.sort(compare).reverse()

  return (sorted.indexOf(a) + 1) * (sorted.indexOf(b) + 1)
}
