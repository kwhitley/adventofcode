import { run } from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `on x=10..12,y=10..12,z=10..12
on x=11..13,y=11..13,z=11..13
off x=9..11,y=9..11,z=9..11
on x=10..10,y=10..10,z=10..10`

describe('DAY 22', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(run(sample1)).toEqual(1)
    })

    // it('FINAL', () => {
    //   expect(run(actual)).toEqual(1)
    // })
  })

  // describe('part 2', () => {
  //   it('should do a thing, but more quantumy', () => {
  //     expect(part2(sample1)).toEqual(444356092776315)
  //   })

  //   // it('FINAL', () => {
  //   //   expect(process(actual, 50)).toEqual(19592)
  //   // })
  // })
})
