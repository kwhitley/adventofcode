export const part1 = (cards) =>
  cards.map((card, index) => {
    const [targets, available] = card
    const matches = available.filter(v => targets.includes(v))

    return matches.length ? Math.pow(2, matches.length-1) : 0
  }).reduce((a, b) => a + b)

export const part2 = (cards) => {
  cards = cards.map(c => [...c, 1])

  // work backwards to allow upstream cards to get point value of lower cards
  for (let i=cards.length-1; i>=0; i--) {
    const [targets, available] = cards[i]
    const matches = available.filter(v => targets.includes(v))

    for (let m=1; m<=matches.length; m++) {
      cards[i][2] += cards[i+m][2]
    }
  }

  return cards.map(c => c[2]).reduce((a, b) => a + b)
}
