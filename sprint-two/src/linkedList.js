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
    var formerHeadValue = list.head.value;
    list.head = list.head.next;
    return formerHeadValue;
  };

  list.contains = function(target) {
    var isContained = false;
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        isContained = true;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    return isContained;
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
 */

// addToTail: O(1)
// removeHead: O(1)
// contains: O(n)
