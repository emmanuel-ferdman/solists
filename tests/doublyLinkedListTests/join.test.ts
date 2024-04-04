import { strict as assert } from 'assert';

function testJoin(dsClass) {
  describe(dsClass.name + ' Base: Test the "join" method', function() {
    it('should check "join" of list []', function() {
      const array = [];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [1,-2,3]', function() {
      const array = [1,-2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
      const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(),array.join());
    });

    it('should check "join" of list [] with separator "==="', function() {
      const array = [];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1] with separator "==="', function() {
      const array = [1];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "==="', function() {
      const array = [1,2,3];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "==="', function() {
      const array = [1,2,3];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,-2,3] with separator "==="', function() {
      const array = [1,-2,3];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")] with separator "==="', function() {
      const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
      const separator = "===";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "null"', function() {
      const array = [1,2,3];
      const separator = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "undefined"', function() {
      const array = [1,2,3];
      const separator = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "NaN"', function() {
      const array = [1,2,3];
      const separator = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "Infinity"', function() {
      const array = [1,2,3];
      const separator = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "+0"', function() {
      const array = [1,2,3];
      const separator = +0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator "-0"', function() {
      const array = [1,2,3];
      const separator = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });

    it('should check "join" of list [1,2,3] with separator ""', function() {
      const array = [1,2,3];
      const separator = "";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.join(separator),array.join(separator));
    });
  });
}

export { testJoin };