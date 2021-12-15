import * as challenge from '.'
import actual from './input'

// SAMPLE INPUT
const sample0 = `116
138
216`

const sample1 = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`

describe('DAY 14', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(challenge.run(sample1)).toEqual(40)
    })

    it('FINAL', () => {
      expect(challenge.run(actual)).toEqual(472)
    })
  })

  describe('part 2', () => {
    it('should do a thing, but bigger', () => {
      expect(challenge.run(sample1, true)).toEqual(315)
    })

    // it('FINAL', () => {
    //   expect(challenge.run(actual, true)).toEqual(2851)
    // })
  })
})
