import { sum } from 'supergeneric'

export const grow = (population = [], days = 80, ages = Array(9).fill(0)) => {
  for (const p of population) {
    ages[p]++
  }

  for (let d=days; d>0; d--) {
    const respawn = ages[0]

    for (let age=1; age<=8; age++) {
      ages[age-1] = ages[age]
      ages[age] = 0
    }

    ages[8] += respawn
    ages[6] += respawn
  }

  return sum(ages)
}
