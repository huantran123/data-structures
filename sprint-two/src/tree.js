var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var currentNode = this;
  var isContained = false;

  if (currentNode.value === target) {
    return true;
  } else {
    if (currentNode.children.length > 0) {
      for (var i = 0; i < currentNode.children.length; i++) {
        var childNode = currentNode.children[i];
        isContained = isContained || childNode.contains(target);
      }
    }
    return isContained;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: O(1)
// contains: O(n)
