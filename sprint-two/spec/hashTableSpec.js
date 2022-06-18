describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable._insert).to.be.a('function');
    expect(hashTable._remove).to.be.a('function');
    expect(hashTable._retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable._insert('Steven', 'Seagal');
    expect(hashTable._retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable._insert('Steven', 'Spielberg');
    expect(hashTable._retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable._insert('Bob', 'Loblaw');
    hashTable._insert('Bob', 'Barker');
    expect(hashTable._retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable._insert('Steven', 'Tyler');
    hashTable._remove('Steven');
    expect(hashTable._retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable._insert(v1, v1);
    hashTable._insert(v2, v2);
    expect(hashTable._retrieve(v1)).to.equal(v1);
    expect(hashTable._retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should not contain values that were removed', function() {
    hashTable._insert('Yui', 'Murayama');
    hashTable._insert('Huan', 'Tran');
    hashTable._remove('Yui');
    expect(hashTable._retrieve('Yui')).to.equal(undefined);
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  xit ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable._insert(firstName, lastName);
      expect(hashTable._retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  xit ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable._insert(firstName, lastName);
      expect(hashTable._retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable._remove('George');
    hashTable._remove('Dr.');
    hashTable._remove('Steven');
    hashTable._remove('John');
    hashTable._remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
