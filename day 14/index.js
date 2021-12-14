import { numbers, sum } from 'supergeneric'

export const run = (input, steps = 1, part2) => {
  let [base, rules] = input.split('\n\n').map((set, i) => i ? set.split('\n').map(l => l.split(' -> ')) : set)

  let template = {}

  rules = rules.reduce((acc, [pair, c]) => ({ ...acc, [pair]: c }), {})

  // console.log({ rules })

  for (let i=0; i<base.length-1; i++) {
    template[base.slice(i, i+2)] = (template[base.slice(i, i+2)] || 0) + 1
  }

  console.log({ template })

  for (let step=0; step<steps; step++) {
    const update = {}

    for (const [pair, count] of Object.entries(template)) {
      console.log('step', step+1, 'considering pair', pair)
      const c = rules[pair]

      if (c) {
        const [left, right] = pair.split('')
        update[pair] = (update[pair] || 0) - template[pair]
        update[left+c] = (update[left+c] || 0) + 1
        update[c+right] = (update[c+right] || 0) + 1
        // update[]
        console.log('found matching rule, injecting', c, 'between', left, 'and', right)
      }
    }

    console.log('template after step 1', template)
    console.log('update after step 1', update)

    for (const [pair, count] of Object.entries(update)) {
      template[pair] = (template[pair] || 0) + count
    }

    console.log('after merge', template)

  }

  console.log({ template })

  // const sorted = Object.entries(template.split('').reduce((acc, c) => {
  //   acc[c] = (acc[c] || 0) + 1

  //   return acc
  // }, {})).sort((a, b) => a[1] > b[1] ? 1 : -1)

  // console.log('sorted after', steps, 'steps', sorted)

  return //template, sorted.pop()[1] - sorted.shift()[1]]
}
