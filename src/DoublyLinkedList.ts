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

  public [Symbol.iterator]() {
    return this._values();
  }

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

  public includes(searchedValue: any, fromIndex: any): boolean {
    if (this.length === 0) {
      return false;
    }
    fromIndex = this._toAbsoluteIndex(fromIndex, this.length);
    for (const [/* index */, node] of this._nodes(fromIndex,this.length)) {
      if (this._sameValueZero(node.value, searchedValue)) {
        node.count += 1;
        this._rearrange(node);
        return true;
      }
    }
    return false;
  }

  public indexOf(searchedValue: any, fromIndex=0): number {
    if (this.length === 0) {
      return -1;
    }
    fromIndex = this._toAbsoluteIndex(fromIndex, this.length);
    for (const [index, node] of this._nodes(fromIndex,this.length)) {
      if (this._isStrictlyEqual(node.value, searchedValue)) {
        node.count += 1;
        const result = this._rearrange(node);
        return (result === undefined) ? index : result;
      }
    }
    return -1;
  }

  public join(separator: any): string {
    let result = '';
    if (this.length === 0) {
      return result;
    }
    if (separator === undefined) {
      separator = ',';
    }
    for (const [index, node] of this._nodes(0,this.length)) {
      const value = node.value == null ? "" : node.value;
      if (index !== this.length - 1) {
        result = result.concat(value) + separator;
      } else {
        result = result.concat(value);
      }
    }
    return result;
  }

  public keys(): Generator<number> {
    return this._keys();
  }

  public lastIndexOf(searchElement: any /* , fromIndex = @[*-1] */ ): number {
    if (this.length === 0) {
      return -1;
    }
    let fromIndex = this.length - 1;
    if (arguments.length > 1) {
      fromIndex = Math.min(fromIndex, this._toIntegerOrInfinity(arguments[1]));
    }
    if (fromIndex < 0) {
      fromIndex = this.length + fromIndex;
    }
    for (const [index, node] of this._nodesReverse(0, fromIndex + 1)) {
      if (this._isStrictlyEqual(node.value, searchElement)) {
        node.count += 1;
        const result = this._rearrange(node);
        return (result === undefined) ? index : result;
      }
    }
    return -1;
  }

  public map(callbackFn: any): DoublyLinkedList {
    const result = new DoublyLinkedList();
    for (const [index, node] of this._nodes(0,this.length)) {
      result.push(callbackFn(node.value, index, this));
    }
    return result;
  }

  public pop(): unknown {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.tail!.value;
    if (this.length === 1) {
      this._removeLast();
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.length -= 1;
    }
    return value;
  }

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

  public reverse(): DoublyLinkedList {
    if (this.length > 1) {
      let curr = this.head;
      while (curr) {
        const next = curr.next;
        curr.next = curr.prev;
        curr.prev = next;
        if (curr.next === null) {
          this.tail = curr;
        } else if (curr.prev === null) {
          this.head = curr;
        }
        curr = next;
      }
    }
    return this;
  }

  public shift(): unknown {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head!.value;
    if (this.length === 1) {
      this._removeLast();
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      this.length -= 1;
    }
    return value;
  }

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

  // TODO: Support "thisArg" argument
  public some(callbackFn: any): boolean {
    for (const [index, node] of this._nodes(0,this.length)) {
      if (callbackFn(node.value, index, this)) {
        return true;
      }
    }
    return false;
  }

  public sort(comparefn: any): DoublyLinkedList {
    if (this.length > 1) {
      this._mergeSort(this._getSortCompare(comparefn));
    }
    return this;
  }

  public splice(start: any, deleteCount: any /* , ...items */ ): DoublyLinkedList {
    if (arguments.length === 0) {
      deleteCount = 0;
    } else if (arguments.length === 1) {
      start = this._toAbsoluteIndex(start, this.length);
      deleteCount = this.length - start;
    } else {
      start = this._toAbsoluteIndex(start, this.length);
      deleteCount = Math.min(Math.max(this._toIntegerOrInfinity(deleteCount), 0), this.length - start);
    }

    const deleted = new DoublyLinkedList();
    if (this.length > 0 && deleteCount > 0) {
      const prev = this._getNode(start - 1);
      let current = prev ? prev.next : this.head;

      for (let index = 0; index < deleteCount; index += 1) {
        deleted.push(current!.value);
        current = current!.next;
        this.length -= 1;
      }

      if (prev === null) {
        this.head = current;
        if (current) {
          current.prev = null;
        }
      } else {
        prev.next = current;
        if (current) {
          current.prev = prev;
        } else {
          this.tail = prev;
        }
      }
    }

    const items = Array.prototype.slice.call(arguments, 2, arguments.length);
    if (items.length > 0) {
      let current, next;
      if (start === 0) {
        next = this.head;
        this.head = new Node(items.shift());
        current = this.head;
        this.length += 1;
      } else {
        current = this._getNode(start - 1);
        next = current!.next;
      }

      for (const item of items) {
        current!.next = new Node(item);
        current!.next.prev = current;
        current = current!.next;
        this.length += 1;
      }

      current!.next = next;
      if (next) {
        next.prev = current;
      } else {
        this.tail = current;
      }
    }

    return deleted;
  }

  public toLocaleString(locales: any, options: any): string {
    let result = '';
    if (this.length === 0) {
      return result;
    }
    const separator = ',';
    for (const [index, node] of this._nodes(0,this.length)) {
      const value = node.value == null ? "" : node.value;
      if (index !== this.length - 1) {
        result = result.concat(value.toLocaleString(locales, options)) + separator;
      } else {
        result = result.concat(value.toLocaleString(locales, options));
      }
    }
    return result;
  }

  public toString(): string {
    return this.join(",");
  }

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

  public insert(index: any, value: any): number | undefined {
    if (index === undefined || arguments.length < 2) {
      return undefined;
    }
    index = this._toAbsoluteIndex(index, this.length);
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const prev = this._getNode(index - 1);
    if (prev === null) {
      return undefined;
    }
    const newNode = new Node(value);
    this._insertAfter(prev, newNode);
    if (this.rearrangeOnCreation) {
      this._rearrange(newNode);
    }
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

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

  public remove(index: any): any {
    if (this.length === 0 || index === undefined) {
      return undefined;
    }
    index = this._toAbsoluteIndex(index, this.length);
    if (index >= this.length) {
      return undefined;
    }
    const node = this._getNode(index);
    if (node === null) {
      return undefined;
    }
    const value = node.value;
    this._remove(node);
    return value;
  }

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

  protected _remove(node: Node): void {
    if (node.isEqual(this.head)) {
      this.shift();
    } else if (node.isEqual(this.tail)) {
      this.pop();
    } else if (node.next !== null && node.prev !== null) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
      this.length -= 1;
    }
  }

  protected _removeLast(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
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

  private _getSortCompare(comparefn: any) {
    return function(x: any, y: any) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return String(x) > String(y) ? 1 : -1;
    };
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

  private _isStrictlyEqual(x: any, y: any): boolean {
    return x === y;
  }

  private * _keys(): Generator<number> {
    let node = this.head;
    let counter = 0;
    while (node) {
      yield counter;
      node = node.next;
      counter += 1;
    }
  }

  private _merge(head1: any, head2: any, comparefn: any): any {
    if (head1 == null) {
      return head2;
    } else if (head2 == null) {
      return head1;
    }

    let node, head;
    if (comparefn(head1.value, head2.value) <= 0) {
      head = node = head1;
      head1 = head1.next;
    } else {
      head = node = head2;
      head2 = head2.next;
    }

    while (head1 !== null && head2 !== null) {
      if (comparefn(head1.value, head2.value) <= 0) {
        node.next = head1;
        head1.prev = node;
        node = head1;
        head1 = head1.next;
      } else {
        node.next = head2;
        head2.prev = node;
        node = head2;
        head2 = head2.next;
      }
    }

    if (head1 !== null) {
      node.next = head1;
      head1.prev = node;
    } else if (head2 !== null) {
      node.next = head2;
      head2.prev = node;
    }

    return head;
  }

  private _mergeSort(comparefn: any): void {
    const lists = [];
    let start = this.head;
    let end;
    while (start !== null) {
      end = start;
      while (end.next !== null && comparefn(end.value, end.next.value) <= 0) {
        end = end.next;
      }
      const next = end.next;
      start.prev = null;
      end.next = null;
      lists.push(start);
      start = next;
    }

    while (lists.length > 1) {
      const first = lists.shift();
      const second = lists.shift();
      if (first !== undefined && second !== undefined) {
        lists.push(this._merge(first, second, comparefn));
      }
    }

    this.tail = lists[0];
    this.head = lists[0];
    while (this.tail && this.tail.next) {
      this.tail = this.tail.next;
    }
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

  private _sameValueZero(x: any, y: any): boolean {
    return x === y || (Number.isNaN(x) && Number.isNaN(y));
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
