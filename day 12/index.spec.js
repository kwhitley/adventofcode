import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`

describe('DAY 12', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(31)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(534) // not 533
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(29)
    })

    // SLOW
    // it('actual', () => {
    //   expect(part2(actual)).toBe(525)
    // })
  })
})
