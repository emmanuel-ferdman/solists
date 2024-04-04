import { strict as assert } from 'assert';

function testIndexOf(dsClass) {
  describe(dsClass.name + ' Base: Test the "indexOf" method', function() {
    it('should check "indexOf" of value 1 in list []', function() {
      const array = [];
      const value = 1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value 2 in list [1,2,3]', function() {
      const array = [1,2,3];
      const value = 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value 4 in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const value = 4;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value 4 in list [0,4,2,3,4,5]', function() {
      const array = [0,4,2,3,4,5];
      const value = 4;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value 5 in list [0,1,2,3,4,5] from index 3', function() {
      const array = [0,1,2,3,4,5];
      const value = 5;
      const index = 3;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 5 in list [0,5,2,3,4,5] from index 3', function() {
      const array = [0,5,2,3,4,5];
      const value = 5;
      const index = 3;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index 3', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = 3;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 5 in list [0,1,2,3,4,5] from index -2', function() {
      const array = [0,1,2,3,4,5];
      const value = 5;
      const index = -2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 1 in list [0,1,2,3,4,5] from index -2', function() {
      const array = [0,1,2,3,4,5];
      const value = 1;
      const index = -2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index 7', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = 7;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index -7', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = -7;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index undefined', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [0,1,2,3,4,5] from index undefined', function() {
      const array = [0,1,2,3,4,5];
      const value = 0;
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [0] from index undefined', function() {
      const array = [0];
      const value = 0;
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [] from index undefined', function() {
      const array = [];
      const value = 0;
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index null', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [0,1,2,3,4,5] from index null', function() {
      const array = [0,1,2,3,4,5];
      const value = 0;
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [0] from index null', function() {
      const array = [0];
      const value = 0;
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 0 in list [] from index null', function() {
      const array = [];
      const value = 0;
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index positive inf', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index negative inf', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = -Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index NaN', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index -0', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index +0', function() {
      const array = [0,1,2,3,4,5];
      const value = 2;
      const index = +0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
    });

    it('should check "indexOf" of value "null" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const value = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "undefined" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const value = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "NaN" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const value = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "Infinity" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "null" in list [0,1,2,null,4,5]', function() {
      const array = [0,1,2,null,4,5];
      const value = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "undefined" in list [0,1,2,undefined,4,5]', function() {
      const array = [0,1,2,undefined,4,5];
      const value = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "NaN" in list [0,1,2,NaN,4,5]', function() {
      const array = [0,1,2,NaN,4,5];
      const value = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "Infinity" in list [0,1,2,Infinity,4,5]', function() {
      const array = [0,1,2,Infinity,4,5];
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "-0" in list [0,1,2,-0,4,5]', function() {
      const array = [0,1,2,-0,4,5];
      const value = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "+0" in list [0,1,2,+0,4,5]', function() {
      const array = [0,1,2,+0,4,5];
      const value = +0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });

    it('should check "indexOf" of value "{}" in list [0,1,2,{},4,5]', function() {
      const array = [0,1,2,{},4,5];
      const value = {};
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.indexOf(value),array.indexOf(value));
    });
  });
}

export { testIndexOf };