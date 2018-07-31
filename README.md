# @macklinu/fn

> Reimplementing lodash-fp for the sake of learning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [API](#api)
  - [`compact(array)`](#compactarray)
  - [`get(path, ?defaultValue)`](#getpath-defaultvalue)
  - [`join(separator)`](#joinseparator)
  - [`map(iteratee)`](#mapiteratee)
  - [`sum(array)`](#sumarray)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
yarn add @macklinu/fn
```

## API

### `compact(array)`

```js
import { compact } from '@macklinu/fn'

compact([0, 1, 2, false, '', 3, null, undefined]) // => [1, 2, 3]
compact() // => []
```

### `get(path, ?defaultValue)`

```js
import { get } from '@macklinu/fn'

get('a')({ a: 1 }) // => 1
get('a.b')({ a: { b: 2 } }) // => 2
get('a.b.c', '$')({}) // => '$'
get()() // => undefined
```

### `join(separator)`

```js
import { join } from '@macklinu/fn'

join()([1, 2, 3]) // => '1,2,3'

let joinSquiggly = join('~')
joinSquiggly(['live', 'laugh', 'love']) // => 'live~laugh~love'

join()() // => ''
```

### `map(iteratee)`

```js
import { map } from '@macklinu/fn'

let getNames = map(user => user.name)
getNames([{ name: 'Alice' }, { name: 'Bob' }]) // => ['Alice, 'Bob']

let getNames = map('name')
getNames([{ name: 'Alice' }, { name: 'Bob' }]) // => ['Alice, 'Bob']
```

### `sum(array)`

```js
import { sum } from '@macklinu/fn'

sum([1, 2, 3]) // => 6
sum() // => 0
```
