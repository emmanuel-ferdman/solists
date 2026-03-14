import { DoublyLinkedList } from "./DoublyLinkedList";
import { Node } from "./Node";

export class MoveToFrontSoList extends DoublyLinkedList {
  public constructor(...args: any) {
    super(...args);
  }

  protected _rearrange(node: Node): number {
    if (!node.isEqual(this._head)) {
      if (this._head !== null) {
        this._remove(node);
        this._insertBefore(this._head, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
