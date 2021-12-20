import { range, sum } from 'supergeneric'

const lit = grid => sum(Object.values(grid).map(line => Object.values(line)).flat())

const bin2dec = bin => Number(parseInt(bin, 2).toString(10))

const getBounds = grid => [
  Math.min(...Object.keys(grid)),
  Object.values(grid).reduce((acc, line) => Math.max(...Object.keys(line).map(Number), acc), -Infinity),
  Math.max(...Object.keys(grid)),
  Object.values(grid).reduce((acc, line) => Math.min(...Object.keys(line).map(Number), acc), Infinity),
]

const crop = (grid, bounds, steps) => {
  const g2 = {}
  const [top,right,bottom,left] = bounds

  for (let y=top-steps; y<=bottom+steps; y++) {
    for (let x=left-steps; x<=right+steps; x++) {
      g2[y] = g2[y] || {}
      g2[y][x] = grid[y][x] || 0
    }
  }

  return g2
}

const enhance = (grid, bounds, algo, step, inverse) => {
  const lut = {}
  const fill = Number(algo[0])
  const [top, right, bottom, left] = bounds
  const g2 = {}
  const spread = range(3, { from: -1 })

  for (let l=top-70; l<bottom+70; l++) {
    for (let c=left-70; c<right+70; c++) {
      let newChar
      const subgrid = spread.map(y => spread.map(x => grid[l+y]?.[c+x] || 0)).flat().join('')

      if (!(newChar = lut[subgrid])) {
        newChar = lut[subgrid] = Number(algo[bin2dec(subgrid)])
      }

      g2[l] = g2[l] || {}
      g2[l][c] = newChar
    }
  }

  return g2
}

export const process = (input, steps = 2) => {
  input = input.replace(/\./g, 0).replace(/#/g, 1)
  let [algo, grid] = input.split('\n\n') //.map(line => line.split('').map(numbers))
  grid = grid
          .split('\n')
          .map(line => line.split('').map(Number))
          .reduce((acc, line, li) => (acc[li] = line.reduce((acc, c, ci) => c && (acc[ci] = 1) && acc || acc, {})) && acc || acc, {})

  const bounds = getBounds(grid)

  for (let s=0; s<steps; s++) {
    grid = enhance(grid, bounds, algo, s, s % 2)
  }

  grid = crop(grid, bounds, steps)

  return lit(grid)
}
