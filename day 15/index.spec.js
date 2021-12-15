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

  // describe('part 2', () => {
  //   it('should do a thing in this lifetime', () => {
  //     expect(challenge.run(sample1, 40)).toEqual(2188189693529)
  //   })

  //   it('FINAL', () => {
  //     expect(challenge.run(actual, 40)).toEqual(2276644000111)
  //   })
  // })
})
