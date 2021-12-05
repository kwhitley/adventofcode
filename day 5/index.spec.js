import * as day4 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

describe('DAY 5', () => {
  describe('part 1', () => {
    it('should get number of overlapping positions', () => {
      const positions = day4.findIntersections(sample)

      expect(positions).toBe(5)
    })

    it('FINAL', () => {
      const positions = day4.findIntersections(actual)

      expect(positions).toBe(5092)
    })
  })

  describe('part2', () => {
    it('should get number of overlapping positions, including diagonals', () => {
      const positions = day4.findIntersections(sample, true)

      expect(positions).toBe(12)
    })

    it('FINAL', () => {
      const positions = day4.findIntersections(actual, true)

      expect(positions).toBe(20484)
    })
  })
})
