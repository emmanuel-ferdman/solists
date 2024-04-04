import { strict as assert } from 'assert';

function testKeys(dsClass) {
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
}

export { testKeys };