import { strict as assert } from 'assert';

function testSplice(dsClass) {
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
}

export { testSplice };