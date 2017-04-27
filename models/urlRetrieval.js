function urlRetrieval(data) {
  var urls = [];
  for(var i = 0; i < data.length; i++) {
    urls.push(data[i].weburl);
  }
  return urls;
}

module.exports = urlRetrieval;
