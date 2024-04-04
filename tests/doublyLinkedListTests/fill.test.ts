import { strict as assert } from 'assert';

function testFill(dsClass) {
  describe(dsClass.name + ' Base: Test the "fill" method', function() {
    it('should check "fill" with "4" on list []', function() {
      const array = [];
      const value = 4;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "4" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = 4;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "null" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = null;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "undefined" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = undefined;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "NaN" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = NaN;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "{}" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = {};
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "Infinity" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = Infinity;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "-0" on list [1,2,3]', function() {
      const array = [1, 2, 3];
      const value = -0;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value).isEqual(array.fill(value)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=2', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 2;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=2 to end=4', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 2;
      const end = 4;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=10', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 2;
      const end = 10;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=-2', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = -2;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=1 to end=-1', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 1;
      const end = -1;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=null', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = null;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=undefined', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = undefined;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=NaN', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = NaN;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=Infinity', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = Infinity;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=-0', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = -0;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start={}', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = {};
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=null', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = null;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=undefined', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = undefined;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=NaN', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = NaN;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=Infinity', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = Infinity;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=-0', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = -0;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end={}', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = {};
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=4 to end=2', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 4;
      const end = 2;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=2.5', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 2.5;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=4.5', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = 4.5;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=-2', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = -2;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start).isEqual(array.fill(value, start)));
    });

    it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=-2', function() {
      const array = [1, 2, 3, 4, 5];
      const value = 6;
      const start = 0;
      const end = -2;
      const ds = new dsClass(false,array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
    });
  });
}

export { testFill };