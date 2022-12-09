import { part1, part2 } from '.'
import { actual } from './input'
// SAMPLE INPUT
const sample = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

describe('DAY 7', () => {
  describe('part 1', () => {
    it('sample', () => {
      expect(part1(sample)).toBe(95437)
    })

    it('actual', () => {
      expect(part1(actual)).toBe(1243729)
    })
  })

  describe('part 2', () => {
    it('sample', () => {
      expect(part2(sample)).toBe(24933642)
    })

    it('actual', () => {
      expect(part2(actual)).toBe(4443914)
    })
  })
})
