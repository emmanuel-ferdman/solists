# Self-organizing lists in TypeScript

The library provides a powerful and flexible implementation of the [self-organizing list](https://en.wikipedia.org/wiki/Self-organizing_list) data structure written in TypeScript. It offers support for multiple heuristic algorithms such as [Frequency Count](#Frequency-Count), [Move to Front](#Move-to-Front) and [Transpose](#Transpose). In addition to custom methods, the data structure also includes a selection of methods with behavior equivalent to that of JavaScript's built-in [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) data structure.

## Introduction

A *self-organizing list* (aka *SoList*) is a list that reorders its elements based on some self-organizing heuristic to improve average access time. The aim of a self-organizing list is to improve efficiency of linear search by moving more frequently accessed items towards the head of the list. A self-organizing list achieves near constant time for element access in the best case. A self-organizing list uses a reorganizing algorithm to adapt to various query distributions at runtime.

### Self-organizing techniques

#### Frequency Count

This technique involves counting the number of times each node is searched for, by keeping a separate counter variable for each node that is incremented every time the node is accessed.

Pseudocode:
```
init: count(i) = 0 for each item i
At t-th item selection:
    if item i is searched:
        count(i) = count(i) + 1
        rearrange items based on count
```

#### Move to Front

This technique moves the node which is accessed to the head of the list.

Pseudocode:
```
At the t-th item selection:
    if item i is selected:
        move item i to head of the list
```

#### Transpose

This technique involves swapping an accessed node with its predecessor. 

Pseudocode:
```
At the t-th item selection:
   if item i is selected:
        if i is not the head of list:
            swap item i with item (i - 1)
```

### Rearrange upon creation
In literature, some self-organizing list implementations activate a heuristic after every creation operation (like `insert()`, `push()`, `unshift()`, etc.). This means that immediately after a new node is added to the list, the relevant heuristic is triggered and the list is rearranged.

This library supports both of these approaches. By default, the list is only rearranged when searched. To activate the option for rearranging the list upon creation, use `rearrange_on_creation=true` when creating a new SoList instance. See the example below for more details.

Methods which perform rearrange of the list:
- Rearrange upon search: `at()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`, `includes()`, `indexOf()` and `lastIndexOf`.
- Rearrange upon creation: `constructor` (initialization from an iterable), `insert()`, `push()` and `unshift()`.

## Installation
```
npm install solists
```

## Example
```javascript
const { FrequencyCountSoList, MoveToFrontSoList, TransposeSoList } = require("solists");

/** Examples of SoList without rearrange upon creation **/

// Example of SoList with Frequency Count heuristic
const fcList1 = new FrequencyCountSoList(false,[1,2,3,4,5]);
console.log(fcList1.toString()); // 1,2,3,4,5
fcList1.includes(2);
fcList1.includes(4);
console.log(fcList1.toString()); // 2,4,1,3,5

// Example of SoList with Move to Front heuristic
const mtfList1 = new MoveToFrontSoList(false,[1,2,3,4,5]);
console.log(mtfList1.toString()); // 1,2,3,4,5
mtfList1.includes(2);
mtfList1.includes(4);
console.log(mtfList1.toString()); // 4,2,1,3,5

// Example of SoList with Transpose heuristic
const tList1 = new TransposeSoList(false,[1,2,3,4,5]);
console.log(tList1.toString()); // 1,2,3,4,5
tList1.includes(2);
tList1.includes(4);
console.log(tList1.toString()); // 2,1,4,3,5

/** Examples of SoList with rearrange upon creation **/

// Example of SoList with Frequency Count heuristic
const fcList2 = new FrequencyCountSoList(true,[1,2,3,4,5]);
console.log(fcList2.toString()); // 1,2,3,4,5
fcList2.includes(2);
fcList2.includes(4);
console.log(fcList2.toString()); // 2,4,1,3,5

// Example of SoList with Move to Front heuristic
const mtfList2 = new MoveToFrontSoList(true,[1,2,3,4,5]);
console.log(mtfList2.toString()); // 5,4,3,2,1
mtfList2.includes(2);
mtfList2.includes(4);
console.log(mtfList2.toString()); // 4,2,5,3,1

// Example of SoList with Transpose heuristic
const tList2 = new TransposeSoList(true,[1,2,3,4,5]);
console.log(tList2.toString()); // 2,3,4,5,1
tList2.includes(2);
tList2.includes(4);
console.log(tList2.toString()); // 2,4,3,5,1

```
## Methods and properties

List of properties of SoList:

| Name | Description |
| ------------- | ------------- |
|`length`|Represents the number of elements in that SoList|

List of methods of SoList:

| Name | Description |
| ------------- | ------------- |
|`solist[Symbol.iterator]()`|Returns an iterator that yields the value of each index in the SoList|
|`at()`|Returns the value at a given index|
|`concat()`|Returns a new SoList consisting of merging the existing SoList with given iterable inputs|
|`constructor`|Creates a new empty SoList instance or from a given iterable|
|`copyWithin()`|Shallow copies part of a SoList to another location in the same SoList and returns it|
|`entries()`|Returns a SoList iterator object of key/value pairs|
|`every()`|Checks if every element in a SoList satisfies a predicate function|
|`fill()`|Changes all elements in a SoList to a static value|
|`filter()`|Creates a new SoList with every element in a SoList that satisfies a predicate function|
|`find()`|Returns the value of the first element in a SoList that satisfies a predicate function|
|`findIndex()`|Returns the index of the first element in a SoList that satisfies a predicate function|
|`findLast()`|Returns the value of the last element in a SoList that satisfies a predicate function|
|`findLastIndex()`|Returns the index of the last element in a SoList that satisfies a predicate function|
|`flat()`|Creates a new SoList with all sub-SoList elements concatenated into it recursively up to the specified depth|
|`forEach()`|Executes a provided function once for each SoList element|
|`includes()`|Determines whether a SoList includes a certain value among its entries|
|`indexOf()`|Returns the first index at which a given element can be found in a SoList|
|`insert()`|Adds an element into a specific index of a SoList|
|`isEmpty()`|Checks if the SoList does not contain any elements|
|`isEqual()`|Checks if the SoList is equal to a given iterable|
|`join()`|Joins all elements of SoList into a string separated by commas or a specified separator string|
|`keys()`|Returns a SoList iterator object of keys|
|`lastIndexOf()`|Returns the last index at which a given element can be found in a SoList|
|`map()`|Creates a new SoList populated with the results of calling a provided function on every element of a SoList|
|`pop()`|Removes the last element from a SoList and returns that element|
|`push()`|Adds one or more elements to the end of a SoList and returns the new length of the SoList|
|`reduce()`|Reduces the values of a SoList to a single value (going left-to-right)|
|`reduceRight()`|Reduces the values of a SoList to a single value (going right-to-left)|
|`remove()`|Removes an element by a specific index from a SoList|
|`reverse()`|Reverses the order of the elements in a SoList|
|`shift()`|removes the first element from a SoList and returns that removed element|
|`slice()`|Returns a shallow copy of a portion of a SoList into a new SoList selected by positions|
|`some()`|Checks if any of the elements in a SoList satisfy a predicate function|
|`sort()`|Sorts the elements of a SoList and returns the reference to the same SoList, now sorted|
|`splice()`|Changes the contents of a SoList by removing or replacing existing elements and/or adding new elements|
|`toLocaleString()`|Returns a string representing the elements of the SoList using their `toLocaleString` methods|
|`toString()`|Returns a string representing the specified SoList and its elements|
|`unshift()`|Adds one or more elements to the beginning of a SoList and returns the new length of the SoList|
|`values()`|Returns a SoList iterator object of values|

## SoList vs JS-Array
Although SoList implements most of the methods of JS-Array (with identical behavior), there are several differences and limitations:
- Unlike JS-Array, SoList does not support empty items (for example `[1,,3]`).
- Currently, the `every()`, `filter()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`, `flatMap()` and `some()` don't support the `thisArg` argument.
- Unsupported JS-Array methods: `group()` and `groupToMap()`.
- Additional custom methods of SoList: `insert()`, `isEmpty()`, `isEqual()` and `remove()`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate and run existing ones using:

```
npm run test
```