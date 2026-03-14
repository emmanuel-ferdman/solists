import { DoublyLinkedList } from "./DoublyLinkedList";
import { Node } from "./Node";

export class MoveToFrontSoList<T> extends DoublyLinkedList<T> {
  protected _rearrange(node: Node<T>): number {
    if (!node.isEqual(this._head)) {
      if (this._head !== null) {
        this._remove(node);
        this._insertBefore(this._head, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
