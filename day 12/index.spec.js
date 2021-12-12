import * as day12 from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`

const sample2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`

describe('DAY 10', () => {
  describe('part 1', () => {
    it('should find the number of valid paths through the cave', () => {
      const answer = day12.run(sample1)

      expect(answer).toEqual(10)
    })

    it('should find the number of valid paths through the cave', () => {
      const answer = day12.run(sample2)

      expect(answer).toEqual(19)
    })

    it('FINAL', () => {
      const answer = day12.run(actual)

      expect(answer).toEqual(19)
    })
  })
})
