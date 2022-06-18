describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set._add).to.be.a('function');
    expect(set._contains).to.be.a('function');
    expect(set._remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set._add('Susan Sarandon');
    set._add('Danny Glover');
    expect(set._contains('Danny Glover')).to.equal(true);
    expect(set._contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set._add('Mel Gibson');
    set._remove('Mel Gibson');
    expect(set._contains('Mel Gibson')).to.equal(false);
  });

  it('should remove values from a set regardless case sensitivity', function() {
    set._add('Hello world');
    set._add('Hello World');
    set._remove('Hello World');
    expect(set._contains('Hello world')).to.equal(true);
  });

});
