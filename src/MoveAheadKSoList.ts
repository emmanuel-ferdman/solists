import { DoublyLinkedList, SoListOptions } from "./DoublyLinkedList";
import { Node } from "./Node";

export interface MoveAheadKOptions extends SoListOptions {
  k?: number;
}

export class MoveAheadKSoList<T> extends DoublyLinkedList<T, MoveAheadKOptions> {
  protected _rearrange(node: Node<T>): number {
    const k = this._options.k ?? 1;
    if (!node.isEqual(this._head)) {
      let target: Node<T> | null = node;
      for (let i = 0; i < k && target.prev !== null; i++) {
        target = target.prev;
      }
      if (!target.isEqual(node)) {
        this._remove(node);
        this._insertBefore(target, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
