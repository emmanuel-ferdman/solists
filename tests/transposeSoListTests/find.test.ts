import { TransposeSoList } from '../../src/TransposeSoList';
import { strict as assert } from 'assert';

function testFind() {
  describe('TransposeSoList: Test the "find" method', function() {
    it('should check "find" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,2,1,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)}
      ];
      const ds = new TransposeSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.find(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "find" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,3,2,4,5], "expectedValue": 3, "func": (v) => (v == 3)},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
        {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "func": (v) => (v == 4)},
        {"expectedArray": [0,2,1,4,3,5], "expectedValue": 2, "func": (v) => (v == 2)},
      ];
      const ds = new TransposeSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.find(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "find" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const inputs = [
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v < 0)},
        {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v > 6)},
      ];
      const ds = new TransposeSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.find(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });

    it('should check "find" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
      const array = [0,1,2,5,4,5];
      const inputs = [
        {"expectedArray": [1,0,2,5,4,5], "expectedValue": 1, "func": (v) => (v % 2 == 1)},
        {"expectedArray": [0,1,2,5,4,5], "expectedValue": 0, "func": (v) => (v % 2 == 0)},
        {"expectedArray": [0,1,5,2,4,5], "expectedValue": 5, "func": (v) => (v == 5)},
      ];
      const ds = new TransposeSoList(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      inputs.forEach((input) => {
        assert.equal(ds.find(input.func),input.expectedValue);
        assert(ds.isEqual(input.expectedArray));
      });
    });
  });
}

export { testFind };