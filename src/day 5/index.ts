export const part1 = (raw) => {
  let input = [...raw]
  let seeds = input.shift().split(': ')[1].split(' ').map(Number)
  let layers = input.map(line => line.split(/:\s+/)).map(g => g[1].split(/\n/).map(l => l.split(' ').map(Number)))

  const locations = seeds.map(value => {
    for (const layer of layers) {
      for (const [destination, source, range] of layer) {
        if ((value >= source) && (value <= source + range)) {
          value = value - source + destination
          break
        }
      }
    }

    return value
  })

  return locations.sort((a, b) => a - b)[0]
}

function splitIntoPairs(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2));
  }
  return result;
}

export const part2 = (raw) => {
  let input = [...raw]
  let seeds = splitIntoPairs(input.shift().split(': ')[1].split(' ').map(Number))
  // console.log({ seeds })
  let layers = input.map(line => line.split(/:\s+/)).map(g => g[1].split(/\n/).map(l => l.split(' ').map(Number)))

  const layerModifiers = []

  // 1. for each layer's range (start->end), find modifier d(elta)
  // 2.

  for (let l=layers.length; l>=0; l--) {
    const layer = layers[l]

    for (let g=0; g<layer.length; g++) {
      const group = layer[g]
      const [destination, source, range] = group
      layer[g]
      console.log('processing layer', l, 'group', g, 'as', group)
    }
  }

  // for (let [start, length] of seeds) {
  //   outer: for (let i=0; i<length; i++) {
  //     let value = start+i
  //     let seedKey = `seed:${value}`
  //     if (locations[seedKey] !== undefined) break outer

  //     for (const [layerIndex, layer] of layers.entries()) {
  //       const layerKey = `l${layerIndex}:${value}`
  //       if (locations[layerKey]) {
  //         value = locations[layerKey]
  //         break
  //       }

  //       for (const [groupIndex, group] of layer.entries()) {
  //         const [destination, source, range] = group
  //         if ((value >= source) && (value <= source + range)) {
  //           value = value - source + destination
  //           locations[layerKey] = value
  //           break
  //         }
  //       }
  //     }

  //     locations[seedKey] = value
  //     minLocation = Math.min(minLocation, value)
  //   }

  //   // return minLocation
  // }

  // console.log({ locations })

  return true//Object.values(locations).sort((a, b) => a - b)[0]
}
