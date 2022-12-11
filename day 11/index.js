export const part1 = (input, rounds = 20, destress = true) => {
  const monkeyDescriptions = input
                  .split('\n\n')
                  .map(block => block.split('\n'))

  const monkeys = []
  const divisors = input.match(/divisible by \d+/g).map(v => Number(v.replace(/[^\d]/g, '')))
  const ultimateDivisor = divisors.reduce((acc, value) => acc * value, 1)

  for (const block of monkeyDescriptions) {
    block.shift()
    const items = block.shift().match(/\d+/g).map(Number)
    const operation = block.shift().replace(/Operation: new = /, '')
    const divisor = Number(block.shift().replace(/[^\d]/g, ''))
    const ifTrue = Number(block.shift().replace(/[^\d]/g, ''))
    const ifFalse = Number(block.shift().replace(/[^\d]/g, ''))
    monkeys.push({
      inspected: 0,
      items,
      divisor,
      operation: new Function('old', `return ${operation}`),
      sendTo: new Function('value', `return value % ${divisor} === 0 ? ${ifTrue} : ${ifFalse}`),
    })
  }

  for (var round=0; round<rounds; round++) {
    for (const monkey of monkeys) {
      const index = monkeys.indexOf(monkey)
      const { items, divisor, inspected, operation, sendTo } = monkey

      while (items.length) {
        const item = items.shift()
        monkey.inspected++
        const newValue = operation(item)
        const afterDestress = destress
                            ? newValue / 3|0
                            : newValue % ultimateDivisor
        const newTarget = sendTo(afterDestress)
        monkeys[newTarget].items.push(afterDestress)
      }
    }
  }

  const activeMonkeys = [...monkeys].sort((a, b) => b.inspected - a.inspected)
  const topTwo = activeMonkeys.slice(0,2).map(m => m.inspected)

  const [a, b] = topTwo

  return a * b
}
