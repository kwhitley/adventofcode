import * as challenge from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `D2FE28`

describe('DAY 16', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(challenge.run('8A004A801A8002F478')).toEqual(16)
      expect(challenge.run('620080001611562C8802118E34')).toEqual(12)
      expect(challenge.run('C0015000016115A2E0802F182340')).toEqual(23)
      expect(challenge.run('A0016C880162017C3686B18A3D4780')).toEqual(31)
    })

    it('FINAL', () => {
      expect(challenge.run(actual)).toEqual(1002)
    })
  })

  describe('part 2', () => {
    it('should do a thing, but bigger', () => {
      expect(challenge.run('C200B40A82', true)).toEqual(3)
      expect(challenge.run('04005AC33890', true)).toEqual(54)
      expect(challenge.run('880086C3E88112', true)).toEqual(7)
      expect(challenge.run('CE00C43D881120', true)).toEqual(9)
      expect(challenge.run('D8005AC2A8F0', true)).toEqual(1)
      expect(challenge.run('F600BC2D8F', true)).toEqual(0)
      expect(challenge.run('9C005AC2F8F0', true)).toEqual(0)
      expect(challenge.run('9C0141080250320F1802104A08', true)).toEqual(1)
    })

    it('FINAL', () => {
      expect(challenge.run(actual, true)).toEqual(1673210814091)
    })
  })
})
