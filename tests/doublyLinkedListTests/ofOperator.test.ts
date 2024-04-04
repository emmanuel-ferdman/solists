import { strict as assert } from 'assert';

function testOfOperator(dsClass) {
  describe(dsClass.name + ' Base: Test the "ofOperator" method', function() {
    it('should check "ofOperator" on []', function() {
      const array = [];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value,array[counter]);
        counter += 1;
      }
      assert.equal(counter,array.length);
    });

    it('should check "ofOperator" on [1]', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value,array[counter]);
        counter += 1;
      }
      assert.equal(counter,array.length);
    });

    it('should check "ofOperator" on [1,2,3]', function() {
      const array = [1,2,3];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value,array[counter]);
        counter += 1;
      }
      assert.equal(counter,array.length);
    });

    it('should check "ofOperator" on [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
      const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      let counter = 0;
      for (const value of ds) {
        assert.equal(value,array[counter]);
        counter += 1;
      }
      assert.equal(counter,array.length);
    });
  });
}

export { testOfOperator };