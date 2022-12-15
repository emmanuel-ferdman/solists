import { DoublyLinkedList } from '../src/DoublyLinkedList';
import { doublyLinkedListTest } from './DoublyLinkedListTest';

describe('Test SoLists', function() {

  /** General Tests **/

  const dsClasses = [DoublyLinkedList];
  dsClasses.forEach(function(dsClass) {
    describe('Test Base ' + dsClass.name, function() {

      // Constructor tests
      doublyLinkedListTest.testConstructor(dsClass);

      // Custom methods tests
      doublyLinkedListTest.testIsEqual(dsClass);

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
      doublyLinkedListTest.testMap(dsClass);
      doublyLinkedListTest.testReduce(dsClass);
      doublyLinkedListTest.testReduceRight(dsClass);
      doublyLinkedListTest.testSlice(dsClass);
      doublyLinkedListTest.testValues(dsClass);
    });
  });

  /** DoublyLinkedList Search & Creation Tests **/

  describe('Test DoublyLinkedList Search & Creation', function() {

    // Array-like methods tests
    doublyLinkedListTest.testAt(DoublyLinkedList);
    doublyLinkedListTest.testFind(DoublyLinkedList);
    doublyLinkedListTest.testFindIndex(DoublyLinkedList);
    doublyLinkedListTest.testFindLast(DoublyLinkedList);
    doublyLinkedListTest.testFindLastIndex(DoublyLinkedList);
    doublyLinkedListTest.testIncludes(DoublyLinkedList);
    doublyLinkedListTest.testIndexOf(DoublyLinkedList);
    doublyLinkedListTest.testPush(DoublyLinkedList);
    doublyLinkedListTest.testUnshift(DoublyLinkedList);
  });
});
