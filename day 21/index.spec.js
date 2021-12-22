import { run } from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `Player 1 starting position: 4
Player 2 starting position: 8`

describe('DAY 21', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(run(sample1)).toEqual(739785)
    })

    it('FINAL', () => {
      expect(run(actual)).toEqual(995904)
    })
  })

  // describe('part 2', () => {
  //   it('should do a thing, but bigger', () => {
  //     expect(process(sample1, 50)).toEqual(3351)
  //   })

  //   it('FINAL', () => {
  //     expect(process(actual, 50)).toEqual(19592)
  //   })
  // })
})
