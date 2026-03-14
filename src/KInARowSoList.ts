import { DoublyLinkedList, SoListOptions } from "./DoublyLinkedList";
import { Node } from "./Node";

export interface KInARowOptions extends SoListOptions {
  k?: number;
}

export class KInARowSoList<T> extends DoublyLinkedList<T, KInARowOptions> {
  protected _consecutiveCount: number = 0;
  protected _lastAccessedNode: Node<T> | null = null;

  protected _rearrange(node: Node<T>): number {
    const k = this._options.k ?? 2;
    if (this._lastAccessedNode !== null && node.isEqual(this._lastAccessedNode)) {
      this._consecutiveCount += 1;
    } else {
      this._consecutiveCount = 1;
      this._lastAccessedNode = node;
    }

    if (this._consecutiveCount >= k && !node.isEqual(this._head)) {
      this._remove(node);
      this._insertBefore(this._head!, node);
      this._consecutiveCount = 0;
      this._lastAccessedNode = null;
    }

    return this._getIndexByNode(node);
  }
}
