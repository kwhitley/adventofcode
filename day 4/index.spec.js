import { part1, part2 } from '.'
import { actual } from './input'
import { getSeconds } from 'itty-time'

// SAMPLE INPUT
const sample = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

describe('DAY 4', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(2)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(464)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(4)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(770)
    })
  })
})
