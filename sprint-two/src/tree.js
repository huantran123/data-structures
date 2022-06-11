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
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var current = this;
  var isContain = false;

  if (current.value === target) {
    return true;
  } else {
    if (current.children.length > 0) {
      for (var i = 0; i < current.children.length; i++) {
        var child = current.children[i];
        isContain = isContain || child.contains(target);
      }
    }
    return isContain;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
   addChild => O(1)
   contains => O(n)
 */
