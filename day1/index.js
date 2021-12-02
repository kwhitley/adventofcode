import { sum } from 'supergeneric'

export const detectIncreases = numbers => numbers.reduce((inc, v, i) => inc += numbers[i] > numbers[i-1], 0)

export const sweep = numbers => numbers.reduce((inc, v, i) =>
  inc += i > 0 && sum(numbers.slice(i, i+3)) > sum(numbers.slice(i-1, i+2))
, 0)
