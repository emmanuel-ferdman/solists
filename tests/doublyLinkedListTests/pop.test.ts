import { strict as assert } from "node:assert";

function testPop(dsClass) {
  describe(`${dsClass.name} Base: Test the "pop" method`, () => {
    it('should check "pop" on []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(), array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(), array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(), array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [null]', () => {
      const array = [null];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(), array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [undefined]', () => {
      const array = [undefined];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(), array.pop());
      assert(ds.isEqual(array));
    });
  });
}

export { testPop };
