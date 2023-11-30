export const part1 = (input, row = 10) => {
  const data = input.split('\n').map(row => row.match(/[A-Z]{2}|\d+/g).map(v => isNaN(Number(v)) ? v : Number(v)))
  const valves = {}
  let minutes = 30

  for (const [name, rate, ...connections] of data) {
    valves[name] = {
      rate,
      connections,
    }
  }
  console.log({ data, valves })

  return 1
}
