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

const sample3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`

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

      expect(answer).toEqual(4970)
    })
  })

  describe('part 2', () => {
    it('should find the number of valid paths through the cave', () => {
      const answer = day12.run(sample1, true)

      expect(answer).toEqual(36)
    })

    it('should find the number of valid paths through the cave', () => {
      const answer = day12.run(sample2, true)

      expect(answer).toEqual(103)
    })

    it('should find the number of valid paths through the cave', () => {
      const answer = day12.run(sample3, true)

      expect(answer).toEqual(3509)
    })

    it('FINAL', () => {
      const answer = day12.run(actual, true)

      expect(answer).toEqual(144528)
    })
  })
})
