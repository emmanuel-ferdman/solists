import { strict as assert } from 'assert';

function testToLocaleString(dsClass) {
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

    it('should check "toLocaleString" of list [689,100,4577,56] with locales "en-US" and options "null"', function() {
      const array = [689,100,4577,56];
      const locales = 'en-US';
      const options = null;
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));

      let dsError, arrayError;
      try {
        ds.toLocaleString(locales, options);
      } catch (error) {
        dsError = error;
      }

      try {
        array.toLocaleString(locales, options);
      } catch (error) {
        arrayError = error;
      }

      assert.equal(dsError.message, arrayError.message);
    });

    it('should check "toLocaleString" of list [689,100,4577,56] with locales "null" and options "{ style: "currency", currency: "USD" }"', function() {
      const array = [689,100,4577,56];
      const locales = null;
      const options = { style: "currency", currency: "USD" };
      const ds = new dsClass(false,array);
      assert.equal(ds.length,array.length);
      assert(ds.isEqual(array));

      let dsError, arrayError;
      try {
        ds.toLocaleString(locales, options);
      } catch (error) {
        dsError = error;
      }

      try {
        array.toLocaleString(locales, options);
      } catch (error) {
        arrayError = error;
      }

      assert.equal(dsError.message, arrayError.message);
    });
  });
}

export { testToLocaleString };