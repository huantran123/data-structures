var Tree = function(value) {
  var newTree = {};
  newTree._value = value;

  // your code here
  newTree._children = []; // fix me
  _.extend(newTree, treeMethods);

  newTree._parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods._addChild = function(value) {
  var node = Tree(value);
  if (this._value === null) {
    node._parent = null;
  } else {
    node._parent = this;
  }
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

treeMethods._removeFromParent = function() {
  console.log(this._parent._children.length);
  // Remove current node from parent
  for (var i = 0; i < this._parent._children.length; i++) {
    if (this._parent._children[i]._value === this._value) {
      this._parent._children.splice(i, 1);

    }
  }

  // Remove parent of current node
  this._parent = null;
};

treeMethods._traverse = function(callback) {
  if (this._value) {
    callback(this._value);
  }
  if (this._children.length === 0) {
    return;
  }
  for (var i = 0; i < this._children.length; i++) {
    this._children[i]._traverse(callback);

  }
};


/* Complexity: What is the time complexity of the above functions?
   addChild => O(1)
   contains => O(n)
*/
