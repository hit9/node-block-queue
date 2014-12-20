/**
 * Nodejs in-process blocking FIFO queue implementation.
 * MIT (c) Chao Wang (hit9@icloud.com)
 *
 * Example:
 *
 *   queue = new Queue(function(task, done) {
 *     // work, e.g console.log(task)
 *     done();
 *   });
 *
 *   queue.push('my-task')
 */


/**
 * @constructor Queue([options, ]reducer)
 * @param {Object} options
 * @param {Function} reducer
 *
 * @options
 *
 *   @key {Number} cocurrency  // optional, default: 1
 *
 * @reducer
 *
 *   @param {Mixed} task
 *   @param {Function} done
 */
function Queue(options, reducer) {
  if (arguments.length === 1 && typeof options === 'function') {
    reducer = options;
    options = {};
  }

  this.cocurrency = options.cocurrency || 1;
  this.reducer = reducer;

  this.__queue = [];
  this.__pending = 0;
}


/**
 * @public q.push(task)
 * @param {Mixed} task
 */
Queue.prototype.push = function(task) {
  this.__queue.push(task);
  return this.__reduce();
};


/**
 * @private q.__reduce()
 */
Queue.prototype.__reduce = function() {
  var self = this;
  while (this.__pending < this.cocurrency) {
    var task = this.__queue.shift();
    this.__pending++;

    this.reducer(task, function() {
      self.__pending--;
      return self.__reduce();
    });  // jshint ignore: line
  }
};

exports = module.exports = function(options, reducer) {
  return new Queue(options, reducer);
};
