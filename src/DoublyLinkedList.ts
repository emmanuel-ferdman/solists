import { Node } from "./Node";

export interface SoListOptions {
  accessOnly?: boolean;
}

export class DoublyLinkedList<T> {
  protected _head: Node<T> | null;
  protected _tail: Node<T> | null;
  protected _accessOnly: boolean;

  private _length: number;

  public constructor(iterable: Iterable<T> | null = null, options: SoListOptions = {}) {
    this._head = null;
    this._tail = null;
    this._length = 0;
    this._accessOnly = options.accessOnly ?? true;
    if (iterable !== null) {
      this._extend(iterable);
    }
  }

  public [Symbol.iterator](): Generator<T> {
    return this._values();
  }

  // Public native Array methods

  public at(index: number): T | undefined {
    if (this.length === 0 || Math.abs(index) >= this.length) {
      return undefined;
    }
    index = this._toAbsoluteIndex(index, this.length);
    const targetNode = this._getNode(index)!;
    targetNode.count += 1;
    this._rearrange(targetNode);
    return targetNode.value;
  }

  public concat(...items: (T | ConcatArray<T>)[]): DoublyLinkedList<T> {
    const result = this.slice();
    for (const item of items) {
      if (Array.isArray(item) || item instanceof DoublyLinkedList) {
        for (const value of item) {
          result.push(value);
        }
      } else {
        result.push(item as T);
      }
    }
    return result;
  }

  public copyWithin(target: number, start: number, end?: number): this {
    const targetIndex = this._toAbsoluteIndex(target, this.length);
    const sourceStart = this._toAbsoluteIndex(start, this.length);
    const sourceEnd = end === undefined ? this.length : this._toAbsoluteIndex(end, this.length);
    let count = Math.min(sourceEnd - sourceStart, this.length - targetIndex);
    if (count <= 0 || sourceStart === targetIndex) return this;
    if (sourceStart < targetIndex && targetIndex < sourceStart + count) {
      let sourceNode = this._getNode(sourceStart + count - 1);
      let targetNode = this._getNode(targetIndex + count - 1);
      while (count > 0) {
        targetNode!.value = sourceNode!.value;
        sourceNode = sourceNode!.prev;
        targetNode = targetNode!.prev;
        count -= 1;
      }
    } else {
      let sourceNode = this._getNode(sourceStart);
      let targetNode = this._getNode(targetIndex);
      while (count > 0) {
        targetNode!.value = sourceNode!.value;
        sourceNode = sourceNode!.next;
        targetNode = targetNode!.next;
        count -= 1;
      }
    }
    return this;
  }

  public entries(): Generator<[number, T]> {
    return this._entries();
  }

  public every(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): boolean {
    this._aCallable(predicate);
    for (const [index, node] of this._nodes(0, this.length)) {
      if (!predicate.call(thisArg, node.value, index, this)) {
        return false;
      }
    }
    return true;
  }

  public fill(value: T, start?: number, end?: number): this {
    const startIndex = this._toAbsoluteIndex(start, this.length);
    const endIndex = end === undefined ? this.length : this._toAbsoluteIndex(end, this.length);
    for (const [, node] of this._nodes(startIndex, endIndex)) {
      node.value = value;
    }
    return this;
  }

  public filter(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): DoublyLinkedList<T> {
    this._aCallable(predicate);
    const result = new DoublyLinkedList<T>();
    for (const [index, node] of this._nodes(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        result.push(node.value);
      }
    }
    return result;
  }

  public find(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): T | undefined {
    this._aCallable(predicate);
    for (const [index, node] of this._nodes(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        node.count += 1;
        this._rearrange(node);
        return node.value;
      }
    }
    return undefined;
  }

  public findIndex(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): number {
    this._aCallable(predicate);
    for (const [index, node] of this._nodes(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        node.count += 1;
        const result = this._rearrange(node);
        return result === undefined ? index : result;
      }
    }
    return -1;
  }

  public findLast(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): T | undefined {
    this._aCallable(predicate);
    for (const [index, node] of this._nodesReverse(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        node.count += 1;
        this._rearrange(node);
        return node.value;
      }
    }
    return undefined;
  }

  public findLastIndex(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): number {
    this._aCallable(predicate);
    for (const [index, node] of this._nodesReverse(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        node.count += 1;
        const result = this._rearrange(node);
        return result === undefined ? index : result;
      }
    }
    return -1;
  }

  public flat<D extends number = 1>(depth?: D): DoublyLinkedList<unknown> {
    const d = depth === undefined ? 1 : this._toIntegerOrInfinity(depth);
    if (d < 1) {
      return this.slice() as DoublyLinkedList<unknown>;
    }
    const result = new DoublyLinkedList<unknown>();
    for (const [, node] of this._nodes(0, this.length)) {
      const value = node.value;
      if (Array.isArray(value) || value instanceof DoublyLinkedList) {
        const flattened =
          value instanceof DoublyLinkedList
            ? value.flat(d - 1)
            : new DoublyLinkedList(value).flat(d - 1);
        for (const item of flattened) {
          result.push(item);
        }
      } else {
        result.push(value);
      }
    }
    return result;
  }

  public flatMap<U>(
    callback: (value: T, index: number, list: DoublyLinkedList<T>) => U | ReadonlyArray<U>,
    thisArg?: any
  ): DoublyLinkedList<U> {
    this._aCallable(callback);
    return this.map(callback, thisArg).flat() as DoublyLinkedList<U>;
  }

  public forEach(
    callbackfn: (value: T, index: number, list: DoublyLinkedList<T>) => void,
    thisArg?: any
  ): void {
    this._aCallable(callbackfn);
    for (const [index, node] of this._nodes(0, this.length)) {
      callbackfn.call(thisArg, node.value, index, this);
    }
  }

  public includes(searchElement: T, fromIndex?: number): boolean {
    if (this.length === 0) {
      return false;
    }
    const startIndex = this._toAbsoluteIndex(fromIndex, this.length);
    for (const [, node] of this._nodes(startIndex, this.length)) {
      if (this._sameValueZero(node.value, searchElement)) {
        node.count += 1;
        this._rearrange(node);
        return true;
      }
    }
    return false;
  }

  public indexOf(searchElement: T, fromIndex?: number): number {
    if (this.length === 0) {
      return -1;
    }
    const startIndex = this._toAbsoluteIndex(fromIndex ?? 0, this.length);
    for (const [index, node] of this._nodes(startIndex, this.length)) {
      if (this._isStrictlyEqual(node.value, searchElement)) {
        node.count += 1;
        const result = this._rearrange(node);
        return result === undefined ? index : result;
      }
    }
    return -1;
  }

  public join(separator?: string): string {
    if (this.length === 0) {
      return "";
    }
    const sep = separator === undefined ? "," : String(separator);
    let result = "";
    for (const [index, node] of this._nodes(0, this.length)) {
      const value = node.value == null ? "" : String(node.value);
      result += index === 0 ? value : sep + value;
    }
    return result;
  }

  public keys(): Generator<number> {
    return this._keys();
  }

  public get length(): number {
    return this._length;
  }

  public lastIndexOf(searchElement: T, fromIndex?: any): number {
    if (this.length === 0) {
      return -1;
    }
    let startIndex =
      arguments.length > 1
        ? Math.min(this._toIntegerOrInfinity(fromIndex), this.length - 1)
        : this.length - 1;
    if (startIndex < 0) {
      startIndex = this.length + startIndex;
    }
    for (const [index, node] of this._nodesReverse(0, startIndex + 1)) {
      if (this._isStrictlyEqual(node.value, searchElement)) {
        node.count += 1;
        const result = this._rearrange(node);
        return result === undefined ? index : result;
      }
    }
    return -1;
  }

  public map<U>(
    callbackfn: (value: T, index: number, list: DoublyLinkedList<T>) => U,
    thisArg?: any
  ): DoublyLinkedList<U> {
    this._aCallable(callbackfn);
    const result = new DoublyLinkedList<U>();
    for (const [index, node] of this._nodes(0, this.length)) {
      result.push(callbackfn.call(thisArg, node.value, index, this));
    }
    return result;
  }

  public pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const value = this._tail!.value;
    if (this.length === 1) {
      this._removeLast();
    } else {
      this._tail = this._tail!.prev;
      this._tail!.next = null;
      this._length -= 1;
    }
    return value;
  }

  public push(...items: T[]): number {
    for (const item of items) {
      const newNode = new Node<T>(item);
      if (this.length === 0) {
        this._insertFirst(newNode);
      } else {
        this._insertAfter(this._tail!, newNode);
      }
      if (!this._accessOnly) {
        this._rearrange(newNode);
      }
    }
    return this.length;
  }

  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => T
  ): T;
  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => T,
    initialValue: T
  ): T;
  public reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => U,
    initialValue: U
  ): U;
  public reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => U,
    initialValue?: U
  ): U {
    this._aCallable(callbackfn);
    const hasInitial = arguments.length > 1;
    if (this.length === 0 && !hasInitial) {
      throw TypeError("Reduce of empty list with no initial value");
    }
    let accumulator: U = hasInitial ? initialValue! : (this._head!.value as unknown as U);
    for (const [index, node] of this._nodes(0, this.length)) {
      if (hasInitial || index > 0) {
        accumulator = callbackfn(accumulator, node.value, index, this);
      }
    }
    return accumulator;
  }

  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => T
  ): T;
  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => T,
    initialValue: T
  ): T;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => U,
    initialValue: U
  ): U;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      list: DoublyLinkedList<T>
    ) => U,
    initialValue?: U
  ): U {
    this._aCallable(callbackfn);
    const hasInitial = arguments.length > 1;
    if (this.length === 0 && !hasInitial) {
      throw TypeError("Reduce of empty list with no initial value");
    }
    let accumulator: U = hasInitial ? initialValue! : (this._tail!.value as unknown as U);
    for (const [index, node] of this._nodesReverse(0, this.length)) {
      if (hasInitial || index < this.length - 1) {
        accumulator = callbackfn(accumulator, node.value, index, this);
      }
    }
    return accumulator;
  }

  public reverse(): this {
    if (this.length > 1) {
      let curr = this._head;
      while (curr) {
        const next = curr.next;
        curr.next = curr.prev;
        curr.prev = next;
        if (curr.next === null) {
          this._tail = curr;
        } else if (curr.prev === null) {
          this._head = curr;
        }
        curr = next;
      }
    }
    return this;
  }

  public shift(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const value = this._head!.value;
    if (this.length === 1) {
      this._removeLast();
    } else {
      this._head = this._head!.next;
      this._head!.prev = null;
      this._length -= 1;
    }
    return value;
  }

  public slice(start?: any, end?: any): DoublyLinkedList<T> {
    const result = new DoublyLinkedList<T>();
    const startIndex = this._toAbsoluteIndex(start, this.length);
    const endIndex = end === undefined ? this.length : this._toAbsoluteIndex(end, this.length);
    for (const [, node] of this._nodes(startIndex, endIndex)) {
      result.push(node.value);
    }
    return result;
  }

  public some(
    predicate: (value: T, index: number, list: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): boolean {
    this._aCallable(predicate);
    for (const [index, node] of this._nodes(0, this.length)) {
      if (predicate.call(thisArg, node.value, index, this)) {
        return true;
      }
    }
    return false;
  }

  public sort(compareFn?: (a: T, b: T) => number): this {
    if (this.length > 1) {
      const compare = this._getSortCompare(compareFn);
      if (this.length < 8) {
        this._insertionSort(compare);
      } else {
        this._mergeSort(compare);
      }
    }
    return this;
  }

  public splice(start?: any, deleteCount?: any, ...items: T[]): DoublyLinkedList<T> {
    if (arguments.length === 0) {
      return new DoublyLinkedList<T>();
    }
    const startIndex = this._toAbsoluteIndex(start, this.length);
    const delCount =
      arguments.length === 1
        ? this.length - startIndex
        : Math.min(Math.max(this._toIntegerOrInfinity(deleteCount), 0), this.length - startIndex);

    const deleted = new DoublyLinkedList<T>();
    if (this.length > 0 && delCount > 0) {
      const prev = this._getNode(startIndex - 1);
      let current = prev ? prev.next : this._head;

      for (let i = 0; i < delCount; i++) {
        deleted.push(current!.value);
        current = current!.next;
        this._length -= 1;
      }

      if (prev === null) {
        this._head = current;
        if (current) {
          current.prev = null;
        }
      } else {
        prev.next = current;
        if (current) {
          current.prev = prev;
        } else {
          this._tail = prev;
        }
      }
    }

    if (items.length > 0) {
      let current: Node<T> | null;
      let next: Node<T> | null;
      if (startIndex === 0) {
        next = this._head;
        this._head = new Node<T>(items.shift()!);
        current = this._head;
        this._length += 1;
      } else {
        current = this._getNode(startIndex - 1);
        next = current!.next;
      }

      for (const item of items) {
        current!.next = new Node<T>(item);
        current!.next.prev = current;
        current = current!.next;
        this._length += 1;
      }

      current!.next = next;
      if (next) {
        next.prev = current;
      } else {
        this._tail = current;
      }
    }

    return deleted;
  }

  public toLocaleString(
    locales?: string | string[],
    options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions
  ): string {
    if (this.length === 0) {
      return "";
    }
    const parts: string[] = [];
    for (const [, node] of this._nodes(0, this.length)) {
      const value = node.value;
      if (value == null) {
        parts.push("");
      } else {
        parts.push((value as any).toLocaleString(locales, options));
      }
    }
    return parts.join(",");
  }

  public toReversed(): DoublyLinkedList<T> {
    return this.slice().reverse();
  }

  public toSorted(compareFn?: (a: T, b: T) => number): DoublyLinkedList<T> {
    if (compareFn !== undefined && !this._isCallable(compareFn)) {
      let value: string;
      if (compareFn === null) value = "null";
      else if (Array.isArray(compareFn)) value = Object.prototype.toString.call(compareFn);
      else if (typeof compareFn === "object") value = "#<Object>";
      else value = String(compareFn);
      throw TypeError(`The comparison function must be either a function or undefined: ${value}`);
    }
    return this.slice().sort(compareFn);
  }

  public toSpliced(start?: any, deleteCount?: any, ...items: T[]): DoublyLinkedList<T> {
    const copy = this.slice();
    if (arguments.length === 0) {
      return copy;
    } else if (arguments.length === 1) {
      copy.splice(start);
    } else {
      copy.splice(start, deleteCount, ...items);
    }
    return copy;
  }

  public toString(): string {
    return this.join(",");
  }

  public unshift(...items: T[]): number {
    for (let i = items.length - 1; i >= 0; i--) {
      const newNode = new Node<T>(items[i]);
      if (this.length === 0) {
        this._insertFirst(newNode);
      } else {
        this._insertBefore(this._head!, newNode);
      }
      if (!this._accessOnly) {
        this._rearrange(newNode);
      }
    }
    return this.length;
  }

  public values(): Generator<T> {
    return this._values();
  }

  public with(index: number, value: T): DoublyLinkedList<T> {
    const relativeIndex = this._toIntegerOrInfinity(index);
    const actualIndex = relativeIndex < 0 ? this.length + relativeIndex : relativeIndex;
    if (actualIndex >= this.length || actualIndex < 0) {
      throw new RangeError("Invalid index : " + index);
    }
    const copy = this.slice();
    const node = copy._getNode(actualIndex);
    if (node !== null) {
      node.value = value;
    }
    return copy;
  }

  // Public custom methods

  public insert(index: any, value: T): number | undefined {
    if (index === undefined || arguments.length < 2) {
      return undefined;
    }
    const idx = this._toAbsoluteIndex(index, this.length);
    if (idx === 0) {
      return this.unshift(value);
    }
    if (idx === this.length) {
      return this.push(value);
    }
    const prev = this._getNode(idx - 1)!;
    const newNode = new Node<T>(value);
    this._insertAfter(prev, newNode);
    if (!this._accessOnly) {
      this._rearrange(newNode);
    }
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public isEqual(other: Iterable<T> & { length: number }): boolean {
    if (!this._isIterable(other)) {
      throw TypeError("The value should be iterable");
    }
    if (this.length !== other.length) {
      return false;
    }
    const otherIterator = other[Symbol.iterator]();
    for (const [, node] of this._nodes(0, this.length)) {
      const otherValue = otherIterator.next();
      if (!this._sameValue(node.value, otherValue.value)) {
        return false;
      }
    }
    return true;
  }

  public remove(index: number): T | undefined {
    if (this.length === 0 || index === undefined) {
      return undefined;
    }
    const idx = this._toAbsoluteIndex(index, this.length);
    if (idx >= this.length) {
      return undefined;
    }
    const node = this._getNode(idx)!;
    const value = node.value;
    this._remove(node);
    return value;
  }

  // Protected methods

  protected _getIndexByNode(node: Node<T>): number {
    let count = 0;
    let current: Node<T> | null = node;
    while (current.prev) {
      current = current.prev;
      count += 1;
    }
    return count;
  }

  protected _getNode(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node = this._head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        break;
      }
      node = node.next;
      counter += 1;
    }
    return node;
  }

  protected _insertFirst(newNode: Node<T>): void {
    this._head = newNode;
    this._tail = newNode;
    this._length += 1;
  }

  protected _insertBefore(existingNode: Node<T>, newNode: Node<T>): void {
    if (existingNode.isEqual(this._head)) {
      newNode.next = existingNode;
      newNode.prev = null;
      this._head = newNode;
    } else if (existingNode.prev !== null) {
      newNode.next = existingNode;
      newNode.prev = existingNode.prev;
      existingNode.prev.next = newNode;
    }
    existingNode.prev = newNode;
    this._length += 1;
  }

  protected _insertAfter(existingNode: Node<T>, newNode: Node<T>): void {
    newNode.prev = existingNode;
    if (existingNode.isEqual(this._tail)) {
      newNode.next = null;
      this._tail = newNode;
    } else if (existingNode.next !== null) {
      newNode.next = existingNode.next;
      existingNode.next.prev = newNode;
    }
    existingNode.next = newNode;
    this._length += 1;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _rearrange(_node: Node<T>): number | undefined {
    return undefined;
  }

  protected _remove(node: Node<T>): void {
    if (node.isEqual(this._head)) {
      this.shift();
    } else if (node.isEqual(this._tail)) {
      this.pop();
    } else if (node.next !== null && node.prev !== null) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
      this._length -= 1;
    }
  }

  protected _removeLast(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  // Private methods

  private *_entries(): Generator<[number, T]> {
    let node = this._head;
    let counter = 0;
    while (node) {
      yield [counter, node.value];
      node = node.next;
      counter += 1;
    }
  }

  private _extend(iterable: Iterable<T>): void {
    if (!this._isIterable(iterable)) {
      throw TypeError("The value should be iterable");
    }
    for (const value of iterable) {
      const newNode = new Node<T>(value);
      if (this.length === 0) {
        this._insertFirst(newNode);
      } else {
        this._insertAfter(this._tail!, newNode);
      }
    }
  }

  private _getSortCompare(compareFn?: (a: T, b: T) => number): (a: T, b: T) => number {
    return (x: T, y: T): number => {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (compareFn !== undefined) return +compareFn(x, y) || 0;
      const xStr = String(x);
      const yStr = String(y);
      return xStr > yStr ? 1 : xStr < yStr ? -1 : 0;
    };
  }

  private _isCallable(fn: unknown): fn is (...args: any[]) => any {
    return typeof fn === "function";
  }

  private _aCallable<F>(argument: F): F {
    if (this._isCallable(argument)) return argument;
    const type = typeof argument;
    const value = this._tryToString(argument);
    const typePrefix = type !== "undefined" ? type + " " : "";
    throw TypeError(`${typePrefix}${value} is not a function`);
  }

  private _isIterable(obj: unknown): obj is Iterable<unknown> {
    if (obj == null) {
      return false;
    }
    return typeof (obj as any)[Symbol.iterator] === "function";
  }

  private _isStrictlyEqual(x: T, y: T): boolean {
    return x === y;
  }

  private *_keys(): Generator<number> {
    let node = this._head;
    let counter = 0;
    while (node) {
      yield counter;
      node = node.next;
      counter += 1;
    }
  }

  private _merge(
    head1: Node<T> | null,
    head2: Node<T> | null,
    compareFn: (a: T, b: T) => number
  ): Node<T> {
    let node: Node<T>;
    let head: Node<T>;
    if (compareFn(head1!.value, head2!.value) <= 0) {
      head = node = head1!;
      head1 = head1!.next;
    } else {
      head = node = head2!;
      head2 = head2!.next;
    }

    while (head1 !== null && head2 !== null) {
      if (compareFn(head1.value, head2.value) <= 0) {
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

  private _mergeSort(compareFn: (a: T, b: T) => number): void {
    let lists: Node<T>[] = [];
    let start = this._head;
    while (start !== null) {
      let end = start;
      while (end.next !== null && compareFn(end.value, end.next.value) <= 0) {
        end = end.next;
      }
      const next = end.next;
      start.prev = null;
      end.next = null;
      lists.push(start);
      start = next;
    }

    while (lists.length > 1) {
      const merged: Node<T>[] = [];
      for (let i = 0; i < lists.length; i += 2) {
        if (i + 1 < lists.length) {
          merged.push(this._merge(lists[i], lists[i + 1], compareFn));
        } else {
          merged.push(lists[i]);
        }
      }
      lists = merged;
    }

    this._tail = lists[0];
    this._head = lists[0];
    while (this._tail && this._tail.next) {
      this._tail = this._tail.next;
    }
  }

  private _insertionSort(compareFn: (a: T, b: T) => number): void {
    let current = this._head!.next;
    while (current !== null) {
      const next = current.next;
      let position = current.prev;

      while (position !== null && compareFn(position.value, current.value) > 0) {
        position = position.prev;
      }

      if (position !== current.prev) {
        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this._tail = current.prev;
        }

        if (position === null) {
          current.prev = null;
          current.next = this._head;
          this._head!.prev = current;
          this._head = current;
        } else {
          current.prev = position;
          current.next = position.next;
          if (position.next) {
            position.next.prev = current;
          }
          position.next = current;
        }
      }

      current = next;
    }
  }

  private *_nodes(startIndex: number, endIndex: number): Generator<[number, Node<T>]> {
    let node = this._head;
    let counter = 0;
    while (node) {
      if (startIndex <= counter && counter < endIndex) {
        yield [counter, node];
      }
      node = node.next;
      counter += 1;
    }
  }

  private *_nodesReverse(startIndex: number, endIndex: number): Generator<[number, Node<T>]> {
    let node = this._tail;
    let counter = this.length - 1;
    while (node) {
      if (startIndex <= counter && counter < endIndex) {
        yield [counter, node];
      }
      node = node.prev;
      counter -= 1;
    }
  }

  private _sameValue(x: T, y: T): boolean {
    return Object.is(x, y);
  }

  private _sameValueZero(x: T, y: T): boolean {
    return x === y || (Number.isNaN(x) && Number.isNaN(y));
  }

  private _toAbsoluteIndex(index: number | undefined, length: number): number {
    const integer = this._toIntegerOrInfinity(index);
    return integer < 0 ? Math.max(integer + length, 0) : Math.min(integer, length);
  }

  private _toIntegerOrInfinity(argument: number | undefined): number {
    if (argument === undefined) return 0;
    const number = +argument;
    return number !== number || number === 0 ? 0 : Math.trunc(number);
  }

  private _tryToString(argument: unknown): string {
    try {
      return String(argument);
    } catch {
      return "Object";
    }
  }

  private *_values(): Generator<T> {
    let node = this._head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }
}
