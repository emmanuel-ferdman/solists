import { strict as assert } from "node:assert";

function testReverse(dsClass) {
  describe(`${dsClass.name} Base: Test the "reverse" method`, () => {
    it('should check "reverse" of list []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.reverse().isEqual(array.reverse()));
    });

    it('should check "reverse" of list [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.reverse().isEqual(array.reverse()));
    });

    it('should check "reverse" of list [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.reverse().isEqual(array.reverse()));
    });

    it('should check "reverse" of list [1,2,3,4,5]', () => {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.reverse().isEqual(array.reverse()));
    });

    it('should check "reverse" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', () => {
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
      assert(ds.reverse().isEqual(array.reverse()));
    });

    it('should check "reverse" of list [1,2,3,4,5] twice', () => {
      const array = [1, 2, 3, 4, 5];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.reverse().reverse().isEqual(array));
    });
  });
}

export { testReverse };
