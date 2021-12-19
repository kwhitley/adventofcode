import { doHomework, magnitude } from '.'
import actual from './input'

// SAMPLE INPUT

const sample1 = `[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]
[[[5,[2,8]],4],[5,[[9,9],0]]]
[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]
[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]
[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]
[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]
[[[[5,4],[7,7]],8],[[8,3],8]]
[[9,3],[[9,9],[6,[4,9]]]]
[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]
[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]`

describe('DAY 18', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      const node = doHomework(sample1)

      expect(magnitude(node)).toEqual(4140)
    })

    it('FINAL', () => {
      // expect(challenge.reduce([7,[6,[5,[4,[3,2]]]]])).toEqual([7,[6,[5,[7,0]]]])
      const node = doHomework(actual)

      expect(magnitude(node)).toEqual(4641)
      // expect(challenge.reduce([[[[[9,8],1],2],3],4])).toEqual([[[[0,9],2],3],4])
    })

    // it('FINAL', () => {
    //   expect(challenge.run(actual)).toEqual(10878)
    // })
  })

  describe('part 2', () => {
    it('should do a thing with a different answer', () => {
      expect(doHomework(sample1, true)).toEqual(3993)
    })

    it('FINAL', () => {
      expect(doHomework(actual, true)).toEqual(3993)
    })
  })
})
