import { MoveToFrontSoList } from '../../src/MoveToFrontSoList';
import { strict as assert } from 'assert';

function testFindLast() {
  describe('MoveToFrontSoList: Test the "findLast" method', function() {
    it('should check "findLast" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [2,0,1,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)}
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLast(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLast" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [3,0,1,2,4,5], "expectedValue": 3, "func": (v) => (v == 3)},
        {"expectedArray": [2,3,0,1,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
        {"expectedArray": [4,2,3,0,1,5], "expectedValue": 4, "func": (v) => (v == 4)},
        {"expectedArray": [2,4,3,0,1,5], "expectedValue": 2, "func": (v) => (v == 2)},
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLast(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLast" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v < 0)},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v > 6)},
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLast(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "findLast" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
      const array = [0,1,2,5,4,5];
      const inputs = [
        {"expectedArray": [5,0,1,2,5,4], "expectedValue": 5, "func": (v) => (v % 2 == 1)},
        {"expectedArray": [4,5,0,1,2,5], "expectedValue": 4, "func": (v) => (v % 2 == 0)},
        {"expectedArray": [5,4,5,0,1,2], "expectedValue": 5, "func": (v) => (v == 5)},
      ];
      const ds = new MoveToFrontSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.findLast(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testFindLast };