export const part1 = (input) => {
  const realNumbers: Number[] = []

  input.forEach((line, lineNumber) => {
    const numbers = line.match(/\d+/g) || []
    let pos = 0
    for (const number of numbers) {
      pos = line.indexOf(number, pos)
      const region = input.slice(Math.max(lineNumber-1, 0), lineNumber+2).map(l => l.slice(Math.max(pos-1, 0), pos+number.length+1))
      const nearSymbol = !!region.join('').match(/[^\d\.]/g)

      if (nearSymbol) {
        realNumbers.push(Number(number))
      }
      pos += number.length
    }
  })

  return realNumbers.reduce((a, b) => a + b)
}

export const part2 = (input) => {
  const gearLocations = input.map(line => line.split('').map((c, i) => c === '*' ? i : 0).filter(v => v))
  const gears = {}

  input.forEach((line, lineNumber) => {
    const numbers = line.match(/\d+/g) || []
    let pos = 0
    for (const number of numbers) {
      pos = line.indexOf(number, pos)

      for (let y=lineNumber-1; y<=lineNumber+1; y++) {
        for (const x of gearLocations[y] || []) {
          if (x>=pos-1 && x<=pos+number.length) {
            const key = `${x},${y}`
            gears[key] = gears[key] || []
            gears[key].push(Number(number))
          }
        }
      }

      pos += number.length
    }
  })

  return Object.values(gears).filter(g => g.length === 2).map(g => g[0] * g[1]).reduce((a, b) => a + b)
}
