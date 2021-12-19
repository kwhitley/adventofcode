import { sum, round } from 'supergeneric'

// creates nodes
const createNode = (value, parent, depth = 1, n = { parent, depth }) => {
  if (typeof value === 'number') {
    n.value = value
  } else {
    n.left = createNode(value[0], n, depth + 1)
    n.right = createNode(value[1], n, depth + 1)
  }

  return n
}

// utility function to return flattened root
const flatten = node => typeof node.value === 'number' ? node.value : [flatten(node.left), flatten(node.right)]

// get ALL the nodes, but flattened
const nodes = (node, set = []) => {
  if (node) {
    set.push(node)
    nodes(node.left, set)
    nodes(node.right, set)
  }

  return set
}

// get just the values within a tree (flattened)
const values = (node, set = []) => {
  if (typeof node.value === 'number') {
    set.push(node)
  } else {
    values(node.left, set)
    values(node.right, set)
  }

  return set
}

// gets magnitude of a tree
export const magnitude = node => {
  if (typeof node.value === 'number') return node.value

  return 3 * magnitude(node.left) + 2 * magnitude(node.right)
}

// explodes stuff
const explode = (node, flat) => {
  if (!node) return false
  if (node.depth > 4 && typeof node.value === 'undefined') {
    const index = flat.indexOf(node.left)

    if (index) {
      flat[index-1].value += node.left.value
    }

    if (flat.length > index + 2) {
      flat[index+2].value += node.right.value
    }

    node.value = 0
    node.left = undefined
    node.right = undefined
    return 'explode'
  }

  return explode(node.left, flat) || explode(node.right, flat)
}

// prints a flattened tree
const print = node => JSON.stringify(flatten(node), null)

// splits stuff
const split = node => {
  if (!node) return false

  if (node.value > 9) {
    node.left = createNode(node.value/2|0, node, node.depth + 1)
    node.right = createNode(-~node.value/2|0, node, node.depth + 1)
    node.value = undefined

    return 'split'
  }

  return split(node.left) || split(node.right)
}

// reduces stuff
export const reduce = (node, action, ticks = 0) => {
  do {
    ticks++
    action = explode(node, values(node)) || split(node)
  } while (action)
  return node
}

// adds two trees together
export const add = (node1, node2) => {
  for (const n of nodes(node1)) {
    n.depth++
  }
  for (const n of nodes(node2)) {
    n.depth++
  }
  return {
    depth: 1,
    left: node1,
    right: node2,
  }
}

// adds a list of trees together (from input string)
export const doHomework = (input, part2) => {
  const lines = typeof input === 'string' ? input.split('\n') : input //.map(line => JSON.parse(line)) : input

  let root

  for (const line of lines.map(line => JSON.parse(line))) {
    let node = createNode(line)
    if (!root) {
      root = node
    } else {
      root = reduce(add(root, node))
    }
  }

  if (part2) {
    let maxSum = -Infinity

    for (const l1 of lines) {
      for (const l2 of lines) {
        if (l1 !== 12) {
          const b1a = createNode(JSON.parse(l1))
          const b2a = createNode(JSON.parse(l2))
          const b1b = createNode(JSON.parse(l1))
          const b2b = createNode(JSON.parse(l2))
          const pb1 = print(b1a)
          const pb2 = print(b2a)
          const sum1 = reduce(add(b1a, b2a))
          const sum2 = reduce(add(b2b, b1b))
          const mag1 = magnitude(sum1)
          const mag2 = magnitude(sum2)

          maxSum = Math.max(maxSum, mag1, mag2)
        }
      }
    }

    return maxSum
  }

  return root
}
