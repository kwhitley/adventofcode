import { sum } from 'supergeneric'

// converts hex to a bit stream
const hex2bin = hex => hex.split('').map(h => parseInt(h, 16).toString(2).padStart(4, '0')).join('')

// converts bits to decimal
const bin2dec = bin => Number(parseInt(bin, 2).toString(10))

// packet operations
const operations = {
  0: values => sum(values),
  1: values => values.reduce((acc, v) => acc * v, 1),
  2: values => Math.min(...values),
  3: values => Math.max(...values),
  5: ([a, b]) => a > b ? 1 : 0,
  6: ([a, b]) => a < b ? 1 : 0,
  7: ([a, b]) => a === b ? 1 : 0,
}

export const run = (input, part2, bin = hex2bin(input)) => {
  let cursor = 0
  let versionSum = 0

  // internal function to read bits
  const read = (length, leadingBit) => {
    const group = bin.slice(cursor, cursor+=length)
    const done = group.slice(0, leadingBit)
    const tail = group.slice(leadingBit, length)

    return [
      leadingBit ? tail : bin2dec(tail),
      !bin2dec(done),
    ]
  }

  // internal function to readPackets (recursive)
  const readPacket = () => {
    const start = cursor
    const [version] = read(3)
    const [type] = read(3)
    const isOperator = type !== 4
    let value
    versionSum += version // read version into versionSum

    if (!isOperator) {
      let done, group, assembled = ''
      do {
        [group, done] = read(5, true) // leadingBit option turned on
        assembled += group
      } while (!done)
      value = bin2dec(assembled)
    } else {
      const values = []

      if (read(1)[0]) { // read length type ID bit
        const [numSubPackets] = read(11)

        for (let i=0; i<numSubPackets; i++) {
          values.push(readPacket().value)
        }
      } else {
        const [subPacketsBitLength] = read(15)
        let totalLength = 0

        while (totalLength < subPacketsBitLength) {
          const { length, value } = readPacket()
          values.push(value)
          totalLength += length
        }
      }

      value = operations[type](values)
    }

    return {
      version,
      type,
      value,
      isOperator,
      length: cursor - start,
    }
  }

  const { value } = readPacket()

  return part2 ? value : versionSum
}
