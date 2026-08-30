import { strict as assert } from "node:assert";

function testSort(dsClass) {
  describe(`${dsClass.name} Base: Test the "sort" method`, () => {
    it('should check "sort" lexicographically of list []', () => {
      const array = [];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list [1]', () => {
      const array = [1];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list [3,1,2]', () => {
      const array = [3, 1, 2];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list [1,30,4,21,100000]', () => {
      const array = [1, 30, 4, 21, 100000];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list [3,1,2,-8,2.5,100]', () => {
      const array = [3, 1, 2, -8, 2.5, 100];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list [9,3,7,1,5,8,2,6,4]', () => {
      const array = [9, 3, 7, 1, 5, 8, 2, 6, 4];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list ["Mar","Jan","Feb","Dec"]', () => {
      const array = ["Mar", "Jan", "Feb", "Dec"];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" lexicographically of list ["Mar","Jan","Feb","Dec","Apr","May","Jun","Jul"]', () => {
      const array = ["Mar", "Jan", "Feb", "Dec", "Apr", "May", "Jun", "Jul"];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" numerically of list [6,2,-500,4,10000,80,2.5]', () => {
      const array = [6, 2, -500, 4, 10000, 80, 2.5];
      const func = (a, b) => a - b;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" numerically of list [6,2,-500,4,10000,80,2.5,99,-1]', () => {
      const array = [6, 2, -500, 4, 10000, 80, 2.5, 99, -1];
      const func = (a, b) => a - b;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" numerically by value of list of objects', () => {
      const array = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 },
      ];
      const func = (a, b) => a.value - b.value;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" with non-ASCII characters of list ["r�serv�", "premier", "communiqu�", "caf�"]', () => {
      const array = ["r�serv�", "premier", "communiqu�", "caf�"];
      const func = (a, b) => a.localeCompare(b);
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" for stability of list of objects', () => {
      const array = [
        { name: "Alex", grade: 15 },
        { name: "Devlin", grade: 15 },
        { name: "Eagle", grade: 13 },
        { name: "Sam", grade: 14 },
      ];
      const func = (a, b) => a.grade - b.grade;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" for stability of list of objects with 8+ elements', () => {
      const array = [
        { name: "Alex", grade: 15 },
        { name: "Devlin", grade: 15 },
        { name: "Eagle", grade: 13 },
        { name: "Sam", grade: 14 },
        { name: "Edward", grade: 15 },
        { name: "Sharpe", grade: 13 },
        { name: "Magnetic", grade: 14 },
        { name: "Zeros", grade: 15 },
      ];
      const func = (a, b) => a.grade - b.grade;
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort(func).isEqual(array.sort(func)));
    });

    it('should check "sort" for stability with default comparison of equal string values', () => {
      const array = [
        { toString: () => "Devlin", id: 1 },
        { toString: () => "Devlin", id: 2 },
        { toString: () => "Alex", id: 3 },
      ];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });

    it('should check "sort" of list [null,undefined,NaN,{},Infinity,"string",-0,1.5,true,new Date("21 Dec 1997 14:12:00 UTC")]', () => {
      const array = [
        null,
        undefined,
        NaN,
        {},
        Infinity,
        "string",
        -0,
        1.5,
        true,
        new Date("21 Dec 1997 14:12:00 UTC"),
      ];
      const ds = new dsClass(array);
      assert.equal(ds.length, array.length);
      assert(ds.isEqual(array));
      assert(ds.sort().isEqual(array.sort()));
    });
  });
}

export { testSort };
