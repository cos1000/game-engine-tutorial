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
});
