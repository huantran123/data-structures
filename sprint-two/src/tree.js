var Tree = function(value) {
  var newTree = {};
  newTree._value = value;

  // your code here
  newTree._children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods._addChild = function(value) {
  var node = Tree(value);
  this._children.push(node);
};

treeMethods._contains = function(target) {
  var current = this;
  var isContain = false;

  if (current._value === target) {
    return true;
  } else {
    if (current._children.length > 0) {
      for (var i = 0; i < current._children.length; i++) {
        var child = current._children[i];
        isContain = isContain || child._contains(target);
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
