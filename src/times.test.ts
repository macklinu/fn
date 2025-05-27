import { expect, test } from 'vitest'

import { times } from './times'

test('creates array of n length with input n mapped by mapper function', () => {
  const result = times(5, (n) => n)

  expect(result).toHaveLength(5)
  expect(result).toEqual([0, 1, 2, 3, 4])
})
