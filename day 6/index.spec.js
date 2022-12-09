import { part1, part2 } from '.'
import { actual } from './input'
// SAMPLE INPUT
const samples = [
  ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7],
  ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
  ['nppdvjthqldpwncqszvftbrmjlhg', 6],
  ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
  ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
]

const messages = [
  ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 19],
  ['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
]

describe('DAY 6', () => {
  describe('part 1', () => {
    it('sample', () => {
      for (const [sample, expected] of samples) {
        expect(part1(sample)).toBe(expected)
      }
    })

    it('actual', () => {
      expect(part1(actual)).toBe(1625)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      for (const [sample, expected] of messages) {
        expect(part2(sample)).toBe(expected)
      }
    })

    it('actual', () => {
      expect(part2(actual)).toBe(2250)
    })
  })
})
