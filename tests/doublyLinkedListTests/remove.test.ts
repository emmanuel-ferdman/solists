import { strict as assert } from 'assert';

function testRemove(dsClass) {
  describe(dsClass.name + ' Base: Test the "remove" method', function() {
    it('should check "remove" on [] from index=0', function() {
      const array = [];
      const expectedArray = [];
      const expectedValue = undefined;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1] from index=0', function() {
      const array = [1];
      const expectedArray = [];
      const expectedValue = 1;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3] from index=1', function() {
      const array = [1,2,3];
      const expectedArray = [1,3];
      const expectedValue = 2;
      const index = 1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [null] from index=0', function() {
      const array = [null];
      const expectedArray = [];
      const expectedValue = null;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [undefined] from index=0', function() {
      const array = [undefined];
      const expectedArray = [];
      const expectedValue = undefined;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [NaN] from index=0', function() {
      const array = [NaN];
      const expectedArray = [];
      const expectedValue = NaN;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=3', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,5];
      const expectedValue = 4;
      const index = 3;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4];
      const expectedValue = 5;
      const index = -1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-3', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,4,5];
      const expectedValue = 3;
      const index = -3;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=1.5', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,3,4,5];
      const expectedValue = 2;
      const index = 1.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-1.5', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4];
      const expectedValue = 5;
      const index = -1.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=10', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const index = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-10', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [2,3,4,5];
      const expectedValue = 1;
      const index = -10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=null', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [2,3,4,5];
      const expectedValue = 1;
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=undefined', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=NaN', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [2,3,4,5];
      const expectedValue = 1;
      const index = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=Infinity', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const index = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-Infinity', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [2,3,4,5];
      const expectedValue = 1;
      const index = -Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] from index=-0', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [2,3,4,5];
      const expectedValue = 1;
      const index = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "remove" on [1,2,3,4,5] without index', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.remove(),expectedValue);
      assert(ds.isEqual(expectedArray));
    });
  });
}

export { testRemove };