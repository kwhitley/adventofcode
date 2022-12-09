import { part1, part2 } from '.'
import { actual } from './input'
// SAMPLE INPUT
const sample = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

const sampleTiny = `R 1
U 2`

const sample2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`

describe('DAY 9', () => {
  describe('part 1', () => {
    // it('sampleTiny', () => {
    //   expect(part1(sampleTiny)).toBe(2)
    // })
    it('sample', () => {
      expect(part1(sample)).toBe(13)
    })


    it('actual', () => {
      expect(part1(actual)).toBe(6271) // 1467 1696
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part1(sample, 10)).toBe(1)
    })
    it('sample2', () => {
      expect(part1(sample2, 10)).toBe(36)
    })

    it('actual', () => {
      expect(part1(actual, 10)).toBe(2458) // 1800
    })
  })
})
