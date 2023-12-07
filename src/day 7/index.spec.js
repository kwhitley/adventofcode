import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 7
export const transforms = ['\n', l => l.split(' ').map((v, i) => i ? Number(v) : v)]

// SAMPLE INPUT
const RAW_SAMPLE1 = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

// sample data loads
const sample1 = await processInput(RAW_SAMPLE1, transforms || [])
// console.log({ sample1 })

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(6440)
    })
    // it('actual', () => {
    //   expect(part1(actual)).toBe(248453531)
    // })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample1)).toBe(5905)
    })
    // it('actual', () => {
    //   expect(part2(actual)).toBe(248781813)
    // })
  })
})
