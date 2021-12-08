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

            const extract = (length, pred = () => 1) => signal.splice(signal.findIndex(d => d.length === length && pred(d)), 1)[0]
            const one = extract(2)
            const four = extract(4)
            const seven = extract(3)
            const eight = extract(7)
            const nine = extract(6, d => contains(d, four))
            const five = extract(5, d => contains(d, diff(four, one)))
            const two = extract(5, d => contains(d, diff(eight, five)))
            const three = extract(5)
            const six = extract(6, d => contains(d, five))
            const zero = signal[0]
            const decodeDigit = digit => [zero, one, two, three, four, five, six, seven, eight, nine]
                                            .findIndex(d => d.length === digit.length && contains(d, digit))

            return score + Number(output.map(decodeDigit).join(''))
          }, 0)
}
