import { strict as assert } from "assert";

function testFlatMap(dsClass) {
  describe(dsClass.name + ' Base: Test the "flatMap" method', function () {
    it('should check "flatMap" of list [] with func v => v', function () {
      const arrayIn = [];
      const arrayDs = [];
      const func = (v) => v;
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.isEqual(expected));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" of list [1,2,DS([3]),DS([4,5]),6,DS([])] with func v => v', function () {
      const arrayIn = [1, 2, [3], [4, 5], 6, []];
      const arrayDs = [1, 2, new dsClass([3]), new dsClass([4, 5]), 6, new dsClass([])];
      const func = (v) => v;
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.isEqual(expected));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" of list [1,2,3,4] with func v => [v,v*2]', function () {
      const arrayIn = [1, 2, 3, 4];
      const arrayDs = [1, 2, 3, 4];
      const func = (v) => [v, v * 2];
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.isEqual(expected));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" of list [1,2,3,4] with func v => [v*2]', function () {
      const arrayIn = [1, 2, 3, 4];
      const arrayDs = [1, 2, 3, 4];
      const func = (v) => [v * 2];
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.isEqual(expected));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" of list [DS([DS([DS([1])])])] with func v => v', function () {
      const arrayIn = [[[[1]]]];
      const arrayDs = [new dsClass([new dsClass([new dsClass([1])])])];
      const func = (v) => v;
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.slice().at(0).at(0).isEqual(expected.at(0).at(0)));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" of list [1,[2,3]] with func () => 100', function () {
      const arrayIn = [1, [2, 3]];
      const arrayDs = [1, [2, 3]];
      const func = () => 100;
      const expected = arrayIn.flatMap(func);
      const ds = new dsClass(arrayDs);
      assert.equal(ds.length, arrayDs.length);
      const result = ds.flatMap(func);
      assert.equal(result.length, expected.length);
      assert(result.isEqual(expected));
      assert(ds.isEqual(arrayDs));
    });

    it('should check "flatMap" with assertion inside the function', function () {
      const array = [1];
      const ds = new dsClass(array);
      const func = function (value, index, that) {
        assert.equal(arguments.length, 3);
        assert.equal(value, 1);
        assert.equal(index, 0);
        assert(ds.isEqual(that));
      };
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.flatMap(func).isEqual(array.flatMap(func)));
    });

    it('should check "flatMap" with thisArg', function () {
      const array = [1, 2, 3];
      const thisArg = { multiplier: 2 };
      const func = function (v) {
        return [v, v * this.multiplier];
      };
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.flatMap(func, thisArg).isEqual(array.flatMap(func, thisArg)));
    });

    it('should check "flatMap" with thisArg as undefined', function () {
      const array = [1, 2, 3];
      const func = function (v) {
        return this === undefined ? [v, v] : [v];
      };
      const ds = new dsClass(array);
      assert(ds.flatMap(func, undefined).isEqual(array.flatMap(func, undefined)));
    });

    it('should check "flatMap" with thisArg modifying state', function () {
      const array = [1, 2, 3];
      const thisArg = { count: 0 };
      const func = function (v) {
        this.count += 1;
        return [v];
      };
      const thisArg2 = { count: 0 };
      const ds = new dsClass(array);
      ds.flatMap(func, thisArg);
      array.flatMap(func, thisArg2);
      assert.equal(thisArg.count, thisArg2.count);
    });

    it('should check "flatMap" throws TypeError for undefined callback', function () {
      const func = undefined;
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.flatMap(func), TypeError("undefined is not a function"));
      assert.throws(() => ds.flatMap(func), TypeError("undefined is not a function"));
    });

    it('should check "flatMap" throws TypeError for null callback', function () {
      const func = null;
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.flatMap(func), TypeError("object null is not a function"));
      assert.throws(() => ds.flatMap(func), TypeError("object null is not a function"));
    });
  });
}

export { testFlatMap };
