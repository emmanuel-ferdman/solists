import { KInARowSoList } from "../../src/KInARowSoList";
import { strict as assert } from "assert";

function testAt() {
  describe('KInARowSoList: Test the "at" method', function () {
    it('should check "at" of indices [2] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [{ expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 2, index: 2 }];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [4,4,4] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 4, index: 4 },
        { expectedArray: [4, 0, 1, 2, 3, 5], expectedValue: 4, index: 4 },
        { expectedArray: [4, 0, 1, 2, 3, 5], expectedValue: 3, index: 4 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [0,0,0,4,1,1,1] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: 0 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: 0 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: 0 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 4, index: 4 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 1, index: 1 },
        { expectedArray: [1, 0, 2, 3, 4, 5], expectedValue: 1, index: 1 },
        { expectedArray: [1, 0, 2, 3, 4, 5], expectedValue: 0, index: 1 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-1] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [{ expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 5, index: -1 }];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-1,-2,-3,3,2,1] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 5, index: -1 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 4, index: -2 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 3, index: -3 },
        { expectedArray: [3, 0, 1, 2, 4, 5], expectedValue: 3, index: 3 },
        { expectedArray: [3, 0, 1, 2, 4, 5], expectedValue: 1, index: 2 },
        { expectedArray: [3, 0, 1, 2, 4, 5], expectedValue: 0, index: 1 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [2.5] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [{ expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 2, index: 2.5 }];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-10,10,Infinity] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: undefined, index: -10 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: undefined, index: 10 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: undefined, index: Infinity },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [null,undefined,NaN,-0,{},1,1,1,1,1,1] in list [0,1,2,3,4,5]', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const inputs = [
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: null },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: undefined },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: NaN },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: -0 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: {} },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 1, index: 1 },
        { expectedArray: [1, 0, 2, 3, 4, 5], expectedValue: 1, index: 1 },
        { expectedArray: [1, 0, 2, 3, 4, 5], expectedValue: 0, index: 1 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 0, index: 1 },
        { expectedArray: [0, 1, 2, 3, 4, 5], expectedValue: 1, index: 1 },
        { expectedArray: [1, 0, 2, 3, 4, 5], expectedValue: 1, index: 1 },
      ];
      const ds = new KInARowSoList(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index), input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" with k=1 moves on first access', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const ds = new KInARowSoList(array, { k: 1 });
      assert.equal(ds.at(4), 4);
      assert(ds.isEqual([4, 0, 1, 2, 3, 5]));
      assert.equal(ds.at(4), 3);
      assert(ds.isEqual([3, 4, 0, 1, 2, 5]));
    });

    it('should check "at" with k=3 requires 3 consecutive accesses', function () {
      const array = [0, 1, 2, 3, 4, 5];
      const ds = new KInARowSoList(array, { k: 3 });
      assert.equal(ds.at(4), 4);
      assert(ds.isEqual([0, 1, 2, 3, 4, 5]));
      assert.equal(ds.at(4), 4);
      assert(ds.isEqual([0, 1, 2, 3, 4, 5]));
      assert.equal(ds.at(4), 4);
      assert(ds.isEqual([4, 0, 1, 2, 3, 5]));
    });
  });
}

export { testAt };
