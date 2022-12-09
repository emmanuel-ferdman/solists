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

  public push(...values: any) {}

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

  public isEqual(value: any) {}

  public remove(index: any) {}
}
