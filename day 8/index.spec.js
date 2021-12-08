import * as day8 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample1 = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`

const sample2 = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`

describe('DAY 8', () => {
  describe('part 1', () => {
    it('should count 1, 4, 7, or 8 digits in output', () => {
      const unique = day8.decode(sample2)

      expect(unique).toEqual(26)
    })

    it('FINAL', () => {
      const unique = day8.decode(actual)

      expect(unique).toEqual(365)
    })
  })

  describe('part2', () => {
    it('should fully decode outputs', () => {
      const output = day8.decode2(sample1)

      expect(output).toEqual(5353)
    })

    it('FINAL', () => {
      const output = day8.decode2(actual)

      expect(output).toEqual(975706)
    })
  })
})
