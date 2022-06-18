describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('_head');
    expect(linkedList).to.have.property('_tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList._addToTail).to.be.a('function');
    expect(linkedList._removeHead).to.be.a('function');
    expect(linkedList._contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList._addToTail(4);
    expect(linkedList._tail._value).to.equal(4);
    linkedList._addToTail(5);
    expect(linkedList._tail._value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList._addToTail(4);
    linkedList._addToTail(5);
    expect(linkedList._head._value).to.equal(4);
    linkedList._removeHead();
    expect(linkedList._head._value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList._addToTail(4);
    expect(linkedList._removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList._addToTail(4);
    linkedList._addToTail(5);
    expect(linkedList._contains(4)).to.equal(true);
    expect(linkedList._contains(5)).to.equal(true);
    expect(linkedList._contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList._addToTail(4);
    linkedList._addToTail(5);
    linkedList._removeHead();
    expect(linkedList._contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should contain a value that was added, not contain after removing, and contain after adding back', function() {
    linkedList._addToTail(3);
    linkedList._addToTail(4);
    linkedList._addToTail(5);
    expect(linkedList._contains(3)).to.equal(true);
    linkedList._removeHead();
    expect(linkedList._contains(3)).to.equal(false);
    linkedList._addToTail(3);
    expect(linkedList._contains(3)).to.equal(true);
  });
});
