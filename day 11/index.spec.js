import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`

describe('DAY 11', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(10605)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(120384) // 1467 1696
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part1(sample, 10000, false)).toBe(2713310158)
    })

    it('actual', () => {
      expect(part1(actual, 10000, false)).toBe(32059801242) // 1467 1696
    })
  })
})
