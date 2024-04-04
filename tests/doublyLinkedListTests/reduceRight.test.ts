import { strict as assert } from 'assert';

function testReduceRight(dsClass) {
  describe(dsClass.name + ' Base: Test the "reduceRight" method', function() {
    it('should check "reduceRight" of sum values of list []', function() {
      const array = [];
      const func = (acc, v) => acc + v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError('Reduce of empty array with no initial value'));
      assert.throws(() => ds.reduceRight(func),TypeError('Reduce of empty list with no initial value'));
    });

    it('should check "reduceRight" of sum values of list [1]', function() {
      const array = [1];
      const func = (acc, v) => acc + v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of sum values of list [1,2,null,4,5]', function() {
      const array = [1,2,null,4,5];
      const func = (acc, v) => acc + v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of sum values of list [1,2,undefined,4,5]', function() {
      const array = [1,2,undefined,4,5];
      const func = (acc, v) => acc + v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of sum values of list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = (acc, v) => acc + v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30]', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of last value of list [-10,20,100,0,30]', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => v;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func),(array.reduceRight(func)));
    });

    it('should check "reduceRight" of "null" function on list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError(func + ' is not a function'));
      assert.throws(() => ds.reduceRight(func),TypeError(func + ' is not a function'));
    });

    it('should check "reduceRight" of "undefined" function on list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError(func + ' is not a function'));
      assert.throws(() => ds.reduceRight(func),TypeError(func + ' is not a function'));
    });

    it('should check "reduceRight" of "NaN" function on list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError(func + ' is not a function'));
      assert.throws(() => ds.reduceRight(func),TypeError(func + ' is not a function'));
    });

    it('should check "reduceRight" of "Infinity" function on list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError(func + ' is not a function'));
      assert.throws(() => ds.reduceRight(func),TypeError(func + ' is not a function'));
    });

    it('should check "reduceRight" of "-0" function on list [1,2,3,4,5]', function() {
      const array = [1,2,3,4,5];
      const func = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => array.reduceRight(func),TypeError(func + ' is not a function'));
      assert.throws(() => ds.reduceRight(func),TypeError(func + ' is not a function'));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "200"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = 200;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [] from initial value "200"', function() {
      const array = [];
      const func = (acc, v) => Math.max(acc, v);
      const initial = 200;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "null"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "undefined"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "NaN"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = NaN;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "Infinity"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = Infinity;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "-0"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = -0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });

    it('should check "reduceRight" of max value of list [-10,20,100,0,30] from initial value "{}"', function() {
      const array = [-10,20,100,0,30];
      const func = (acc, v) => Math.max(acc, v);
      const initial = {};
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.reduceRight(func,initial),(array.reduceRight(func,initial)));
    });
  });
}

export { testReduceRight };