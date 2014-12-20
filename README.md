Nodejs Blocking Queue
----------------------

Nodejs in-process blocking FIFO queue implementation.

```
npm install block-queue
```

Example
-------

```js
var queue = require('block-queue');

var q = queue(1, function(task, done) {
    // working on task..
    done();
});

q.push('task1');
q.push('task2');
q.push('task3');
```

API Ref
-------

### queue([cocurrency, ]reducer)

   - **cocurrency**, *integer*, optional, default: 1
   - **reducer**, *function*, required, should be called with 2 parameters: task, done.

### queue.push(task)

   - **task**, *mixed*, required.

License
-------

MIT.
