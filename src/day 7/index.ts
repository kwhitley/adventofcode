const STRENGTH = [
  cards => cards.length === 1, // five of kind
  cards => cards[0][1] === 4, // four of kind
  cards => cards[0][1] === 3 && cards[1][1] === 2, // full house
  cards => cards[0][1] === 3 && cards[1][1] === 1, // three of kind
  cards => cards[0][1] === 2 && cards[1][1] === 2, // two pair
  cards => cards[0][1] === 2 && cards[1][1] === 1, // one pair
  cards => true, // high card
]
const CARD_ORDER = '23456789TJQKA'
const CARD_ORDER2 = 'J23456789TQKA'

export const part1 = (input) =>
  input
    .map(h => [...h, 0])
    .map(hand => {
      const [cards, bid] = hand
      const dist = Object.entries(cards
        .split('')
        .reduce((acc, card) => (acc[card] = acc[card]+1 || 1) && acc, {})
      ).sort(([,a], [,b]) => b - a)

      return [cards, bid, dist]
    })
    .sort(([aC,,a], [bC,,b]) => {
      const baseRankA = STRENGTH.findIndex((fn => fn(a)))
      const baseRankB = STRENGTH.findIndex((fn => fn(b)))

      if (baseRankA > baseRankB) return -1
      if (baseRankA < baseRankB) return 1

      for (let i=0; i<5; i++) {
        const rankA = CARD_ORDER.indexOf(aC[i]?.[0])
        const rankB = CARD_ORDER.indexOf(bC[i]?.[0])

        if (rankA > rankB) return 1
        if (rankA < rankB) return -1
      }

      return 0
    }).reduce((total, [hand, bid], a) => total += bid * (a+1), 0)


export const part2 = (input) =>
  input
    .map(h => [...h, 0])
    .map(hand => {
      const [cards, bid] = hand
      const dist = Object.entries(cards
        .split('')
        .sort((a, b) => CARD_ORDER2.indexOf(b) - CARD_ORDER2.indexOf(a))
        .reduce((acc, card) => {
          if (card !== 'J') {
            return (acc[card] = acc[card]+1 || 1) && acc
          }
          const targetIndex = Object.entries(acc).sort(([,a], [,b]) => b - a)?.[0]?.[0]
          acc[targetIndex ?? 'A']++ // if no other cards, just make it an Ace

          return acc
        }, {})
      ).sort(([,a], [,b]) => b - a)

      return [cards, bid, dist]
    })
    .sort(([aC,,a], [bC,,b]) => {
      const baseRankA = STRENGTH.findIndex(fn => fn(a))
      const baseRankB = STRENGTH.findIndex(fn => fn(b))

      if (baseRankA > baseRankB) return -1
      if (baseRankA < baseRankB) return 1

      for (let i=0; i<5; i++) {
        const rankA = CARD_ORDER2.indexOf(aC[i]?.[0])
        const rankB = CARD_ORDER2.indexOf(bC[i]?.[0])

        if (rankA > rankB) return 1
        if (rankA < rankB) return -1
      }

      return 0
    })
    .reduce((total, [hand, bid], a) => total += bid * (a+1), 0)
