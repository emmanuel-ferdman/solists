import { strict as assert } from 'assert';

function testFindIndex(dsClass) {
  describe(dsClass.name + ' Base: Test the "findIndex" method', function() {
    it('should check "findIndex" of negative value in list []', function() {
      const array = [];
      const func = (v) => v < 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value in list [1,2,3]', function() {
      const array = [1,2,3];
      const func = (v) => v < 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value in list [1,-2,3]', function() {
      const array = [1,-2,3];
      const func = (v) => v < 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value in list [0,-1,2,3,-4,5]', function() {
      const array = [0,-1,2,3,-4,5];
      const func = (v) => v < 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value in list [0,-4,2,3,-4,5]', function() {
      const array = [0,-4,2,3,-4,5];
      const func = (v) => v < 0;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of value "null" in list [0,null,2,3,4,5]', function() {
      const array = [0,null,2,3,4,5];
      const func = (v) => v === null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
      const array = [0,undefined,2,3,4,5];
      const func = (v) => v === undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
      const array = [0,NaN,2,3,4,5];
      const func = (v) => isNaN(v);
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
      const array = [0,{value:1},2,3,{value:4},5];
      const func = (v) => typeof v === 'object' && v !== null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" with "null" function', function() {
      const array = [0,1,2,3,4,5];
      const func = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => ds.findIndex(func),TypeError('callbackFn is not a function'));
    });

    it('should check "findIndex" with "undefined" function', function() {
      const array = [0,1,2,3,4,5];
      const func = undefined;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.throws(() => ds.findIndex(func),TypeError('callbackFn is not a function'));
    });

    it('should check "findIndex" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
      const array = [0,-4,2,3,-4,5];
      const func = (v,i) => v < 0 && i > 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
      const array = [0,-4,2,3,-4,5];
      const func = (v,i) => v < 0 && i > 4;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
      const array = [0,-4,2,3,-4,5];
      const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });

    it('should check "findIndex" with upading a variable by appending (value,index)', function() {
      const array = [0,1,-2,3,-4,-5];
      let result1 = '';
      let result2 = '';
      const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
      const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func1),array.findIndex(func2));
      assert.equal(result1,result2);
    });

    it('should check "findIndex" with assertion inside the function', function() {
      const array = [1];
      const ds = new dsClass(false,array);
      const func = (function(value,index,that) {
        assert.equal(arguments.length,3);
        assert.equal(value,1);
        assert.equal(index,0);
        assert(ds.isEqual(that));
      });
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));
      assert.equal(ds.findIndex(func),array.findIndex(func));
    });
  });
}

export { testFindIndex };