var LinkedList = function() {
  var list = {};
  list._head = null;
  list._tail = null;

  list._addToTail = function(value) {
    var node = Node(value);

    if (list._tail === null) {
      list._tail = node;
      list._head = node;
    } else {
      list._tail._next = node;
      list._tail = node;
    }
  };

  list._removeHead = function() {
    var node = this._head;
    list._head = node._next;
    return node._value;
  };

  list._contains = function(target) {
    var isContain = false;
    var current = list._head;

    while (current !== null) {
      if (current._value === target) {
        isContain = true;
        break;
      } else {
        current = current._next;
      }
    }
    return isContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node._value = value;
  node._next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail => O(1)
  removeHead => O(1)
  contains => O(N)
 */
