# @macklinu/effect-jscodeshift

> Helpers for jscodeshift + effect

## Installation

```sh
pnpm add jscodeshift effect @macklinu/effect-jscodeshift
```

## Usage

```ts
import * as Node from '@macklinu/effect-jscodeshift'
import * as j from 'jscodeshift'

declare const node: j.Node
if (Node.is(node, 'Literal')) {
  node // j.Literal
}
```
