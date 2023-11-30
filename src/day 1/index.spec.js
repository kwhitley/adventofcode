import { part1 } from '.'
import { processInput, getInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 1
export const transforms = ['\n\n', '\n', Number]

// SAMPLE INPUT
const RAW_SAMPLE1 = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])

// actual data load
const actual = await getInput(DAY, transforms)

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(true)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(true)
    })
  })

  // describe('part 2', () => {
  //   it('sample', () => {
  //     expect(part2(sample1)).toBe(true)
  //   })
  //   it('actual', () => {
  //     expect(part2(actual)).toBe(true)
  //   })
  // })
})
