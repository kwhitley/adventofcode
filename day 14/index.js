export const run = (input, steps = 1, c, template = {}) => {
  let [base, rules] = input.split('\n\n').map((set, i) =>
                                          i ? set
                                            .split('\n')
                                            .map(l => l.split(' -> '))
                                            .reduce((acc, [pair, c]) => ({ ...acc, [pair]: c }), {})
                                          : set
                                        )

  for (let i=0; i<base.length-1; i++) {
    template[base.slice(i, i+2)] = (template[base.slice(i, i+2)] || 0) + 1
  }

  for (let step=0; step<steps; step++) {
    const update = { ...template }

    for (const [pair, count] of Object.entries(template)) {
      if (c = rules[pair]) {
        const [left, right] = pair.split('')
        update[pair] = (update[pair] || 0) - count
        update[left+c] = (update[left+c] || 0) + count
        update[c+right] = (update[c+right] || 0) + count
      }
    }

    template = update
  }

  let freq = Object.entries(template).filter(([pair, c]) => c).reduce((acc, [pair, c]) => {
    const [left, right] = pair.split('')
    acc[left] = (acc[left] || 0) + c
    acc[right] = (acc[right] || 0) + c

    return acc
  }, {})

  freq = Object.entries(freq).map(([c, n]) => [c, Math.ceil(n/2)]).sort((a, b) => a[1] > b[1] ? 1 : -1)

  return freq.pop()[1] - freq.shift()[1]
}
