import * as day11 from '.'
import actual from './input'

// SAMPLE INPUT
const sample = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

describe('DAY 11', () => {
  describe('part 1', () => {
    it('should get score of corrupted lines', () => {
      const answer = day11.run(sample)

      expect(answer).toEqual(1656)
    })

    it('FINAL', () => {
      const answer = day11.run(actual)

      expect(answer).toEqual(1673)
    })
  })

  describe('part 2', () => {

    it('sample', () => {
      const answer = day11.run(sample, true)

      expect(answer).toEqual(195)
    })

    it('sample', () => {
      const answer = day11.run(actual, true)

      expect(answer).toEqual(279)
    })
  })
})
