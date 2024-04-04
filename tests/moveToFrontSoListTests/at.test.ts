import { MoveToFrontSoList } from '../../src/MoveToFrontSoList';
import { strict as assert } from 'assert';

function testAt() {
  describe('MoveToFrontSoList: Test the "at" method', function() {
    it('should check "at" of indices [2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [2,0,1,3,4,5], "expectedValue": 2, "index": 2}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [4,4,4] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [4,0,1,2,3,5], "expectedValue": 4, "index": 4},
        {"expectedArray": [3,4,0,1,2,5], "expectedValue": 3, "index": 4},
        {"expectedArray": [2,3,4,0,1,5], "expectedValue": 2, "index": 4}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [0,0,0,4,1,1,1] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
        {"expectedArray": [4,0,1,2,3,5], "expectedValue": 4, "index": 4},
        {"expectedArray": [0,4,1,2,3,5], "expectedValue": 0, "index": 1},
        {"expectedArray": [4,0,1,2,3,5], "expectedValue": 4, "index": 1},
        {"expectedArray": [0,4,1,2,3,5], "expectedValue": 0, "index": 1}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-1] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [5,0,1,2,3,4], "expectedValue": 5, "index": -1}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-1,-2,-3,3,2,1] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [5,0,1,2,3,4], "expectedValue": 5, "index": -1},
        {"expectedArray": [3,5,0,1,2,4], "expectedValue": 3, "index": -2},
        {"expectedArray": [1,3,5,0,2,4], "expectedValue": 1, "index": -3},
        {"expectedArray": [0,1,3,5,2,4], "expectedValue": 0, "index": 3},
        {"expectedArray": [3,0,1,5,2,4], "expectedValue": 3, "index": 2},
        {"expectedArray": [0,3,1,5,2,4], "expectedValue": 0, "index": 1}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [2.5] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [2,0,1,3,4,5], "expectedValue": 2, "index": 2.5}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [-10,10,Infinity] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": -10},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": 10},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": Infinity}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "at" of indices [null,undefined,NaN,-0,{},1,1,1,1,1,1] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": null},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": undefined},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": NaN},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": -0},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": {}},
        {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
        {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
        {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.at(input.index),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testAt };