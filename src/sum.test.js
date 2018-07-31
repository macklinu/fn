import test from 'ava'
import sum from './sum'

test('sum() returns 0 when nothing passed in', t => {
  t.is(sum(), 0)
})

test('sum() sums array of numbers', t => {
  t.is(sum([1, 2, 3]), 6)
})
