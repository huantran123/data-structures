var BinarySearchTree = function(value) {
  var newBST = Object.create(binarySearchTreeMethods);
  newBST._value = value;
  newBST._left = null;
  newBST._right = null;
  return newBST;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods._insert = function(value) {
  var node = BinarySearchTree(value);
  var insertFunction = function(current) {
    if (value < current._value) {
      if (current._left === null) {
        current._left = node;
      } else {
        insertFunction(current._left);
      }
    } else if (value > current._value) {
      if (current._right === null) {
        current._right = node;
      } else {
        insertFunction(current._right);
      }
    }
  };
  insertFunction(this);
};

binarySearchTreeMethods._contains = function(value) {
  var containFunction = function(currentNode) {
    if (currentNode._value === value) {
      return true;
    } else if (currentNode._left === null && currentNode._right === null) {
      return false;
    } else if (currentNode._value > value) {
      if (currentNode._left === null) {
        return false;
      }
      return containFunction(currentNode._left);
    } else if (currentNode._value < value) {
      if (currentNode._right === null) {
        return false;
      }
      return containFunction(currentNode._right);
    }
  };
  return containFunction(this);
};

binarySearchTreeMethods._depthFirstLog = function(cb) {
  var current = this;
  cb(this._value);

  if (current._left !== null) {
    current._left._depthFirstLog(cb);
  }

  if (current._right !== null) {
    current._right._depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert O(n)
  contains O(n)
  depthFirstLog O(n)
 */
