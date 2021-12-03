import * as day1 from '.'
import { numberify } from '../utils/numberify'
import { input } from './input'

// SAMPLE INPUT
const sample = numberify(`199
200
208
210
200
207
240
269
260
263`)

// ACTUAL INPUT
const actual = numberify(input)

describe('DAY 1', () => {
  describe('part 1', () => {
    it('should reposition according to commands', () => {
      expect(day1.detectIncreases(sample)).toBe(7)
    })

    it('FINAL', () => {
      expect(day1.detectIncreases(actual)).toBe(1195)
    })
  })

  describe('part 2', () => {
    it('should count the number of increases', () => {
      expect(day1.sweep(sample)).toBe(5)
    })

    it('FINAL', () => {
      expect(day1.sweep(actual)).toBe(1235)
    })
  })
})
