import { FrequencyCountSoList } from '../../src/FrequencyCountSoList';
import { strict as assert } from 'assert';

function testUnshift() {
  describe('FrequencyCountSoList: Test the "unshift" method', function() {
    it('should check "unshift" of values [1,2,3] to list [] with rearrangeOnCreation=true', function() {
      const array = [];
      const inputs = [
        {"expectedArray": [1], "expectedValue": 1, "value": 1},
        {"expectedArray": [2,1], "expectedValue": 2, "value": 2},
        {"expectedArray": [3,2,1], "expectedValue": 3, "value": 3},
      ];
      const ds = new FrequencyCountSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.unshift(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "unshift" of values [1,5,2,3,6] to list [] with rearrangeOnCreation=true', function() {
      const array = [];
      const inputs = [
        {"expectedArray": [1], "expectedValue": 1, "value": 1},
        {"expectedArray": [5,1], "expectedValue": 2, "value": 5},
        {"expectedArray": [2,5,1], "expectedValue": 3, "value": 2},
        {"expectedArray": [3,2,5,1], "expectedValue": 4, "value": 3},
        {"expectedArray": [6,3,2,5,1], "expectedValue": 5, "value": 6}
      ];
      const ds = new FrequencyCountSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.unshift(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "unshift" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true', function() {
      const array = [1,2,3];
      const expectedInitArray = [1,2,3];
      const inputs = [
        {"expectedArray": [6,1,2,3], "expectedValue": 4, "value": 6},
        {"expectedArray": [5,6,1,2,3], "expectedValue": 5, "value": 5},
        {"expectedArray": [4,5,6,1,2,3], "expectedValue": 6, "value": 4},
      ];
      const ds = new FrequencyCountSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(expectedInitArray));
      inputs.forEach((input) => {
        assert.equal(ds.unshift(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "unshift" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3]', function() {
      const array = [1,2,3];
      const expectedInitArray = [1,2,3];
      const findInputs = [3];
      const inputs = [
        {"expectedArray": [3,6,1,2], "expectedValue": 4, "value": 6},
        {"expectedArray": [3,5,6,1,2], "expectedValue": 5, "value": 5},
        {"expectedArray": [3,4,5,6,1,2], "expectedValue": 6, "value": 4},
      ];
      const ds = new FrequencyCountSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(expectedInitArray));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.unshift(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "unshift" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3,2,3]', function() {
      const array = [1,2,3];
      const expectedInitArray = [1,2,3];
      const findInputs = [3,2,3];
      const inputs = [
        {"expectedArray": [3,2,6,1], "expectedValue": 4, "value": 6},
        {"expectedArray": [3,2,5,6,1], "expectedValue": 5, "value": 5},
        {"expectedArray": [3,2,4,5,6,1], "expectedValue": 6, "value": 4},
      ];
      const ds = new FrequencyCountSoList(true,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(expectedInitArray));
      findInputs.forEach((input) => {
        assert(ds.includes(input));
      });
      inputs.forEach((input) => {
        assert.equal(ds.unshift(input.value),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testUnshift };