import { strict as assert } from 'assert';

function testFlatMap(dsClass) {
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
}

export { testFlatMap };