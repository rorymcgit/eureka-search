function PrepareQueryString(query) {
  this.query = query;
  this.nonSearchWords = ['a', 'an', 'the', 'is', 'and', 'or', 'www.', 'he', 'she', 'it', 'they', 'i'];
}

PrepareQueryString.prototype.splitQueryString = function() {
  this.query = this.query.split(' ');
  this.appendPercentageCharacter();
};

PrepareQueryString.prototype.appendPercentageCharacter = function() {
  this.query = this.query.map(function(word) {
    return "%" + word + "%";
  });
};

PrepareQueryString.prototype.removeNonSearchWords = function() {
    this.query = this.query.difference(this.nonSearchWords);
};

Array.prototype.difference = function(wordsToRemove) {
  return this.filter(function(word) {
    return wordsToRemove.indexOf(word) < 0;
  });
};




module.exports = PrepareQueryString;
