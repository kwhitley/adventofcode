import { sum } from 'supergeneric'

export const grow = (population = [], days = 80, ages = Array(9).fill(0)) => {
  for (const p of population) {
    Number(p) && ages[p]++
  }

  for (let d=days; d>0; d--) {
    const respawn = ages.shift()
    ages.push(respawn)
    ages[6] += respawn
  }

  return sum(ages)
}
