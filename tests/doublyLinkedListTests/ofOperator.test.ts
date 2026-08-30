import { strict as assert } from "node:assert";

function testOfOperator(dsClass) {
  describe(`${dsClass.name} Base: Test the "[Symbol.iterator]" method`, () => {
    it('should check "[Symbol.iterator]" on []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value, array[counter]);
        counter += 1;
      }
      assert.equal(counter, array.length);
    });

    it('should check "[Symbol.iterator]" on [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value, array[counter]);
        counter += 1;
      }
      assert.equal(counter, array.length);
    });

    it('should check "[Symbol.iterator]" on [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value, array[counter]);
        counter += 1;
      }
      assert.equal(counter, array.length);
    });

    it('should check "[Symbol.iterator]" on [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', () => {
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
      let counter = 0;
      for (const value of ds) {
        assert.equal(value, array[counter]);
        counter += 1;
      }
      assert.equal(counter, array.length);
    });
  });
}

export { testOfOperator };
