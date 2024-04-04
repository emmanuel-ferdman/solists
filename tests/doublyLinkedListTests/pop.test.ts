import { strict as assert } from 'assert';

function testPop(dsClass) {
  describe(dsClass.name + ' Base: Test the "pop" method', function() {
    it('should check "pop" on []', function() {
      const array = [];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(),array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(),array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(),array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [null]', function() {
      const array = [null];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(),array.pop());
      assert(ds.isEqual(array));
    });

    it('should check "pop" on [undefined]', function() {
      const array = [undefined];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.pop(),array.pop());
      assert(ds.isEqual(array));
    });
  });
}

export { testPop };