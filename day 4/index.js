import { sum } from 'supergeneric/sum'
import { min } from 'supergeneric/min'
import { max } from 'supergeneric/max'

const getPairs = input => input
                            .split('\n')
                            .map(
                              p => p.split(',').map(row => row.split('-').map(Number))
                            )

export const part1 = input => {
  const pairs = getPairs(input)

  let overlapping = 0

  for (const pair of pairs) {
    let [a, b] = pair

    if (a[0] <= b[0] && a[1] >= b[1]) {
      overlapping++
    } else if (a[0] >= b[0] && a[1] <= b[1]) overlapping++
  }

  return overlapping
}

export const part2 = input => {
  const pairs = getPairs(input)

  let overlapping = 0

  for (const pair of pairs) {
    let [a, b] = pair

    if (b[0] > a[1]) continue
    if (b[1] < a[0]) continue

    overlapping++
  }

  return overlapping
}
