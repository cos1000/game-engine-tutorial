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
});
