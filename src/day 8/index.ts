export const part1 = ({ path, instructions }, steps = 0) => {
  let pos = instructions.AAA

  while (true) {
    for (const dir of path) {
      pos = instructions[pos[dir]]
      steps++

      if (pos === instructions.ZZZ) return steps
    }
  }
}

export const part2 = ({ path, instructions }, steps = 1) => {
  let pos = Object.entries(instructions).filter(([value, index]) => value[2] === 'A')
  let escapeTurns = pos.map(v => 0)

  while (true) {
    for (const dir of path) {
      for (let posIndex=0; posIndex<pos.length; posIndex++) {
        const current = pos[posIndex]
        const next = current[1][dir]
        if (next[2] === 'Z') {
          escapeTurns[posIndex] = steps
        }
        pos[posIndex] = [next, instructions[pos[posIndex][1][dir]]]
      }
      steps++

      if (!escapeTurns.includes(0)) {
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
        const lcm = (a, b) => (a * b) / gcd(a, b)
        const smallestDivisible = numbers => numbers.reduce((acc, val) => lcm(acc, val), 1)

        return smallestDivisible(escapeTurns)
      }
    }
  }
}
