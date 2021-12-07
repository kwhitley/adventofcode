import { average, median, range, sum } from 'supergeneric'

export const reposition = (input, positions = input.split(',').map(Number)) => {
  const med = median(positions)
  const fuelFromMedian = sum(positions.map(p => Math.abs(p - med)))

  return [ med, fuelFromMedian ]
}

export const reposition2 = (input, positions = input.split(',').map(Number)) => {
  const fuel = range(1500).reduce((acc, i) => (acc[i] = acc[i-1]+i) && acc || acc, { [-1]: 0 })
  const target = average(positions)|0
  const bestFuelA = sum(positions.map(p => fuel[Math.abs(p - target)]))
  const bestFuelB = sum(positions.map(p => fuel[Math.abs(p - target - 1)]))

  return Math.min(bestFuelA, bestFuelB)
}
