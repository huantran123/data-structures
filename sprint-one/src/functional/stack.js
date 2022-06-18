var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var objectLength = Object.keys(storage);
    storage[objectLength.length] = value;
  };

  someInstance.pop = function() {
    var objectLength = Object.keys(storage);
    var lastValue = storage[objectLength.length - 1];
    delete storage[objectLength.length - 1];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
