import { sum } from 'supergeneric/sum'
import { min } from 'supergeneric/min'
import { max } from 'supergeneric/max'


class Node {
  constructor(name, parent) {
    this.name = name
    this.parent = parent
    this.files = {}
    this.folders = {}
    this.size = 0
  }

  addFile(size, name) {
    if (this.files[name]) return // skip if exists
    this.files.name = size
    this.size += size
    let node = this

    while (node.parent) {
      node = node.parent
      node.size += size
    }
  }

  addFolder(name) {
    if (this.folders[name]) return // skip if folder exists
    this.folders[name] = new Node(name, this)
  }
}

const cleanData = input => {

}

export const part1 = input => {
  const log = input.split('\n')
  log.shift() // trash first line
  const root = new Node('/')
  const allFolders = [root]
  let node = root

  while (log.length) {

    const instruction = log.shift()

    const { command, param } = instruction.match(/\$\s(?<command>\w+)\s?(?<param>.*)?/)?.groups || {}

    if (command === 'ls') {
      const nextInstructionAt = log.findIndex(l => l[0] === '$')
      const output = nextInstructionAt === -1 ? log : log.splice(0, nextInstructionAt)

      for (const line of output) {
        const { dir } = line.match(/dir (?<dir>.*)/)?.groups || {}
        const { file, size } = line.match(/(?<size>\d+)\s(?<file>.*)/)?.groups || {}

        if (dir) {
          node.addFolder(dir, node)
          allFolders.push(node.folders[dir])
        } else if (file) {
          node.addFile(Number(size), file)
        }
      }
    }

    if (command === 'cd') {
      if (param === '..') {
        node = node.parent || node
      } else {
        node = node.folders[param]
      }
    }
  }

  const smallFolders = allFolders.filter(f => f.size <= 100000)

  return sum(smallFolders.map(n => n.size))

}

export const part2 = input => {
  const log = input.split('\n')
  log.shift() // trash first line
  const root = new Node('/')
  const allFolders = [root]
  let node = root

  while (log.length) {
    // lines++

    const instruction = log.shift()

    const { command, param } = instruction.match(/\$\s(?<command>\w+)\s?(?<param>.*)?/)?.groups || {}


    if (command === 'ls') {
      const nextInstructionAt = log.findIndex(l => l[0] === '$')
      const output = nextInstructionAt === -1 ? log : log.splice(0, nextInstructionAt)

      for (const line of output) {
        const { dir } = line.match(/dir (?<dir>.*)/)?.groups || {}
        const { file, size } = line.match(/(?<size>\d+)\s(?<file>.*)/)?.groups || {}

        if (dir) {
          node.addFolder(dir, node)
          allFolders.push(node.folders[dir])
        } else if (file) {
          node.addFile(Number(size), file)
        }
      }
    }

    if (command === 'cd') {
      if (param === '..') {
        node = node.parent || node
      } else {
        node = node.folders[param]
      }
    }
  }

  const unusedSpace = 70000000 - root.size
  const neededSpace = 30000000 - unusedSpace
  const targets = allFolders.filter(f => f.size > neededSpace).sort((a, b) => a.size - b.size)

  return targets[0].size

}

