var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var size = this.size();
  this.storage[size] = value;
};

Queue.prototype.dequeue = function(value) {
  var keys = Object.keys(this.storage);
  var deleted = this.storage[keys[0]];
  delete this.storage[keys[0]];

  for (var key in this.storage) {
    var value = this.storage[key];
    delete this.storage[key];
    this.storage[key - 1] = value;
  }

  return deleted;
};

Queue.prototype.size = function(value) {
  var entries = Object.entries(this.storage);
  return entries.length;
};

