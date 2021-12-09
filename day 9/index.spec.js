import * as day9 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `2199943210
3987894921
9856789892
8767896789
9899965678`

describe('DAY 9', () => {
  describe('part 1', () => {
    it('should get risk of heatmap', () => {
      const risk = day9.getRisk(sample)

      expect(risk).toEqual(15)
    })

    it('FINAL', () => {
      const risk = day9.getRisk(actual)

      expect(risk).toEqual(633)
    })
  })

  describe('part 2', () => {
    it('should get basins', () => {
      const risk = day9.getRisk(sample, true)

      expect(risk).toEqual(1134)
    })

    it('FINAL', () => {
      const risk = day9.getRisk(actual, true)

      expect(risk).toEqual(1050192)
    })
  })
})
