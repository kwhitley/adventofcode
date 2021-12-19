import * as challenge from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `[1,2]
[[1,2],3]
[9,[8,7]]
[[1,9],[8,5]]
[[[[1,2],[3,4]],[[5,6],[7,8]]],9]
[[[9,[3,8]],[[0,9],6]],[[[3,7],[4,9]],3]]
[[[[1,3],[5,3]],[[1,3],[8,7]]],[[[4,9],[6,9]],[[8,2],[7,3]]]]`

describe('DAY 18', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(challenge.reduce([7,[6,[5,[4,[3,2]]]]])).toEqual([7,[6,[5,[7,0]]]])
      // expect(challenge.reduce([[[[[9,8],1],2],3],4])).toEqual([[[[0,9],2],3],4])
    })

    // it('FINAL', () => {
    //   expect(challenge.run(actual)).toEqual(10878)
    // })
  })

  // describe('part 2', () => {
  //   it('should do a thing', () => {
  //     expect(challenge.run('target area: x=20..30, y=-10..-5', true)).toEqual(112)
  //   })

  //   it('FINAL', () => {
  //     expect(challenge.run(actual, true)).toEqual(4716)
  //   })
  // })
})
