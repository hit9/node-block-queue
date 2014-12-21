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

See also: [example-1.js](example-1.js) and [example-2.js](example-2.js).

API Ref
-------

### queue([cocurrency, ]reducer)

   - **cocurrency**, *integer, optional, default: 1*
   - **reducer**, *function, required* should be called with 2 parameters: task, done.

### queue.push(task)

   - **task**, *mixed*, required.

### queue.clear()

License
-------

MIT.
