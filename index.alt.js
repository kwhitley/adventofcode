import { sum } from 'supergeneric'

export const decode = (input, part2) => {
  const diff = (s1, s2) => s1.split('').filter(c => !s2.includes(c)).join('')
  const contains = (s1, s2) => !s2.split('').filter(c => !s1.includes(c)).join('').length

  return input
          .split('\n')
          .map(entry => entry.split(/[^\w]+/gi))
          .map(entry => [entry.slice(0, 10), entry.slice(-4)])
          .reduce((score, [ signal, output ]) => {
            if (!part2) return score + sum(output.map(d => [2, 3, 4, 7].includes(d.length)))

            const extract = (length, pred = () => true) => signal.splice(signal.findIndex(d => d.length === length && pred(d)), 1)[0]
            const digits = [, extract(2),,, extract(4),,, extract(3), extract(7)]
            digits[3] = extract(5, d => contains(d, digits[1]))
            digits[9] = extract(6, d => contains(d, digits[4]))
            digits[5] = extract(5, d => contains(d, diff(digits[4], digits[1])))
            digits[2] = extract(5, d => contains(d, diff(digits[8], digits[5])))
            digits[6] = extract(6, d => contains(d, digits[5]))
            digits[0] = extract(6)
            const decodeDigit = digit => digits.findIndex(d => d.length === digit.length && contains(d, digit))

            return score + Number(output.map(decodeDigit).join(''))
          }, 0)
}
