import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 6
export const transforms = ['\n', l => l.match(/\d+/g).map(Number)]

// SAMPLE INPUT
const RAW_SAMPLE1 = `Time:      7  15   30
Distance:  9  40  200`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])
console.log({ sample1 })

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(288)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(275724)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample1)).toBe(71503)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(37286485) // 3117212723 (too high)
    })
  })
})
