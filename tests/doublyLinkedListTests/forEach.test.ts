import { strict as assert } from "assert";

function testForEach(dsClass) {
  describe(dsClass.name + ' Base: Test the "forEach" method', function () {
    it('should check "forEach" to count values in list []', function () {
      const array = [];
      let result1 = 0;
      let result2 = 0;
      const func1 = (v) => (result1 += v);
      const func2 = (v) => (result2 += v);
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.forEach(func1), array.forEach(func2));
      assert.equal(result1, result2);
    });

    it('should check "forEach" to count values in list [1,2,3]', function () {
      const array = [1, 2, 3];
      let result1 = 0;
      let result2 = 0;
      const func1 = (v) => (result1 += v);
      const func2 = (v) => (result2 += v);
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.forEach(func1), array.forEach(func2));
      assert.equal(result1, result2);
    });

    it('should check "forEach" to count values in list [1,-2,3,-4,5]', function () {
      const array = [1, -2, 3, -4, 5];
      let result1 = 0;
      let result2 = 0;
      const func1 = (v) => (result1 += v);
      const func2 = (v) => (result2 += v);
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.forEach(func1), array.forEach(func2));
      assert.equal(result1, result2);
    });

    it('should check "forEach" to append (value,index) in list [1,2,3,4,5]', function () {
      const array = [1, 2, 3, 4, 5];
      let result1 = "";
      let result2 = "";
      const func1 = (v, i) => (result1 += "(" + v + "," + i + ")");
      const func2 = (v, i) => (result2 += "(" + v + "," + i + ")");
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.forEach(func1), array.forEach(func2));
      assert.equal(result1, result2);
    });

    it('should check "forEach" with assertion inside the function', function () {
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
      assert.equal(ds.forEach(func), array.forEach(func));
    });

    it('should check "forEach" with thisArg', function () {
      const array = [1, 2, 3];
      const func = function (v) {
        this.sum += v;
      };
      const thisArg1 = { sum: 0 };
      const thisArg2 = { sum: 0 };
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      ds.forEach(func, thisArg1);
      array.forEach(func, thisArg2);
      assert.equal(thisArg1.sum, thisArg2.sum);
    });

    it('should check "forEach" with thisArg as undefined', function () {
      const array = [1, 2, 3];
      let dsResult = true;
      let arrResult = true;
      const func = function () {
        if (this !== undefined) {
          dsResult = false;
          arrResult = false;
        }
      };
      const ds = new dsClass(array);
      ds.forEach(func, undefined);
      array.forEach(func, undefined);
      assert.equal(dsResult, arrResult);
    });

    it('should check "forEach" with thisArg collecting indices', function () {
      const array = [10, 20, 30];
      const thisArg1 = { indices: [] };
      const thisArg2 = { indices: [] };
      const func = function (v, i) {
        this.indices.push(i);
      };
      const ds = new dsClass(array);
      ds.forEach(func, thisArg1);
      array.forEach(func, thisArg2);
      assert.deepEqual(thisArg1.indices, thisArg2.indices);
    });
  });
}

export { testForEach };
