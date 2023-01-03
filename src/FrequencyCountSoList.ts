import { DoublyLinkedList } from './DoublyLinkedList';
import { Node } from './Node';

export class FrequencyCountSoList extends DoublyLinkedList {
  public constructor(...args: any) {
    super(...args);
  }

  protected _rearrange(node: Node): number {
    let prev = node.prev;
    let next = node.next;
    if (prev !== null && prev.count < node.count) {
      while (!(node.isEqual(this.head))) {
        if (prev !== null && prev.count < node.count) {
          this._remove(node);
          this._insertBefore(prev, node);
        } else {
          break;
        }
        prev = node.prev;
      }
    } else if (next !== null && next.count > node.count) {
      while (!(node.isEqual(this.tail))) {
        if (next !== null && next.count > node.count) {
          this._remove(node);
          this._insertAfter(next, node);
        } else {
          break;
        }
        next = node.next;
      }
    }
    return this._getIndexByNode(node);
  }
}
