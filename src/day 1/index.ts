import { sum } from 'supergeneric/sum'
import { getInput, processInput } from '../lib'

export const DAY = 1
export const transforms = ['\n\n', '\n', Number]
export const actual = await getInput(DAY, transforms)

const getLoads = input => input
                            .map(sum)
                            .sort((a, b) => b - a)

export const part1 = input => getLoads(input)[0]
export const part2 = input => sum(getLoads(input).slice(0,3))
