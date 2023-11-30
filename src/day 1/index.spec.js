import { DAY, actual, part1, transforms } from '.'
import { processInput } from '../lib'

// SAMPLE INPUT
const RAW_SAMPLE = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe(`DAY ${DAY}`, () => {
  // ready-to-use sample
  const sample1 = processInput(RAW_SAMPLE, transforms || [])

  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(24000)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part1(actual)).toBe(67633)
    })
  })
})
