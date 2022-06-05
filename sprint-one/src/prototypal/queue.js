var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var storageKeysList = Object.keys(this.storage);
    this.storage[storageKeysList.length] = value;
  },
  dequeue: function() {
    var storageKeysList = Object.keys(this.storage);
    var storageValuesList = Object.values(this.storage);
    var dequeuedValue = storageValuesList[0];
    delete this.storage[storageKeysList.length - 1];
    storageKeysList.pop();
    storageValuesList.shift();
    for (var i = 0; i < storageKeysList.length; i++) {
      this.storage[i] = storageValuesList[i];
    }
    return dequeuedValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


