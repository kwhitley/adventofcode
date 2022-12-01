import { part1, part2 } from '.'
import { input } from './input'

// SAMPLE INPUT
const sample = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

// ACTUAL INPUT
const actual = input

describe('DAY 1', () => {
  describe('part 1 - should get max load', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(24000)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(67633)
    })
  })

  describe('part 2 - should get sum of top 3 max loads', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(45000)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(199628)
    })
  })
})
