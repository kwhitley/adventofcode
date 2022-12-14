import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`

describe('DAY 14', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(24)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(873)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part1(sample, true)).toBe(93)
    })

    it('actual', () => {
      expect(part1(actual, true)).toBe(24813) // tried 121
    })
  })
})
