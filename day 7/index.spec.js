import * as day7 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `16,1,2,0,4,2,7,1,2,14`

describe('DAY 7', () => {
  describe('part 1', () => {
    it('should get fuel and position', () => {
      const [position, fuel] = day7.reposition(sample)

      expect(position).toBe(2)
      expect(fuel).toBe(37)
    })

    it('FINAL', () => {
      const [position, fuel] = day7.reposition(actual)

      expect(fuel).toBe(356992)
    })
  })

  describe('part2', () => {
    it('should get improved fuel and position', () => {
      const fuel = day7.reposition2(sample)

      expect(fuel).toBe(168)
    })

    it('FINAL', () => {
      const fuel = day7.reposition2(actual)

      expect(fuel).toBe(101268110)
    })
  })
})
