import { DoublyLinkedList } from '../src/DoublyLinkedList';
import { MoveToFrontSoList } from '../src/MoveToFrontSoList';
import { doublyLinkedListTest } from './DoublyLinkedListTest';
import { moveToFrontSoListTest } from './MoveToFrontSoListTest';

describe('Test SoLists', function() {

  /** General Tests **/

  const dsClasses = [DoublyLinkedList,MoveToFrontSoList];
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
});
