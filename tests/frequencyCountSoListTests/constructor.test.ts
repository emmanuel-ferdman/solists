import { strict as assert } from "node:assert";
import { FrequencyCountSoList } from "../../src/FrequencyCountSoList";

function testConstructor() {
  describe('FrequencyCountSoList: Test the "constructor" method', () => {
    it('should check "constructor" from [1,2,3] with accessOnly=false', () => {
      const array = [1, 2, 3];
      const expectedArray = [1, 2, 3];
      const ds = new FrequencyCountSoList(array, { accessOnly: false });
      assert.equal(ds.length, expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "constructor" from [0,-1,2,-3,4,-5] with accessOnly=false', () => {
      const array = [0, -1, 2, -3, 4, -5];
      const expectedArray = [0, -1, 2, -3, 4, -5];
      const ds = new FrequencyCountSoList(array, { accessOnly: false });
      assert.equal(ds.length, expectedArray.length);
      assert(ds.isEqual(expectedArray));
    });
  });
}

export { testConstructor };
