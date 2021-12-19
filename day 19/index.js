import { sum } from 'supergeneric'

const distance = (p1, p2) => Math.sqrt(
  Object
    .keys(p1)
    .filter(key => Number.isFinite(Number(key)))
    .reduce((acc, key) => acc + Math.pow(p1[key] - p2[key], 2), 0)
)

const intersect = (set1, set2) => set1.reduce((acc, item) => [...acc, set2.includes(item) ? item : undefined], []).filter(v => v)

const print = thing => JSON.stringify(thing, null)

const getUnregistered = scanners => scanners.reduce((acc, scanner) => [...acc, ...scanner.filter(b => !b.registered)], [])

const compareScanners = (s1, s2, set) => {
  // console.log('comparing scanners')
  const shared = []

  for (const a of s1) {
    for (const b of s2) {
      const intersection = intersect(a.distances, b.distances)
      if (intersection.length) {

        if (intersection.length >= 11) {
          // set.add(a)
          // shared.push(a)
          set.add(a)
          set.add(b)
          // if (!a.registered) {
          //   set.add(a)
          // }

          // if (!b.registered) {
          //   set.add(b)
          // }
          a.registered = true
          b.registered = true
        }
      }
    }
  }

  // if (shared.length >= 12) {
  //   console.log('shared length is', shared.length)
  // }
  return shared

  // console.log('found', shared.length, 'shared points') //, shared.map(s => s[0]))
}

export const run = (input, part2) => {
  const scanners = input
                    .replace(/---.+---\n/g, '')
                    .split(/\n\n/).map(
                      block => block
                                .split('\n')
                                .map(line => line.split(',').map(Number))
                    )

  const unique = new Set()

  for (const scanner of scanners) {
    for (const signal of scanner) {
      signal.distances = []
      // console.log('processing signal', signal)
      for (const s2 of scanner) {
        const d = distance(signal, s2)
        signal.distances.push(d)
      }

      signal.distanceSum = sum(signal.distances)
      // unique.add(signal.distanceSum)

      // console.log('signal', print(signal), 'distances', signal.distances)
    }
  }

  const beacons = new Set()

  for (let a=0; a<scanners.length; a++) {
    for (let b=0; b<scanners.length; b++) {
      if (a === b) continue

      const shared = compareScanners(scanners[a], scanners[b], beacons)
      // beacons = [...beacons, ...shared]

      if (shared.length) {
        // console.log('found', shared.length, 'shared beacons')
      }
    }

  }

  const unregistered = getUnregistered(scanners)
  console.log(unregistered.length, 'unregistered beacons')

  // return beacons.size

  const scannerMath = beacons.size + unregistered.length - scanners.length - 1

  console.log('beacons length is', beacons.size)
  console.log('scanner math =', scannerMath)


  // const scanner0 = scanners[0].map(s => s.distanceSum)
  // const scanner1 = scanners[1].map(s => s.distanceSum)

  // const cross = intersection(scanner0, scanner1)

  // const shared = compareScanners(scanners[0], scanners[1])
  // const shared2 = compareScanners(scanners[1], scanners[2])

  // console.log({
  //   scanner0,
  //   scanner1,
  //   // cross,
  // })
  // console.log({ unique: unique.size })

  return undefined
}
