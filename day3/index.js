import { sum } from 'supergeneric'

const inputs = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split('\n')

export const getGamma = inputs => parseInt(inputs
                                            .reduce((acc, input, i) => acc.map((v, i) => v += Number(input[i])), Array(inputs[0].length).fill(0))
                                            .map(v => v > inputs.length / 2 ? 1 : 0)
                                            .join('')
                                          , 0^2)

export const getEpsilon = inputs => getGamma(inputs) ^ parseInt(Array(inputs[1].length).fill(1).join(''), 0^2)

export const getOxygen = inputs => {
  let items = [...inputs]

  for (let bit=0; bit<items[0].length; bit++) {
    const inputsByDigit = items.map(item => item[bit]).map(Number)

    items = items.filter((item, i) => item[bit] == (sum(inputsByDigit) >= items.length / 2))

    if (items.length === 1) {
      return parseInt(items[0], 0^2)
    }
  }
}

export const getCO2 = inputs => {
  let items = [...inputs]

  for (let bit=0; bit<items[0].length; bit++) {
    const inputsByDigit = items.map(item => item[bit]).map(Number)

    items = items.filter((item, i) => item[bit] != (sum(inputsByDigit) >= items.length / 2))

    if (items.length === 1) {
      return parseInt(items[0], 0^2)
    }
  }
}
