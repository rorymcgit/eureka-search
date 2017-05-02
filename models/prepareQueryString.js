function PrepareQueryString(query) {
  this.query = query;
  this.nonSearchWords = ['a', 'an', 'the', 'is', 'and', 'or', 'www.', 'he', 'she', 'it', 'they', 'i'];
  this.splitQueryString();
}

PrepareQueryString.prototype.splitQueryString = function() {
  this.query = this.query.split(' ');
  this.removeNonSearchWords();
};

PrepareQueryString.prototype.removeNonSearchWords = function() {
  this.query = this.query.difference(this.nonSearchWords);
  this.appendPercentageCharacter();
};

PrepareQueryString.prototype.appendPercentageCharacter = function() {
  this.query = this.query.map(function(word) {
    return "%" + word + "%";
  });
};

Array.prototype.difference = function(wordsToRemove) {
  return this.filter(function(word) {
    return wordsToRemove.indexOf(word) < 0;
  });
};

module.exports = PrepareQueryString;
