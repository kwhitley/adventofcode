import { part1, part2 } from '.'
import { actual } from './input'
// SAMPLE INPUT
const sample = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

describe('DAY 5', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe('CMZ')
    })

    it('actual', () => {
      expect(part1(actual)).toBe('PTWLTDSJV')
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe('MCD')
    })

    it('actual', () => {
      expect(part2(actual)).toBe('WZMFVGGZP')
    })
  })
})
