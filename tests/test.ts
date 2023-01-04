import { DoublyLinkedList } from '../src/DoublyLinkedList';
import { FrequencyCountSoList } from '../src/FrequencyCountSoList';
import { MoveToFrontSoList } from '../src/MoveToFrontSoList';
import { TransposeSoList } from '../src/TransposeSoList';
import { doublyLinkedListTest } from './DoublyLinkedListTest';
import { frequencyCountSoListTest } from './FrequencyCountSoListTest';
import { moveToFrontSoListTest } from './MoveToFrontSoListTest';
import { transposeSoListTest } from './TransposeSoListTest';

describe('Test SoLists', function() {

  /** General Tests **/

  const dsClasses = [DoublyLinkedList,FrequencyCountSoList,MoveToFrontSoList,TransposeSoList];
  dsClasses.forEach(function(dsClass) {
    describe('Test Base ' + dsClass.name, function() {

      // Constructor tests
      doublyLinkedListTest.testConstructor(dsClass);

      // Custom methods tests
      doublyLinkedListTest.testIsEmpty(dsClass);
      doublyLinkedListTest.testIsEqual(dsClass);
      doublyLinkedListTest.testRemove(dsClass);

      // Array-like methods tests
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
      doublyLinkedListTest.testToString(dsClass);
      doublyLinkedListTest.testValues(dsClass);

      // Operators tests
      doublyLinkedListTest.testOfOperator(dsClass);
    });
  });

  /** DoublyLinkedList Search & Creation Tests **/

  describe('Test DoublyLinkedList Search & Creation', function() {

    // Custom methods tests
    doublyLinkedListTest.testInsert(DoublyLinkedList);

    // Array-like methods tests
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

  describe('Test FrequencyCountSoList Search & Creation', function() {
    // Constructor tests
    frequencyCountSoListTest.testConstructor();

    // Custom methods tests
    frequencyCountSoListTest.testInsert();

    // Array-like methods tests
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

  describe('Test MoveToFrontSoList Search & Creation', function() {
    // Constructor tests
    moveToFrontSoListTest.testConstructor();

    // Custom methods tests
    moveToFrontSoListTest.testInsert();

    // Array-like methods tests
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

  describe('Test transposeSoListTest Search & Creation', function() {
    // Constructor tests
    transposeSoListTest.testConstructor();

    // Custom methods tests
    transposeSoListTest.testInsert();

    // Array-like methods tests
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
});
