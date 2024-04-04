import { strict as assert } from 'assert';

function testPush(dsClass) {
  describe(dsClass.name + ' Base: Test the "push" method', function() {
    it('should check "push" value 1 on []', function() {
      const array = [];
      const value = 1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value 2 on [1]', function() {
      const array = [];
      const value = 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value 2 & 3 & 4 on [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(2,3,4),array.push(2,3,4));
      assert(ds.isEqual(array));
    });

    it('should check "push" value "null" on [1]', function() {
      const array = [1];
      const value = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value "undefined" on [1]', function() {
      const array = [1];
      const value = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value "NaN" on [1]', function() {
      const array = [1];
      const value = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value "Infinity" on [1]', function() {
      const array = [1];
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });

    it('should check "push" value "{}" on [1]', function() {
      const array = [1];
      const value = {};
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.push(value),array.push(value));
      assert(ds.isEqual(array));
    });
  });
}

export { testPush };