import { KInARowSoList } from "../../src/KInARowSoList";
import { strict as assert } from "assert";

function testInsert() {
  describe('KInARowSoList: Test the "insert" method', function () {
    it('should check "insert" of values [1,2,3] with indices [0,1,2] to list [] with accessOnly=false', function () {
      const array = [];
      const inputs = [
        { expectedArray: [1], expectedValue: 1, value: 1, index: 0 },
        { expectedArray: [1, 2], expectedValue: 2, value: 2, index: 1 },
        { expectedArray: [1, 2, 3], expectedValue: 3, value: 3, index: 2 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index, input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [1,5,2,3,6] with indices [0,1,-1,1,2] to list [] with accessOnly=false', function () {
      const array = [];
      const inputs = [
        { expectedArray: [1], expectedValue: 1, value: 1, index: 0 },
        { expectedArray: [1, 5], expectedValue: 2, value: 5, index: 1 },
        { expectedArray: [1, 2, 5], expectedValue: 3, value: 2, index: -1 },
        { expectedArray: [1, 3, 2, 5], expectedValue: 4, value: 3, index: 1 },
        { expectedArray: [1, 3, 6, 2, 5], expectedValue: 5, value: 6, index: 2 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index, input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with accessOnly=false after "includes" [3]', function () {
      const array = [1, 2, 3, 4, 5];
      const findInputs = [3];
      const inputs = [
        { expectedArray: [6, 1, 2, 3, 4, 5], expectedValue: 6, value: 6, index: 0 },
        { expectedArray: [6, 1, 7, 2, 3, 4, 5], expectedValue: 7, value: 7, index: 2 },
        { expectedArray: [6, 1, 7, 2, 3, 4, 8, 5], expectedValue: 8, value: 8, index: -1 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index, input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with accessOnly=false after "includes" [3,3]', function () {
      const array = [1, 2, 3, 4, 5];
      const findInputs = [3, 3];
      const inputs = [
        { expectedArray: [6, 3, 1, 2, 4, 5], expectedValue: 6, value: 6, index: 0 },
        { expectedArray: [6, 3, 7, 1, 2, 4, 5], expectedValue: 7, value: 7, index: 2 },
        { expectedArray: [6, 3, 7, 1, 2, 4, 8, 5], expectedValue: 8, value: 8, index: -1 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index, input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" with k=1 moves on first access', function () {
      const array = [1, 2, 3];
      const inputs = [
        { expectedArray: [4, 1, 2, 3], expectedValue: 4, value: 4, index: 3 },
        { expectedArray: [5, 4, 1, 2, 3], expectedValue: 5, value: 5, index: 4 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false, k: 1 });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index, input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testInsert };
