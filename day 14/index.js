import { numbers, sum } from 'supergeneric'

export const run = (input, steps = 1, part2) => {
  let [base, rules] = input.split('\n\n').map((set, i) => i ? set.split('\n').map(l => l.split(' -> ')) : set)

  let template = {}

  rules = rules.reduce((acc, [pair, c]) => ({ ...acc, [pair]: c }), {})

  // console.log({ rules })

  for (let i=0; i<base.length-1; i++) {
    template[base.slice(i, i+2)] = (template[base.slice(i, i+2)] || 0) + 1
  }

  // console.log({ template })

  for (let step=0; step<steps; step++) {
    const update = { ...template }

    for (const [pair, count] of Object.entries(template)) {
      // console.log('step', step+1, 'considering pair', pair)
      const c = rules[pair]

      if (c) {
        const [left, right] = pair.split('')
        update[pair] = (update[pair] || 0) - count
        update[left+c] = (update[left+c] || 0) + count
        update[c+right] = (update[c+right] || 0) + count
        // update[]
        // console.log('found matching rule, injecting', c, 'between', left, 'and', right)
      }
    }

    template = update
    // console.log('template after step', step, 'is', template)
  }

  let freq = Object.entries(template).filter(([pair, c]) => c).reduce((acc, [pair, c]) => {
    const [left, right] = pair.split('')

    acc[left] = (acc[left] || 0) + c
    acc[right] = (acc[right] || 0) + c

    return acc
  }, {})

  freq = Object.entries(freq).map(([c, n]) => [c, Math.ceil(n/2)]).sort((a, b) => a[1] > b[1] ? 1 : -1)

  return freq.pop()[1] - freq.shift()[1]

  // const sorted = Object.entries(template.split('').reduce((acc, c) => {
  //   acc[c] = (acc[c] || 0) + 1

  //   return acc
  // }, {})).sort((a, b) => a[1] > b[1] ? 1 : -1)

  // console.log('sorted after', steps, 'steps', sorted)

  // return //template, sorted.pop()[1] - sorted.shift()[1]]
}
