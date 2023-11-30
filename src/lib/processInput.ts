// dedicated input processing layer for easy splits and transforms
export function processInput(input, operations, index = 0) {
  if (!input || index >= operations.length) return input

  const op = operations[index]

  if (typeof op === 'string') {
    return input.split(op).map(subInput => processInput(subInput, operations, index + 1))
  } else if (typeof op === 'function') {
    return Array.isArray(input) ? input.map(item => op(item)) : op(input)
  }
}
