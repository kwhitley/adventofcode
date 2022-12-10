import { sum } from 'supergeneric/sum'

export const part1 = (input) => {
  const instructions = input
                  .split('\n')
                  .map(row => row.split(' '))
                  .map(([dir, value]) => [dir, Number(value)])

  let pending = []
  let cycle = 0
  let register = 1
  let signals = []
  let output = ''

  const checkSignal = (cycle, register) => {
    if ([20,60,100,140,180,220].includes(cycle)) {
      signals.push(cycle * register)
    }

    if (Math.abs(((cycle - 1) % 40) - register) <= 1) {
      output += '#'
    } else {
      output += '.'
    }
  }

  while (instructions.length || pending.length) {
    const [instruction, value] = instructions.shift()

    for (const v of pending) {
      cycle++
      checkSignal(cycle, register)
      register += v
    }

    pending = []

    if (instruction === 'addx') {
      pending.push(value)
    }

    cycle++
    checkSignal(cycle, register)
  }

  console.log('output', output.match(/.{40}/g))

  return sum(signals)
}
