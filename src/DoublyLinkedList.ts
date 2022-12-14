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

  public at(index: number): unknown {
    if (this.length === 0 || Math.abs(index) >= this.length) {
      return undefined;
    }
    index = this._toAbsoluteIndex(index, this.length);
    const targetNode = this._getNode(index);
    if (targetNode === null) {
      return undefined;
    }
    targetNode.count += 1;
    this._rearrange(targetNode);
    return targetNode.value;
  }

  public concat(...values: any[]): DoublyLinkedList {
    const { length: valuesLength } = values;
    const result = this.slice(0, this.length);
    for (let index = 0; index < valuesLength; index += 1) {
      const value = values[index];
      if (value instanceof DoublyLinkedList || Array.isArray(value)) {
        for (const currentValue of value.values()) {
          result.push(currentValue);
        }
      } else {
        result.push(value);
      }
    }
    return result;
  }

  public copyWithin(target: any /* = 0 */ , start: any /* = 0, end = @length */ ): DoublyLinkedList {
    const sourceStart = this._toAbsoluteIndex(start, this.length);
    const sourceEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
    const targetStart = this._toAbsoluteIndex(target, this.length);
    let count = Math.min((sourceEnd === this.length ? this.length : this._toAbsoluteIndex(sourceEnd, this.length)) - sourceStart, this.length - targetStart);
    const tempSrcLst = this.slice(0, this.length);
    const targetNodes = this._nodes(targetStart, targetStart + count);
    const sourceNodes = tempSrcLst._nodes(sourceStart, sourceStart + count);
    while (count > 0) {
      const targetCurrentNode = targetNodes.next();
      const sourceCurrentNode = sourceNodes.next();
      const targetCurrentValue = targetCurrentNode.value;
      const sourceCurrentValue = sourceCurrentNode.value;
      targetCurrentValue[1].value = sourceCurrentValue[1].value;
      count -= 1;
    }
    return this;
  }

  public entries() {
    return this._entries();
  }

  // TODO: Support "thisArg" argument
  public every(callbackFn: any): boolean {
    for (const [index, node] of this._nodes(0,this.length)) {
      if (!(callbackFn(node.value, index, this))) {
        return false;
      }
    }
    return true;
  }

  public fill(value: any, /* , startIndex = 0, endIndex = @length */ ): DoublyLinkedList {
    let startIndex = undefined;
    if (arguments.length > 1) {
      startIndex = arguments[1];
    }
    startIndex = this._toAbsoluteIndex(startIndex, this.length);
    let endIndex = undefined;
    if (arguments.length > 2) {
      endIndex = arguments[2];
    }
    endIndex = (endIndex === undefined) ? this.length : this._toAbsoluteIndex(endIndex, this.length);
    for (const [/* index */, node] of this._nodes(startIndex,endIndex)) {
      node.value = value;
    }
    return this;
  }

  // TODO: Support "thisArg" argument
  public filter(callbackFn: any): DoublyLinkedList {
    const result = new DoublyLinkedList();
    for (const [index, node] of this._nodes(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        result.push(node.value);
      }
    }
    return result;
  }

  // TODO: Support "thisArg" argument
  public find(callbackFn: any): unknown {
    for (const [index, node] of this._nodes(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        node.count += 1;
        this._rearrange(node);
        return node.value;
      }
    }
    return undefined;
  }

  // TODO: Support "thisArg" argument
  public findIndex(callbackFn: any): number {
    for (const [index, node] of this._nodes(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        node.count += 1;
        const result = this._rearrange(node);
        return (result === undefined) ? index : result;
      }
    }
    return -1;
  }

  // TODO: Support "thisArg" argument
  public findLast(callbackFn: any): unknown {
    for (const [index, node] of this._nodesReverse(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        node.count += 1;
        this._rearrange(node);
        return node.value;
      }
    }
    return undefined;
  }

  // TODO: Support "thisArg" argument
  public findLastIndex(callbackFn: any) {
    for (const [index, node] of this._nodesReverse(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        node.count += 1;
        const result = this._rearrange(node);
        return (result === undefined) ? index : result;
      }
    }
    return -1;
  }

  public flat(depth=1): DoublyLinkedList {
    depth = this._toIntegerOrInfinity(depth);
    if (depth < 1) {
      return this.slice(0, this.length);
    }
    return this.reduce(function(flat: any, toFlatten: any) {
      return flat.concat(((toFlatten instanceof DoublyLinkedList) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
    }, new DoublyLinkedList());
  }

  // TODO: Support "thisArg" argument
  public flatMap(callbackFn: any): DoublyLinkedList {
    return this.map(callbackFn).flat();
  }

  public forEach(callbackFn: any): void {
    for (const [index, node] of this._nodes(0,this.length)) {
      callbackFn(node.value, index, this);
    }
    return undefined;
  }

  public includes(searchedValue: any, fromIndex: any) {}

  public indexOf(searchedValue: any, fromIndex=0) {}

  public join(separator: any) {}

  public keys() {}

  public lastIndexOf(searchElement: any /* , fromIndex = @[*-1] */ ) {}

  public map(callbackFn: any): DoublyLinkedList {
    const result = new DoublyLinkedList();
    for (const [index, node] of this._nodes(0,this.length)) {
      result.push(callbackFn(node.value, index, this));
    }
    return result;
  }

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

  public reduce(callbackFn: any, initialValue: any): any {
    if (!(this._isCallable(callbackFn))) {
      throw TypeError(this._tryToString(callbackFn) + ' is not a function');
    }
    if (this.length === 0 && arguments.length < 2) {
      throw TypeError('Reduce of empty list with no initial value');
    }
    let accumulator = arguments.length > 1 ? initialValue : this.head!.value;
    for (const [index, node] of this._nodes(0,this.length)) {
      if (arguments.length > 1 || index > 0) {
        accumulator = callbackFn(accumulator, node.value, index, this);
      }
    }
    return accumulator;
  }

  public reduceRight(callbackFn: any, initialValue: any): any {
    if (!(this._isCallable(callbackFn))) {
      throw TypeError(this._tryToString(callbackFn) + ' is not a function');
    }
    if (this.length === 0 && arguments.length < 2) {
      throw TypeError('Reduce of empty list with no initial value');
    }
    let accumulator = arguments.length > 1 ? initialValue : this.tail!.value;
    for (const [index, node] of this._nodesReverse(0,this.length)) {
      if (index < this.length - 1) {
        accumulator = callbackFn(accumulator, node.value, index, this);
      }
    }
    return accumulator;
  }

  public reverse() {}

  public shift() {}

  public slice(startIndex: any, endIndex: any): DoublyLinkedList {
    const result = new DoublyLinkedList();
    if (startIndex === undefined) {
      startIndex = 0;
    }
    startIndex = this._toAbsoluteIndex(startIndex, this.length);
    endIndex = this._toAbsoluteIndex(endIndex === undefined ? this.length : endIndex, this.length);
    for (const [/* index */, node] of this._nodes(startIndex, endIndex)) {
      result.push(node.value);
    }
    return result;
  }

  public some(callbackFn: any) {}

  public sort(comparefn: any) {}

  public splice(start: any, deleteCount: any /* , ...items */ ) {}

  public toLocaleString(locales: any, options: any) {}

  public toString() {}

  public unshift(...values: any): number {
    const { length: valuesLength } = values;
    for (let index = valuesLength - 1; index >= 0; index -= 1) {
      const newNode = new Node(values[index]);
      if (this.length === 0) {
        this._insertFirst(newNode);
      } else if (this.head !== null) {
        this._insertBefore(this.head, newNode);
      } else {
        continue;
      }
      if (this.rearrangeOnCreation) {
        this._rearrange(newNode);
      }
    }
    return this.length;
  }

  public values() {
    return this._values();
  }

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

  private * _entries(): Generator<any> {
    let node = this.head;
    let counter = 0;
    while (node) {
      yield [counter, node.value];
      node = node.next;
      counter += 1;
    }
  }

  private _extend(iterable: any): void {
    if (!(this._isIterable(iterable))) {
      throw TypeError("The value should be iterable");
    }
    for (const currentValue of iterable) {
      this.push(currentValue);
    }
  }

  private _isCallable(fn: any): boolean {
    return (typeof fn === 'function');
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

  private * _nodesReverse(startIndex: number, endIndex: number): Generator<any> {
    let node = this.tail;
    let counter = this.length - 1;
    while (node) {
      if (startIndex <= counter && counter < endIndex) {
        yield [counter, node];
      }
      node = node.prev;
      counter = counter - 1;
    }
  }

  private _sameValue(x: any, y: any): boolean {
    return Object.is(x, y);
  }

  private _toAbsoluteIndex(index: number, length: number): number {
    const integer = this._toIntegerOrInfinity(index);
    return integer < 0 ? Math.max(integer + length, 0) : Math.min(integer, length);
  }

  private _toIntegerOrInfinity(argument: number): number {
    const number = +argument;
    return number !== number || number === 0 ? 0 : Math.trunc(number);
  }

  private _tryToString(argument: any): string {
    try {
      return String(argument);
    } catch (error) {
      return 'Object';
    }
  }

  private * _values(): Generator<any> {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }
}
