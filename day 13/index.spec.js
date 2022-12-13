import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`

describe('DAY 13', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(13)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(5252)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(140)
    })

    // SLOW
    it('actual', () => {
      expect(part2(actual)).toBe(20592)
    })
  })
})
