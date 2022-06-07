var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = someInstance.size();

    storage[size] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size();
    var deleted = storage[size - 1];

    delete storage[size - 1];
    return deleted;
  };

  someInstance.size = function() {
    var entries = Object.entries(storage).length;

    return entries;
  };

  return someInstance;
};
