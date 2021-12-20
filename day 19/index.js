import { sum, average } from 'supergeneric'

const distance = (p1, p2) => Math.sqrt(
  Object
    .keys(p1)
    .filter(key => Number.isFinite(Number(key)))
    .reduce((acc, key) => acc + Math.pow(p1[key] - p2[key], 2), 0)
)

const intersect = (set1, set2) => set1.reduce((acc, item) => [...acc, set2.includes(item) ? item : undefined], []).filter(v => v)

const print = thing => JSON.stringify(thing, null)

const getUnregistered = scanners => scanners.reduce((acc, scanner) => [...acc, ...scanner.filter(b => !b.registered)], [])

const compareScanners = (s1, s2) => {
  // console.log('comparing scanners')
  const shared = []

  for (const a of s1) {
    for (const b of s2) {
      const intersection = intersect(a.distances, b.distances)
      if (intersection.length) {

        if (intersection.length >= 11) {
          a.intersection = intersection
          b.intersection = intersection
          shared.push([a, b])
          a.registered = true
          b.registered = true
        }
      }
    }
  }

  return shared
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

      // signal.distanceSum = sum(signal.distances)
      // unique.add(signal.distanceSum)

      // console.log('signal', print(signal), 'distances', signal.distances)
    }
  }

  scanners[0].position = [0,0,0]

  const identified = new Set([scanners[0]])
  const unidentified = new Set(scanners.slice(1))
  const beacons = new Set()

  let ticks = 0


  next: while (ticks < 100 && unidentified.size) {
    ticks++
    for (const a of unidentified) {
      for (const b of identified) {
        if (a === b) continue

        const shared = compareScanners(a, b)


        if (shared.length) {
          console.log('matched scanner', scanners.indexOf(a), 'with scanner', scanners.indexOf(b))
          console.log('removing scanner', scanners.indexOf(a))

          // console.log('SCANNER A', a.map(s => s.distances))
          // console.log('SCANNER B', b.map(s => s.distances))

          console.log('SHARED SIGNALS', shared[0])
          const [signalA, signalB] = shared[0]
          // const [s]
          // const ratios = [share]





          console.log('breaking')
          break next

          const centerA = [
            average(shared.map(s => s[0][0])),
            average(shared.map(s => s[0][1])),
            average(shared.map(s => s[0][2])),
          ]
          const centerB = [
            average(shared.map(s => s[1][0])),
            average(shared.map(s => s[1][1])),
            average(shared.map(s => s[1][2])),
          ]

          const offset = centerA.map((a, i) => a + centerB[i])

          unidentified.delete(a)
          identified.add(a)
          shared.forEach(beacon => beacons.add(beacon))
          // b.forEach(beacon => {
          //   if (!shared.includes(beacon)) {
          //     beacons.add(beacon)
          //   }
          // })
          console.log('centerA', centerA, 'and centerB', centerB, 'with offset', offset)

          const translated = b.map(coords => coords.map((v, i) => v + offset[i]))

          console.log('scannerA', print(a).replace(/],/g, '\n'))
          console.log('scannerB', print(b).replace(/],/g, '\n'))
          console.log('translated', print(translated).replace(/],/g, '\n'))
          console.log('there are now', identified.size, 'identified and', unidentified.size, 'unidentified scanners')
        }
      }
    }
    //     if (a === b) continue

    //     const shared = compareScanners(scanners[a], scanners[b], beacons)
    //     // beacons = [...beacons, ...shared]

    //     if (shared.length) {
    //       // console.log('found', shared.length, 'shared beacons')
    //     }
    //   }

  }

  console.log('scanners[0].length', scanners[0].length, 'and', scanners.length, 'total scanners')
  console.log('beacons logged', beacons.size)

  // const beacons = new Set()

  // for (let a=0; a<scanners.length; a++) {
  //   for (let b=0; b<scanners.length; b++) {
  //     if (a === b) continue

  //     const shared = compareScanners(scanners[a], scanners[b], beacons)
  //     // beacons = [...beacons, ...shared]

  //     if (shared.length) {
  //       // console.log('found', shared.length, 'shared beacons')
  //     }
  //   }

  // }

  // const unregistered = getUnregistered(scanners)
  // console.log(unregistered.length, 'unregistered beacons')

  // // return beacons.size

  // const scannerMath = beacons.size + unregistered.length - scanners.length - 1

  // console.log('beacons length is', beacons.size)
  // console.log('scanner math =', scannerMath)


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
