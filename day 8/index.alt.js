import { sum } from 'supergeneric'

export const decode = (input, part2) => {
  const diff = (s1, s2) => s1.split('').filter(c => !s2.includes(c)).join('')
  const c = (s1, s2) => !s2.split('').filter(c => !s1.includes(c)).join('').length

  return input
          .split('\n')
          .map(entry => entry.split(' | ').map(s => s.split(' ')))
          .reduce((f, [s, o]) => {
            if (!part2) return f + sum(o.map(d => [2, 3, 4, 7].includes(d.length)))

            const e = (length, pred = () => 1) => s.splice(s.findIndex(d => d.length === length && pred(d)), 1)[0]
            const ds = [, e(2),,, e(4),,, e(3), e(7)]
            ds[9] = e(6, d => c(d, ds[4]))
            ds[5] = e(5, d => c(d, diff(ds[4], ds[1])))
            ds[2] = e(5, d => c(d, diff(ds[8], ds[5])))
            ds[3] = e(5)
            ds[6] = e(6, d => c(d, ds[5]))
            ds[0] = e(6)
            const decodeDigit = digit => ds.findIndex(d => d.length === digit.length && c(d, digit))

            return f + Number(o.map(decodeDigit).join(''))
          }, 0)
}
