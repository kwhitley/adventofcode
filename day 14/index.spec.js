import * as challenge from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

describe('DAY 14', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      // expect(challenge.run(sample1, 1)[0]).toEqual('NCNBCHB')
      // expect(challenge.run(sample1, 2)[0]).toEqual('NBCCNBBBCBHCB')
      // expect(challenge.run(sample1, 3)[0]).toEqual('NBBBCNCCNBBNBNBBCHBHHBCHB')
      // expect(challenge.run(sample1, 4)[0]).toEqual('NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB')
      expect(challenge.run(sample1, 10)).toEqual(1588)
      // expect(challenge.run(sample1, 10)).toEqual(1588)
    })

    it('FINAL', () => {
      expect(challenge.run(actual, 10)).toEqual(2003)
    })
  })

  describe('part 2', () => {
    it('should do a thing in this lifetime', () => {
      expect(challenge.run(sample1, 40)).toEqual(2188189693529)
    })

    it('FINAL', () => {
      expect(challenge.run(actual, 40)).toEqual(2276644000111)
    })
  })
})
