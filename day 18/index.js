import { sum, round } from 'supergeneric'

// creates nodes
const createNode = (value, parent, depth = 1, n = { parent, depth }) => {
  if (typeof value === 'number') {
    n.value = value
  } else {
    n.left = createNode(value[0], n, depth + 1)
    n.right = createNode(value[1], n, depth + 1)
  }

  // console.log('creating node', print(n), 'at depth', n.depth)

  return n
}

// utility function to return flattened root
const flatten = node => typeof node.value === 'number' ? node.value : [flatten(node.left), flatten(node.right)]

const nodes = (node, set = []) => {
  if (node) {
    set.push(node)
    nodes(node.left, set)
    nodes(node.right, set)
  }

  return set
}

const values = (node, set = []) => {
  if (typeof node.value === 'number') {
    set.push(node)
  } else {
    values(node.left, set)
    values(node.right, set)
  }

  return set
}

export const magnitude = node => {
  if (typeof node.value === 'number') return node.value

  return 3 * magnitude(node.left) + 2 * magnitude(node.right)
}

// explodes stuff
const explode = (node, flat) => {
  if (!node) return false

  // console.log('testing for explosion with depth', node.depth, 'and type', typeof node.value, node)
  if (node.depth > 4 && typeof node.value === 'undefined') {
    // console.log('exploding node', print(node))

    const index = flat.indexOf(node.left)

    // console.log('from index', index, 'attempting explosing with flat', flat.map(n => n.value))

    if (index) {
      flat[index-1].value += node.left.value
      // console.log('added left value', node.left.value, 'to left', flat[index-1]?.value)
    }

    if (flat.length > index + 2) {
      flat[index+2].value += node.right.value
      // console.log('added left value', node.right.value, 'to left', flat[index+2]?.value)
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
    // console.log('splitting node', print(node))
    node.left = createNode(node.value/2|0, node, node.depth + 1)
    node.right = createNode(-~node.value/2|0, node, node.depth + 1)
    node.value = undefined

    return 'split'
  }

  return split(node.left) || split(node.right)
}

export const reduce = (node, action, ticks = 0) => {
  // console.log('reducing', print(node))
  do {
    ticks++
    // const flat = values(node)

    // const maxDepth = flat.reduce((acc, n) => Math.max(n.depth, acc), 0)
    // const nodeToExplode = flat.find(n => n.depth > 4)?.parent
    // const nodeToSplit = flat.find(n => n.value > 9)

    // if (nodeToExplode) {
    //   console.log('maxDepth of', print(node), 'is', maxDepth, 'should explode node', print(nodeToExplode))
    //   action = explode(nodeToExplode, flat)
    // } else if (nodeToSplit) {
    //   console.log('attempting split instead', nodeToSplit)
    //   action = split(nodeToSplit)
    // }
    // console.log(flat.map(n => ({ depth: n.depth, value: n.value })))

    action = explode(node, values(node)) || split(node)
    // if (action) {
    //   console.log(action, print(node))
    // }
  } while (action)
  return node
}

export const add = (node1, node2) => {
  // console.log('add() node', print(node1), '+', print(node2))
  for (const n of nodes(node1)) {
    // console.log('updating depth of', n, 'from', n.depth, 'to', n.depth + 1)
    n.depth++
  }
  for (const n of nodes(node2)) {
    // console.log('updating depth of', n, 'from', n.depth, 'to', n.depth + 1)
    n.depth++
  }
  return {
    depth: 1,
    left: node1,
    right: node2,
  }
}

export const doHomework = (input, part2) => {
  const lines = typeof input === 'string' ? input.split('\n') : input //.map(line => JSON.parse(line)) : input

  let root

  for (const line of lines.map(line => JSON.parse(line))) {
    // console.log(line, 'typeof', typeof line)
    let node = createNode(line)
    // console.log('adding node', print(node), 'to', root && print(root))
    if (!root) {
      root = node
    } else {
      root = reduce(add(root, node))
    }
  }

  if (part2) {
    let maxSum = -Infinity

    // console.log(lines)

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

          // console.log('adding', pb1, '+', pb2, 'yields', mag1, 'from', print(sum1), 'and', mag2, 'from', print(sum2))
          // maxSum = Math.max(magnitude(add(b1, b2)), maxSum)
          // maxSum = Math.max(magnitude(add(b2, b1)), maxSum)
        }
      }
    }

    return maxSum
  }

  // const flat = values(root)

  // console.log(flat.map(n => ({ value: n.value, depth: n.depth, parentDepth: n.parent?.depth })))

  // console.log('FINAL', print(root))

  return root
}
