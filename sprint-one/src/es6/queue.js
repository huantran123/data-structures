class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var size = this.size();
    this.storage[size] = value;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var deleted = this.storage[keys[0]];
    delete this.storage[keys[0]];

    for (var key in this.storage) {
      var value = this.storage[key];
      delete this.storage[key];
      this.storage[key - 1] = value;
    }

    return deleted;
  }

  size() {
    var entries = Object.entries(this.storage);
    return entries.length;
  }
}
