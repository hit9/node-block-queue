var queue = require('./index');

var q = queue(1, function(task, done) {
  setTimeout(function() {
    console.log('done');
    done();
  }, task * 1000);
});

for (var i = 0; i < 10; i++) {
  q.push(1);
}

/********* All tasks should be done in ~10s **********/
