import { sum } from 'supergeneric'

export const getGamma = inputs => parseInt(inputs
                                            .reduce((acc, input, i) => acc.map((v, i) => v += Number(input[i])), Array(inputs[0].length).fill(0))
                                            .map(v => v > inputs.length / 2 ? 1 : 0)
                                            .join('')
                                          , 0^2)

export const getEpsilon = inputs => getGamma(inputs) ^ parseInt(Array(inputs[1].length).fill(1).join(''), 0^2)

export const getOxygen = (inputs, inversed = 0) => {
  let items = [...inputs]

  for (let bit=0; bit<items[0].length; bit++) {
    const inputsByDigit = items.map(item => item[bit]).map(Number)

    items = items.filter((item, i) => inversed != item[bit] == (sum(inputsByDigit) >= items.length / 2))

    if (items.length === 1) {
      return parseInt(items[0], 0^2)
    }
  }
}

export const getCO2 = inputs => getOxygen(inputs, true)
