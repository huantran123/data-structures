var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var size = this.size();
  this.storage[size] = value;
};

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  var entries = Object.entries(this.storage);
  return entries.length;
};


