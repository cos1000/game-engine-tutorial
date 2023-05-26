const jestTesting = require('../src/jest-testing');

beforeAll(() => {
  // Run at test Suite before.
});

afterAll(() => {
  // Run at test Suite after;
});

describe('Starting test Jest Tool', () => {
  beforeEach(() => {
    // Run at each test before.
  });

  afterEach(() => {
    // Run at each test after.
  });

  test('Use toMatch test', () => {
    expect('Happy new year').toMatch(/new/);
  });

  test('adds 1 + 2 to equal 3 (toBe)', () => {
    expect(jestTesting.testing01(1, 2)).toBe(3);
  });

  test('adds 1 + 2 to equal 3 (Not toBe)', () => {
    expect(jestTesting.testing01(1, 2)).not.toBe(1);
  });

  test('adds 1 + 2 to equal 3 (toEqual)', () => {
    expect(jestTesting.testing01(1, 2)).toEqual(3);
  });

  test('adds 1 + 2 to equal 3 (toBeGreaterThan)', () => {
    expect(jestTesting.testing01(1, 2)).toBeGreaterThan(2);
  });

  test('adds 1 + 2 to equal 3 (toBeGreaterThanOrEqual)', () => {
    expect(jestTesting.testing01(1, 2)).toBeGreaterThanOrEqual(3);
  });

  test('adds 1 + 2 to equal 3 (toBeLessThan)', () => {
    expect(jestTesting.testing01(1, 2)).toBeLessThan(4);
  });

  test('adds 1 + 2 to equal 3 (toBeLessThanOrEqual)', () => {
    expect(jestTesting.testing01(1, 2)).toBeLessThanOrEqual(3);
  });

  test('adds 1 + 2 to equal 3 (toBeCloseTo)', () => {
    expect(jestTesting.testing01(1, 2)).toBeCloseTo(3);
  });

  test('test Array', () => {
    const arrayA = ['A', 'B', 'C'];
    expect(arrayA).toContain('B');
  });

  test('test toBeTruthy', () => {
    expect(true).toBeTruthy();
  });

  test('test toBeFalsy', () => {
    expect(false).toBeFalsy();
  });

  test('test toBeNull', () => {
    expect(null).toBeNull();
  });

  test('test toBeUndefined', () => {
    expect(undefined).toBeUndefined();
  });

  test('test toBeDefined', () => {
    expect(null).toBeDefined();
  });
});


