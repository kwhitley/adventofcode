import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 1
export const transforms = ['\n']

// SAMPLE INPUT
const RAW_SAMPLE1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
const RAW_SAMPLE2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])
const sample2 = processInput(RAW_SAMPLE2, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(142)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(54561)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample2)).toBe(281)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(54076)
    })
  })
})
