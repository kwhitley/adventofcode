import * as challenge from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `D2FE28`

describe('DAY 16', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(challenge.run('target area: x=20..30, y=-10..-5')).toEqual(45)
    })

    it('FINAL', () => {
      expect(challenge.run(actual)).toEqual(10878)
    })
  })

  describe('part 2', () => {
    it('should do a thing', () => {
      expect(challenge.run('target area: x=20..30, y=-10..-5', true)).toEqual(112)
    })

    it('FINAL', () => {
      expect(challenge.run(actual, true)).toEqual(4716)
    })
  })
})
