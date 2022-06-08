var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // method
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var size = this.size();
  this.storage[size] = value;
};

stackMethods.pop = function() {
  var size = this.size();
  if (size === 0) {
    return;
  }
  var deleted = this.storage[size - 1];
  delete this.storage[size - 1];

  return deleted;
};

stackMethods.size = function() {
  var entries = Object.entries(this.storage);

  return entries.length;
};









