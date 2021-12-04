import * as day4 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`

describe('DAY 4', () => {
  describe('part 1', () => {
    it('should get score and winning draw from plays and boards input', () => {
      const [ draw, score ] = day4.play(sample)

      expect(draw * score).toBe(4512)
    })

    it('FINAL', () => {
      const [ draw, score ] = day4.play(actual)

      expect(draw * score).toBe(4512)
    })
  })

  // describe('part2 2', () => {
  //   it('should get oxygen/co2 from inputs', () => {
  //     const oxygen = day4.getOxygen(sample)
  //     const co2 = day4.getCO2(sample)

  //     expect(oxygen * co2).toBe(230)
  //   })

  //   it('FINAL', () => {
  //     const oxygen = day4.getOxygen(actual)
  //     const co2 = day4.getCO2(actual)

  //     expect(oxygen * co2).toBe(2372923)
  //   })
  // })
})
