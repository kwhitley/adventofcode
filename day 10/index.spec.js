import * as day10 from '.'
import { input as actual } from './input'

// SAMPLE INPUT
const sample = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`

const sample2 = `[({(<(())[]>[[{[]{<()<>>`

describe('DAY 10', () => {
  describe('part 1', () => {
    it('should get score of corrupted lines', () => {
      const answer = day10.run(sample)

      expect(answer).toEqual(26397)
    })

    it('FINAL', () => {
      const answer = day10.run(actual)

      expect(answer).toEqual(265527)
    })
  })

  describe('part 2', () => {
    it('should get risk of heatmap', () => {
      const answer = day10.run(sample, true)

      expect(answer).toEqual(288957)
    })

    it('FINAL', () => {
      const answer = day10.run(actual, true)

      expect(answer).toEqual(3969823589)
    })
  })
})
