import { test, expect } from 'vitest'
import { compact } from './compact'

test('compact() removes falsy values', () => {
  expect(compact([0, 1, 2, false, '', 3, null, undefined])).toEqual([1, 2, 3])
})

test('compact() returns [] when passed falsy parameter', () => {
  expect(compact()).toEqual([])
})
