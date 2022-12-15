import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`

const sampleSimple = `Sensor at x=8, y=7: closest beacon is at x=2, y=10`

describe('DAY 15', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample, 11)).toBe(26)
    })

    // it('sample', () => {
    //   expect(part1(sample, 10)).toBe(26)
    // })

    // it('sample', () => {
    //   expect(part1(sampleSimple, 7)).toBe(19)
    //   expect(part1(sampleSimple, 8)).toBe(17)
    // })

    // it('actual', () => {
    //   expect(part1(actual, 2000000)).toBe(5100463)
    // })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample, 0, 20)).toBe(56000011)
    })

    // it('actual', () => {
    //   expect(part1(actual, true)).toBe(24813) // tried 121
    // })
  })
})
