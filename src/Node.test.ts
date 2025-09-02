import j, { type Node, type BigIntLiteral, type Literal } from 'jscodeshift'
import { is } from './Node'
import { expect, expectTypeOf, describe, it } from 'vitest'

describe('is', () => {
  it('narrows type of node (data-last)', () => {
    expectTypeOf(is('BigIntLiteral')).toEqualTypeOf<(node: Node) => node is BigIntLiteral>()
  })

  it('narrows type of node (data-first)', () => {
    const node = j.literal(true) as Node
    expectTypeOf(node).toEqualTypeOf<Node>()

    if (is(node, 'Literal')) {
      expectTypeOf(node).toEqualTypeOf<Literal>()
    } else {
      expect.fail()
    }
  })
})
