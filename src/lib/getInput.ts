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

  // get SESSION variable from .env or process
  const { SESSION } = process.env
  if (!SESSION) {
    throw Error('Please add a SESSION variable to your local .env file or process variables')
  }

  // use this to fetch the specific day's input
  const data = await fetcher({ headers: { 'cookie': `session=${SESSION}` } })
                      .get(`https://adventofcode.com/${YEAR}/day/${day}/input`)
                      .then(r => r.trim())
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
