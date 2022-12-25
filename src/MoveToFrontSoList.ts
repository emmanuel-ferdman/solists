import { DoublyLinkedList } from './DoublyLinkedList';
import { Node } from './Node';

export class MoveToFrontSoList extends DoublyLinkedList {
  public constructor(...args: any) {
    super(...args);
  }

  protected _rearrange(node: Node): number {
    if (!(node.isEqual(this.head))) {
      if (this.head !== null) {
        this._remove(node);
        this._insertBefore(this.head, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
