export const part1 = (input, target) =>
  input.map((samples, index) => {
    for (const draw of samples) {
      for (const [n, type] of draw) {
        if (target[type] < n) {
          return 0
        }
      }
    }

    return index + 1
  })
  .reduce((a, b) => a + b)

export const part2 = (games) =>
  games
    .map(samples => samples
    .reduce((acc, draw) => {
      for (const [n, type] of draw) {
        acc[type] = Math.max(n, acc[type])
      }

      return acc
    }, { red: 0, green: 0, blue: 0 })
    )
    .map(v => v.red * v.green * v.blue)
    .reduce((a, b) => a + b)
