const asyncHooks = require('node:async_hooks');
const fs = require('node:fs');
const net = require('node:net');
const {fd} = process.stdout;

let indent = 0;
asyncHooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = asyncHooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    fs.writeSync(
        fd,
        `${indentStr}${type}(${asyncId}):` +
      ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
  before(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}before:  ${asyncId}\n`);
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}after:  ${asyncId}\n`);
  },
  destroy(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}destroy:  ${asyncId}\n`);
  },
}).enable();

net.createServer(() => {}).listen(8081, () => {
  // Let's wait 10ms before logging the server started.
  setTimeout(() => {
    console.log('>>>', asyncHooks.executionAsyncId());
  }, 10);
});
