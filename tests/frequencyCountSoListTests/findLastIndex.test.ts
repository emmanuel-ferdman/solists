import { FrequencyCountSoList } from '../../src/FrequencyCountSoList';
import { strict as assert } from 'assert';

function testFindLastIndex() {
  describe('FrequencyCountSoList: Test the "findLastIndex" method', function() {
    it('should check "findLastIndex" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [2,0,1,3,4,5], "expectedValue": 0, "func": (v) => (v == 2)}
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLastIndex(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLastIndex" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [3,0,1,2,4,5], "expectedValue": 0, "func": (v) => (v == 3)},
        {"expectedArray": [3,2,0,1,4,5], "expectedValue": 1, "func": (v) => (v == 2)},
        {"expectedArray": [3,2,4,0,1,5], "expectedValue": 2, "func": (v) => (v == 4)},
        {"expectedArray": [2,3,4,0,1,5], "expectedValue": 0, "func": (v) => (v == 2)},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLastIndex(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLastIndex" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v < 0)},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v > 6)},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLastIndex(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLastIndex" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
      const array = [0,1,2,5,4,5];
      const inputs = [
        {"expectedArray": [5,0,1,2,5,4], "expectedValue": 0, "func": (v) => (v % 2 == 1)},
        {"expectedArray": [5,4,0,1,2,5], "expectedValue": 1, "func": (v) => (v % 2 == 0)},
        {"expectedArray": [5,4,5,0,1,2], "expectedValue": 2, "func": (v) => (v == 5)},
      ];
      const ds = new FrequencyCountSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLastIndex(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testFindLastIndex };