import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('DAY 3', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(157)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(7785)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(70)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(2633)
    })
  })
})
