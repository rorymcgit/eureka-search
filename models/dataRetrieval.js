function dataRetrieval(data) {
  var urls = [];
  for(var i = 0; i < data.length; i++) {
    urls.push(data[i].weburl);
    urls.push(data[i].title);
    urls.push(data[i].description);
    urls.push('\n');
  }
  return urls;
}

module.exports = dataRetrieval;
