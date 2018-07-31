# @macklinu/fn

> Reimplementing Lodash for the sake of learning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [API](#api)
  - [`get(obj, path, ?defaultValue)`](#getobj-path-defaultvalue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
