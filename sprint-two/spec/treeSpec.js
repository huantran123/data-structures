describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree._addChild).to.be.a('function');
    expect(tree._contains).to.be.a('function');
    expect(tree.hasOwnProperty('_value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree._addChild(5);
    expect(tree._children[0]._value).to.equal(5);
    console.log(tree._children[0]);
    expect(tree._children[0]._parent._value).to.equal(undefined);
  });

  it('should return true for a value that the tree contains', function() {
    tree._addChild(5);
    expect(tree._contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree._addChild(5);
    expect(tree._contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree._addChild(5);
    tree._children[0]._addChild(6);
    expect(tree._children[0]._children[0]._value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree._addChild(5);
    tree._addChild(6);
    tree._children[0]._addChild(7);
    tree._children[1]._addChild(8);
    expect(tree._contains(7)).to.equal(true);
    expect(tree._contains(8)).to.equal(true);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree._addChild(5);
    tree._children[0]._addChild(2);
    tree._children[0]._children[0]._addChild(4);
    tree._children[0]._addChild(7);
    tree._children[0]._children[1]._addChild(8);
    expect(tree._contains(4)).to.equal(true);
    expect(tree._contains(8)).to.equal(true);
  });

  it('should not contain children after removing from its parent', function() {
    tree._addChild(5);
    tree._children[0]._addChild(2);
    tree._children[0]._addChild(7);
    tree._children[0]._children[1]._removeFromParent();
    expect(tree._contains(7)).to.equal(false);
    expect(tree._children[0]._children.length).to.equal(1);
  });

  it('should traverse over the tree and apply callback', function() {
    var array = [];
    var callback = function(item) {
      array.push(item);
    };

    tree._addChild(5);
    tree._children[0]._addChild(2);
    tree._children[0]._addChild(7);

    tree._traverse(callback);
    expect(array).to.eql([5, 2, 7]);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[1].addChild(8);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(9);
    expect(tree.contains(9)).to.equal(true);
  });

});
