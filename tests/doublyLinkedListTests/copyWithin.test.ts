import { strict as assert } from "node:assert";

function testCopyWithin(dsClass) {
  describe(`${dsClass.name} Base: Test the "copyWithin" method`, () => {
    it('should check "copyWithin" with target "0" on list []', () => {
      const array = [];
      const target = 0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "0" on list [1]', () => {
      const array = [1];
      const target = 0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3]', () => {
      const array = [1, 2, 3];
      const target = 0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3]', () => {
      const array = [1, 2, 3];
      const target = 1;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "2" on list [1,2,3]', () => {
      const array = [1, 2, 3];
      const target = 2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-1" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -1;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-2" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "10" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-10" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "null" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = null;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "undefined" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = undefined;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "NaN" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = NaN;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "Infinity" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = Infinity;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "{}" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = {};
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-0" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "0.5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "2.5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 2.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "5.5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 5.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "-2.5" on list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const target = -2.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "2"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "10"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-2"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = -2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = -5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-10"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = -10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "4" on list [1,2,3,4,5] from start "1"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 4;
      const start = 1;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "1"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 1;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "2.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 2.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "5.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = 5.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "null"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = null;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "undefined"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = undefined;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "NaN"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = NaN;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "Infinity"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = Infinity;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-0"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = -0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "{}"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 1;
      const start = {};
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start).isEqual(array.copyWithin(target, start)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "4"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = 4;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = 5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "4.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = 4.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-4.5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -4.5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "10"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = 10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-2"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-4"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -4;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-5"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -5;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-10"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -10;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "4" end "2"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 4;
      const end = 2;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "null"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = null;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "undefined"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = undefined;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "NaN"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = NaN;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "Infinity"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = Infinity;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-0"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = -0;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "{}"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = 2;
      const end = {};
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "null" end "null"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = null;
      const end = null;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });

    it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "undefined" end "undefined"', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 0;
      const start = undefined;
      const end = undefined;
      const ds = new dsClass(array);
      assert(ds.length === array.length);
      assert(ds.isEqual(array));
      assert(ds.copyWithin(target, start, end).isEqual(array.copyWithin(target, start, end)));
    });
  });
}

export { testCopyWithin };
