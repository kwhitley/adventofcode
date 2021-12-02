import { numbers } from 'supergeneric'

export const commandify = str => str.split('\n').map(r => r.split(' ').map(numbers))

export const pilot = commands => commands.reduce((pos, [command, value]) => {
  pos[['forward', 'back'].includes(command) ? 0 : 1] += value * (['forward', 'down'].includes(command) ? 1 : -1)

  return pos
}, [0, 0])

export const pilotV2 = commands => commands.reduce((pos, [command, value]) => {
  if (['up', 'down'].includes(command)) {
    pos[2] += value * (command === 'up' ? -1 : 1)
  } else {
    pos[0] += value * (command === 'back' ? -1 : 1) // adjust horizontal
    pos[1] += value * pos[2] // adjust depth
  }

  return pos
}, [0, 0, 0])
