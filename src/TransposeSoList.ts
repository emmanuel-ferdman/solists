import { DoublyLinkedList } from "./DoublyLinkedList";
import { Node } from "./Node";

export class TransposeSoList<T> extends DoublyLinkedList<T> {
  protected _rearrange(node: Node<T>): number {
    if (!node.isEqual(this._head)) {
      const prev = node.prev;
      if (prev !== null) {
        this._remove(node);
        this._insertBefore(prev, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
