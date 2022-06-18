var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storageKeysList = Object.keys(storage);
    storage[storageKeysList.length] = value;
  };


  someInstance.dequeue = function() {
    // An array to store all keys of the storage [0, 1, 2, ...]
    var storageKeysList = Object.keys(storage);
    // An array to store all values of the storage ['a', 'b', 'c', ...]
    var storageValuesList = Object.values(storage);
    // A value to store the first value which is the one to be dequeued
    var dequeuedValue = storageValuesList[0];
    // Remove the last property of the storage to decrease its size by 1
    delete storage[storageKeysList.length - 1];
    // Remove the last keys in the array
    storageKeysList.pop();
    // Remove the first value in the array
    storageValuesList.shift();
    // Iterate over the key array to update the keys of the remained values
    // so storage will always start with key 0
    for (var i = 0; i < storageKeysList.length; i++) {
      storage[i] = storageValuesList[i];
    }
    //return the dequeued value
    return dequeuedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};




