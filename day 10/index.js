import { ascending, onlyNumbers, median } from 'supergeneric'

export const run = (input, part2) => {
  const lines = input.split('\n')
  let score = 0
  let autocompletes = []
  const incomplete = []

  for (const line of lines) {
    const stack = []
    let incomplete = true
    // console.log('NEW LINE')

    for (const c of line) {
      const lut = {
        '{': '}',
        '[': ']',
        '<': '>',
        '(': ')',
      }

      if (stack[0] === c) {
        // console.log('matched expected close from stack', c)
        stack.shift()
      } else {
        const open = lut[c]

        if (open) {
          stack.unshift(lut[c])
          // console.log('opened with', c, 'adding', lut[c], 'to close stack', stack)
        } else if (stack.length) {
          // console.log('corrupt line', line, 'expected', stack[0], 'but found', c)
          const scores = {
            ')': 3,
            ']': 57,
            '}': 1197,
            '>': 25137,
          }
          score += scores[c]
          incomplete = false

          // console.log('score is now', score)
          break
        }
      }

      // console.log('c', c)
    }

    if (incomplete && part2) {
      const scores = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4,
      }

      autocompletes.push(stack.reduce((acc, c) => acc * 5 + scores[c], 0))
      // console.log('processing incomplete line', line, 'with stack of', stack.join(''))
    }
  }

  if (part2) {
    // console.log('autocomplete scores are', autocompletes)
    // creturn onsole.log('median score is', median(autocompletes))
    return median(autocompletes)
  }

  return score
}
