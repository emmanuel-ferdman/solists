import { strict as assert } from "assert";

function testWith(dsClass) {
  describe(dsClass.name + ' Base: Test the "with" method', function () {
    it('should check "with" throws RangeError for empty list', function () {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.with(0, 9), RangeError);
      assert.throws(() => ds.with(0, 9), RangeError);
    });

    it('should check "with" of list [1,2,3] at index 0', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(0, 9).isEqual(array.with(0, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" of list [1,2,3] at index 1', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(1, 9).isEqual(array.with(1, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" of list [1,2,3] at index 2', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(2, 9).isEqual(array.with(2, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" of list [1,2,3,4,5] at index -1', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(-1, 9).isEqual(array.with(-1, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" of list [1,2,3,4,5] at index -2', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(-2, 9).isEqual(array.with(-2, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" of list [1,2,3,4,5] at index -5', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(-5, 9).isEqual(array.with(-5, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" throws RangeError for out of bounds index', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.with(10, 9), RangeError);
      assert.throws(() => ds.with(10, 9), RangeError);
    });

    it('should check "with" throws RangeError for negative out of bounds index', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.with(-10, 9), RangeError);
      assert.throws(() => ds.with(-10, 9), RangeError);
    });

    it('should check "with" of list [1] at index 0', function () {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.with(0, 9).isEqual(array.with(0, 9)));
      assert(ds.isEqual(array));
    });

    it('should check "with" with special values', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert(ds.with(0, null).isEqual(array.with(0, null)));
      assert(ds.with(1, undefined).isEqual(array.with(1, undefined)));
      const obj = { key: "value" };
      assert(ds.with(2, obj).isEqual(array.with(2, obj)));
    });

    it('should check "with" with edge values', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert(ds.with(0, NaN).isEqual(array.with(0, NaN)));
      assert(ds.with(1, Infinity).isEqual(array.with(1, Infinity)));
      assert(ds.with(2, -0).isEqual(array.with(2, -0)));
      assert(ds.with(3, "string").isEqual(array.with(3, "string")));
      assert(ds.with(4, true).isEqual(array.with(4, true)));
    });

    it('should check "with" returns new list without modifying original', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      const result = ds.with(2, 9);
      assert(ds.isEqual([1, 2, 3, 4, 5]));
      assert(result.isEqual([1, 2, 9, 4, 5]));
    });
  });
}

export { testWith };
