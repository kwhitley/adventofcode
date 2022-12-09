import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `A Y
B X
C Z`

const sample2 = `C X`

describe('DAY 2', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(15)
    })

    it('sample', () => {
      expect(part1(sample2)).toBe(7)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(8933)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(12)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(11998)
    })
  })
})
