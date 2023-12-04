import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 4
export const transforms = ['\n', l => l.split(': ')[1].split(' | ').map(g => g.split(/\s+/).map(Number).filter(v => v))]

// SAMPLE INPUT
const RAW_SAMPLE1 = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(13)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(25231) // 26000
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample1)).toBe(30)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(9721255)
    })
  })
})
