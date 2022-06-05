class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var objectLength = Object.keys(this.storage);
    this.storage[objectLength.length] = value;
  }

  pop() {
    var objectLength = Object.keys(this.storage);
    var lastValue = this.storage[objectLength.length - 1];
    delete this.storage[objectLength.length - 1];
    return lastValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}