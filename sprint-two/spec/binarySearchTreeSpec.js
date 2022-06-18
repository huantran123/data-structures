describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree._insert).to.be.a('function');
    expect(binarySearchTree._contains).to.be.a('function');
    expect(binarySearchTree._depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    binarySearchTree._insert(6);
    expect(binarySearchTree._left._right._value).to.equal(3);
    expect(binarySearchTree._right._left._value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    expect(binarySearchTree._contains(7)).to.equal(true);
    expect(binarySearchTree._contains(8)).to.equal(false);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(1)).to.equal(false);
    expect(binarySearchTree.contains(4)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    binarySearchTree._depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should  execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value + 1); };
    binarySearchTree._insert(7);
    binarySearchTree._insert(2);
    binarySearchTree._insert(4);
    expect(binarySearchTree._contains(4)).to.equal(true);
    expect(binarySearchTree._contains(2)).to.equal(true);
    binarySearchTree._depthFirstLog(func);
    expect(array).to.eql([6, 3, 5, 8]);
  });
});
