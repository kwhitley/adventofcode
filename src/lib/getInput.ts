import { fetcher } from 'itty-fetcher'
import { YEAR } from './contants'
import { processInput } from './processInput'

// write data to cache
const writeToCache = (path: string, data) => Bun.write(path, data)

// read data from cache
const readFromCache = (path: string) => Bun.file(path).text().catch(() => undefined)

type SplitType = string | Function

export const getInput = async (day: number, operations: SplitType[] = []) => {
  const key = `./cache/input_${YEAR}_day_${day}.txt`
  const existing = await readFromCache(key)

  if (existing) return processInput(existing, operations)

  const data = await fetcher({
    headers: {
      'cookie': 'session=53616c7465645f5ff7ff6830b23951491ccab3f62c84eedfe6841a47d406b22f4fc8970873dcd5779ff88f0c3deae14551df5917f85b86a2ea7c00a0ca28f474'
    }
  }).get(`https://adventofcode.com/${YEAR}/day/${day}/input`)
    .catch(({ status, message }) => {
      console.log('Error Fetching Input', { status, message })
    })

  // write in async
  data && writeToCache(key, data)
    .then(bytes => {
      console.log(`${bytes} written to ${key}`)
    })
    .catch(err => {
      console.warn(`Error writing to ${key}`, err)
    })

  return processInput(data, operations)
}
