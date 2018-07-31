import test from 'ava'
import compact from './compact'

test('compact() removes falsy values', t => {
  t.deepEqual(compact([0, 1, 2, false, '', 3, null, undefined]), [1, 2, 3])
})

test('compact() returns [] when passed falsy parameter', t => {
  t.deepEqual(compact(), [])
})
