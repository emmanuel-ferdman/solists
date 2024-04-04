import { strict as assert } from 'assert';

function testShift(dsClass) {
  describe(dsClass.name + ' Base: Test the "shift" method', function() {
    it('should check "shift" on []', function() {
      const array = [];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(),array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(),array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(),array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [null]', function() {
      const array = [null];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(),array.shift());
      assert(ds.isEqual(array));
    });

    it('should check "shift" on [undefined]', function() {
      const array = [undefined];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.shift(),array.shift());
      assert(ds.isEqual(array));
    });
  });
}

export { testShift };