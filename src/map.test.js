import test from 'ava'
import map from './map'

test('map() returns empty array when passed falsy collection', t => {
  let getNames = map()
  t.deepEqual(getNames(), [])
})

test('map() works like Array.prototype.map', t => {
  let getNames = map(user => user.name)
  t.deepEqual(getNames([{ name: 'Alice' }, { name: 'Bob' }]), ['Alice', 'Bob'])
})

test('map() allows for shorthand iteratee', t => {
  let getNames = map('name')
  t.deepEqual(getNames([{ name: 'Alice' }, { name: 'Bob' }]), ['Alice', 'Bob'])
})
