import { strict as assert } from "node:assert";

function testJoin(dsClass) {
  describe(`${dsClass.name} Base: Test the "join" method`, () => {
    it('should check "join" of list []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(), array.join());
    });

    it('should check "join" of list [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(), array.join());
    });

    it('should check "join" of list [1,2,3]', () => {
      const array = [1, 2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(), array.join());
    });

    it('should check "join" of list [1,-2,3]', () => {
      const array = [1, -2, 3];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(), array.join());
    });

    it('should check "join" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', () => {
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
      assert.equal(ds.join(), array.join());
    });

    it('should check "join" of list [] with separator "==="', () => {
      const array = [];
      const separator = "===";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1] with separator "==="', () => {
      const array = [1];
      const separator = "===";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "==="', () => {
      const array = [1, 2, 3];
      const separator = "===";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,-2,3] with separator "==="', () => {
      const array = [1, -2, 3];
      const separator = "===";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")] with separator "==="', () => {
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
      const separator = "===";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "null"', () => {
      const array = [1, 2, 3];
      const separator = null;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "undefined"', () => {
      const array = [1, 2, 3];
      const separator = undefined;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "NaN"', () => {
      const array = [1, 2, 3];
      const separator = NaN;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "Infinity"', () => {
      const array = [1, 2, 3];
      const separator = Infinity;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "+0"', () => {
      const array = [1, 2, 3];
      const separator = +0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "-0"', () => {
      const array = [1, 2, 3];
      const separator = -0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator ""', () => {
      const array = [1, 2, 3];
      const separator = "";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator), array.join(separator));
    });
  });
}

export { testJoin };
