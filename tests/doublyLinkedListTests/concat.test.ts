import { strict as assert } from 'assert';

function testConcat(dsClass) {
  describe(dsClass.name + ' Base: Test the "concat" method', function() {
    it('should check "concat" from DS([]) & DS([])', function() {
      const array1 = [];
      const array2 = [];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1]) & DS([2])', function() {
      const array1 = [1];
      const array2 = [2];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & DS([5,4,3])', function() {
      const array1 = [1,2];
      const array2 = [5,4,3];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & DS(["null"])', function() {
      const array1 = [1,2];
      const array2 = [null];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & DS(["undefined"])', function() {
      const array1 = [1,2];
      const array2 = [undefined];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & DS(["NaN"])', function() {
      const array1 = [1,2];
      const array2 = [NaN];
      const array3 = array1.concat(array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & 3 & DS([3])', function() {
      const array1 = [1,2];
      const array2 = [3];
      const array3 = array1.concat(3,array2);
      const ds1 = new dsClass(false,array1);
      const ds2 = new dsClass(false,array2);
      const ds3 = ds1.concat(3,ds2);
      assert.equal(ds3.length,array3.length);
      assert(ds3.isEqual(array3));
    });

    it('should check "concat" from DS([1,2]) & 3 & 4 & 5', function() {
      const array1 = [1,2];
      const array2 = array1.concat(3,4,5);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat(3,4,5);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & [3,4,5]', function() {
      const array1 = [1,2];
      const array2 = array1.concat([3,4,5]);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat([3,4,5]);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & "null"', function() {
      const array1 = [1,2];
      const array2 = array1.concat(null);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat(null);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & "undefined"', function() {
      const array1 = [1,2];
      const array2 = array1.concat(undefined);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat(undefined);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & "NaN"', function() {
      const array1 = [1,2];
      const array2 = array1.concat(NaN);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat(NaN);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & [1,2]', function() {
      const array1 = [1,2];
      const array2 = array1.concat([1,2]);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat([1,2]);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & [3,4,5,4,3]', function() {
      const array1 = [1,2];
      const array2 = array1.concat([3,4,5,4,3]);
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat([3,4,5,4,3]);
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });

    it('should check "concat" from DS([1,2]) & "string"', function() {
      const array1 = [1,2];
      const array2 = array1.concat("string");
      const ds1 = new dsClass(false,array1);
      const ds2 = ds1.concat("string");
      assert.equal(ds2.length,array2.length);
      assert(ds2.isEqual(array2));
    });
  });
}

export { testConcat };