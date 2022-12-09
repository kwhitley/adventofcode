import { sum } from 'supergeneric/sum'
import { min } from 'supergeneric/min'
import { max } from 'supergeneric/max'

const cleanData = input => {
  const [ top, bottom ] = input.split('\n\n')
  const topRows = top.split('\n').map(r => r.replace(/.(.)?/g, '$1').replace(/(.).?/g, '$1'))
  topRows.pop() // discard useless bottom row

  const stacks = []

  while (topRows.length) {
    const row = topRows.pop()

    for (let i=0; i<row.length; i++) {
      let stack = (stacks[i+1] = stacks[i+1] || [])
      if (row[i] && row[i] !== ' ') stack.push(row[i])
    }
  }

  return {
    stacks,
    instructions: bottom.split('\n').map(r => r.match(/\d+/g).map(Number)),
  }
}

export const part1 = input => {
  const { stacks, instructions } = cleanData(input)

  for (const [times, from, to] of instructions) {
    for (let i=0; i<times; i++) {
      stacks[to].push(stacks[from].pop())
    }
  }

  return stacks.map(s => s.slice(-1)).join('')
}

export const part2 = input => {
  const { stacks, instructions } = cleanData(input)

  for (const [times, from, to] of instructions) {
    const moving = stacks[from].splice(-times)
    stacks[to] = stacks[to].concat(moving)
  }

  return stacks.map(s => s.slice(-1)).join('')
}
