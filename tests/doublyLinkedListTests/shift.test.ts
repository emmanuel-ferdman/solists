import { strict as assert } from "node:assert";

function testShift(dsClass) {
  describe(`${dsClass.name} Base: Test the "shift" method`, () => {
    it('should check "shift" on []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(), array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(), array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(), array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [null]', () => {
      const array = [null];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(), array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [undefined]', () => {
      const array = [undefined];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(), array.shift());
      assert(ds.isEqual(array));
    });
  });
}

export { testShift };
