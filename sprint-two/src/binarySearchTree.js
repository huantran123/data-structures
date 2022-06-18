var BinarySearchTree = function(value) {
  var newBST = Object.create(binarySearchTreeMethods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var node = BinarySearchTree(value);
  var insertFunction = function(current) {
    if (value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        insertFunction(current.left);
      }
    } else if (value > current.value) {
      if (current.right === null) {
        current.right = node;
      } else {
        insertFunction(current.right);
      }
    }
  };
  insertFunction(this);
};

binarySearchTreeMethods.contains = function(value) {
  var containFunction = function(currentNode) {
    if (currentNode.value === value) {
      return true;
    } else if (currentNode.left === null && currentNode.right === null) {
      return false;
    } else if (currentNode.value > value) {
      if (currentNode.left === null) {
        return false;
      }
      return containFunction(currentNode.left);
    } else if (currentNode.value < value) {
      if (currentNode.right === null) {
        return false;
      }
      return containFunction(currentNode.right);
    }
  };
  return containFunction(this);
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  var current = this;
  cb(this.value);

  if (current.left !== null) {
    current.left.depthFirstLog(cb);
  }

  if (current.right !== null) {
    current.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert O(n)
  contains O(n)
  depthFirstLog O(n)
 */
