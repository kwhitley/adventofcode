import { average, median, sum } from 'supergeneric'

export const reposition = (positions) => {
  positions = positions.split(',').map(Number)
  const med = median(positions)
  const fuelFromMedian = sum(positions.map(p => Math.abs(p - med)))

  return [ med, fuelFromMedian ]
}

export const reposition2 = (positions) => {
  positions = positions.split(',').map(Number)

  let fuel = Array(1500)
              .fill(0)
              .map((v, i) => i)
              .reduce((acc, i) => (acc[i] = acc[i-1]+i) && acc || acc, { [-1]: 0 })

  const target = average(positions)|0
  const bestFuelA = sum(positions.map(p => fuel[Math.abs(p - target)]))
  const bestFuelB = sum(positions.map(p => fuel[Math.abs(p - target - 1)]))

  return Math.min(bestFuelA, bestFuelB)
}
