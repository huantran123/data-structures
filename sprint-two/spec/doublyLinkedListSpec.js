describe('DoublylinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublylinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublylinkedList).to.have.property('_head');
    expect(doublylinkedList).to.have.property('_tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(doublylinkedList._addToTail).to.be.a('function');
    expect(doublylinkedList._removeHead).to.be.a('function');
    expect(doublylinkedList._contains).to.be.a('function');
    expect(doublylinkedList._addToHead).to.be.a('function');
    expect(doublylinkedList._removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkedList._addToTail(4);
    expect(doublylinkedList._tail._value).to.equal(4);
    doublylinkedList._addToTail(5);
    expect(doublylinkedList._tail._value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedList._addToTail(4);
    doublylinkedList._addToTail(5);
    expect(doublylinkedList._head._value).to.equal(4);
    doublylinkedList._removeHead();
    expect(doublylinkedList._head._value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedList._addToHead(4);
    doublylinkedList._addToHead(5);
    expect(doublylinkedList._head._value).to.equal(5);
    doublylinkedList._removeHead();
    expect(doublylinkedList._head._value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkedList._addToTail(4);
    expect(doublylinkedList._removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkedList._addToTail(4);
    doublylinkedList._addToTail(5);
    expect(doublylinkedList._contains(4)).to.equal(true);
    expect(doublylinkedList._contains(5)).to.equal(true);
    expect(doublylinkedList._contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedList._addToTail(4);
    doublylinkedList._addToTail(5);
    doublylinkedList._removeHead();
    expect(doublylinkedList._contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should contain a value that was added, not contain after removing, and contain after adding back', function() {
    doublylinkedList._addToTail(3);
    doublylinkedList._addToTail(4);
    doublylinkedList._addToTail(5);
    expect(doublylinkedList._contains(3)).to.equal(true);
    doublylinkedList._removeHead();
    expect(doublylinkedList._contains(3)).to.equal(false);
    doublylinkedList._addToTail(3);
    expect(doublylinkedList._contains(3)).to.equal(true);
  });

  it('should contain a value that was added', function() {
    doublylinkedList._addToTail(4);
    doublylinkedList._addToTail(5);
    doublylinkedList._addToHead(3);
    expect(doublylinkedList._contains(3)).to.equal(true);
    expect(doublylinkedList._head._value).to.equal(3);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedList._addToTail(4);
    doublylinkedList._addToHead(3);
    doublylinkedList._addToHead(2);
    doublylinkedList._removeTail();
    expect(doublylinkedList._contains(4)).to.equal(false);
    expect(doublylinkedList._tail._value).to.equal(3);
  });
});
