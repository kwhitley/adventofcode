import { last, median } from 'supergeneric'

export const run = (input, part2, paths = input.split('\n').map(l => l.split('-'))) => {
  const map = {}

  for (const [from, to] of paths) {
    map[from] = map[from] || []
    if (to !== 'start') {
      map[from].push(to)
    }


    if (to !== 'end' && from !== 'start') {
      map[to] = map[to] || []
      map[to].push(from)
    }
  }

  const validPaths = new Set()

  const buildPath = (pathSoFar, duplicateVisit) => {
    const lastPath = pathSoFar[pathSoFar.length-1]
    const isSmallCave = lastPath.toLowerCase() === lastPath

    if (lastPath === 'end') {
      return validPaths.add(pathSoFar)
    }

    if (part2 && pathSoFar.slice(0, pathSoFar.length-1).includes(lastPath) && lastPath.toLowerCase() === lastPath) {
      duplicateVisit = true
    }

    const branches = map[pathSoFar[pathSoFar.length-1]]

    const validBranches = branches.filter(b =>
      b.toUpperCase() === b || !pathSoFar.includes(b) || (part2 && !duplicateVisit)
    )

    validBranches.map(b => {
      buildPath([...pathSoFar, b], duplicateVisit)
    })
  }

  buildPath(['start'])

  return validPaths.size
}
