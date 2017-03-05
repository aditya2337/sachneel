// https://www.medizawiki.org/wiki/API:Main_page
var searchText;
function getResults () {
  searchText = document.getElementById('search-text').value;
  var el = document.getElementById('search-results');
  a().then(res => {
    // console.log(res.query.search[0].title);
    res.query.search.map(val => {
      var h1 = document.createElement('H1');
      var p = document.createElement('P');
      var title = document.createTextNode(val.title);
      var snippet = document.createTextNode(val.snippet);
      h1.appendChild(title);
      p.appendChild(snippet);
      el.appendChild(h1);
      el.appendChild(p);
      // console.log(val.title, val.snippet);
    });
  });
}

function a () {
  return fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${searchText}`)
    .then(storage => storage.json())
  ;
}
