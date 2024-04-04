import { strict as assert } from 'assert';

function testAt(dsClass) {
  describe(dsClass.name + ' Base: Test the "at" method', function() {
    it('should check "at" of index 0 in list []', function() {
      const array = [];
      const index = 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index 1 in list []', function() {
      const array = [];
      const index = 1;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index 2 in list [1,2,3]', function() {
      const array = [1,2,3];
      const index = 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index 4 in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = 4;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index 5 in list [0,1,2,3,4,5]', function() {
      const array = [0,5,2,3,4,5];
      const index = 5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index 10 in list [0,1,2,3,4,5]', function() {
      const array = [0,5,2,3,4,5];
      const index = 10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index -4 in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -4;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index -5 in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index -10 in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -10;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "undefined" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "null" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "NaN" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "Infinity" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "{}" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = {};
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "-0" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "2.5" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = 2.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "-2.5" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -2.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "5.5" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = 5.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });

    it('should check "at" of index "-5.5" in list [0,1,2,3,4,5]', function() {
      const array = [0,1,2,3,4,5];
      const index = -5.5;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.at(index),array.at(index));
    });
  });
}

export { testAt };