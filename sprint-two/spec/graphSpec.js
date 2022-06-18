describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph._addNode).to.be.a('function');
    expect(graph._contains).to.be.a('function');
    expect(graph._removeNode).to.be.a('function');
    expect(graph._hasEdge).to.be.a('function');
    expect(graph._addEdge).to.be.a('function');
    expect(graph._removeEdge).to.be.a('function');
    expect(graph._forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph._addNode(1);
    expect(graph._contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph._addNode(2);
    expect(graph._contains(2)).to.equal(true);
    graph._removeNode(2);
    expect(graph._contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph._addNode(2);
    graph._addNode(1);
    graph._addNode(3);
    graph._addEdge(3, 2);
    expect(graph._hasEdge(3, 2)).to.equal(true);
    expect(graph._hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph._addNode(4);
    graph._addNode(5);
    graph._addEdge(5, 4);
    expect(graph._hasEdge(4, 5)).to.equal(true);
    graph._removeEdge(5, 4);
    expect(graph._hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph._addNode(4);
    graph._addNode(5);
    graph._addEdge(5, 4);
    expect(graph._hasEdge(4, 5)).to.equal(true);
    graph._removeNode(5);
    expect(graph._hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph._addEdge(item, 5);
    };
    graph._addNode(5);
    graph._addNode(2);
    graph._addNode(1);
    graph._addNode(3);
    graph._forEachNode(connectToFive);
    expect(graph._hasEdge(2, 5)).to.equal(true);
    expect(graph._hasEdge(1, 5)).to.equal(true);
    expect(graph._hasEdge(3, 5)).to.equal(true);
    expect(graph._hasEdge(5, 5)).to.equal(true);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph._addNode(1);
    graph._addNode(2);
    graph._addNode(3);
    graph._addNode(4);
    graph._addEdge(1, 4);
    graph._addEdge(2, 3);
    graph._addEdge(3, 4);
    expect(graph._hasEdge(1, 3)).to.equal(false);
    graph._removeNode(4);
    expect(graph._hasEdge(1, 4)).to.equal(false);
    graph._removeNode(2);
    expect(graph._hasEdge(2, 3)).to.equal(false);
  });
});
