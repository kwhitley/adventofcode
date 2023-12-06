export const part1 = (input) => {
  const [durations, distances] = input
  let winningScenariosMultiplied = 1

  for (let r=0; r<durations.length; r++) {
    const duration = durations[r]
    const record = distances[r]
    let winningScenarios = 0

    // duration for priming
    for (let p=0; p<duration; p++) {
      let distance = (duration - p) * p
      if (distance > record) winningScenarios++
    }

    winningScenariosMultiplied *= winningScenarios
  }

  return winningScenariosMultiplied
}

export const part2 = (input) => {
  const [durations, distances] = input
  const duration = Number(durations.join(''))
  const record = Number(distances.join(''))
  let winningScenarios = 1

  // we start at the middle prime point, and move outward until we fail to win
  let midpoint = Math.round(duration/2)
  let delta = 0

  while (delta < midpoint) {
    let passed = false
    delta++

    // check both sides
    for (const dir of [-1, 1]) {
      const prime = midpoint + 1 * dir * delta
      const distance = (duration - prime) * prime

      if (distance > record) {
        winningScenarios++
        passed = true
      }
    }

    if (!passed) break
  }

  return winningScenarios
}
