var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype._add = function(item) {
  var _key = item;
  var _value = item;
  this._storage[_key] = _value;
};

setPrototype._contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  } else {
    return false;
  }
};

setPrototype._remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add:O(1)
  contains: O(1)
  remove: O(1)
 */
