var DoublyLinkedList = function() {
  var list = LinkedList();

  list._addToTail = function(value) {
    var node = Node(value);

    if (list._tail === null) {

      list._tail = node;
      list._head = node;
    } else {
      list._tail._next = node;
      node._previous = list._tail;
      list._tail = node;
    }
  };

  list._removeHead = function() {
    var formerHead = list._head._value;
    if (list._head._next === null && list._head._previous === null) {
      list._head = null;
      list._tail = null;
      return formerHead;
    }
    list._head = list._head._next;
    list._head._previous = null;
    return formerHead;
  };

  list._addToHead = function(value) {
    var node = Node(value);

    if (list._head === null) {
      if (list._tail === null) {
        list._head = node;
        list._tail = node;
      }
    } else {
      list._head._previous = node;
      node._next = list._head;
      list._head = node;
    }
  };

  list._removeTail = function() {
    var formerTail = list._tail._value;
    if (list._tail._next === null && list._tail._previous === null) {
      list._tail = null;
      list._head = null;
      return formerTail;
    }

    list._tail = list._tail._previous;
    list._tail._next = null;
    return formerTail;
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail => O(1)
  removeHead => O(1)
  addToHead => O(1)
  removeTail => O(1)
  contains => O(N)
 */
