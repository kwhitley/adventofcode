import * as day3 from '.'
import { input } from './input'

const sample = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split('\n')

const actual = input.split('\n')

describe('DAY 3', () => {
  describe('part 1', () => {
    it('should get gamma/epsilon from inputs', () => {
      const gamma = day3.getGamma(sample)
      const episilon = day3.getEpsilon(sample)

      expect(gamma * episilon).toBe(198)
    })

    it('TEST', () => {
      const gamma = day3.getGamma(actual)
      const episilon = day3.getEpsilon(actual)

      expect(gamma * episilon).toBe(749376)
    })
  })

  describe('part2 2', () => {
    it('should get oxygen/co2 from inputs', () => {
      const oxygen = day3.getOxygen(sample)
      const co2 = day3.getCO2(sample)

      expect(oxygen * co2).toBe(230)
    })

    it('TEST', () => {
      const oxygen = day3.getOxygen(actual)
      const co2 = day3.getCO2(actual)

      expect(oxygen * co2).toBe(2372923)
    })
  })
})
