import { strict as assert } from 'assert';

const doublyLinkedListTest = {

  /** Tests for constructor **/

  testConstructor: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "constructor"', function() {
      it('should check "constructor" without array input', function() {
        const ds = new dsClass(false);
        assert.equal(ds.length,0);
        assert(ds.isEqual([]));
      });

      it('should check "constructor" from []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
      });

      it('should check "constructor" from [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
      });

      it('should check "constructor" from null', function() {
        const array = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,0);
        assert(ds.isEqual([]));
      });

      it('should check "constructor" from undefined', function() {
        const array = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,0);
        assert(ds.isEqual([]));
      });

      it('should check "constructor" from non iterable "1"', function() {
        const input = 1;
        assert.throws(() => new dsClass(false,input),TypeError('The value should be iterable'));
      });

      it('should check "constructor" from non iterable "NaN"', function() {
        const input = NaN;
        assert.throws(() => new dsClass(false,input),TypeError('The value should be iterable'));
      });
    });
  },

  /** Tests for public Array-like mehtods **/

  /** Test "at" method" **/

  testAt: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "at" method', function() {
      it('should check "at" of index 0 in list []', function() {
        const array = [];
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index 1 in list []', function() {
        const array = [];
        const index = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index 2 in list [1,2,3]', function() {
        const array = [1,2,3];
        const index = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index 4 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index 5 in list [0,1,2,3,4,5]', function() {
        const array = [0,5,2,3,4,5];
        const index = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index 10 in list [0,1,2,3,4,5]', function() {
        const array = [0,5,2,3,4,5];
        const index = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index -4 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index -5 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index -10 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "undefined" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "null" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "NaN" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "Infinity" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "{}" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "-0" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "2.5" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = 2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "-2.5" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "5.5" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = 5.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });

      it('should check "at" of index "-5.5" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const index = -5.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.at(index),array.at(index));
      });
    });
  },

  /** Test "push" method" **/

  testPush: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "push" method', function() {
      it('should check "push" value 1 on []', function() {
        const array = [];
        const value = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value 2 on [1]', function() {
        const array = [];
        const value = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value 2 & 3 & 4 on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(2,3,4),array.push(2,3,4));
        assert(ds.isEqual(array));
      });

      it('should check "push" value "null" on [1]', function() {
        const array = [1];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value "undefined" on [1]', function() {
        const array = [1];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value "NaN" on [1]', function() {
        const array = [1];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value "Infinity" on [1]', function() {
        const array = [1];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });

      it('should check "push" value "{}" on [1]', function() {
        const array = [1];
        const value = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.push(value),array.push(value));
        assert(ds.isEqual(array));
      });
    });
  },

  /** Tests for public custom mehtods **/

  /** Test "isEqual" method" **/

  testIsEqual: function(dsClass) {
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
};

export { doublyLinkedListTest };
