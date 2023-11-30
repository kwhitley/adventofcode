import { part1, part2 } from '.'
import { actual } from './input'

// SAMPLE INPUT
const sample = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`

describe('DAY 16', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(1651)
    })
  })

  // describe('part 2', () => {
  //   it('sample', () => {
  //     expect(part2(sample)).toBe(0)
  //   })

  //   // it('actual', () => {
  //   //   expect(part1(actual)).toBe(24813) // tried 121
  //   // })
  // })
})
