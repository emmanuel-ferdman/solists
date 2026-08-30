import { strict as assert } from "node:assert";

function testSplice(dsClass) {
  describe(`${dsClass.name} Base: Test the "splice" method`, () => {
    it('should check "splice" of list [] with start=0', () => {
      const array = [];
      const start = 0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1] with start=0', () => {
      const array = [1];
      const start = 0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1] with start=1', () => {
      const array = [1];
      const start = 1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=2', () => {
      const array = [1, 2, 3, 4];
      const start = 2;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=3', () => {
      const array = [1, 2, 3, 4];
      const start = 3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=10', () => {
      const array = [1, 2, 3, 4];
      const start = 10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=-2', () => {
      const array = [1, 2, 3, 4];
      const start = -2;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=-3', () => {
      const array = [1, 2, 3, 4];
      const start = -3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=-10', () => {
      const array = [1, 2, 3, 4];
      const start = -3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] without start', () => {
      const array = [1, 2, 3, 4];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice().isEqual(array.splice()));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=null', () => {
      const array = [1, 2, 3, 4];
      const start = null;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=undefined', () => {
      const array = [1, 2, 3, 4];
      const start = undefined;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=NaN', () => {
      const array = [1, 2, 3, 4];
      const start = NaN;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=Infinity', () => {
      const array = [1, 2, 3, 4];
      const start = Infinity;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=-0', () => {
      const array = [1, 2, 3, 4];
      const start = -0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start={}', () => {
      const array = [1, 2, 3, 4];
      const start = {};
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=1.5', () => {
      const array = [1, 2, 3, 4];
      const start = 1.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4] with start=2.5', () => {
      const array = [1, 2, 3, 4];
      const start = 2.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=0', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = 0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=2', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = 2;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=10', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = 10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=-2 and deleteCount=-1', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -2;
      const deleteCount = -1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=-2 and deleteCount=-3', () => {
      const array = [1, 2, 3, 4, 5];
      const start = -2;
      const deleteCount = -3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-1', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = -1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-3', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = -3;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-10', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = -10;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=null', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = null;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=undefined', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = undefined;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=NaN', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = NaN;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=Infinity', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = Infinity;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=-0', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = -0;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount={}', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = {};
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=0.5', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = 2.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5] with start=1 and deleteCount=2.5', () => {
      const array = [1, 2, 3, 4, 5];
      const start = 1;
      const deleteCount = 2.5;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [] with start=0 and deleteCount=1', () => {
      const array = [];
      const start = 0;
      const deleteCount = 1;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start, deleteCount).isEqual(array.splice(start, deleteCount)));
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 1;
      const deleteCount = 2;
      const items = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[1]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 1;
      const deleteCount = 2;
      const items = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[20,30]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 1;
      const deleteCount = 2;
      const items = [20, 30];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=2 and deleteCount=3 and items=[40,-20,30,40]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 2;
      const deleteCount = 1;
      const items = [40, -20, 30, 40];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=1 and deleteCount=2 and items=[null,undefined,NaN,{},Infinity,"string",-0,1.5,true]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 2;
      const deleteCount = 1;
      const items = [null, undefined, NaN, {}, Infinity, "string", -0, 1.5, true];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1,2,3,4,5,6,7,8] with start=0 and deleteCount=3 and items=[3,4,5,6,7]', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const start = 0;
      const deleteCount = 3;
      const items = [3, 4, 5, 6, 7];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list [1] with start=0 and deleteCount=3 and items=[3,-4,5,6,7]', () => {
      const array = [1];
      const start = 0;
      const deleteCount = 3;
      const items = [3, -4, 5, 6, 7];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(
        ds.splice(start, deleteCount, ...items).isEqual(array.splice(start, deleteCount, ...items))
      );
      assert(ds.isEqual(array));
    });

    it('should check "splice" of list ["val0","val1","val2","val3"] with start="val0"', () => {
      const array = ["val0", "val1", "val2", "val3"];
      const start = "val0";
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.splice(start).isEqual(array.splice(start)));
      assert(ds.isEqual(array));
    });
  });
}

export { testSplice };
