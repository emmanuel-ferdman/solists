import { KInARowSoList } from "../../src/KInARowSoList";
import { strict as assert } from "assert";

function testIncludes() {
  describe('KInARowSoList: Test the "includes" method', function () {
    it('should check "includes" of values [2] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [{ expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 2 }];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.includes(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "includes" of values [3,2,4,2] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 3 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 2 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 4 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 2 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.includes(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "includes" of values [-1,6,3] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: false, value: -1 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: false, value: 6 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: true, value: 3 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.includes(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "includes" of values [1,0,5] in list [0,1,2,5,4,5]', function () {
      const array = [0, 1, 2, 5, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 5, 4, 5], expectedValue: true, value: 1 },
        { expectedArray: [0, 1, 2, 5, 4, 5], expectedValue: true, value: 0 },
        { expectedArray: [0, 1, 2, 5, 4, 5], expectedValue: true, value: 5 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.includes(input.value), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testIncludes };
