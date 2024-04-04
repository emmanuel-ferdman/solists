import { TransposeSoList } from '../../src/TransposeSoList';
import { strict as assert } from 'assert';

function testInsert() {
  describe('TransposeSoList: Test the "insert" method', function() {
    it('should check "insert" of values [1,2,3] with indices [0,1,2] to list [] with rearrangeOnCreation=true', function() {
      const array = [];
      const inputs = [
        {"expectedArray": [1], "expectedValue": 1, "value": 1, "index": 0},
        {"expectedArray": [2,1], "expectedValue": 2, "value": 2, "index": 1},
        {"expectedArray": [2,3,1], "expectedValue": 3, "value": 3, "index": 2},
      ];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index,input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [1,5,2,3,6] with indices [0,1,-1,1,2] to list [] with rearrangeOnCreation=true', function() {
      const array = [];
      const inputs = [
        {"expectedArray": [1], "expectedValue": 1, "value": 1, "index": 0},
        {"expectedArray": [5,1], "expectedValue": 2, "value": 5, "index": 1},
        {"expectedArray": [2,5,1], "expectedValue": 3, "value": 2, "index": -1},
        {"expectedArray": [3,2,5,1], "expectedValue": 4, "value": 3, "index": 1},
        {"expectedArray": [3,6,2,5,1], "expectedValue": 5, "value": 6, "index": 2}
      ];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index,input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with rearrangeOnCreation=true after "includes" [3]', function() {
      const array = [1,2,3,4,5];
      const expectedInitArray = [2,3,4,5,1];
      const findInputs = [3];
      const inputs = [
        {"expectedArray": [6,3,2,4,5,1], "expectedValue": 6, "value": 6, "index": 0},
        {"expectedArray": [6,7,3,2,4,5,1], "expectedValue": 7, "value": 7, "index": 2},
        {"expectedArray": [6,7,3,2,4,8,5,1], "expectedValue": 8, "value": 8, "index": -1},
      ];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(expectedInitArray));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index,input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with rearrangeOnCreation=true after "includes" [3,2,3]', function() {
      const array = [1,2,3,4,5];
      const expectedInitArray = [2,3,4,5,1];
      const findInputs = [3,2,3];
      const inputs = [
        {"expectedArray": [6,3,2,4,5,1], "expectedValue": 6, "value": 6, "index": 0},
        {"expectedArray": [6,7,3,2,4,5,1], "expectedValue": 7, "value": 7, "index": 2},
        {"expectedArray": [6,7,3,2,4,8,5,1], "expectedValue": 8, "value": 8, "index": -1},
      ];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(expectedInitArray));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.insert(input.index,input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testInsert };