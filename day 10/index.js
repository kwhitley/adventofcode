import { median } from 'supergeneric'

export const scan = (input, part2, score = 0, autocompletes = []) => {
  outer: for (const line of input.split('\n')) {
    const stack = []

    for (const c of line) {
      const lut = {
        '(': [')', 3],
        '[': [']', 57],
        '{': ['}', 1197],
        '<': ['>', 25137],
      }

      if (stack[0]?.[0] === c) {
        stack.shift()
        continue
      }

      if (lut[c]) {
        stack.unshift(lut[c])
      } else if (stack.length) {
        score += Object.values(lut).find(i => i[0] === c)[1]
        continue outer
      }
    }

    autocompletes.push(stack.reduce((acc, c) => acc * 5 + ')]}>'.indexOf(c[0]) + 1, 0))
  }

  return part2 ? median(autocompletes) : score
}
