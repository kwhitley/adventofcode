import { numbers, sum } from 'supergeneric'

export const run = (input, steps = 1, part2) => {
  let [template, rules] = input.split('\n\n').map((set, i) => i ? set.split('\n').map(l => l.split(' -> ')) : set)

  for (let step=0; step<steps; step++) {
    let update = ''

    for (let i=0; i<template.length; i++) {
      const slice = template.slice(i,i+2)
      update += slice[0]

      for (const [pair, c] of rules) {
        if (pair === slice) {
          update += c
        }
      }
    }

    template = update
  }

  const sorted = Object.entries(template.split('').reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1

    return acc
  }, {})).sort((a, b) => a[1] > b[1] ? 1 : -1)

  return [template, sorted.pop()[1] - sorted.shift()[1]]
}
