import { strict as assert } from "node:assert";

function testIsEmpty(dsClass) {
  describe(`${dsClass.name} Base: Test the "isEmpty" method`, () => {
    it("should return true to a list that was created with no arguments", () => {
      const ds = new dsClass();
      assert(ds.length === 0);
      assert(ds.isEmpty());
    });

    it("should return true to a list that was created from an empty array", () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEmpty());
    });

    it("should return false to a list that was created from an array with one element", () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(!ds.isEmpty());
    });

    it("should return false to a list that was created from an array with three elements", () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(!ds.isEmpty());
    });
  });
}

export { testIsEmpty };
