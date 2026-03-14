import { KInARowSoList } from "../../src/KInARowSoList";
import { strict as assert } from "assert";

function testPush() {
  describe('KInARowSoList: Test the "push" method', function () {
    it('should check "push" of values [1,2,3] to list [] with accessOnly=false', function () {
      const array = [];
      const inputs = [
        { expectedArray: [1], expectedValue: 1, value: 1 },
        { expectedArray: [1, 2], expectedValue: 2, value: 2 },
        { expectedArray: [1, 2, 3], expectedValue: 3, value: 3 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.push(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "push" of values [1,5,2,3,6] to list [] with accessOnly=false', function () {
      const array = [];
      const inputs = [
        { expectedArray: [1], expectedValue: 1, value: 1 },
        { expectedArray: [1, 5], expectedValue: 2, value: 5 },
        { expectedArray: [1, 5, 2], expectedValue: 3, value: 2 },
        { expectedArray: [1, 5, 2, 3], expectedValue: 4, value: 3 },
        { expectedArray: [1, 5, 2, 3, 6], expectedValue: 5, value: 6 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.push(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "push" of values [6,5,4] to list [1,2,3] with accessOnly=false after "includes" [3]', function () {
      const array = [1, 2, 3];
      const findInputs = [3];
      const inputs = [
        { expectedArray: [1, 2, 3, 6], expectedValue: 4, value: 6 },
        { expectedArray: [1, 2, 3, 6, 5], expectedValue: 5, value: 5 },
        { expectedArray: [1, 2, 3, 6, 5, 4], expectedValue: 6, value: 4 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.push(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "push" of values [6,5,4] to list [1,2,3] with accessOnly=false after "includes" [3,3]', function () {
      const array = [1, 2, 3];
      const findInputs = [3, 3];
      const inputs = [
        { expectedArray: [3, 1, 2, 6], expectedValue: 4, value: 6 },
        { expectedArray: [3, 1, 2, 6, 5], expectedValue: 5, value: 5 },
        { expectedArray: [3, 1, 2, 6, 5, 4], expectedValue: 6, value: 4 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.push(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "push" with k=1 moves on first access', function () {
      const array = [1, 2];
      const inputs = [
        { expectedArray: [3, 1, 2], expectedValue: 3, value: 3 },
        { expectedArray: [4, 3, 1, 2], expectedValue: 4, value: 4 },
      ];
      const ds = new KInARowSoList(array, { accessOnly: false, k: 1 });
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.push(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testPush };
