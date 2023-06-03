const {AsyncLocalStorage, AsyncResource} = require('node:async_hooks');
const http = require('node:http');

const asyncLocalStorage = new AsyncLocalStorage();

/**
 * Testing Logging
 * @param {*} msg - write the message to log file.
 */
function logWithId(msg) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) => {
  asyncLocalStorage.run(idSeq++, () => {
    logWithId('start');
    setImmediate(() => {
      logWithId('finish');
      res.end();
    });
  });
}).listen(8081);

http.get('http://localhost:8081');
http.get('http://localhost:8081');

// Testing asyncLocalStorage.snapshot()
const runInAsyncScope = asyncLocalStorage.run(
    123, () => asyncLocalStorage.snapshot(),
);
const result = asyncLocalStorage.run(
    321, () => runInAsyncScope(() => asyncLocalStorage.getStore()),
);
console.log(result); // returns 123

// Testing asyncLocalStorage.enterWith
const store = {id: 1};
asyncLocalStorage.enterWith(store);

/**
 * Database Query
 */
class DBQuery extends AsyncResource {
  /**
   * Constructor for DB Query
   * @param {*} db - Database Object
   */
  constructor(db) {
    super('DBQuery');
    this.db = db;
  }

  /**
   * Get Info
   * @param {*} query - SQL Script
   * @param {*} callback - Return Process
   */
  getInfo(query, callback) {
    this.db.get(query, (err, data) => {
      this.runInAsyncScope(callback, null, err, data);
    });
  }

  /**
   * Close Database
   */
  close() {
    this.db = null;
    this.emitDestroy();
  }
}
const dbQuery = new DBQuery('db');
dbQuery.close();
