import { strict as assert } from 'assert';

function testUnshift(dsClass) {
  describe(dsClass.name + ' Base: Test the "unshift" method', function() {
    it('should check "unshift" value 1 on []', function() {
      const array = [];
      const value = 1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value 2 on [1]', function() {
      const array = [];
      const value = 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value 2 & 3 & 4 on [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(2,3,4),array.unshift(2,3,4));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value "null" on [1]', function() {
      const array = [1];
      const value = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value "undefined" on [1]', function() {
      const array = [1];
      const value = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value "NaN" on [1]', function() {
      const array = [1];
      const value = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value "Infinity" on [1]', function() {
      const array = [1];
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });

    it('should check "unshift" value "{}" on [1]', function() {
      const array = [1];
      const value = {};
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.unshift(value),array.unshift(value));
      assert(ds.isEqual(array));
    });
  });
}

export { testUnshift };