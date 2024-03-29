export const part1 = input =>
  input.map(line => {
    const [_, first, last = first] = line.match(/^[^\d]*(\d).*?(\d)?[^\d]*$/)

    return Number(first + last)
  }).reduce((a, b) => a + b)

export const part2 = input => {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  return input.map(line => {
    const locations = digits.map((digit, i) =>
      [
        [i, line.indexOf(i)],
        [i, line.indexOf(digit)],
        [i, line.lastIndexOf(i)],
        [i, line.lastIndexOf(digit)],
      ].filter(([_, i]) => i !== -1)
    ).flat().sort((a, b) => a[1] - b[1])

    const left = locations.shift()[0]
    const right = locations.pop()?.[0] ?? left

    return Number(left + '' + right)
  }).reduce((a, b) => a + b)
}
