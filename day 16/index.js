import { sum } from 'supergeneric'

function convertNumber(n, fromBase, toBase) {
  if (fromBase === void 0) {
    fromBase = 10
  }
  if (toBase === void 0) {
    toBase = 10
  }
  return parseInt(n.toString(), fromBase).toString(toBase);
}

const hex2bin = hex => hex.split('').map(h => parseInt(h, 16).toString(2).padStart(4, '0')).join('')
const bin2dec = bin => Number(parseInt(bin, 2).toString(10))

export const run = (input, part2) => {
  const bin = hex2bin(input)
  let cursor = 0
  let versionSum = 0

  const read = (length, options = {}) => {
    const {
      leadingBit = 0
    } = options
    const group = bin.slice(cursor, cursor+=length)
    const lead = group.slice(0, leadingBit)
    const tail = group.slice(leadingBit, length)

    return [
      leadingBit ? tail : bin2dec(tail),
      bin2dec(lead),
    ]
  }

  const operations = {
    0: values => sum(values),
    1: values => values.reduce((acc, v) => acc * v, 1),
    2: values => Math.min(...values),
    3: values => Math.max(...values),
    5: ([a, b]) => a > b ? 1 : 0,
    6: ([a, b]) => a < b ? 1 : 0,
    7: ([a, b]) => a === b ? 1 : 0,
  }

  const readPacket = () => {
    const start = cursor
    const [version] = read(3)
    versionSum += version // append to version sum just for reading it
    const [type] = read(3)
    const isLiteral = type === 4
    const isOperator = !isLiteral
    let value

    if (isLiteral) {
      let lead, group, assembled = ''
      do {
        [group, lead] = read(5, { leadingBit: 1 })
        assembled += group
      } while (lead)
      value = bin2dec(assembled)
    } else {
      const [lengthTypeID] = read(1)
      value = []

      if (lengthTypeID) {
        const [numSubPackets] = read(11)
        for (let i=0; i<numSubPackets; i++) {
          value.push(readPacket())
        }
      } else {
        const [subPacketsBitLength] = read(15)
        let totalLength = 0
        let ticks = 0

        while (totalLength < subPacketsBitLength || ticks++ > 100) {
          const packet = readPacket()
          value.push(packet)
          totalLength += packet.length
        }
      }

      const subValues = value.map(packet => packet.value)
      value = operations[type](value.map(packet => packet.value))
    }

    return {
      version,
      type,
      value,
      isLiteral,
      isOperator,
      length: cursor - start,
    }
  }

  let ticks = 0
  let value

  const packet = readPacket()

  return part2 ? packet.value : versionSum
}
