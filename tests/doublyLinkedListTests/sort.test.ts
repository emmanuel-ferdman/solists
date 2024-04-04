import { strict as assert } from 'assert';

function testSort(dsClass) {
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
}

export { testSort };