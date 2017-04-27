function urlRetrieval(data) {
  var urls = [];
  for(var i = 0; i < data.length; i++) {
    urls.push(data[i].url);
  }
  return urls;
}

module.exports = urlRetrieval;
