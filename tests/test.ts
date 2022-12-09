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
    });
  });

  /** DoublyLinkedList Search & Creation Tests **/

  describe('Test DoublyLinkedList Search & Creation', function() {

    // Array-like methods tests
    doublyLinkedListTest.testAt(DoublyLinkedList);
    doublyLinkedListTest.testPush(DoublyLinkedList);
  });
});
