import { part1, part2 } from '.'
import { getInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 8

const processInput = input => {
  let [path, instructions] = input.split('\n\n')
  path = path.split('')
  instructions = instructions
                  .split('\n')
                  .reduce((acc, l) => {
                    const [key, L, R] = l.match(/\w{3}/g).slice(0, 3)
                    acc[key] = { L, R }

                    return acc
                  }, {})
  return { path, instructions }
}

// SAMPLE INPUT
const RAW_SAMPLE1 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`
const RAW_SAMPLE2 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1)
const sample2 = processInput(RAW_SAMPLE2)

// actual data load
const actual = processInput(await getInput(DAY))

describe(`DAY ${DAY}`, () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample1)).toBe(2)
    })
    it('actual', () => {
      expect(part1(actual)).toBe(16579)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample2)).toBe(6)
    })
    it('actual', () => {
      expect(part2(actual)).toBe(12927600769609)
    })
  })
})
