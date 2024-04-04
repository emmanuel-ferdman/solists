import { FrequencyCountSoList } from '../../src/FrequencyCountSoList';
import { strict as assert } from 'assert';

function testLastIndexOf() {
  describe('FrequencyCountSoList: Test the "lastIndexOf" method', function() {
    it('should check "lastIndexOf" of values [2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [2,0,1,3,4,5], "expectedValue": 0, "value": 2}
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "lastIndexOf" of values [3,2,4,2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [3,0,1,2,4,5], "expectedValue": 0, "value": 3},
        {"expectedArray": [3,2,0,1,4,5], "expectedValue": 1, "value": 2},
        {"expectedArray": [3,2,4,0,1,5], "expectedValue": 2, "value": 4},
        {"expectedArray": [2,3,4,0,1,5], "expectedValue": 0, "value": 2},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "lastIndexOf" of values [-1,6,3] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": -1},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": 6},
        {"expectedArray": [3,0,1,2,4,5], "expectedValue": 0, "value": 3},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "lastIndexOf" of values [1,0,5] in list [0,1,2,5,4,5]', function() {
      const array = [0,1,2,5,4,5];
      const inputs = [
        {"expectedArray": [1,0,2,5,4,5], "expectedValue": 0, "value": 1},
        {"expectedArray": [1,0,2,5,4,5], "expectedValue": 1, "value": 0},
        {"expectedArray": [1,0,5,2,5,4], "expectedValue": 2, "value": 5},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testLastIndexOf };