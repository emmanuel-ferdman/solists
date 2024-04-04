import { strict as assert } from 'assert';

function testConstructor(dsClass) {
  describe(dsClass.name + ' Base: Test the "constructor"', function() {
    it('should check "constructor" without array input', function() {
      const ds = new dsClass(false);
      assert.equal(ds.length, 0);
      assert(ds.isEqual([]));
    });

    it('should check "constructor" from []', function() {
      const array = [];
      const ds = new dsClass(false, array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
    });

    it('should check "constructor" from [1,2,3]', function() {
      const array = [1, 2, 3];
      const ds = new dsClass(false, array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
    });

    it('should check "constructor" from null', function() {
      const array = null;
      const ds = new dsClass(false, array);
      assert.equal(ds.length, 0);
      assert(ds.isEqual([]));
    });

    it('should check "constructor" from undefined', function() {
      const array = undefined;
      const ds = new dsClass(false, array);
      assert.equal(ds.length, 0);
      assert(ds.isEqual([]));
    });

    it('should check "constructor" from non iterable "1"', function() {
      const input = 1;
      assert.throws(() => new dsClass(false, input), TypeError('The value should be iterable'));
    });

    it('should check "constructor" from non iterable "NaN"', function() {
      const input = NaN;
      assert.throws(() => new dsClass(false, input), TypeError('The value should be iterable'));
    });
  });
}
	
export { testConstructor };