import { average, median, range, sum } from 'supergeneric'

export const decode = (input, part2, final = 0) => {
  const entries = input
                    .split('\n')
                    .map(entry => entry.split(/[^\w]+/gi))
                    .map(entry => [entry.slice(0, 10), entry.slice(-4)])
  const diff = (s1, s2) => s1.split('').filter(c => !s2.includes(c)).join('')
  const contains = (s1, s2) => !s2.split('').filter(c => !s1.includes(c)).join('').length

  if (!part2) return sum(entries
                      .map(e => e[1])
                      .flat()
                      .map(d => +[2, 3, 4, 7].includes(d.length)))

  for (const [ signal, output ] of entries) {
    const one = signal.splice(signal.findIndex(d => d.length === 2), 1)[0]
    const three = signal.splice(signal.findIndex(d => d.length === 5 && contains(d, one)), 1)[0]
    const four = signal.splice(signal.findIndex(d => d.length === 4), 1)[0]
    const seven = signal.splice(signal.findIndex(d => d.length === 3), 1)[0]
    const eight = signal.splice(signal.findIndex(d => d.length === 7), 1)[0]
    const nine = signal.splice(signal.findIndex(d => d.length === 6 && contains(d, four)), 1)[0]
    const five = signal.splice(signal.findIndex(d => d.length === 5 && contains(d, diff(four, one))), 1)[0]
    const two = signal.splice(signal.findIndex(d => d.length === 5 && contains(d, diff(eight, five))), 1)[0]
    const six = signal.splice(signal.findIndex(d => d.length === 6 && contains(d, five)), 1)[0]
    const zero = signal[0]

    const decodeDigit = digit => [zero, one, two, three, four, five, six, seven, eight, nine]
                                    .findIndex(d => d.length === digit.length && contains(d, digit))

    final += Number(output.map(decodeDigit).join(''))
  }

  return final
}
