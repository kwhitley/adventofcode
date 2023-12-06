import { part1, part2 } from '.'
import { getInput, processInput } from '../lib'

// SET UP DAY PROJECT
export const DAY = 5
export const transforms = ['\n\n']

// SAMPLE INPUT
const RAW_SAMPLE1 = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

// sample data loads
const sample1 = processInput(RAW_SAMPLE1, transforms || [])
// console.log({ sample1 })

// actual data load
const actual = await getInput(DAY, transforms)

// describe(`DAY ${DAY}`, () => {
//   describe('part 1', () => {
//     it('sample', () => {
//       expect(part1(sample1)).toBe(35)
//     })
//     it('actual', () => {
//       expect(part1(actual)).toBe(177942185)
//     })
//   })

//   describe('part 2', () => {
//     it('sample', () => {
//       expect(part2(sample1)).toBe(46)
//     })
//     // it('actual', () => {
//     //   expect(part2(actual)).toBe(true) // 3117212723 (too high)
//     // })
//   })
// })
