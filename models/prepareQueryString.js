function PrepareQueryString(query) {
  this.query = query;
}

  PrepareQueryString.prototype.splitQueryString = function() {
    this.query = this.query.split(' ');
  };


module.exports = PrepareQueryString;
