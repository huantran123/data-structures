var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(val) {
  var node = BinarySearchTree(val);
  var insertNode = function(currentNode) {
    if (val < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        insertNode(currentNode.left);
      }
    } else if (val > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = node;
      } else {
        insertNode(currentNode.right);
      }
    }
  };
  insertNode(this);
};

BinarySearchTree.prototype.contains = function(val) {
  var currentNode = this;

  if (val === currentNode.value) {
    return true;
  }

  if (currentNode.left === null && currentNode.right === null) {
    return false;
  }

  if (val < currentNode.value) {
    if (currentNode.left === null) {
      return false;
    }
    return currentNode.left.contains(val);
  } else if (val > currentNode.value) {
    if (currentNode.right === null) {
      return false;
    }
    return currentNode.right.contains(val);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var currentNode = this;

  // Execute call back on the current node's value
  cb(this.value);

  // Recursively execute callback if the current node has left branch
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  // Recursively execute callback if the current node has right branch
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
