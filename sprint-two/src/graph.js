

// Instantiate a new graph
var Graph = function() {
  this.value = null;
  this.children = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph();
  this.children[node] = newNode;
  newNode.value = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.children[node] === undefined) {
    return false;
  } else {
    return true;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.children[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isContained = false;
  if (this.children[fromNode].children[toNode] === this.children[toNode] && this.children[toNode].children[fromNode] === this.children[fromNode]) {
    isContained = true;
  } else {
    isContained = false;
  }
  return isContained;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.children[fromNode].children[toNode] = this.children[toNode];
  this.children[toNode].children[fromNode] = this.children[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.children[fromNode].children[toNode];
  delete this.children[toNode].children[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i in this.children) {
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


