import * as day6 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `3,4,3,1,2`

describe('DAY 6', () => {
  describe('part 1', () => {
    it('should get number of lanterfish after X many days', () => {
      const size = day6.grow(sample)

      expect(size).toBe(5934)
    })

    it('FINAL', () => {
      const size = day6.grow(actual)

      expect(size).toBe(395627)
    })
  })

  describe('part2', () => {
    it('should get number of lanterfish after X many days', () => {
      const size = day6.grow(sample, 256)

      expect(size).toBe(26984457539)
    })

    it('FINAL', () => {
      const size = day6.grow(actual, 256)

      expect(size).toBe(1767323539209)
    })
  })
})
