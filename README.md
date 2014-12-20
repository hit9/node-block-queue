Nodejs Blocking Queue
----------------------

Simple in-process blocking FIFO queue implementation for nodejs.

```
npm install block-queue
```

Example
-------

```js
var queue = require('block-queue');

var q = queue({cocurrency: 10}, function(task, done) {
    // working on task..
    done();
});

q.push('task1');
q.push('task2');
q.push('task3');
```

License
-------

MIT.