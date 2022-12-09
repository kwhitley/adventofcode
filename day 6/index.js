import { sum } from 'supergeneric/sum'
import { min } from 'supergeneric/min'
import { max } from 'supergeneric/max'

const cleanData = input => {

}

export const part1 = input => {
  const signal = input.split('')
  const stack = signal.splice(0, 4)
  let set = new Set(stack)
  let signalAt = 4

  // console.log('before beginning', {
  //   stack, signal
  // })

  while (signal.length) {
    if (set.size === 4) return signalAt
    const incoming = signal.shift()
    signalAt++
    stack.shift()
    stack.push(incoming)
    set = new Set(stack)

    // console.log('round', {
    //   incoming,
    //   remaining: signal.length,
    //   stack,
    // })
  }
}

export const part2 = input => {
  const signal = input.split('')
  const stack = signal.splice(0, 14)
  let set = new Set(stack)
  let signalAt = 14

  // console.log('before beginning', {
  //   stack, signal
  // })

  while (signal.length) {
    if (set.size === 14) return signalAt
    const incoming = signal.shift()
    signalAt++
    stack.shift()
    stack.push(incoming)
    set = new Set(stack)

    // console.log('round', {
    //   signalAt,
    //   unique: set.size,
    //   incoming,
    //   remaining: signal.length,
    //   stack,
    // })
  }
}
