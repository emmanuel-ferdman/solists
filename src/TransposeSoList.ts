import { DoublyLinkedList } from './DoublyLinkedList';
import { Node } from './Node';

export class TransposeSoList extends DoublyLinkedList {
  public constructor(...args: any) {
    super(...args);
  }

  protected _rearrange(node: Node): number {
    if (!(node.isEqual(this.head))) {
      const prev = node.prev;
      if (prev !== null) {
        this._remove(node);
        this._insertBefore(prev, node);
      }
    }
    return this._getIndexByNode(node);
  }
}
