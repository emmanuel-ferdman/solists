import { TransposeSoList } from '../../src/TransposeSoList';
import { strict as assert } from 'assert';

function testConstructor() {
  describe('TransposeSoList: Test the "constructor"', function() {
    it('should check "constructor" from [1,2,3] with rearrangeOnCreation=true', function() {
      const array = [1,2,3];
      const expectedArray = [2,3,1];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "constructor" from [0,-1,2,-3,4,-5] with rearrangeOnCreation=true', function() {
      const array = [0,-1,2,-3,4,-5];
      const expectedArray = [-1,2,-3,4,-5,0];
      const ds = new TransposeSoList(true,array);
      assert.equal(ds.length,expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });
  });
}

export { testConstructor };