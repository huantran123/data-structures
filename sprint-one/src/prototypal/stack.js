var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var size = this.size();
  this.storage[size] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var deleted = this.storage[keys[keys.length - 1]];
  delete this.storage[keys[keys.length - 1]];

  return deleted;
};

stackMethods.size = function() {
  var entries = Object.entries(this.storage);
  return entries.length;
};


