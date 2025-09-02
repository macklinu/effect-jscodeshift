import * as Function from 'effect/Function'
import type { Node, ASTNode } from 'jscodeshift'

type ExtractNodeTypes<T> = T extends { type: infer U } ? (U extends string ? U : never) : never

/** Predicate function that narrows the type of a Node. */
export const is: {
  <TType extends ExtractNodeTypes<ASTNode>>(
    type: TType
  ): (self: Node) => self is Extract<ASTNode, { type: TType }>
  <TType extends ExtractNodeTypes<ASTNode>>(
    self: Node,
    type: TType
  ): self is Extract<ASTNode, { type: TType }>
} = Function.dual(
  2,
  <TType extends ExtractNodeTypes<ASTNode>>(
    self: Node,
    type: TType
  ): self is Extract<ASTNode, { type: TType }> => self.type === type
)
