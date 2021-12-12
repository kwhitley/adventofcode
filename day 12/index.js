export const run = (input, part2, paths = input.split('\n').map(l => l.split('-'))) => {
  const validPaths = new Set()
  const map = {}

  for (const [from, to] of paths) {
    map[from] = map[from] || []
    map[to] = map[to] || []
    to !== 'start' && map[from].push(to)
    from !== 'start' && map[to].push(from)
  }

  const buildPath = (pathSoFar, duplicateVisit) => {
    const lastPath = pathSoFar[0]
    const isSmallCave = lastPath.toLowerCase() === lastPath

    if (lastPath === 'end') {
      return validPaths.add(pathSoFar)
    } else if (part2 && pathSoFar.slice(1).includes(lastPath) && lastPath.toLowerCase() === lastPath) {
      duplicateVisit = true
    }

    map[lastPath]
      .filter(b => b.toUpperCase() === b || !pathSoFar.includes(b) || (part2 && !duplicateVisit))
      .map(b => buildPath([b, ...pathSoFar], duplicateVisit))
  }

  buildPath(['start'])

  return validPaths.size
}
