const assert = require('node:assert');

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual',
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
  assert.doesNotMatch('I will fail', /fail/);
  (async () => {
    await assert.doesNotReject(
      async () => {
        throw new TypeError('Wrong value');
      },
      SyntaxError,
    );
  })();
  assert.doesNotThrow(
    () => {
      throw new TypeError('Wrong value');
    },
    SyntaxError,
  );
  assert.equal(1, 1);
  assert.fail('boom');
  assert.ifError(null);
  assert.match('I will pass', /pass/);
  assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
  assert.notEqual(1, 2);
  assert.notStrictEqual(1, 2);
  assert.ok(true);
  (async () => {
    await assert.rejects(
      async () => {
        throw new TypeError('Wrong value');
      },
      {
        name: 'TypeError',
        message: 'Wrong value',
      },
    );
  })();
  assert.strictEqual(1, 1);
  assert.throws(
    () => {
      throw new Error('Wrong value');
    },
    /^Error: Wrong value$/,
  );
  
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}

const tracker = new assert.CallTracker();
function func() {}
const callsfunc = tracker.calls(func, 1);
