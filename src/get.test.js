import test from 'ava'
import get from './get'

test('get() returns undefined when missing parameters', t => {
  t.plan(2)
  t.is(get()(), undefined)
  t.is(get()({}), undefined)
})

test('get() turns value at path for object', t => {
  t.is(get('a.b')({ a: { b: 2 } }), 2)
})

test('get() supports array indices', t => {
  t.is(get('a.b.1')({ a: { b: [100, 200, 300] } }), 200)
})

test('get() returns default value if resolved value is undefined', t => {
  t.deepEqual(get('a.b', [])({}), [])
})
