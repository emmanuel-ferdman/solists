import { MoveToFrontSoList } from '../../src/MoveToFrontSoList';
import { strict as assert } from 'assert';

function testConstructor() {
  describe('MoveToFrontSoList: Test the "constructor"', function() {
    it('should check "constructor" from [1,2,3] with rearrangeOnCreation=true', function() {
      const array = [1,2,3];
      const expectedArray = [3,2,1];
      const ds = new MoveToFrontSoList(true,array);
      assert.equal(ds.length,expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "constructor" from [0,-1,2,-3,4,-5] with rearrangeOnCreation=true', function() {
      const array = [0,-1,2,-3,4,-5];
      const expectedArray = [-5,4,-3,2,-1,0];
      const ds = new MoveToFrontSoList(true,array);
      assert.equal(ds.length,expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });
  });
}

export { testConstructor };