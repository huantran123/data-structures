var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var node = this.head;
    list.head = node.next;
    return node.value;
  };

  list.contains = function(target) {
    var isContain = false;
    var current = list.head;

    while (current !== null) {
      if (current.value === target) {
        isContain = true;
        break;
      } else {
        current = current.next;
      }
    }
    return isContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail => O(1)
  removeHead => O(1)
  contains => O(N)
 */
