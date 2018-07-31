# @macklinu/fn

> Reimplementing Lodash for the sake of learning

## Installation

```
yarn add @macklinu/fn
```

## API

### `get(obj, path, ?defaultValue)`

```js
import { get } from '@macklinu/fn'

get({ a: 1 }, 'a') // => 1
get({ a: { b: 2 } }, 'a.b') // => 2
get({}, 'a.b.c', '$') // => '$'
get() // => undefined
```
