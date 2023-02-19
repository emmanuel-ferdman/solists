import { TransposeSoList } from '../src/TransposeSoList';
import { strict as assert } from 'assert';

const transposeSoListTest = {

  /** Tests for constructor **/

  testConstructor: function() {
    describe('TransposeSoList: Test the "constructor"', function() {
      it('should check "constructor" from [1,2,3] with rearrangeOnCreation=true', function() {
        const array = [1,2,3];
        const expectedArray = [2,3,1];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,expectedArray.length);
        assert(ds.isEqual(expectedArray));
      });

      it('should check "constructor" from [0,-1,2,-3,4,-5] with rearrangeOnCreation=true', function() {
        const array = [0,-1,2,-3,4,-5];
        const expectedArray = [-1,2,-3,4,-5,0];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,expectedArray.length);
        assert(ds.isEqual(expectedArray));
      });
    });
  },

  /** Tests for public Array-like mehtods **/

  /** Test "at" method" **/

  testAt: function() {
    describe('TransposeSoList: Test the "at" method', function() {
      it('should check "at" of indices [2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 2, "index": 2}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [4,4,4] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "index": 4},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 3, "index": 4},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "index": 4}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [0,0,0,4,1,1,1] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 0},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "index": 4},
          {"expectedArray": [1,0,2,4,3,5], "expectedValue": 1, "index": 1},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 0, "index": 1},
          {"expectedArray": [1,0,2,4,3,5], "expectedValue": 1, "index": 1}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [-1] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,5,4], "expectedValue": 5, "index": -1}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [-1,-2,-3,3,2,1] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,5,4], "expectedValue": 5, "index": -1},
          {"expectedArray": [0,1,2,5,3,4], "expectedValue": 5, "index": -2},
          {"expectedArray": [0,1,5,2,3,4], "expectedValue": 5, "index": -3},
          {"expectedArray": [0,1,2,5,3,4], "expectedValue": 2, "index": 3},
          {"expectedArray": [0,2,1,5,3,4], "expectedValue": 2, "index": 2},
          {"expectedArray": [2,0,1,5,3,4], "expectedValue": 2, "index": 1}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [2.5] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 2, "index": 2.5}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [-10,10,Infinity] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": -10},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": 10},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "index": Infinity}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "at" of indices [null,undefined,NaN,-0,{},1,1,1,1,1,1] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": null},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": undefined},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": NaN},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": -0},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": {}},
          {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
          {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
          {"expectedArray": [1,0,2,3,4,5], "expectedValue": 1, "index": 1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 0, "index": 1},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.at(input.index),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "find" method" **/

  testFind: function() {
    describe('TransposeSoList: Test the "find" method', function() {
      it('should check "find" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.find(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "find" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 3, "func": (v) => (v == 3)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "func": (v) => (v == 4)},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 2, "func": (v) => (v == 2)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.find(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "find" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v < 0)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v > 6)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.find(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "find" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [1,0,2,5,4,5], "expectedValue": 1, "func": (v) => (v % 2 == 1)},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 0, "func": (v) => (v % 2 == 0)},
          {"expectedArray": [0,1,5,2,4,5], "expectedValue": 5, "func": (v) => (v == 5)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.find(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "findIndex" method" **/

  testFindIndex: function() {
    describe('TransposeSoList: Test the "findIndex" method', function() {
      it('should check "findIndex" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 1, "func": (v) => (v == 2)}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findIndex" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "func": (v) => (v == 3)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 3, "func": (v) => (v == 4)},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 1, "func": (v) => (v == 2)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findIndex" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v < 0)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v > 6)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findIndex" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [1,0,2,5,4,5], "expectedValue": 0, "func": (v) => (v % 2 == 1)},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 0, "func": (v) => (v % 2 == 0)},
          {"expectedArray": [0,1,5,2,4,5], "expectedValue": 2, "func": (v) => (v == 5)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "findLast" method" **/

  testFindLast: function() {
    describe('TransposeSoList: Test the "findLast" method', function() {
      it('should check "findLast" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLast(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLast" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 3, "func": (v) => (v == 3)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 4, "func": (v) => (v == 4)},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 2, "func": (v) => (v == 2)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLast(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLast" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v < 0)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": undefined, "func": (v) => (v > 6)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLast(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLast" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,5,5,4], "expectedValue": 5, "func": (v) => (v % 2 == 1)},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 4, "func": (v) => (v % 2 == 0)},
          {"expectedArray": [0,1,2,5,5,4], "expectedValue": 5, "func": (v) => (v == 5)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLast(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "findLastIndex" method" **/

  testFindLastIndex: function() {
    describe('TransposeSoList: Test the "findLastIndex" method', function() {
      it('should check "findLastIndex" of funcs [v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 1, "func": (v) => (v == 2)}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLastIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLastIndex" of funcs [v=>v==3,v=>v==2,v=>v==4,v=>v==2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "func": (v) => (v == 3)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "func": (v) => (v == 2)},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 3, "func": (v) => (v == 4)},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 1, "func": (v) => (v == 2)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLastIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLastIndex" of funcs [v=>v<0,v=>v>6] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v < 0)},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "func": (v) => (v > 6)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLastIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "findLastIndex" of funcs [v=>v%2==1,v=>v%2==0,v=>v==5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,5,5,4], "expectedValue": 4, "func": (v) => (v % 2 == 1)},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 4, "func": (v) => (v % 2 == 0)},
          {"expectedArray": [0,1,2,5,5,4], "expectedValue": 4, "func": (v) => (v == 5)},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.findLastIndex(input.func),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "includes" method" **/

  testIncludes: function() {
    describe('TransposeSoList: Test the "includes" method', function() {
      it('should check "includes" of values [2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": true, "value": 2}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.includes(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "includes" of values [3,2,4,2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": true, "value": 3},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": true, "value": 2},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": true, "value": 4},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": true, "value": 2},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.includes(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "includes" of values [-1,6,3] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": false, "value": -1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": false, "value": 6},
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": true, "value": 3},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.includes(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "includes" of values [1,0,5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [1,0,2,5,4,5], "expectedValue": true, "value": 1},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": true, "value": 0},
          {"expectedArray": [0,1,5,2,4,5], "expectedValue": true, "value": 5},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.includes(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "indexOf" method" **/

  testIndexOf: function() {
    describe('TransposeSoList: Test the "indexOf" method', function() {
      it('should check "indexOf" of values [2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 1, "value": 2}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.indexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "indexOf" of values [3,2,4,2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "value": 3},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "value": 2},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 3, "value": 4},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 1, "value": 2},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.indexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "indexOf" of values [-1,6,3] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": -1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": 6},
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "value": 3},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.indexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "indexOf" of values [1,0,5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [1,0,2,5,4,5], "expectedValue": 0, "value": 1},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 0, "value": 0},
          {"expectedArray": [0,1,5,2,4,5], "expectedValue": 2, "value": 5},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.indexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "lastIndexOf" method" **/

  testLastIndexOf: function() {
    describe('TransposeSoList: Test the "lastIndexOf" method', function() {
      it('should check "lastIndexOf" of values [2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,2,1,3,4,5], "expectedValue": 1, "value": 2}
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "lastIndexOf" of values [3,2,4,2] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "value": 3},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": 2, "value": 2},
          {"expectedArray": [0,1,2,4,3,5], "expectedValue": 3, "value": 4},
          {"expectedArray": [0,2,1,4,3,5], "expectedValue": 1, "value": 2},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "lastIndexOf" of values [-1,6,3] in list [0,1,2,3,4,5]', function() {
        const array = [0,1,2,3,4,5];
        const inputs = [
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": -1},
          {"expectedArray": [0,1,2,3,4,5], "expectedValue": -1, "value": 6},
          {"expectedArray": [0,1,3,2,4,5], "expectedValue": 2, "value": 3},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "lastIndexOf" of values [1,0,5] in list [0,1,2,5,4,5]', function() {
        const array = [0,1,2,5,4,5];
        const inputs = [
          {"expectedArray": [1,0,2,5,4,5], "expectedValue": 0, "value": 1},
          {"expectedArray": [0,1,2,5,4,5], "expectedValue": 0, "value": 0},
          {"expectedArray": [0,1,2,5,5,4], "expectedValue": 4, "value": 5},
        ];
        const ds = new TransposeSoList(false,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.lastIndexOf(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "push" method" **/

  testPush: function() {
    describe('TransposeSoList: Test the "push" method', function() {
      it('should check "push" of values [1,2,3] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1},
          {"expectedArray": [2,1], "expectedValue": 2, "value": 2},
          {"expectedArray": [2,3,1], "expectedValue": 3, "value": 3},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.push(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "push" of values [1,5,2,3,6] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1},
          {"expectedArray": [5,1], "expectedValue": 2, "value": 5},
          {"expectedArray": [5,2,1], "expectedValue": 3, "value": 2},
          {"expectedArray": [5,2,3,1], "expectedValue": 4, "value": 3},
          {"expectedArray": [5,2,3,6,1], "expectedValue": 5, "value": 6}
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.push(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "push" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3]', function() {
        const array = [1,2,3];
        const expectedInitArray = [2,3,1];
        const findInputs = [3];
        const inputs = [
          {"expectedArray": [3,2,6,1], "expectedValue": 4, "value": 6},
          {"expectedArray": [3,2,6,5,1], "expectedValue": 5, "value": 5},
          {"expectedArray": [3,2,6,5,4,1], "expectedValue": 6, "value": 4},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.push(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "push" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3,2,3]', function() {
        const array = [1,2,3];
        const expectedInitArray = [2,3,1];
        const findInputs = [3,2,3];
        const inputs = [
          {"expectedArray": [3,2,6,1], "expectedValue": 4, "value": 6},
          {"expectedArray": [3,2,6,5,1], "expectedValue": 5, "value": 5},
          {"expectedArray": [3,2,6,5,4,1], "expectedValue": 6, "value": 4},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.push(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Test "unshift" method" **/

  testUnshift: function() {
    describe('TransposeSoList: Test the "unshift" method', function() {
      it('should check "unshift" of values [1,2,3] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1},
          {"expectedArray": [2,1], "expectedValue": 2, "value": 2},
          {"expectedArray": [3,2,1], "expectedValue": 3, "value": 3},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.unshift(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "unshift" of values [1,5,2,3,6] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1},
          {"expectedArray": [5,1], "expectedValue": 2, "value": 5},
          {"expectedArray": [2,5,1], "expectedValue": 3, "value": 2},
          {"expectedArray": [3,2,5,1], "expectedValue": 4, "value": 3},
          {"expectedArray": [6,3,2,5,1], "expectedValue": 5, "value": 6}
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.unshift(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "unshift" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3]', function() {
        const array = [1,2,3];
        const expectedInitArray = [2,3,1];
        const findInputs = [3];
        const inputs = [
          {"expectedArray": [6,3,2,1], "expectedValue": 4, "value": 6},
          {"expectedArray": [5,6,3,2,1], "expectedValue": 5, "value": 5},
          {"expectedArray": [4,5,6,3,2,1], "expectedValue": 6, "value": 4},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.unshift(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "unshift" of values [6,5,4] to list [1,2,3] with rearrangeOnCreation=true after "includes" [3,2,3]', function() {
        const array = [1,2,3];
        const expectedInitArray = [2,3,1];
        const findInputs = [3,2,3];
        const inputs = [
          {"expectedArray": [6,3,2,1], "expectedValue": 4, "value": 6},
          {"expectedArray": [5,6,3,2,1], "expectedValue": 5, "value": 5},
          {"expectedArray": [4,5,6,3,2,1], "expectedValue": 6, "value": 4},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.unshift(input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  },

  /** Tests for public custom mehtods **/

  /** Test "insert" method" **/

  testInsert: function() {
    describe('TransposeSoList: Test the "insert" method', function() {
      it('should check "insert" of values [1,2,3] with indices [0,1,2] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1, "index": 0},
          {"expectedArray": [2,1], "expectedValue": 2, "value": 2, "index": 1},
          {"expectedArray": [2,3,1], "expectedValue": 3, "value": 3, "index": 2},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.insert(input.index,input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "insert" of values [1,5,2,3,6] with indices [0,1,-1,1,2] to list [] with rearrangeOnCreation=true', function() {
        const array = [];
        const inputs = [
          {"expectedArray": [1], "expectedValue": 1, "value": 1, "index": 0},
          {"expectedArray": [5,1], "expectedValue": 2, "value": 5, "index": 1},
          {"expectedArray": [2,5,1], "expectedValue": 3, "value": 2, "index": -1},
          {"expectedArray": [3,2,5,1], "expectedValue": 4, "value": 3, "index": 1},
          {"expectedArray": [3,6,2,5,1], "expectedValue": 5, "value": 6, "index": 2}
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(array));
        inputs.forEach((input) => {
          assert.equal(ds.insert(input.index,input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with rearrangeOnCreation=true after "includes" [3]', function() {
        const array = [1,2,3,4,5];
        const expectedInitArray = [2,3,4,5,1];
        const findInputs = [3];
        const inputs = [
          {"expectedArray": [6,3,2,4,5,1], "expectedValue": 6, "value": 6, "index": 0},
          {"expectedArray": [6,7,3,2,4,5,1], "expectedValue": 7, "value": 7, "index": 2},
          {"expectedArray": [6,7,3,2,4,8,5,1], "expectedValue": 8, "value": 8, "index": -1},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.insert(input.index,input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });

      it('should check "insert" of values [6,7,8] with indices [0,2,-1] to list [1,2,3,4,5] with rearrangeOnCreation=true after "includes" [3,2,3]', function() {
        const array = [1,2,3,4,5];
        const expectedInitArray = [2,3,4,5,1];
        const findInputs = [3,2,3];
        const inputs = [
          {"expectedArray": [6,3,2,4,5,1], "expectedValue": 6, "value": 6, "index": 0},
          {"expectedArray": [6,7,3,2,4,5,1], "expectedValue": 7, "value": 7, "index": 2},
          {"expectedArray": [6,7,3,2,4,8,5,1], "expectedValue": 8, "value": 8, "index": -1},
        ];
        const ds = new TransposeSoList(true,array);
        assert.equal(ds.length,array.length);
        assert(ds.isEqual(expectedInitArray));
        findInputs.forEach((input) => {
          assert(ds.includes(input));
        });
        inputs.forEach((input) => {
          assert.equal(ds.insert(input.index,input.value),input.expectedValue);
          assert(ds.isEqual(input.expectedArray));
        });
      });
    });
  }
};

export { transposeSoListTest };
