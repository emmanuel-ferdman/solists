import { strict as assert } from "assert";

function testToReversed(dsClass) {
  describe(dsClass.name + ' Base: Test the "toReversed" method', function () {
    it('should check "toReversed" of list []', function () {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().isEqual(array.toReversed()));
      assert(ds.isEqual(array));
    });

    it('should check "toReversed" of list [1]', function () {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().isEqual(array.toReversed()));
      assert(ds.isEqual(array));
    });

    it('should check "toReversed" of list [1,2,3]', function () {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().isEqual(array.toReversed()));
      assert(ds.isEqual(array));
    });

    it('should check "toReversed" of list [1,2,3,4,5]', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().isEqual(array.toReversed()));
      assert(ds.isEqual(array));
    });

    it('should check "toReversed" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function () {
      const array = [
        null,
        undefined,
        NaN,
        {},
        Infinity,
        "string",
        -0,
        1.5,
        true,
        new Date("21 Dec 1997 14:12:00 UTC"),
      ];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().isEqual(array.toReversed()));
      assert(ds.isEqual(array));
    });

    it('should check "toReversed" of list [1,2,3,4,5] twice', function () {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.toReversed().toReversed().isEqual(array.toReversed().toReversed()));
      assert(ds.isEqual(array));
    });
  });
}

export { testToReversed };
