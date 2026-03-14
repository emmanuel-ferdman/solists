import { DoublyLinkedList } from "../src/DoublyLinkedList";
import { FrequencyCountSoList } from "../src/FrequencyCountSoList";
import { KInARowSoList } from "../src/KInARowSoList";
import { MoveAheadKSoList } from "../src/MoveAheadKSoList";
import { MoveToFrontSoList } from "../src/MoveToFrontSoList";
import { TransposeSoList } from "../src/TransposeSoList";
import { doublyLinkedListTest } from "./doublyLinkedListTests";
import { frequencyCountSoListTest } from "./frequencyCountSoListTests";
import { kInARowSoListTest } from "./kInARowSoListTests";
import { moveAheadKSoListTest } from "./moveAheadKSoListTests";
import { moveToFrontSoListTest } from "./moveToFrontSoListTests";
import { transposeSoListTest } from "./transposeSoListTests";

describe("Test SoLists", function () {
  /** General Tests **/

  const dsClasses = [
    DoublyLinkedList,
    FrequencyCountSoList,
    KInARowSoList,
    MoveAheadKSoList,
    MoveToFrontSoList,
    TransposeSoList,
  ];
  dsClasses.forEach(function (dsClass) {
    describe("Test Base " + dsClass.name, function () {
      // Constructor tests
      doublyLinkedListTest.testConstructor(dsClass);

      // Custom methods tests
      doublyLinkedListTest.testIsEmpty(dsClass);
      doublyLinkedListTest.testIsEqual(dsClass);
      doublyLinkedListTest.testRemove(dsClass);

      // Native Array methods tests
      doublyLinkedListTest.testConcat(dsClass);
      doublyLinkedListTest.testCopyWithin(dsClass);
      doublyLinkedListTest.testEntries(dsClass);
      doublyLinkedListTest.testEvery(dsClass);
      doublyLinkedListTest.testFill(dsClass);
      doublyLinkedListTest.testFilter(dsClass);
      doublyLinkedListTest.testFlat(dsClass);
      doublyLinkedListTest.testFlatMap(dsClass);
      doublyLinkedListTest.testForEach(dsClass);
      doublyLinkedListTest.testJoin(dsClass);
      doublyLinkedListTest.testKeys(dsClass);
      doublyLinkedListTest.testMap(dsClass);
      doublyLinkedListTest.testPop(dsClass);
      doublyLinkedListTest.testReduce(dsClass);
      doublyLinkedListTest.testReduceRight(dsClass);
      doublyLinkedListTest.testReverse(dsClass);
      doublyLinkedListTest.testShift(dsClass);
      doublyLinkedListTest.testSlice(dsClass);
      doublyLinkedListTest.testSome(dsClass);
      doublyLinkedListTest.testSort(dsClass);
      doublyLinkedListTest.testSplice(dsClass);
      doublyLinkedListTest.testToLocaleString(dsClass);
      doublyLinkedListTest.testToReversed(dsClass);
      doublyLinkedListTest.testToSorted(dsClass);
      doublyLinkedListTest.testToSpliced(dsClass);
      doublyLinkedListTest.testToString(dsClass);
      doublyLinkedListTest.testValues(dsClass);
      doublyLinkedListTest.testWith(dsClass);

      // Operators tests
      doublyLinkedListTest.testOfOperator(dsClass);
    });
  });

  /** DoublyLinkedList Search & Creation Tests **/

  describe("Test DoublyLinkedList Search & Creation", function () {
    // Custom methods tests
    doublyLinkedListTest.testInsert(DoublyLinkedList);

    // Native Array methods tests
    doublyLinkedListTest.testAt(DoublyLinkedList);
    doublyLinkedListTest.testFind(DoublyLinkedList);
    doublyLinkedListTest.testFindIndex(DoublyLinkedList);
    doublyLinkedListTest.testFindLast(DoublyLinkedList);
    doublyLinkedListTest.testFindLastIndex(DoublyLinkedList);
    doublyLinkedListTest.testIncludes(DoublyLinkedList);
    doublyLinkedListTest.testIndexOf(DoublyLinkedList);
    doublyLinkedListTest.testLastIndexOf(DoublyLinkedList);
    doublyLinkedListTest.testPush(DoublyLinkedList);
    doublyLinkedListTest.testUnshift(DoublyLinkedList);
  });

  /** FrequencyCountSoList Search & Creation Tests **/

  describe("Test FrequencyCountSoList Search & Creation", function () {
    // Constructor tests
    frequencyCountSoListTest.testConstructor();

    // Custom methods tests
    frequencyCountSoListTest.testInsert();

    // Native Array methods tests
    frequencyCountSoListTest.testAt();
    frequencyCountSoListTest.testFind();
    frequencyCountSoListTest.testFindIndex();
    frequencyCountSoListTest.testFindLast();
    frequencyCountSoListTest.testFindLastIndex();
    frequencyCountSoListTest.testIncludes();
    frequencyCountSoListTest.testIndexOf();
    frequencyCountSoListTest.testLastIndexOf();
    frequencyCountSoListTest.testPush();
    frequencyCountSoListTest.testUnshift();
  });

  /** MoveToFrontSoList Search & Creation Tests **/

  describe("Test MoveToFrontSoList Search & Creation", function () {
    // Custom methods tests
    moveToFrontSoListTest.testInsert();

    // Native Array methods tests
    moveToFrontSoListTest.testAt();
    moveToFrontSoListTest.testFind();
    moveToFrontSoListTest.testFindIndex();
    moveToFrontSoListTest.testFindLast();
    moveToFrontSoListTest.testFindLastIndex();
    moveToFrontSoListTest.testIncludes();
    moveToFrontSoListTest.testIndexOf();
    moveToFrontSoListTest.testLastIndexOf();
    moveToFrontSoListTest.testPush();
    moveToFrontSoListTest.testUnshift();
  });

  /** TransposeSoList Search & Creation Tests **/

  describe("Test transposeSoListTest Search & Creation", function () {
    // Custom methods tests
    transposeSoListTest.testInsert();

    // Native Array methods tests
    transposeSoListTest.testAt();
    transposeSoListTest.testFind();
    transposeSoListTest.testFindIndex();
    transposeSoListTest.testFindLast();
    transposeSoListTest.testFindLastIndex();
    transposeSoListTest.testIncludes();
    transposeSoListTest.testIndexOf();
    transposeSoListTest.testLastIndexOf();
    transposeSoListTest.testPush();
    transposeSoListTest.testUnshift();
  });

  /** MoveAheadKSoList Search & Creation Tests **/

  describe("Test MoveAheadKSoList Search & Creation", function () {
    // Custom methods tests
    moveAheadKSoListTest.testInsert();

    // Native Array methods tests
    moveAheadKSoListTest.testAt();
    moveAheadKSoListTest.testFind();
    moveAheadKSoListTest.testFindIndex();
    moveAheadKSoListTest.testFindLast();
    moveAheadKSoListTest.testFindLastIndex();
    moveAheadKSoListTest.testIncludes();
    moveAheadKSoListTest.testIndexOf();
    moveAheadKSoListTest.testLastIndexOf();
    moveAheadKSoListTest.testPush();
    moveAheadKSoListTest.testUnshift();
  });

  /** KInARowSoList Search & Creation Tests **/

  describe("Test KInARowSoList Search & Creation", function () {
    // Custom methods tests
    kInARowSoListTest.testInsert();

    // Native Array methods tests
    kInARowSoListTest.testAt();
    kInARowSoListTest.testFind();
    kInARowSoListTest.testFindIndex();
    kInARowSoListTest.testFindLast();
    kInARowSoListTest.testFindLastIndex();
    kInARowSoListTest.testIncludes();
    kInARowSoListTest.testIndexOf();
    kInARowSoListTest.testLastIndexOf();
    kInARowSoListTest.testPush();
    kInARowSoListTest.testUnshift();
  });
});
