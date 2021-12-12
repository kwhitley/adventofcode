export const run = (input, part2, paths = input.split('\n').map(l => l.split('-'))) => {
  const valid = new Set()
  const branches = {}

  for (const [from, to] of paths) {
    branches[from] = branches[from] || []
    branches[to] = branches[to] || []
    to !== 'start' && branches[from].push(to)
    from !== 'start' && branches[to].push(from)
  }

  const buildPath = (pathSoFar, duplicateVisit) => {
    const prev = pathSoFar[0]

    if (prev === 'end') {
      return valid.add(pathSoFar)
    } else if (part2 && pathSoFar.slice(1).includes(prev) && prev.toLowerCase() === prev) {
      duplicateVisit = true
    }

    branches[prev]
      .filter(b => b.toUpperCase() === b || !pathSoFar.includes(b) || (part2 && !duplicateVisit))
      .map(b => buildPath([b, ...pathSoFar], duplicateVisit))
  }

  buildPath(['start'])

  return valid.size
}
