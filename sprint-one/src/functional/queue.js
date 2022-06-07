var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add a value to the back of the queue
    var size = someInstance.size();

    storage[size] = value;
  };


  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue

    var keys = Object.keys(storage);
    var deleted = storage[keys[0]];

    delete storage[keys[0]];

    for (var key in storage) {
      var value = storage[key];
      storage[key - 1] = value;
      delete storage[key];
    }
    return deleted;
  };

  someInstance.size = function() {
    var size = Object.entries(storage).length;
    return size;
  };

  return someInstance;
};




