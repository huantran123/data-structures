class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var storageKeysList = Object.keys(this.storage);
    this.storage[storageKeysList.length] = value;
  }

  dequeue() {
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
  }

  size() {
    return Object.keys(this.storage).length;
  }
