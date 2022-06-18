var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var objectLength = Object.keys(this.storage);
    this.storage[objectLength.length] = value;
  },
  pop: function() {
    var objectLength = Object.keys(this.storage);
    var lastValue = this.storage[objectLength.length - 1];
    delete this.storage[objectLength.length - 1];
    return lastValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  },

};





