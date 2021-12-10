import { ascending, onlyNumbers, median } from 'supergeneric'

export const scan = (input, part2, score = 0) => {
  let autocompletes = []

  outer: for (const line of input.split('\n')) {
    const stack = []

    for (const c of line) {
      const lut = {
        '{': '}',
        '[': ']',
        '<': '>',
        '(': ')',
      }

      if (stack[0] === c) {
        stack.shift()
        continue
      }

      if (lut[c]) {
        stack.unshift(lut[c])
      } else if (stack.length) {
        const scores = {
          ')': 3,
          ']': 57,
          '}': 1197,
          '>': 25137,
        }
        score += scores[c]

        continue outer
      }
    }

    if (part2) {
      autocompletes.push(stack.reduce((acc, c) => acc * 5 + ')]}>'.indexOf(c) + 1, 0))
    }
  }

  return part2 ? median(autocompletes) : score
}
