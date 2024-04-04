import { strict as assert } from 'assert';

function testFlat(dsClass) {
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
}

export { testFlat };