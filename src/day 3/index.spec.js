import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 3
export const transforms = ['\n']

// SAMPLE INPUT
const RAW_SAMPLE1 = `
467..114..
...*......
..35..633.
......#...
617*.*....
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(4361)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(529618)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample1)).toBe(467835)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(77509019)
    })
  })
})
