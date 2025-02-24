# @macklinu/fn

> Type-safe utility functions that I write and use a lot

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [API](#api)
  - [`compact(array)`](#compactarray)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
pnpm add @macklinu/fn
```

## API

### `compact(array)`

```js
import { compact } from '@macklinu/fn'

compact([0, 1, 2, false, '', 3, null, undefined]) // => [1, 2, 3]
compact() // => []
```
