import test from 'ava'
import join from './join'

test('join() defaults to empty string', t => {
  t.is(join()(), '')
})

test('join() uses comma as default separator', t => {
  t.is(join()([1, 2, 3]), '1,2,3')
})

test('join() supports custom separator', t => {
  let joinSquiggly = join('~')
  t.is(joinSquiggly(['live', 'laugh', 'love']), 'live~laugh~love')
})
