import { strict as assert } from "node:assert";

function testSlice(dsClass) {
  describe(`${dsClass.name} Base: Test the "slice" method`, () => {
    it('should check "slice" of list []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice().isEqual(array.slice()));
    });

    it('should check "slice" of list [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice().isEqual(array.slice()));
    });

    it('should check "slice" of list [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice().isEqual(array.slice()));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=1', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=4', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 4;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=10', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=-1', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=-4', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -4;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=-10', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=1.5', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start=4.5', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 4.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="null"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = null;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="undefined"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = undefined;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="NaN"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = NaN;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="Infinity"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = Infinity;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="-0"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="{}"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = {};
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start).isEqual(array.slice(start)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="3"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = 3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="3" to end="1"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 3;
      const end = 1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-1"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = -1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-4"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = -4;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-10"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = -10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="2.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = 2.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="4.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = 4.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="null"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = null;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="undefined"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = undefined;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="NaN"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = NaN;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="Infinity"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = Infinity;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-0"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = -0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });

    it('should check "slice" of list [1,2,3,4,5] from start="1" to end="{}"', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const end = {};
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.slice(start, end).isEqual(array.slice(start, end)));
    });
  });
}

export { testSlice };
