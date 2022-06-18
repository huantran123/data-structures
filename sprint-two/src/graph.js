

// Instantiate a new graph
var Graph = function() {
  this._value = null;
  this._children = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype._addNode = function(node) {
  var newNode = new Graph();
  this._children[node] = newNode;
  newNode._value = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype._contains = function(node) {
  if (this._children[node] === undefined) {
    return false;
  } else {
    return true;
  }
};

// Removes a node from the graph.
Graph.prototype._removeNode = function(node) {
  delete this._children[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype._hasEdge = function(fromNode, toNode) {
  var isContained = false;
  if (this._children[fromNode] === undefined || this._children[toNode] === undefined) {
    return false;
  } else if (this._children[fromNode]._children[toNode] === this._children[toNode] && this._children[toNode]._children[fromNode] === this._children[fromNode]) {
    isContained = true;
  } else {
    isContained = false;
  }
  return isContained;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype._addEdge = function(fromNode, toNode) {
  this._children[fromNode]._children[toNode] = this._children[toNode];
  this._children[toNode]._children[fromNode] = this._children[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype._removeEdge = function(fromNode, toNode) {
  delete this._children[fromNode]._children[toNode];
  delete this._children[toNode]._children[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype._forEachNode = function(cb) {
  for (var i in this._children) {
    cb(i);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode => O(1)
  contains => O(1)
  removeNode => O(1)
  hasEdge => O(1)
  addEdge => O(1)
  removeEdge => O(1)
  forEachNode => O(n)
 */


