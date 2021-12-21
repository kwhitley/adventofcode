import { range, sum } from 'supergeneric'

const roll = () => {

}

const dice = (sides, on = 0, rolls = 0) => () => {
  return [on = (on + 1) % 101 || 1, ++rolls]
}

export const run = (input, part2) => {
  const roll = dice(100)
  const pos = input.replace(/^.*(\d)\n.*(\d)$/, '$1.$2').split('.').map(Number).map(v => v-1)
  const score = [0, 0]
  let onPlayer = 1
  let ticks = 0
  const maxScore = part2 ? 21 : 1000

  // console.log('rolling')

  do {
    onPlayer = onPlayer ^ 1
    const rolls = Array(3).fill(0).map(() => roll()[0])
    // console.log('starting player', onPlayer + 1, 'turn from position', pos[onPlayer] + 1, 'with rolls', rolls.join('+'), `(${sum(rolls)})`)

    pos[onPlayer] = (pos[onPlayer] + sum(rolls)) % 10
    score[onPlayer] += (pos[onPlayer] + 1)
    // console.log('player', onPlayer + 1, 'moved to', pos[onPlayer] + 1, 'for a score of', score[onPlayer])
  } while (score[onPlayer] < maxScore)

  return score[onPlayer ^ 1] * (roll()[1] - 1)

  return undefined
}
