// const javascriptTesting = require('../src/javascript-testing');

beforeAll(() => {
  // Run at test Suite before.
});

afterAll(() => {
  // Run at test Suite after;
});

describe('Starting test javascript - Value properties', () => {
  beforeEach(() => {
    // Run at each test before.
  });

  afterEach(() => {
    // Run at each test after.
  });

  test('test globalThis', () => {
    const result = (typeof globalThis.XMLHttpRequest === 'function');
    expect(result).toBeFalsy();
  });

  test('test Infinity', () => {
    const maxNumber = Math.pow(10, 1000);
    expect(maxNumber).toEqual(Infinity);
  });

  test('test NaN', () => {
    const value = 'abc';
    const result = isNaN(value) ? NaN : value;
    expect(result).toEqual(NaN);
  });

  test('test undefined', () => {
    const result = undefined;
    expect(result).toBeUndefined();
  });
});

describe('Starting test javascript - Function properties', () => {
  beforeEach(() => {
    // Run at each test before.
  });

  afterEach(() => {
    // Run at each test after.
  });

  test('test eval', () => {
    const result = eval('2 + 2');
    expect(result).toBe(4);
  });

  test('test isFinite', () => {
    const result = isFinite(1000/0);
    expect(result).toBeFalsy();
  });

  test('test isNaN', () => {
    const value = 'abc';
    const result = isNaN(value) ? NaN : value;
    expect(result).toEqual(NaN);
  });

  test('test parseFloat', () => {
    const result = parseFloat('4.567');
    expect(result).toBe(4.567);
  });

  test('test parseInt', () => {
    const result = parseInt('321', 16);
    expect(result).toBe(801);
  });

  test('test decodeURI', () => {
    const result = decodeURI('https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
    expect(result).toBe('https://mozilla.org/?x=шеллы');
  });

  test('test decodeURIComponent', () => {
    const result = decodeURIComponent('%3Fx%3Dtest'); // ?x=test
    expect(result).not.toBe(decodeURI('%3Fx%3Dtest'));
  });

  test('test encodeURI', () => {
    const result = encodeURI('https://mozilla.org/?x=шеллы');
    expect(result).toBe('https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
  });

  test('test encodeURIComponent', () => {
    const result = encodeURIComponent('test?');
    expect(result).toBe('test%3F');
  });
});


describe('Starting test javascript - Fundamental objects - Object', () => {
  beforeEach(() => {
    // Run at each test before.
  });

  afterEach(() => {
    // Run at each test after.
  });

  test('test object', () => {
    const result = {
      foo: 1,
      propertyIsEnumerable() {
        return false;
      }};
    expect(typeof result).toBe('object');
  });

  test('test __defineGetter__', () => {
    const result = {};
    result.__defineGetter__('testing', function() {
      return 5;
    });
    expect(result.testing).toBe(5);
  });

  test('test __defineSetter__', () => {
    const result = {};
    result.__defineSetter__('testing', function(value) {
      this.result = value;
    });
    result.testing = 6;
    expect(result.result).toBe(6);
  });

  test('test __lookupGetter__', () => {
    const result = {
      get foo() {
        return 7;
      },
    };
    expect(typeof result.__lookupGetter__('foo')).toBe('function');
  });

  test('test __lookupSetter__', () => {
    const result = {
      set foo(value) {
        this.result = value;
      },
    };
    expect(typeof result.__lookupSetter__('foo')).toBe('function');
  });

  test('test assign', () => {
    const objA = {a: 1, b: 2};
    const objB = {b: 3, c: 4};
    const objC = Object.assign(objA, objB);
    expect(objA).toEqual({a: 1, b: 3, c: 4});
    expect(objC).toEqual({a: 1, b: 3, c: 4});
  });

  test('test constructor', () => {
    const objA = {};
    // const objB = new Object();
    const objC = [];
    // const objD = new Array();
    const objE = 8;
    expect(objA.constructor).toEqual(Object);
    // expect(objB.constructor).toEqual(Object);
    expect(objC.constructor).toEqual(Array);
    // expect(objD.constructor).toEqual(Array);
    expect(objE.constructor).toEqual(Number);
  });

  test('test create', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.create(objA);
    expect(objB.a).toEqual(1);
  });

  test('test defineProperties', () => {
    const objA = {};
    Object.defineProperties(objA, {
      a: {
        value: 10,
        writable: true,
        configurable: false,
      },
      b: {},
    });
    expect(objA.a).toEqual(10);
  });

  test('test defineProperty', () => {
    const objA = {};
    Object.defineProperty(objA, 'a', {
      value: 11,
      writable: true,
      configurable: false,
    });
    expect(objA.a).toEqual(11);
  });

  test('test entries', () => {
    const objA = {a: 1, b: 2};
    let objB = '';
    let result = 0;
    for (const [key, value] of Object.entries(objA)) {
      objB = key;
      result += value;
    }
    expect(result).toEqual(3);
    expect(objB).toEqual('b');
  });

  test('test freeze', () => {
    const objA = {a: 1, b: 2};
    Object.freeze(objA);
    objA.a = 10;
    expect(objA.a).toEqual(1);
  });

  test('test fromEntries', () => {
    const objA = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const objB = Object.fromEntries(objA);
    expect(objB.a).toEqual(1);
  });

  test('test getOwnPropertyDescriptor', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.getOwnPropertyDescriptor(objA, 'a');
    expect(objB.value).toEqual(1);
  });

  test('test getOwnPropertyDescriptors', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.getOwnPropertyDescriptors(objA);
    expect(objB.a.value).toEqual(1);
  });

  test('test getOwnPropertyNames', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.getOwnPropertyNames(objA);
    expect(objB).toEqual(['a', 'b']);
  });

  test('test getOwnPropertySymbols', () => {
    const object1 = {};
    const a = Symbol('a');
    const b = Symbol.for('b');

    object1[a] = 'localSymbol';
    object1[b] = 'globalSymbol';

    const objectSymbols = Object.getOwnPropertySymbols(object1);
    expect(objectSymbols.length).toEqual(2);
  });

  test('test getPrototypeOf', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.create(objA);
    expect(Object.getPrototypeOf(objB)).toEqual(objA);
  });

  test('test hasOwn', () => {
    const objA = {a: 1, b: 2};
    expect(Object.hasOwn(objA, 'a')).toBeTruthy();
  });

  test('test hasOwnProperty', () => {
    const objA = {a: 1, b: 2};
    expect(objA.hasOwnProperty('a')).toBeTruthy();
  });

  test('test is', () => {
    expect(Object.is('1', 1)).toBeFalsy();
  });

  test('test isExtensible', () => {
    const objA = {a: 1, b: 2};
    expect(Object.isExtensible(objA)).toBeTruthy();
    Object.preventExtensions(objA);
    expect(Object.isExtensible(objA)).toBeFalsy();
  });

  test('test isFrozen', () => {
    const objA = {a: 1, b: 2};
    expect(Object.isFrozen(objA)).toBeFalsy();
    Object.freeze(objA);
    expect(Object.isFrozen(objA)).toBeTruthy();
  });

  test('test isPrototypeOf', () => {
    /**
     * Testing function A
     */
    function FnA() {};

    /**
     * Testing function B
     */
    function FnB() {};

    FnB.prototype = Object.create(FnA.prototype);
    const fnC = new FnB();
    expect(FnA.prototype.isPrototypeOf(fnC)).toBeTruthy();
  });

  test('test isSealed', () => {
    const objA = {a: 1, b: 2};
    expect(Object.isSealed(objA)).toBeFalsy();
    Object.seal(objA);
    expect(Object.isSealed(objA)).toBeTruthy();
  });

  test('test keys', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.keys(objA);
    expect(objB).toEqual(['a', 'b']);
  });

  test('test preventExtensions', () => {
    const objA = {a: 1, b: 2};
    expect(Object.isExtensible(objA)).toBeTruthy();
    Object.preventExtensions(objA);
    expect(Object.isExtensible(objA)).toBeFalsy();
  });

  test('test propertyIsEnumerable', () => {
    const objA = {a: 1, b: 2};
    const arrB = [11];
    expect(objA.propertyIsEnumerable('a')).toBeTruthy();
    expect(arrB.propertyIsEnumerable('0')).toBeTruthy();
    expect(arrB.propertyIsEnumerable('length')).toBeFalsy();
  });

  test('test seal', () => {
    const objA = {a: 1, b: 2};
    expect(Object.isSealed(objA)).toBeFalsy();
    Object.seal(objA);
    expect(Object.isSealed(objA)).toBeTruthy();
  });

  test('test toLocaleString', () => {
    const result = 123456.789;
    expect(result.toLocaleString('de-DE')).toEqual('123.456,789');
  });

  test('test toString', () => {
    /**
     * Testing function A
     * @param {number} value - Setting Value
     */
    function FnA(value) {
      this.value = value;
    }
    const fnA = new FnA(13);
    FnA.prototype.toString = function fnAToString() {
      return `${this.value}`;
    };
    expect(fnA.toString()).toEqual('13');
  });

  test('test valueOf', () => {
    /**
     * Testing function A
     * @param {number} value - Setting Value
     */
    function FnA(value) {
      this.value = value;
    }
    const fnA = new FnA(14);
    FnA.prototype.valueOf = function() {
      return this.value;
    };
    expect(fnA + 1).toEqual(15);
  });

  test('test values', () => {
    const objA = {a: 1, b: 2};
    const objB = Object.values(objA);
    expect(objB).toEqual([1, 2]);
  });
});

describe('Starting test javascript - Fundamental objects - Function', () => {
  beforeEach(() => {
    // Run at each test before.
  });

  afterEach(() => {
    // Run at each test after.
  });

  test('test hasInstance', () => {
    /**
     * This is testing class.
     */
    class ClsA {};
    const clsA = new ClsA();
    expect(clsA instanceof ClsA).toEqual(ClsA[Symbol.hasInstance](clsA));
  });

  test('test apply', () => {
    const numbers = [5, 6, 2, 3, 7];
    const result = Math.max.apply(null, numbers);
    expect(result).toEqual(7);
  });

  test('test bind', () => {
    const objA = {
      a: 1,
      fn: function() {
        return this.a;
      },
    };
    const fnA = objA.fn;
    const fnB = fnA.bind(objA);
    expect(fnB()).toEqual(1);
  });

  test('test call', () => {
    /**
     * This is testing function A
     * @param {*} a Testing Field
     * @param {*} b Testing Field
     */
    function FnA(a, b) {
      this.a = a;
      this.b = b;
    }
    /**
     * This is testing function B
     * @param {*} a Testing Field
     * @param {*} b Testing Field
     */
    function FnB(a, b) {
      FnA.call(this, a, b);
      this.c = 3;
    }
    expect(new FnB(1, 2).a).toEqual(1);
  });

  test('test displayName', () => {
    const objA = {
      a: 1,
      fn: function fn(a) {
        this.a = a;
        fn.displayName = `fn (${a})`;
        return this.a;
      },
    };
    expect(objA.fn.displayName).toEqual(undefined);
    objA.fn(2);
    expect(objA.fn.displayName).toEqual('fn (2)');
  });

  test('test length', () => {
    const objA = {
      a: 1,
      fn: function fn(a) {
        this.a = a;
        fn.displayName = `fn (${a})`;
        return this.a;
      },
    };
    expect(objA.fn.length).toEqual(1);
  });

  test('test name', () => {
    const objA = {
      a: 1,
      fn: function fn(a) {
        this.a = a;
        fn.displayName = `fn (${a})`;
        return this.a;
      },
    };
    expect(objA.fn.name).toEqual('fn');
  });
});
