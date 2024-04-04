import { strict as assert } from 'assert';

function testEntries(dsClass) {
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
}

export { testEntries };