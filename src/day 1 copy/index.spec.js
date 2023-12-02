import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 2
export const transforms = ['\n']

// SAMPLE INPUT
const RAW_SAMPLE1 = ``

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(true)
    })
    // it('actual', () => {
    //   expect(part1(actual)).toBe(54561)
    // })
  })

  // describe('part 2', () => {
  //   it('sample', () => {
  //     expect(part2(sample2)).toBe(281)
  //   })
  //   it('actual', () => {
  //     expect(part2(actual)).toBe(54076)
  //   })
  // })
})
