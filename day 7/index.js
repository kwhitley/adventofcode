import { average, sum, median, ascending, round } from 'supergeneric'

export const reposition = (positions) => {
  positions = positions.split(',').map(Number)

  const mean = average(positions)
  const med = median(positions)


  const fuelFromMedian = sum(positions.map(p => Math.abs(p - med)))

  return [ med, fuelFromMedian ]
}

export const reposition2 = (positions) => {
  positions = positions.split(',').map(Number)

  const ranges = Array(1500).fill(0).map((v, i) => i)
  const fuelCalcs = ranges.reduce((acc, r) => Number.isFinite((acc[r] = sum(ranges.slice(0, r+1)))) && acc, {})

  let target = average(positions)|0
  let bestFuelA = sum(positions.map(p => fuelCalcs[Math.abs(p - target)]))
  let bestFuelB = sum(positions.map(p => fuelCalcs[Math.abs(p - target - 1)]))
  let bestFuel = Math.min(bestFuelA, bestFuelB)
  const direction = bestFuelA < bestFuelB ? -1 : 1

  while (true) {
    target += direction
    let newFuel = sum(positions.map(p => fuelCalcs[Math.abs(p - target)]))

    if (newFuel < bestFuel) {
      bestFuel = newFuel
    } else {
      break
    }
  }

  return [ target, bestFuel ]
}
