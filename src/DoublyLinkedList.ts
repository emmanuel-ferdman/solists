import { Node } from './Node';

export class DoublyLinkedList {
  public length: number;

  protected head: Node | null;
  protected tail: Node | null;
  protected rearrangeOnCreation: boolean;

  public constructor(rearrangeOnCreation=false,iterable=null) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.rearrangeOnCreation = rearrangeOnCreation;
    if (iterable !== null) {
      this._extend(iterable);
    }
  }

  public [Symbol.iterator]() {}

  // Public Array-like methods

  public at(index: number) {}

  public concat(...values: any[]) {}

  public copyWithin(target: any /* = 0 */ , start: any /* = 0, end = @length */ ) {}

  public entries() {}

  public every(callbackFn: any) {}

  public fill(value: any, /* , startIndex = 0, endIndex = @length */ ) {}

  public filter(callbackFn: any) {}

  public find(callbackFn: any) {}

  public findIndex(callbackFn: any) {}

  public findLast(callbackFn: any) {}

  public findLastIndex(callbackFn: any) {}

  public flat(depth=1) {}

  public flatMap(callbackFn: any) {}

  public forEach(callbackFn: any) {}

  public includes(searchedValue: any, fromIndex: any) {}

  public indexOf(searchedValue: any, fromIndex=0) {}

  public join(separator: any) {}

  public keys() {}

  public lastIndexOf(searchElement: any /* , fromIndex = @[*-1] */ ) {}

  public map(callbackFn: any) {}

  public pop() {}

  public push(...values: any): number {
    const { length: valuesLength } = values;
    for (let index = 0; index < valuesLength; index += 1) {
      const newNode = new Node(values[index]);
      if (this.length === 0) {
        this._insertFirst(newNode);
      } else if (this.tail !== null) {
        this._insertAfter(this.tail, newNode);
      } else {
        continue;
      }
      if (this.rearrangeOnCreation) {
        this._rearrange(newNode);
      }
    }
    return this.length;
  }

  public reduce(callbackFn: any, initialValue: any) {}

  public reduceRight(callbackFn: any, initialValue: any) {}

  public reverse() {}

  public shift() {}

  public slice(startIndex: any, endIndex: any) {}

  public some(callbackFn: any) {}

  public sort(comparefn: any) {}

  public splice(start: any, deleteCount: any /* , ...items */ ) {}

  public toLocaleString(locales: any, options: any) {}

  public toString() {}

  public unshift(...values: any) {}

  public values() {}

  // Public custom methods

  public insert(index: any, value: any) {}

  public isEmpty() {}

  public isEqual(value: any): boolean {
    if (!(this._isIterable(value))) {
      throw TypeError("The value should be iterable");
    }
    if (this.length !== value.length) {
      return false;
    }
    const values = value.values();
    for (const [/* index */, node] of this._nodes(0,this.length)) {
      const currentValue = values.next();
      if (!(this._sameValue(node.value,currentValue.value))) {
        return false;
      }
    }
    return true;
  }

  public remove(index: any) {}

  // Protected helping methods

  protected _getIndexByNode(node: Node): number {
    let count = 0;
    while (node.prev) {
      node = node.prev;
      count += 1;
    }
    return count;
  }

  protected _getNode(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        break;
      }
      node = node.next;
      counter = counter + 1;
    }
    return node;
  }

  protected _insertFirst(newNode: Node): void {
    this.head = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  protected _insertBefore(existingNode: Node, newNode: Node): void {
    if (existingNode.isEqual(this.head)) {
      newNode.next = existingNode;
      newNode.prev = null;
      this.head = newNode;
    } else if (existingNode.prev !== null) {
      newNode.next = existingNode;
      newNode.prev = existingNode.prev;
      existingNode.prev.next = newNode;
    }
    existingNode.prev = newNode;
    this.length += 1;
  }

  protected _insertAfter(existingNode: Node, newNode: Node): void {
    newNode.prev = existingNode;
    if (existingNode.isEqual(this.tail)) {
      newNode.next = null;
      this.tail = newNode;
    } else if (existingNode.next !== null) {
      newNode.next = existingNode.next;
      existingNode.next.prev = newNode;
    }
    existingNode.next = newNode;
    this.length += 1;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _rearrange(node: Node): number | undefined {
    return undefined;
  }

  // Private helping methods

  private _extend(iterable: any): void {
    if (!(this._isIterable(iterable))) {
      throw TypeError("The value should be iterable");
    }
    for (const currentValue of iterable) {
      this.push(currentValue);
    }
  }

  private _isIterable(obj: any): boolean {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

  private * _nodes(startIndex: number, endIndex: number): Generator<any> {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (startIndex <= counter && counter < endIndex) {
        yield [counter, node];
      }
      node = node.next;
      counter = counter + 1;
    }
  }

  private _sameValue(x: any, y: any): boolean {
    return Object.is(x, y);
  }
}