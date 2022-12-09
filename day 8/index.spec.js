import { part1, part2 } from '.'
import { actual } from './input'
// SAMPLE INPUT
const sample = `30373
25512
65332
33549
35390`

describe('DAY 8', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample).count).toBe(21)
    })

    it('actual', () => {
      expect(part1(actual).count).toBe(1736) // 1467 1696
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(8)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(268800) // 1800
    })
  })
})
