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

      expect(risk).toEqual(15)
    })
  })

  // describe('part2', () => {
  //   it('should fully decode outputs', () => {
  //     const output = day9.decode(sample1, true)

  //     expect(output).toEqual(5353)
  //   })

  //   it('FINAL', () => {
  //     const output = day9.decode(actual, true)

  //     expect(output).toEqual(975706)
  //   })
  // })
})
