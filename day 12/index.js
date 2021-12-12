import { median } from 'supergeneric'

export const run = (input, part2, paths = input.split('\n').map(l => l.split('-'))) => {
  console.log('paths', paths)
  const map = {}

  for (const [from, to] of paths) {
    map[from] = map[from] || []
    map[from].push(to)

    if (to !== 'end' && from !== 'start') {
      map[to] = map[to] || []
      map[to].push(from)
    }
  }

  // console.log('map', map)

  const validPaths = new Set()

  const buildPath = (pathSoFar) => {
    // console.log('building path', pathSoFar)
    if (pathSoFar[pathSoFar.length-1] === 'end') {
      return validPaths.add(pathSoFar)
    }

    const branches = map[pathSoFar[pathSoFar.length-1]]
    // console.log('branches out are', branches)

    const validBranches = branches.filter(b => b.toUpperCase() === b || !pathSoFar.includes(b))

    // console.log('valid branches', validBranches)

    validBranches.map(b => buildPath([...pathSoFar, b]))
  }

  buildPath(['start'])

  // console.log('validPaths', validPaths)

  // const followPath = (path, )

  // console.log('map', map)
  return validPaths.size
}
