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

  /** Test "concat" method" **/

  testConcat: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "concat" method', function() {
      it('should check "concat" from DS([]) & DS([])', function() {
        const array1 = [];
        const array2 = [];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1]) & DS([2])', function() {
        const array1 = [1];
        const array2 = [2];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & DS([5,4,3])', function() {
        const array1 = [1,2];
        const array2 = [5,4,3];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & DS(["null"])', function() {
        const array1 = [1,2];
        const array2 = [null];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & DS(["undefined"])', function() {
        const array1 = [1,2];
        const array2 = [undefined];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & DS(["NaN"])', function() {
        const array1 = [1,2];
        const array2 = [NaN];
        const array3 = array1.concat(array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & 3 & DS([3])', function() {
        const array1 = [1,2];
        const array2 = [3];
        const array3 = array1.concat(3,array2);
        const ds1 = new dsClass(false,array1);
        const ds2 = new dsClass(false,array2);
        const ds3 = ds1.concat(3,ds2);
        assert.equal(ds3.length,array3.length);
        assert(ds3.isEqual(array3));
      });

      it('should check "concat" from DS([1,2]) & 3 & 4 & 5', function() {
        const array1 = [1,2];
        const array2 = array1.concat(3,4,5);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat(3,4,5);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & [3,4,5]', function() {
        const array1 = [1,2];
        const array2 = array1.concat([3,4,5]);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat([3,4,5]);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & "null"', function() {
        const array1 = [1,2];
        const array2 = array1.concat(null);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat(null);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & "undefined"', function() {
        const array1 = [1,2];
        const array2 = array1.concat(undefined);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat(undefined);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & "NaN"', function() {
        const array1 = [1,2];
        const array2 = array1.concat(NaN);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat(NaN);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & [1,2]', function() {
        const array1 = [1,2];
        const array2 = array1.concat([1,2]);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat([1,2]);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & [3,4,5,4,3]', function() {
        const array1 = [1,2];
        const array2 = array1.concat([3,4,5,4,3]);
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat([3,4,5,4,3]);
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });

      it('should check "concat" from DS([1,2]) & "string"', function() {
        const array1 = [1,2];
        const array2 = array1.concat("string");
        const ds1 = new dsClass(false,array1);
        const ds2 = ds1.concat("string");
        assert.equal(ds2.length,array2.length);
        assert(ds2.isEqual(array2));
      });
    });
  },

  /** Test "copyWithin" method" **/

  testCopyWithin: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "copyWithin" method', function() {
      it('should check "copyWithin" with target "0" on list []', function() {
        const array = [];
        const target = 0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "0" on list [1]', function() {
        const array = [1];
        const target = 0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3]', function() {
        const array = [1,2,3];
        const target = 0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3]', function() {
        const array = [1,2,3];
        const target = 1;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "2" on list [1,2,3]', function() {
        const array = [1,2,3];
        const target = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-1" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -1;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-2" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = 5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "10" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = 10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-10" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "null" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "undefined" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "NaN" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "Infinity" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "{}" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-0" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "0.5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = 0.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "2.5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = 2.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "5.5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = 5.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "-2.5" on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const target = -2.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target).isEqual(array.copyWithin(target)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "2"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "5"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "10"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-2"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-5"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = -5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-10"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = -10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "4" on list [1,2,3,4,5] from start "1"', function() {
        const array = [1,2,3,4,5];
        const target = 4;
        const start = 1;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "1"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 1;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "2.5"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 2.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "5.5"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = 5.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "null"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "undefined"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "NaN"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "Infinity"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "-0"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "1" on list [1,2,3,4,5] from start "{}"', function() {
        const array = [1,2,3,4,5];
        const target = 1;
        const start = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start).isEqual(array.copyWithin(target,start)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "4"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = 4;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "5"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = 5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "4.5"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = 4.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-4.5"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -4.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "10"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = 10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-2"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-4"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -4;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-5"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-10"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "4" end "2"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 4;
        const end = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "null"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "undefined"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "NaN"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "Infinity"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "-0"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "2" end "{}"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = 2;
        const end = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "null" end "null"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = null;
        const end = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });

      it('should check "copyWithin" with target "0" on list [1,2,3,4,5] from start "undefined" end "undefined"', function() {
        const array = [1,2,3,4,5];
        const target = 0;
        const start = undefined;
        const end = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.copyWithin(target,start,end).isEqual(array.copyWithin(target,start,end)));
      });
    });
  },

  /** Test "entries" method" **/

  testEntries: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "entries" method', function() {
      it('should check "entries" on []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.entries();
        const dsIter = ds.entries();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue[0],dsValue[0]); // index check
          assert.equal(arrayValue[1],dsValue[1]); // value check
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "entries" on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.entries();
        const dsIter = ds.entries();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue[0],dsValue[0]); // index check
          assert.equal(arrayValue[1],dsValue[1]); // value check
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "entries" on [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.entries();
        const dsIter = ds.entries();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue[0],dsValue[0]); // index check
          assert.equal(arrayValue[1],dsValue[1]); // value check
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "entries" on [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.entries();
        const dsIter = ds.entries();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue[0],dsValue[0]); // index check
          assert.equal(arrayValue[1],dsValue[1]); // value check
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });
    });
  },

  /** Test "every" method" **/

  testEvery: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "every" method', function() {
      it('should check "every" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of value "null" in list [null,null,null]', function() {
        const array = [null,null,null];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of value "undefined" in list [undefined,undefined,undefined]', function() {
        const array = [undefined,undefined,undefined];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of value "NaN" in list [NaN,NaN,NaN]', function() {
        const array = [NaN,NaN,NaN];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of value "object" in list [{value:1},{value:2},{value:3}]', function() {
        const array = [{value:1},{value:2},{value:3}];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.every(func),TypeError('callbackFn is not a function'));
      });

      it('should check "every" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.every(func),TypeError('callbackFn is not a function'));
      });

      it('should check "every" of negative value and index bigger than 2 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value and index bigger than 4 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" of negative value and index bigger than 2 and list length equal 2 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func),array.every(func));
      });

      it('should check "every" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.every(func1),array.every(func2));
        assert.equal(result1,result2);
      });

      it('should check "every" with assertion inside the function', function() {
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
        assert.equal(ds.every(func),array.every(func));
      });
    });
  },

  /** Test "fill" method" **/

  testFill: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "fill" method', function() {
      it('should check "fill" with "4" on list []', function() {
        const array = [];
        const value = 4;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "4" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = 4;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "null" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "undefined" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "NaN" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "{}" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "Infinity" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "-0" on list [1,2,3]', function() {
        const array = [1, 2, 3];
        const value = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value).isEqual(array.fill(value)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=2', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=2 to end=4', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 2;
        const end = 4;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=10', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 2;
        const end = 10;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=-2', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=1 to end=-1', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 1;
        const end = -1;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=null', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=undefined', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=NaN', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=Infinity', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=-0', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start={}', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=null', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = null;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=undefined', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = undefined;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=NaN', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = NaN;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=Infinity', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = Infinity;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=-0', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = -0;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end={}', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = {};
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=4 to end=2', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 4;
        const end = 2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=2.5', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 2.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=4.5', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = 4.5;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=-2', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start).isEqual(array.fill(value, start)));
      });

      it('should check "fill" with "6" on list [1,2,3,4,5] from start=0 to end=-2', function() {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const start = 0;
        const end = -2;
        const ds = new dsClass(false,array);
        assert(ds.length === array.length);
        assert(ds.isEqual(array));
        assert(ds.fill(value, start, end).isEqual(array.fill(value, start, end)));
      });
    });
  },

  /** Test "filter" method" **/

  testFilter: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "filter" method', function() {
      it('should check "filter" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of value "null" in list [0,null,2,3,4,5]', function() {
        const array = [0,null,2,3,4,5];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
        const array = [0,undefined,2,3,4,5];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
        const array = [0,NaN,2,3,4,5];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
        const array = [0,{value:1},2,3,{value:4},5];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.filter(func),TypeError('callbackFn is not a function'));
      });

      it('should check "filter" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.filter(func),TypeError('callbackFn is not a function'));
      });

      it('should check "filter" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func).isEqual(array.filter(func)));
      });

      it('should check "filter" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.filter(func1).isEqual(array.filter(func2)));
        assert.equal(result1,result2);
      });

      it('should check "filter" with assertion inside the function', function() {
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
        assert(ds.filter(func).isEqual(array.filter(func)));
      });
    });
  },

  /** Test "find" method" **/

  testFind: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "find" method', function() {
      it('should check "find" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of value "null" in list [0,null,2,3,4,5]', function() {
        const array = [0,null,2,3,4,5];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
        const array = [0,undefined,2,3,4,5];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
        const array = [0,NaN,2,3,4,5];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
        const array = [0,{value:1},2,3,{value:4},5];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.find(func),TypeError('callbackFn is not a function'));
      });

      it('should check "find" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.find(func),TypeError('callbackFn is not a function'));
      });

      it('should check "find" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func),array.find(func));
      });

      it('should check "find" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.find(func1),array.find(func2));
        assert.equal(result1,result2);
      });

      it('should check "find" with assertion inside the function', function() {
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
        assert.equal(ds.find(func),array.find(func));
      });
    });
  },

  /** Test "findIndex" method" **/

  testFindIndex: function(dsClass) {
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
  },

  /** Test "findLast" method" **/

  testFindLast: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "findLast" method', function() {
      it('should check "findLast" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of value "null" in list [0,null,2,3,4,5]', function() {
        const array = [0,null,2,3,4,5];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
        const array = [0,undefined,2,3,4,5];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
        const array = [0,NaN,2,3,4,5];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
        const array = [0,{value:1},2,3,{value:4},5];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.findLast(func),TypeError('callbackFn is not a function'));
      });

      it('should check "findLast" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.findLast(func),TypeError('callbackFn is not a function'));
      });

      it('should check "findLast" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func),array.findLast(func));
      });

      it('should check "findLast" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLast(func1),array.findLast(func2));
        assert.equal(result1,result2);
      });

      it('should check "findLast" with assertion inside the function', function() {
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
        assert.equal(ds.findLast(func),array.findLast(func));
      });
    });
  },

  /** Test "findLastIndex" method" **/

  testFindLastIndex: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "findLastIndex" method', function() {
      it('should check "findLastIndex" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of value "null" in list [0,null,2,3,4,5]', function() {
        const array = [0,null,2,3,4,5];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
        const array = [0,undefined,2,3,4,5];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
        const array = [0,NaN,2,3,4,5];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
        const array = [0,{value:1},2,3,{value:4},5];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.findLastIndex(func),TypeError('callbackFn is not a function'));
      });

      it('should check "findLastIndex" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.findLastIndex(func),TypeError('callbackFn is not a function'));
      });

      it('should check "findLastIndex" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func),array.findLastIndex(func));
      });

      it('should check "findLastIndex" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.findLastIndex(func1),array.findLastIndex(func2));
        assert.equal(result1,result2);
      });

      it('should check "findLast" with assertion inside the function', function() {
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
        assert.equal(ds.findLast(func),array.findLast(func));
      });
    });
  },

  /** Test "flat" method" **/

  testFlat: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "flat" method', function() {
      it('should check "flat" of list []', function() {
        const arrayIn = [];
        const arrayDs = [];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        assert(ds.flat().isEqual(expected));
      });

      it('should check "flat" of list [1]', function() {
        const arrayIn = [1];
        const arrayDs = [1];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        assert(ds.flat().isEqual(expected));
      });

      it('should check "flat" of list [1,2,3,4,5]', function() {
        const arrayIn = [1,2,3,4,5];
        const arrayDs = [1,2,3,4,5];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        assert(ds.flat().isEqual(expected));
      });

      it('should check "flat" of list [1,2,DS([3,4]),5]', function() {
        const arrayIn = [1,2,[3,4],5];
        const arrayDs = [1,2,new dsClass(false,[3,4]),5];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        assert(ds.flat().isEqual(expected));
      });

      it('should check "flat" of list [DS([1]),2,DS([3,4]),5]', function() {
        const arrayIn = [[1],2,[3,4],5];
        const arrayDs = [new dsClass(false,[1]),2,new dsClass(false,[3,4]),5];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        assert(ds.flat().isEqual(expected));
      });

      it('should check "flat" of list [DS([DS([DS([1])])])]', function() {
        const arrayIn = [[[[1]]]];
        const arrayDs = [new dsClass(false,[new dsClass(false,[new dsClass(false,[1])])])];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat();
        assert.equal(result.length,expected.length);
        assert(result.slice().at(0).at(0).isEqual(expected.at(0).at(0)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])]', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const expected = arrayIn.flat();
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat();
        assert.equal(result.length,expected.length);
        assert(result.slice(0,3).isEqual(expected.slice(0,3)));
        assert(result.slice().at(3).isEqual(expected.at(3)));
        assert(result.slice(4).isEqual(expected.slice(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=0', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = 0;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).slice().at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).slice().isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=2', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = 2;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=-2', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = -2;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=null', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = null;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=undefined', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = undefined;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,3).isEqual(expected.slice(0,3)));
        assert(result.slice().at(3).isEqual(expected.at(3)));
        assert(result.slice(4).isEqual(expected.slice(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=NaN', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = NaN;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=Infinity', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = 2;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=-Infinity', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = -Infinity;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=-0', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = -0;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth={}', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = {};
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=true', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = true;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,3).isEqual(expected.slice(0,3)));
        assert(result.slice().at(3).isEqual(expected.at(3)));
        assert(result.slice(4).isEqual(expected.slice(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=false', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = false;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice(0,2).isEqual(expected.slice(0,2)));
        assert.equal(result.slice().at(2).at(0),expected.at(2).at(0));
        assert(result.slice().at(2).at(1).isEqual(expected.at(2).at(1)));
        assert.equal(result.slice().at(3),expected.at(3));
        assert(result.slice().at(4).isEqual(expected.at(4)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [1,2,DS([3,DS([4,5])]),6,DS([7,8])] with depth=2.5', function() {
        const arrayIn = [1,2,[3,[4,5]],6,[7,8]];
        const arrayDs = [1,2,new dsClass(false,[3,new dsClass(false,[4,5])]),6,new dsClass(false,[7,8])];
        const depth = 2.5;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [DS([DS([DS([1])])])] with depth=2', function() {
        const arrayIn = [[[[1]]]];
        const arrayDs = [new dsClass(false,[new dsClass(false,[new dsClass(false,[1])])])];
        const depth = 2;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.slice().at(0).isEqual(expected.at(0)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flat" of list [DS([DS([DS([1])])])] with depth=10', function() {
        const arrayIn = [[[[1]]]];
        const arrayDs = [new dsClass(false,[new dsClass(false,[new dsClass(false,[1])])])];
        const depth = 10;
        const expected = arrayIn.flat(depth);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flat(depth);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });
    });
  },

  /** Test "flatMap" method" **/

  testFlatMap: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "flatMap" method', function() {
      it('should check "flatMap" of list [] with func v => v', function() {
        const arrayIn = [];
        const arrayDs = [];
        const func = (v) => v;
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" of list [1,2,DS([3]),DS([4,5]),6,DS([])] with func v => v', function() {
        const arrayIn = [1,2,[3],[4,5],6,[]];
        const arrayDs = [1,2,new dsClass(false,[3]),new dsClass(false,[4,5]),6,new dsClass(false,[])];
        const func = (v) => v;
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" of list [1,2,3,4] with func v => [v,v*2]', function() {
        const arrayIn = [1,2,3,4];
        const arrayDs = [1,2,3,4];
        const func = (v) => [v,v*2];
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" of list [1,2,3,4] with func v => [v*2]', function() {
        const arrayIn = [1,2,3,4];
        const arrayDs = [1,2,3,4];
        const func = (v) => [v*2];
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" of list [DS([DS([DS([1])])])] with func v => v', function() {
        const arrayIn = [[[[1]]]];
        const arrayDs = [new dsClass(false,[new dsClass(false,[new dsClass(false,[1])])])];
        const func = (v) => v;
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.slice().at(0).at(0).isEqual(expected.at(0).at(0)));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" of list [1,[2,3]] with func () => 100', function() {
        const arrayIn = [1,[2,3]];
        const arrayDs = [1,[2,3]];
        const func = () => 100;
        const expected = arrayIn.flatMap(func);
        const ds = new dsClass(false,arrayDs);
        assert.equal(ds.length,arrayDs.length);
        const result = ds.flatMap(func);
        assert.equal(result.length,expected.length);
        assert(result.isEqual(expected));
        assert(ds.isEqual(arrayDs));
      });

      it('should check "flatMap" with assertion inside the function', function() {
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
        assert(ds.flatMap(func).isEqual(array.flatMap(func)));
      });
    });
  },

  /** Test "forEach" method" **/

  testForEach: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "forEach" method', function() {
      it('should check "forEach" to count values in list []', function() {
        const array = [];
        let result1 = 0;
        let result2 = 0;
        const func1 = (v) => result1 += v;
        const func2 = (v) => result2 += v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.forEach(func1),(array.forEach(func2)));
        assert.equal(result1,result2);
      });

      it('should check "forEach" to count values in list [1,2,3]', function() {
        const array = [1,2,3];
        let result1 = 0;
        let result2 = 0;
        const func1 = (v) => result1 += v;
        const func2 = (v) => result2 += v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.forEach(func1),(array.forEach(func2)));
        assert.equal(result1,result2);
      });

      it('should check "forEach" to count values in list [1,-2,3,-4,5]', function() {
        const array = [1,-2,3,-4,5];
        let result1 = 0;
        let result2 = 0;
        const func1 = (v) => result1 += v;
        const func2 = (v) => result2 += v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.forEach(func1),(array.forEach(func2)));
        assert.equal(result1,result2);
      });

      it('should check "forEach" to append (value,index) in list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        let result1 = "";
        let result2 = "";
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.forEach(func1),(array.forEach(func2)));
        assert.equal(result1,result2);
      });

      it('should check "forEach" with assertion inside the function', function() {
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
        assert.equal(ds.forEach(func),(array.forEach(func)));
      });
    });
  },

  /** Test "includes" method" **/

  testIncludes: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "includes" method', function() {
      it('should check "includes" of value 1 in list []', function() {
        const array = [];
        const value = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value 2 in list [1,2,3]', function() {
        const array = [1,2,3];
        const value = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value 4 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value 4 in list [0,4,2,3,4,5]', function() {
        const array = [0,4,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value 5 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 5 in list [0,5,2,3,4,5] from index 3', function() {
        const array = [0,5,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 5 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 1 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 1;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index 7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index -7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [0] from index undefined', function() {
        const array = [0];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [] from index undefined', function() {
        const array = [];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [0] from index null', function() {
        const array = [0];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 0 in list [] from index null', function() {
        const array = [];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index positive inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index negative inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index NaN', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index -0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value 2 in list [0,1,2,3,4,5] from index +0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value,index),array.includes(value,index));
      });

      it('should check "includes" of value "null" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "undefined" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "NaN" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "Infinity" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "null" in list [0,1,2,null,4,5]', function() {
        const array = [0,1,2,null,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "undefined" in list [0,1,2,undefined,4,5]', function() {
        const array = [0,1,2,undefined,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "NaN" in list [0,1,2,NaN,4,5]', function() {
        const array = [0,1,2,NaN,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "Infinity" in list [0,1,2,Infinity,4,5]', function() {
        const array = [0,1,2,Infinity,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "-0" in list [0,1,2,-0,4,5]', function() {
        const array = [0,1,2,-0,4,5];
        const value = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "+0" in list [0,1,2,+0,4,5]', function() {
        const array = [0,1,2,+0,4,5];
        const value = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });

      it('should check "includes" of value "{}" in list [0,1,2,{},4,5]', function() {
        const array = [0,1,2,{},4,5];
        const value = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.includes(value),array.includes(value));
      });
    });
  },

  /** Test "indexOf" method" **/

  testIndexOf: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "indexOf" method', function() {
      it('should check "indexOf" of value 1 in list []', function() {
        const array = [];
        const value = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value 2 in list [1,2,3]', function() {
        const array = [1,2,3];
        const value = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value 4 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value 4 in list [0,4,2,3,4,5]', function() {
        const array = [0,4,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value 5 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 5 in list [0,5,2,3,4,5] from index 3', function() {
        const array = [0,5,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 5 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 1 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 1;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index 7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index -7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [0] from index undefined', function() {
        const array = [0];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [] from index undefined', function() {
        const array = [];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [0] from index null', function() {
        const array = [0];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 0 in list [] from index null', function() {
        const array = [];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index positive inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index negative inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index NaN', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index -0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value 2 in list [0,1,2,3,4,5] from index +0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value,index),array.indexOf(value,index));
      });

      it('should check "indexOf" of value "null" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "undefined" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "NaN" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "Infinity" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "null" in list [0,1,2,null,4,5]', function() {
        const array = [0,1,2,null,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "undefined" in list [0,1,2,undefined,4,5]', function() {
        const array = [0,1,2,undefined,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "NaN" in list [0,1,2,NaN,4,5]', function() {
        const array = [0,1,2,NaN,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "Infinity" in list [0,1,2,Infinity,4,5]', function() {
        const array = [0,1,2,Infinity,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "-0" in list [0,1,2,-0,4,5]', function() {
        const array = [0,1,2,-0,4,5];
        const value = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "+0" in list [0,1,2,+0,4,5]', function() {
        const array = [0,1,2,+0,4,5];
        const value = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });

      it('should check "indexOf" of value "{}" in list [0,1,2,{},4,5]', function() {
        const array = [0,1,2,{},4,5];
        const value = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.indexOf(value),array.indexOf(value));
      });
    });
  },

  /** Test "join" method" **/

  testJoin: function(dsClass) {
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
  },

  /** Test "keys" method" **/

  testKeys: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "keys" method', function() {
      it('should check "keys" on []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.keys();
        const dsIter = ds.keys();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "keys" on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.keys();
        const dsIter = ds.keys();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "keys" on [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.keys();
        const dsIter = ds.keys();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "keys" on [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.keys();
        const dsIter = ds.keys();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });
    });
  },

  /** Test "lastIndexOf" method" **/

  testLastIndexOf: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "lastIndexOf" method', function() {
      it('should check "lastIndexOf" of value 1 in list []', function() {
        const array = [];
        const value = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value 2 in list [1,2,3]', function() {
        const array = [1,2,3];
        const value = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value 4 in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value 4 in list [0,4,2,3,4,5]', function() {
        const array = [0,4,2,3,4,5];
        const value = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value 5 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 5 in list [0,5,2,3,4,5] from index 3', function() {
        const array = [0,5,2,3,4,5];
        const value = 5;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index 3', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 5 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 5;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 1 in list [0,1,2,3,4,5] from index -2', function() {
        const array = [0,1,2,3,4,5];
        const value = 1;
        const index = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index 7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = 7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index -7', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -7;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [0,1,2,3,4,5] from index undefined', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [0] from index undefined', function() {
        const array = [0];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [] from index undefined', function() {
        const array = [];
        const value = 0;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [0,1,2,3,4,5] from index null', function() {
        const array = [0,1,2,3,4,5];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [0] from index null', function() {
        const array = [0];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 0 in list [] from index null', function() {
        const array = [];
        const value = 0;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index positive inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index negative inf', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index NaN', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index -0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value 2 in list [0,1,2,3,4,5] from index +0', function() {
        const array = [0,1,2,3,4,5];
        const value = 2;
        const index = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value,index),array.lastIndexOf(value,index));
      });

      it('should check "lastIndexOf" of value "null" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "undefined" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "NaN" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "Infinity" in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "null" in list [0,1,2,null,4,5]', function() {
        const array = [0,1,2,null,4,5];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "undefined" in list [0,1,2,undefined,4,5]', function() {
        const array = [0,1,2,undefined,4,5];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "NaN" in list [0,1,2,NaN,4,5]', function() {
        const array = [0,1,2,NaN,4,5];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "Infinity" in list [0,1,2,Infinity,4,5]', function() {
        const array = [0,1,2,Infinity,4,5];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "-0" in list [0,1,2,-0,4,5]', function() {
        const array = [0,1,2,-0,4,5];
        const value = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "+0" in list [0,1,2,+0,4,5]', function() {
        const array = [0,1,2,+0,4,5];
        const value = +0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });

      it('should check "lastIndexOf" of value "{}" in list [0,1,2,{},4,5]', function() {
        const array = [0,1,2,{},4,5];
        const value = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.lastIndexOf(value),array.lastIndexOf(value));
      });
    });
  },

  /** Test "map" method" **/

  testMap: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "map" method', function() {
      it('should check "map" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of value "null" in list [0,null,2,3,4,5]', function() {
        const array = [0,null,2,3,4,5];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of value "undefined" in list [0,undefined,2,3,4,5]', function() {
        const array = [0,undefined,2,3,4,5];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of value "NaN" in list [0,NaN,2,3,4,5]', function() {
        const array = [0,NaN,2,3,4,5];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of value "object" in list [0,{value:1},2,3,{value:4},5]', function() {
        const array = [0,{value:1},2,3,{value:4},5];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.map(func),TypeError('callbackFn is not a function'));
      });

      it('should check "map" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.map(func),TypeError('callbackFn is not a function'));
      });

      it('should check "map" of negative value and index bigger than 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value and index bigger than 4 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" of negative value and index bigger than 2 and list length equal 2 in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func).isEqual(array.map(func)));
      });

      it('should check "map" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.map(func1).isEqual(array.map(func2)));
        assert.equal(result1,result2);
      });

      it('should check "map" with assertion inside the function', function() {
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
        assert(ds.map(func).isEqual(array.map(func)));
      });
    });
  },

  /** Test "pop" method" **/

  testPop: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "pop" method', function() {
      it('should check "pop" on []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.pop(),array.pop());
        assert(ds.isEqual(array));
      });

      it('should check "pop" on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.pop(),array.pop());
        assert(ds.isEqual(array));
      });

      it('should check "pop" on [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.pop(),array.pop());
        assert(ds.isEqual(array));
      });

      it('should check "pop" on [null]', function() {
        const array = [null];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.pop(),array.pop());
        assert(ds.isEqual(array));
      });

      it('should check "pop" on [undefined]', function() {
        const array = [undefined];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.pop(),array.pop());
        assert(ds.isEqual(array));
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

  /** Test "reduce" method" **/

  testReduce: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "reduce" method', function() {
      it('should check "reduce" of sum values of list []', function() {
        const array = [];
        const func = (acc, v) => acc + v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError('Reduce of empty array with no initial value'));
        assert.throws(() => ds.reduce(func),TypeError('Reduce of empty list with no initial value'));
      });

      it('should check "reduce" of sum values of list [1]', function() {
        const array = [1];
        const func = (acc, v) => acc + v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of sum values of list [1,2,null,4,5]', function() {
        const array = [1,2,null,4,5];
        const func = (acc, v) => acc + v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of sum values of list [1,2,undefined,4,5]', function() {
        const array = [1,2,undefined,4,5];
        const func = (acc, v) => acc + v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of sum values of list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = (acc, v) => acc + v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30]', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of last value of list [-10,20,100,0,30]', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => v;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func),(array.reduce(func)));
      });

      it('should check "reduce" of without function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(),TypeError('undefined is not a function'));
        assert.throws(() => ds.reduce(),TypeError('undefined is not a function'));
      });

      it('should check "reduce" of "null" function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError(func + ' is not a function'));
        assert.throws(() => ds.reduce(func),TypeError(func + ' is not a function'));
      });

      it('should check "reduce" of "undefined" function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError(func + ' is not a function'));
        assert.throws(() => ds.reduce(func),TypeError(func + ' is not a function'));
      });

      it('should check "reduce" of "NaN" function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError(func + ' is not a function'));
        assert.throws(() => ds.reduce(func),TypeError(func + ' is not a function'));
      });

      it('should check "reduce" of "Infinity" function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError(func + ' is not a function'));
        assert.throws(() => ds.reduce(func),TypeError(func + ' is not a function'));
      });

      it('should check "reduce" of "-0" function on list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const func = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => array.reduce(func),TypeError(func + ' is not a function'));
        assert.throws(() => ds.reduce(func),TypeError(func + ' is not a function'));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "200"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = 200;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [] from inital value "200"', function() {
        const array = [];
        const func = (acc, v) => Math.max(acc, v);
        const inital = 200;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "null"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "undefined"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "NaN"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "Infinity"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "-0"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });

      it('should check "reduce" of max value of list [-10,20,100,0,30] from inital value "{}"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduce(func,inital),(array.reduce(func,inital)));
      });
    });
  },

  /** Test "reduceRight" method" **/

  testReduceRight: function(dsClass) {
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

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "200"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = 200;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [] from inital value "200"', function() {
        const array = [];
        const func = (acc, v) => Math.max(acc, v);
        const inital = 200;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "null"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "undefined"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "NaN"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "Infinity"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "-0"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });

      it('should check "reduceRight" of max value of list [-10,20,100,0,30] from inital value "{}"', function() {
        const array = [-10,20,100,0,30];
        const func = (acc, v) => Math.max(acc, v);
        const inital = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.reduceRight(func,inital),(array.reduceRight(func,inital)));
      });
    });
  },

  /** Test "reverse" method" **/

  testReverse: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "reverse" method', function() {
      it('should check "reverse" of list []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().isEqual(array.reverse()));
      });

      it('should check "reverse" of list [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().isEqual(array.reverse()));
      });

      it('should check "reverse" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().isEqual(array.reverse()));
      });

      it('should check "reverse" of list [1,2,3,4,5]', function() {
        const array = [1,2,3,4,5];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().isEqual(array.reverse()));
      });

      it('should check "reverse" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().isEqual(array.reverse()));
      });

      it('should check "reverse" of list [1,2,3,4,5] twice', function() {
        const array = [1,2,3,4,5];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.reverse().reverse().isEqual(array));
      });
    });
  },

  /** Test "shift" method" **/

  testShift: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "shift" method', function() {
      it('should check "shift" on []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.shift(),array.shift());
        assert(ds.isEqual(array));
      });

      it('should check "shift" on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.shift(),array.shift());
        assert(ds.isEqual(array));
      });

      it('should check "shift" on [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.shift(),array.shift());
        assert(ds.isEqual(array));
      });

      it('should check "shift" on [null]', function() {
        const array = [null];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.shift(),array.shift());
        assert(ds.isEqual(array));
      });

      it('should check "shift" on [undefined]', function() {
        const array = [undefined];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.shift(),array.shift());
        assert(ds.isEqual(array));
      });
    });
  },

  /** Test "slice" method" **/

  testSlice: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "slice" method', function() {
      it('should check "slice" of list []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice().isEqual(array.slice()));
      });

      it('should check "slice" of list [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice().isEqual(array.slice()));
      });

      it('should check "slice" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice().isEqual(array.slice()));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=1', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=4', function() {
        const array = [1,2,3,4,5];
        const start = 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=10', function() {
        const array = [1,2,3,4,5];
        const start = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=-1', function() {
        const array = [1,2,3,4,5];
        const start = -1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=-4', function() {
        const array = [1,2,3,4,5];
        const start = -4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=-10', function() {
        const array = [1,2,3,4,5];
        const start = -10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=1.5', function() {
        const array = [1,2,3,4,5];
        const start = 1.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start=4.5', function() {
        const array = [1,2,3,4,5];
        const start = 4.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="null"', function() {
        const array = [1,2,3,4,5];
        const start = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="undefined"', function() {
        const array = [1,2,3,4,5];
        const start = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="NaN"', function() {
        const array = [1,2,3,4,5];
        const start = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="Infinity"', function() {
        const array = [1,2,3,4,5];
        const start = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="-0"', function() {
        const array = [1,2,3,4,5];
        const start = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="{}"', function() {
        const array = [1,2,3,4,5];
        const start = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start).isEqual(array.slice(start)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="3"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="3" to end="1"', function() {
        const array = [1,2,3,4,5];
        const start = 3;
        const end = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-1"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = -1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-4"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = -4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-10"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = -10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="2.5"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = 2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="4.5"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = 4.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="null"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="undefined"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="NaN"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="Infinity"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="-0"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });

      it('should check "slice" of list [1,2,3,4,5] from start="1" to end="{}"', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const end = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.slice(start,end).isEqual(array.slice(start,end)));
      });
    });
  },

  /** Test "some" method" **/

  testSome: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "some" method', function() {
      it('should check "some" of negative value in list []', function() {
        const array = [];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value in list [1,2,3]', function() {
        const array = [1,2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value in list [1,-2,3]', function() {
        const array = [1,-2,3];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value in list [0,-1,2,3,-4,5]', function() {
        const array = [0,-1,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value in list [0,-4,2,3,-4,5]', function() {
        const array = [0,-4,2,3,-4,5];
        const func = (v) => v < 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of value "null" in list [1,2,null]', function() {
        const array = [1,2,null];
        const func = (v) => v === null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of value "undefined" in list [1,2,undefined]', function() {
        const array = [1,2,undefined];
        const func = (v) => v === undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of value "NaN" in list [1,2,NaN]', function() {
        const array = [1,2,NaN];
        const func = (v) => isNaN(v);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of value "object" in list [1,2,{value:3}]', function() {
        const array = [1,2,{value:3}];
        const func = (v) => typeof v === 'object' && v !== null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" with "null" function', function() {
        const array = [0,1,2,3,4,5];
        const func = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.some(func),TypeError('callbackFn is not a function'));
      });

      it('should check "some" with "undefined" function', function() {
        const array = [0,1,2,3,4,5];
        const func = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.throws(() => ds.some(func),TypeError('callbackFn is not a function'));
      });

      it('should check "some" of negative value and index bigger than 2 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i) => v < 0 && i > 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value and index bigger than 4 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i) => v < 0 && i > 4;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" of negative value and index bigger than 2 and list length equal 2 in list [0,1,-2,3,-4,-5]', function() {
        const array = [0,1,-2,3,-4,-5];
        const func = (v,i,l) => v < 0 && i > 2 && l.length === 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func),array.some(func));
      });

      it('should check "some" with upading a variable by appending (value,index)', function() {
        const array = [0,1,-2,3,-4,-5];
        let result1 = '';
        let result2 = '';
        const func1 = (v,i) => result1 += "(" + v + "," + i + ")";
        const func2 = (v,i) => result2 += "(" + v + "," + i + ")";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.some(func1),array.some(func2));
        assert.equal(result1,result2);
      });

      it('should check "some" with assertion inside the function', function() {
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
        assert.equal(ds.some(func),array.some(func));
      });
    });
  },

  /** Test "sort" method" **/

  testSort: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "sort" method', function() {
      it('should check "sort" lexicographically of list []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list [3,1,2]', function() {
        const array = [3,1,2];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list [3,1,2]', function() {
        const array = [3,1,2];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list [1,30,4,21,100000]', function() {
        const array = [1,30,4,21,100000];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list [3,1,2,-8,2.5,100]', function() {
        const array = [3,1,2,-8,2.5,100];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" lexicographically of list ["March", "Jan", "Feb", "Dec"]', function() {
        const array = ["March", "Jan", "Feb", "Dec"];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });

      it('should check "sort" numerically of list [6,2,-500,4,10000,80,2.5]', function() {
        const array = [6,2,-500,4,10000,80,2.5];
        const func = (a,b) => a - b;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort(func).isEqual(array.sort(func)));
      });

      it('should check "sort" numerically by value of list of objects', function() {
        const array = [
          { name: "Edward", value: 21 },
          { name: "Sharpe", value: 37 },
          { name: "And", value: 45 },
          { name: "The", value: -12 },
          { name: "Magnetic", value: 13 },
          { name: "Zeros", value: 37 },
        ];
        const func = (a,b) => a.value - b.value;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort(func).isEqual(array.sort(func)));
      });

      it('should check "sort" with non-ASCII characters of list ["r�serv�", "premier", "communiqu�", "caf�"]', function() {
        const array = ["r�serv�", "premier", "communiqu�", "caf�"];
        const func = (a,b) => a.localeCompare(b);
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort(func).isEqual(array.sort(func)));
      });

      it('should check "sort" for stability of list of objects', function() {
        const array = [
          { name: "Alex", grade: 15 },
          { name: "Devlin", grade: 15 },
          { name: "Eagle", grade: 13 },
          { name: "Sam", grade: 14 },
        ];
        const func = (a,b) => a.grade - b.grade;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort(func).isEqual(array.sort(func)));
      });

      it('should check "sort" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.sort().isEqual(array.sort()));
      });
    });
  },

  /** Test "splice" method" **/

  testSplice: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "splice" method', function() {
      it('should check "splice" of list [] with start=0', function() {
        const array = [];
        const start = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1] with start=0', function() {
        const array = [1];
        const start = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1] with start=1', function() {
        const array = [1];
        const start = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=2', function() {
        const array = [1,2,3,4];
        const start = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=3', function() {
        const array = [1,2,3,4];
        const start = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=10', function() {
        const array = [1,2,3,4];
        const start = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=-2', function() {
        const array = [1,2,3,4];
        const start = -2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=-3', function() {
        const array = [1,2,3,4];
        const start = -3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=-10', function() {
        const array = [1,2,3,4];
        const start = -3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] without start', function() {
        const array = [1,2,3,4];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice().isEqual(array.splice()));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=null', function() {
        const array = [1,2,3,4];
        const start = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=undefined', function() {
        const array = [1,2,3,4];
        const start = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=NaN', function() {
        const array = [1,2,3,4];
        const start = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=Infinity', function() {
        const array = [1,2,3,4];
        const start = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=-0', function() {
        const array = [1,2,3,4];
        const start = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start={}', function() {
        const array = [1,2,3,4];
        const start = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=1.5', function() {
        const array = [1,2,3,4];
        const start = 1.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4] with start=2.5', function() {
        const array = [1,2,3,4];
        const start = 2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=0', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=2', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=10', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=-2 and deleteCount=-1', function() {
        const array = [1,2,3,4,5];
        const start = -2;
        const deleteCount = -1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=-2 and deleteCount=-3', function() {
        const array = [1,2,3,4,5];
        const start = -2;
        const deleteCount = -3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-1', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = -1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-3', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = -3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-10', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = -10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=null', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=undefined', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=NaN', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=Infinity', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-0', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount={}', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=0.5', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = 2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=2.5', function() {
        const array = [1,2,3,4,5];
        const start = 1;
        const deleteCount = 2.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [] with start=0 and deleteCount=1', function() {
        const array = [];
        const start = 0;
        const deleteCount = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount).isEqual(array.splice(start,deleteCount)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 1;
        const deleteCount = 2;
        const items = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[1]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 1;
        const deleteCount = 2;
        const items = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[20,30]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 1;
        const deleteCount = 2;
        const items = [20,30];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=2 and deleteCount=3 and items=[40,-20,30,40]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 2;
        const deleteCount = 1;
        const items = [40,-20,30,40];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[null,undefined,NaN,{},Infinity,"string",-0,1.5,true]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 2;
        const deleteCount = 1;
        const items = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=0 and deleteCount=3 and items=[3,4,5,6,7]', function() {
        const array = [1,2,3,4,5,6,7,8];
        const start = 0;
        const deleteCount = 3;
        const items = [3,4,5,6,7];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1] with start=0 and deleteCount=3 and items=[3,-4,5,6,7]', function() {
        const array = [1];
        const start = 0;
        const deleteCount = 3;
        const items = [3,-4,5,6,7];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list [1] with start=0 and deleteCount=3 and items=[3,-4,5,6,7]', function() {
        const array = [1];
        const start = 0;
        const deleteCount = 3;
        const items = [3,-4,5,6,7];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start,deleteCount,...items).isEqual(array.splice(start,deleteCount,...items)));
        assert(ds.isEqual(array));
      });

      it('should check "splice" of list ["val0","val1","val2","val3"] with start="val0"', function() {
        const array = ["val0","val1","val2","val3"];
        const start = "val0";
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert(ds.splice(start).isEqual(array.splice(start)));
        assert(ds.isEqual(array));
      });
    });
  },

  /** Test "toLocaleString" method" **/

  testToLocaleString: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "toLocaleString" method', function() {
      it('should check "toLocaleString" of list []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [1,-2,3]', function() {
        const array = [1,-2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(),array.toLocaleString());
      });

      it('should check "toLocaleString" of list [1,"a",new Date("21 Dec 1997 14:12:00 UTC")] with locales "en" and options "{ timeZone: "UTC" }"', function() {
        const array = [1,"a",new Date("21 Dec 1997 14:12:00 UTC")];
        const locales = 'en';
        const options = { timeZone: "UTC" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales),array.toLocaleString(locales));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "null"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "undefined"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "NaN"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "Infinity"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "-0"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "{}"', function() {
        const array = [689,100,4577,56];
        const locales = 'en-US';
        const options = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "null" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = null;
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "undefined" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = undefined;
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "NaN" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = NaN;
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "Infinity" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = Infinity;
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "-0" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = -0;
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [689,100,4577,56] with locales "{}" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [689,100,4577,56];
        const locales = {};
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });

      it('should check "toLocaleString" of list [{},{}] with locales "en-US" and options "{ style: "currency", currency: "USD" }"', function() {
        const array = [{},{}];
        const locales = 'en-US';
        const options = { style: "currency", currency: "USD" };
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toLocaleString(locales,options),array.toLocaleString(locales,options));
      });
    });
  },

  /** Test "toString" method" **/

  testToString: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "toString" method', function() {
      it('should check "toString" of list []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });

      it('should check "toString" of list [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });

      it('should check "toString" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });

      it('should check "toString" of list [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });

      it('should check "toString" of list [1,-2,3]', function() {
        const array = [1,-2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });

      it('should check "toString" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.toString(),array.toString());
      });
    });
  },

  /** Test "unshift" method" **/

  testUnshift: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "unshift" method', function() {
      it('should check "unshift" value 1 on []', function() {
        const array = [];
        const value = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value 2 on [1]', function() {
        const array = [];
        const value = 2;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value 2 & 3 & 4 on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(2,3,4),array.unshift(2,3,4));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value "null" on [1]', function() {
        const array = [1];
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value "undefined" on [1]', function() {
        const array = [1];
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value "NaN" on [1]', function() {
        const array = [1];
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value "Infinity" on [1]', function() {
        const array = [1];
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });

      it('should check "unshift" value "{}" on [1]', function() {
        const array = [1];
        const value = {};
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.unshift(value),array.unshift(value));
        assert(ds.isEqual(array));
      });
    });
  },

  /** Test "values" method" **/

  testValues: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "values" method', function() {
      it('should check "values" on []', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.values();
        const dsIter = ds.values();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "values" on [1]', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.values();
        const dsIter = ds.values();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "values" on [1,2,3]', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.values();
        const dsIter = ds.values();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });

      it('should check "values" on [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', function() {
        const array = [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        const arrayIter = array.values();
        const dsIter = ds.values();
        let arrayCurrent = arrayIter.next();
        let dsCurrent = dsIter.next();
        while (!(arrayCurrent.done) && !(dsCurrent.done)) {
          const arrayValue = arrayCurrent.value;
          const dsValue = dsCurrent.value;
          assert.equal(arrayValue,dsValue);
          arrayCurrent = arrayIter.next();
          dsCurrent = dsIter.next();
        }
        assert.equal(dsIter.done,arrayIter.done);
      });
    });
  },

  /** Tests for public custom mehtods **/

  /** Test "insert" method" **/

  testInsert: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "insert" method', function() {
      it('should check "insert" on [] of value=5 at index=0', function() {
        const array = [];
        const expectedArray = [5];
        const expectedValue = 1;
        const index = 0;
        const value = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [] of value=5 at index=1', function() {
        const array = [];
        const expectedArray = [5];
        const expectedValue = 1;
        const index = 1;
        const value = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1] of value=5 at index=0', function() {
        const array = [1];
        const expectedArray = [5,1];
        const expectedValue = 2;
        const index = 0;
        const value = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1] of value=5 at index=1', function() {
        const array = [1];
        const expectedArray = [1,5];
        const expectedValue = 2;
        const index = 1;
        const value = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1] of value=5 at index=10', function() {
        const array = [1];
        const expectedArray = [1,5];
        const expectedValue = 2;
        const index = 10;
        const value = 5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=2', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,10,3,4,5];
        const expectedValue = 6;
        const index = 2;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=4', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,10,5];
        const expectedValue = 6;
        const index = 4;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=-2', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,10,4,5];
        const expectedValue = 6;
        const index = -2;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=-4', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,10,2,3,4,5];
        const expectedValue = 6;
        const index = -4;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=1.5', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,10,2,3,4,5];
        const expectedValue = 6;
        const index = 1.5;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=-2.5', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,10,4,5];
        const expectedValue = 6;
        const index = -2.5;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of without value and without index', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of without value and with index=0', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=null', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [10,1,2,3,4,5];
        const expectedValue = 6;
        const index = null;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=undefined', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const index = undefined;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=NaN', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [10,1,2,3,4,5];
        const expectedValue = 6;
        const index = NaN;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=Infinity', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5,10];
        const expectedValue = 6;
        const index = Infinity;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=-Infinity', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [10,1,2,3,4,5];
        const expectedValue = 6;
        const index = -Infinity;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index=-0', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [10,1,2,3,4,5];
        const expectedValue = 6;
        const index = -0;
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=10 at index={}', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [10,1,2,3,4,5];
        const expectedValue = 6;
        const index = {};
        const value = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=null at index=1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,null,2,3,4,5];
        const expectedValue = 6;
        const index = 1;
        const value = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=undefined at index=1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,undefined,2,3,4,5];
        const expectedValue = 6;
        const index = 1;
        const value = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=NaN at index=1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,NaN,2,3,4,5];
        const expectedValue = 6;
        const index = 1;
        const value = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=Infinity at index=1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,Infinity,2,3,4,5];
        const expectedValue = 6;
        const index = 1;
        const value = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "insert" on [1,2,3,4,5] of value=-0 at index=1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,-0,2,3,4,5];
        const expectedValue = 6;
        const index = 1;
        const value = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.insert(index,value),expectedValue);
        assert(ds.isEqual(expectedArray));
      });
    });
  },

  /** Test "isEmpty" method" **/

  testIsEmpty: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "isEmpty" method', function() {
      it('should return true to a list that was created with no arguments', function() {
        const ds = new dsClass(false);
        assert(ds.length === 0);
        assert(ds.isEmpty());
      });

      it('should return true to a list that was created from an empty array', function() {
        const array = [];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEmpty());
      });

      it('should return true to a list that was created from an array with one element', function() {
        const array = [1];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(!(ds.isEmpty()));
      });

      it('should return true to a list that was created from an array with three elements', function() {
        const array = [1,2,3];
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(!(ds.isEmpty()));
      });
    });
  },

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
  },

  /** Test "remove" method" **/

  testRemove: function(dsClass) {
    describe(dsClass.name + ' Base: Test the "remove" method', function() {
      it('should check "remove" on [] from index=0', function() {
        const array = [];
        const expectedArray = [];
        const expectedValue = undefined;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1] from index=0', function() {
        const array = [1];
        const expectedArray = [];
        const expectedValue = 1;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3] from index=1', function() {
        const array = [1,2,3];
        const expectedArray = [1,3];
        const expectedValue = 2;
        const index = 1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [null] from index=0', function() {
        const array = [null];
        const expectedArray = [];
        const expectedValue = null;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [undefined] from index=0', function() {
        const array = [undefined];
        const expectedArray = [];
        const expectedValue = undefined;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [NaN] from index=0', function() {
        const array = [NaN];
        const expectedArray = [];
        const expectedValue = NaN;
        const index = 0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=3', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,5];
        const expectedValue = 4;
        const index = 3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-1', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4];
        const expectedValue = 5;
        const index = -1;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-3', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,4,5];
        const expectedValue = 3;
        const index = -3;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=1.5', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,3,4,5];
        const expectedValue = 2;
        const index = 1.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-1.5', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4];
        const expectedValue = 5;
        const index = -1.5;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=10', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const index = 10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-10', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [2,3,4,5];
        const expectedValue = 1;
        const index = -10;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=null', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [2,3,4,5];
        const expectedValue = 1;
        const index = null;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=undefined', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const index = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=NaN', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [2,3,4,5];
        const expectedValue = 1;
        const index = NaN;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=Infinity', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const index = Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-Infinity', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [2,3,4,5];
        const expectedValue = 1;
        const index = -Infinity;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] from index=-0', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [2,3,4,5];
        const expectedValue = 1;
        const index = -0;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(index),expectedValue);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "remove" on [1,2,3,4,5] without index', function() {
        const array = [1,2,3,4,5];
        const expectedArray = [1,2,3,4,5];
        const expectedValue = undefined;
        const ds = new dsClass(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        assert.equal(ds.remove(),expectedValue);
        assert(ds.isEqual(expectedArray));
      });
    });
  },

  /** Tests for operators **/

  /** Test "... of ..." operator **/

  testOfOperator: function(dsClass) {
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
};

export { doublyLinkedListTest };
