import * as day2 from '.'
import { input } from './input'

// SAMPLE INPUT
const sample = day2.commandify(`forward 5
down 5
forward 8
up 3
down 8
forward 2`)

// ACTUAL INPUT
const actual = day2.commandify(input)

describe('DAY 2', () => {
  describe('part 1', () => {
    it('should reposition according to commands', () => {
      const [x, y] = day2.pilot(sample)

      expect(x * y).toBe(150)
    })

    it('FINAL', () => {
      const [x, y] = day2.pilot(actual)

      expect(x * y).toBe(2091984)
    })
  })

  describe('part 2', () => {
    it('should reposition according to commands', () => {
      const [x, y] = day2.pilotV2(sample)

      expect(x * y).toBe(900)
    })

    it('FINAL', () => {
      const [x, y] = day2.pilotV2(actual)

      expect(x * y).toBe(2086261056)
    })
  })
})
