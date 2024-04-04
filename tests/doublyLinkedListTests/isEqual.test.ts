import { strict as assert } from 'assert';

function testIsEqual(dsClass) {
  describe(dsClass.name + ' Base: Test the "isEqual" method', function() {
    it('should check "isEqual" of DS([])==[]', function() {
      const array = [];
      const ds = new dsClass(false);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([1])==[1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(!(ds.isEqual([2])));
      assert(!(ds.isEqual([1,2])));
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([1,2,3])==[1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of DS([null,undefined,NaN,{},Infinity,"string",-0,1.5,true])==[null,undefined,NaN,{},Infinity,"string",-0,1.5,true]', function() {
      const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
    });

    it('should check "isEqual" of non iterable object "1"', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert.throws(() => ds.isEqual(1),TypeError('The value should be iterable'));
    });

    it('should check "isEqual" of non iterable object "{}"', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert.throws(() => ds.isEqual({}),TypeError('The value should be iterable'));
    });
  });
}

export { testIsEqual };