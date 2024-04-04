import { strict as assert } from 'assert';

function testIsEmpty(dsClass) {
  describe(dsClass.name + ' Base: Test the "isEmpty" method', function() {
    it('should return true to a list that was created with no arguments', function() {
      const ds = new dsClass(false);
      assert(ds.length === 0);
      assert(ds.isEmpty());
    });

    it('should return true to a list that was created from an empty array', function() {
      const array = [];
      const ds = new dsClass(false, array);
      assert.equal(ds.length, array.length);
      assert(ds.isEmpty());
    });

    it('should return true to a list that was created from an array with one element', function() {
      const array = [1];
      const ds = new dsClass(false, array);
      assert.equal(ds.length, array.length);
      assert(!(ds.isEmpty()));
    });

    it('should return true to a list that was created from an array with three elements', function() {
      const array = [1, 2, 3];
      const ds = new dsClass(false, array);
      assert.equal(ds.length, array.length);
      assert(!(ds.isEmpty()));
    });
  });
}

export { testIsEmpty };