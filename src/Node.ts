export class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;
  public count: number;

  public constructor(value: T, next: Node<T> | null = null, prev: Node<T> | null = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.count = 0;
  }

  public isEqual(other: Node<T> | null): boolean {
    return this === other;
  }
}
