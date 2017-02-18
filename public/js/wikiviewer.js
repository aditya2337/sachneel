// https://www.medizawiki.org/wiki/API:Main_page
var empty;
fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=earth')
  .then((res) => {
    empty = res;
  });
console.log(empty);
