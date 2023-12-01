import { sum } from 'supergeneric'

export const part1 = input => {
  return sum(input.map(line => {
    const first = line.replace(/^[^\d]*(\d).*$/, '$1')
    const last = line.replace(/^.*(\d)[^\d]*$/, '$1')

    return Number(first + last)
  }))
}

export const part2 = input => {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  return sum(input.map(line => {
    const locations = digits.map((digit, i) =>
      [
        [i, line.indexOf(i)],
        [i, line.indexOf(digit)],
        [i, line.lastIndexOf(i)],
        [i, line.lastIndexOf(digit)],
      ].filter(([_, i]) => i !== -1).sort((a, b) => a[1] - b[1])
    ).flat().sort((a, b) => a[1] - b[1])

    const left = locations.shift()[0]
    const right = locations.length ? locations.pop()[0] : left

    return Number(left + '' + right)
  }))
}
