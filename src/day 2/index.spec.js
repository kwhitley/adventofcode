import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 2
export const transforms = ['\n', '; ', ', ', line => line.match(/^.*?(\d+)\s(\w+)$/).slice(-2).map(v => Number(v) >= 0 ? Number(v) : v)]

// SAMPLE INPUT
const RAW_SAMPLE1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1, { red: 12, green: 13, blue: 14 })).toBe(8)
    })
    it('actual', () => {
      expect(part1(actual, { red: 12, green: 13, blue: 14 })).toBe(2162)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample1)).toBe(2286)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(72513)
    })
  })
})
