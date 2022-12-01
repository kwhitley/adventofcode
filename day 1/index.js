import { sum } from 'supergeneric/sum'

const getLoads = input => input
                            .split('\n\n')
                            .map(load => sum(load.split('\n').map(Number)))
                            .sort((a, b) => b - a)

export const part1 = input => getLoads(input)[0]
export const part2 = input => sum(getLoads(input).slice(0,3))
