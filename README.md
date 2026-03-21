<p align="center">
  <a href="https://github.com/emmanuel-ferdman/solists">
    <picture>
      <img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/logo.png" height="128">
    </picture>
  </a>
</p>

<p align="center">
  A TypeScript implementation of <a href="https://en.wikipedia.org/wiki/Self-organizing_list">self-organizing lists</a> with native Array methods.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/solists"><img src="https://img.shields.io/npm/v/solists.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/solists"><img src="https://img.shields.io/npm/dm/solists.svg" alt="npm downloads"></a>
  <a href="https://github.com/emmanuel-ferdman/solists/actions"><img src="https://github.com/emmanuel-ferdman/solists/workflows/CI/badge.svg" alt="CI"></a>
  <a href="https://codecov.io/gh/emmanuel-ferdman/solists"><img src="https://codecov.io/gh/emmanuel-ferdman/solists/graph/badge.svg" alt="Coverage"></a>
  <a href="https://github.com/emmanuel-ferdman/solists/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/solists.svg" alt="License"></a>
</p>

## Installation

```sh
npm install solists
```

## Example

<table width="100%">
<tr>
<th align="left">Code</th>
<th align="left">Visualization</th>
</tr>
<tr>
<td>

```javascript
const { FrequencyCountSoList } = require("solists");

const l = new FrequencyCountSoList(["A", "B", "C", "D", "E"]);
l.includes("D"); // D(1) -> front
l.includes("B"); // B(1) -> #2
l.includes("B"); // B(2) overtakes D
// Result: ["B", "D", "A", "C", "E"]
```

</td>
<td align="center" valign="middle">
<img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/frequency-count.gif" width="400">
</td>
</tr>
<tr>
<td>

```javascript
const { KInARowSoList } = require("solists");

const l = new KInARowSoList(["A", "B", "C", "D", "E"], { k: 2 });
l.includes("D"); // D: 1st access, no move
l.includes("D"); // D: 2nd access, -> front
l.includes("B"); // B: 1st access, no move
// Result: ["D", "A", "B", "C", "E"]
```

</td>
<td align="center" valign="middle">
<img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/k-in-a-row.gif" width="400">
</td>
</tr>
<tr>
<td>

```javascript
const { MoveAheadKSoList } = require("solists");

const l = new MoveAheadKSoList(["A", "B", "C", "D", "E"], { k: 2 });
l.includes("D"); // D moves 2 ahead
l.includes("E"); // E moves 2 ahead
l.includes("B"); // B moves 2 ahead
// Result: ["A", "B", "D", "E", "C"]
```

</td>
<td align="center" valign="middle">
<img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/move-ahead-k.gif" width="400">
</td>
</tr>
<tr>
<td>

```javascript
const { MoveToFrontSoList } = require("solists");

const l = new MoveToFrontSoList(["A", "B", "C", "D", "E"]);
l.includes("D"); // D -> front
l.includes("B"); // B -> front
l.includes("C"); // C -> front
// Result: ["C", "B", "D", "A", "E"]
```

</td>
<td align="center" valign="middle">
<img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/move-to-front.gif" width="400">
</td>
</tr>
<tr>
<td>

```javascript
const { TransposeSoList } = require("solists");

const l = new TransposeSoList(["A", "B", "C", "D", "E"]);
l.includes("D"); // D swaps with C
l.includes("E"); // E swaps with C
l.includes("B"); // B swaps with A
// Result: ["B", "A", "D", "E", "C"]
```

</td>
<td align="center" valign="middle">
<img src="https://raw.githubusercontent.com/emmanuel-ferdman/solists/main/img/transpose.gif" width="400">
</td>
</tr>
</table>

## How It Works

A self-organizing list (or _SoList_) reorders elements based on access patterns to improve search efficiency. Frequently accessed items move toward the head, achieving near constant-time access in the best case.

**Supported heuristics:**

- **Frequency Count** - Accessed elements ordered by access count
- **k-in-a-Row** - Accessed element moves to front after k consecutive accesses
- **Move-Ahead-k** - Accessed element moves k positions toward the head
- **Move to Front** - Accessed element moves directly to the head
- **Transpose** - Accessed element swaps with its predecessor

### Access Only Mode

By default (`accessOnly: true`), the list only rearranges on search operations. To also rearrange when adding elements, set `accessOnly: false`:

```javascript
const l = new MoveToFrontSoList([1, 2, 3], { accessOnly: false });
```

**Methods that trigger rearrangement:**

- Always: `at()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`, `includes()`, `indexOf()`, `lastIndexOf()`
- When `accessOnly: false`: `push()`, `unshift()`, `insert()`

## API

**Properties:**

| Name     | Description                    |
| :------- | :----------------------------- |
| `length` | Number of elements in the list |

**Methods:**

| Name                  | Description                                                   |
| :-------------------- | :------------------------------------------------------------ |
| `[Symbol.iterator]()` | Returns an iterator that yields each value                    |
| `at()`                | Returns the value at a given index                            |
| `concat()`            | Returns a new SoList merged with given iterables              |
| `copyWithin()`        | Shallow copies part of list to another location               |
| `entries()`           | Returns an iterator of key/value pairs                        |
| `every()`             | Checks if every element satisfies a predicate                 |
| `fill()`              | Changes all elements to a static value                        |
| `filter()`            | Creates a new SoList with elements satisfying a predicate     |
| `find()`              | Returns the first element satisfying a predicate              |
| `findIndex()`         | Returns the index of the first element satisfying a predicate |
| `findLast()`          | Returns the last element satisfying a predicate               |
| `findLastIndex()`     | Returns the index of the last element satisfying a predicate  |
| `flat()`              | Creates a new SoList with sub-lists flattened                 |
| `forEach()`           | Executes a function for each element                          |
| `includes()`          | Determines whether a value exists in the list                 |
| `indexOf()`           | Returns the first index of a given element                    |
| `insert()`            | Adds an element at a specific index                           |
| `isEmpty()`           | Checks if the list contains no elements                       |
| `isEqual()`           | Checks if the list equals a given iterable                    |
| `join()`              | Joins all elements into a string                              |
| `keys()`              | Returns an iterator of keys                                   |
| `lastIndexOf()`       | Returns the last index of a given element                     |
| `map()`               | Creates a new SoList with mapped values                       |
| `pop()`               | Removes and returns the last element                          |
| `push()`              | Adds elements to the end                                      |
| `reduce()`            | Reduces values to a single value (left-to-right)              |
| `reduceRight()`       | Reduces values to a single value (right-to-left)              |
| `remove()`            | Removes the element at a specific index                       |
| `reverse()`           | Reverses the order of elements                                |
| `shift()`             | Removes and returns the first element                         |
| `slice()`             | Returns a shallow copy of a portion                           |
| `some()`              | Checks if any element satisfies a predicate                   |
| `sort()`              | Sorts the elements                                            |
| `splice()`            | Adds/removes elements                                         |
| `toLocaleString()`    | Returns a localized string representation                     |
| `toReversed()`        | Returns a reversed copy                                       |
| `toSorted()`          | Returns a sorted copy                                         |
| `toSpliced()`         | Returns a spliced copy                                        |
| `toString()`          | Returns a string representation                               |
| `unshift()`           | Adds elements to the beginning                                |
| `values()`            | Returns an iterator of values                                 |
| `with()`              | Returns copy with element at index replaced                   |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The library is freely distributable under the terms of the [MIT license](LICENSE).
