export class Node {
  public value: unknown;
  public next: Node | null;
  public prev: Node | null;
  public count: number;

  public constructor(value: unknown, next=null, prev=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.count = 0;
  }

  public isEqual(other: Node | null): boolean {
    return this === other;
  }
}
