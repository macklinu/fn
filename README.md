# @macklinu/fn

> Reimplementing lodash-fp for the sake of learning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [API](#api)
  - [`get(path, ?defaultValue)`](#getpath-defaultvalue)
  - [`map(iteratee)`](#mapiteratee)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
yarn add @macklinu/fn
```

## API

### `get(path, ?defaultValue)`

```js
import { get } from '@macklinu/fn'

get('a')({ a: 1 }) // => 1
get('a.b')({ a: { b: 2 } }) // => 2
get('a.b.c', '$')({}) // => '$'
get()() // => undefined
```

### `map(iteratee)`

```js
import { map } from '@macklinu/fn'

let getNames = map(user => user.name)
getNames([{ name: 'Alice' }, { name: 'Bob' }]) // => ['Alice, 'Bob']

let getNames = map('name')
getNames([{ name: 'Alice' }, { name: 'Bob' }]) // => ['Alice, 'Bob']
```
