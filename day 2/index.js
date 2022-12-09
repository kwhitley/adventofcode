import { sum } from 'supergeneric/sum'

const lut = {
  'A': 1,
  'B': 2,
  'C': 3,
  'X': 1,
  'Y': 2,
  'Z': 3,
}

const points = {
  'AX': 3,
  'BY': 3,
  'CZ': 3,
  'AY': 6,
  'BZ': 6,
  'CX': 6,
  'AZ': 0,
  'BX': 0,
  'CY': 0,
}

export const part1 = input => {
  const rounds = input
                  .split('\n')
                  .map(round => round.split(' '))

  return sum(
    rounds.map(p => lut[p[1]] + points[p[0] + p[1]])
  )
}

export const part2 = input => {
  const rounds = input
                  .split('\n')
                  .map(round => round.split(' '))

  const target = {
    'X': 0,
    'Y': 3,
    'Z': 6,
  }

  const points = {
    'AX': 3,
    'BX': 1,
    'CX': 2,
    'AY': 1,
    'BY': 2,
    'CY': 3,
    'AZ': 2,
    'BZ': 3,
    'CZ': 1,
  }

  return sum(
    rounds.map(p => {
      let expectedPoints = target[p[1]]
      let key = p.join('')

      return expectedPoints + points[key]
    })
  )
}
