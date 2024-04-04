import { strict as assert } from 'assert';

function testInsert(dsClass) {
  describe(dsClass.name + ' Base: Test the "insert" method', function() {
    it('should check "insert" on [] of value=5 at index=0', function() {
      const array = [];
      const expectedArray = [5];
      const expectedValue = 1;
      const index = 0;
      const value = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [] of value=5 at index=1', function() {
      const array = [];
      const expectedArray = [5];
      const expectedValue = 1;
      const index = 1;
      const value = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1] of value=5 at index=0', function() {
      const array = [1];
      const expectedArray = [5,1];
      const expectedValue = 2;
      const index = 0;
      const value = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1] of value=5 at index=1', function() {
      const array = [1];
      const expectedArray = [1,5];
      const expectedValue = 2;
      const index = 1;
      const value = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1] of value=5 at index=10', function() {
      const array = [1];
      const expectedArray = [1,5];
      const expectedValue = 2;
      const index = 10;
      const value = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=2', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,10,3,4,5];
      const expectedValue = 6;
      const index = 2;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=4', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,10,5];
      const expectedValue = 6;
      const index = 4;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=-2', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,10,4,5];
      const expectedValue = 6;
      const index = -2;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=-4', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,10,2,3,4,5];
      const expectedValue = 6;
      const index = -4;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=1.5', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,10,2,3,4,5];
      const expectedValue = 6;
      const index = 1.5;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=-2.5', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,10,4,5];
      const expectedValue = 6;
      const index = -2.5;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of without value and without index', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of without value and with index=0', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=null', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [10,1,2,3,4,5];
      const expectedValue = 6;
      const index = null;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=undefined', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5];
      const expectedValue = undefined;
      const index = undefined;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=NaN', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [10,1,2,3,4,5];
      const expectedValue = 6;
      const index = NaN;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=Infinity', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,2,3,4,5,10];
      const expectedValue = 6;
      const index = Infinity;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=-Infinity', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [10,1,2,3,4,5];
      const expectedValue = 6;
      const index = -Infinity;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index=-0', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [10,1,2,3,4,5];
      const expectedValue = 6;
      const index = -0;
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=10 at index={}', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [10,1,2,3,4,5];
      const expectedValue = 6;
      const index = {};
      const value = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=null at index=1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,null,2,3,4,5];
      const expectedValue = 6;
      const index = 1;
      const value = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=undefined at index=1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,undefined,2,3,4,5];
      const expectedValue = 6;
      const index = 1;
      const value = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=NaN at index=1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,NaN,2,3,4,5];
      const expectedValue = 6;
      const index = 1;
      const value = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=Infinity at index=1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,Infinity,2,3,4,5];
      const expectedValue = 6;
      const index = 1;
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });

    it('should check "insert" on [1,2,3,4,5] of value=-0 at index=1', function() {
      const array = [1,2,3,4,5];
      const expectedArray = [1,-0,2,3,4,5];
      const expectedValue = 6;
      const index = 1;
      const value = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.insert(index,value),expectedValue);
      assert(ds.isEqual(expectedArray));
    });
  });
}

export { testInsert };