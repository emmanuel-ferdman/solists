import { strict as assert } from "node:assert";

function testIsEqual(dsClass) {
  describe(`${dsClass.name} Base: Test the "isEqual" method`, () => {
    it('should check "isEqual" of DS([])==[]', () => {
      const array = [];
      const ds = new dsClass();
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([1])==[1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(!ds.isEqual([2]));
      assert(!ds.isEqual([1, 2]));
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([1,2,3])==[1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([null,undefined,NaN,{},Infinity,"string",-0,1.5,true])==[null,undefined,NaN,{},Infinity,"string",-0,1.5,true]', () => {
      const array = [null, undefined, NaN, {}, Infinity, "string", -0, 1.5, true];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of non iterable object "1"', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert.throws(() => ds.isEqual(1), TypeError("The value should be iterable"));
    });

    it('should check "isEqual" of non iterable object "{}"', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert.throws(() => ds.isEqual({}), TypeError("The value should be iterable"));
    });

    it('should check "isEqual" of non iterable object "null"', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert.throws(() => ds.isEqual(null), TypeError("The value should be iterable"));
    });

    it('should check "isEqual" of non iterable object "undefined"', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert.throws(() => ds.isEqual(undefined), TypeError("The value should be iterable"));
    });
  });
}

export { testIsEqual };
