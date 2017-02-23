function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var nest = document.querySelector('#nested .target');
  return nest;
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i], 10) + 1
  }
  return ranks
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deep = grandNode.children[0];
  for (let i = 0; i < deep.children[i]; i++) {
    deep = deepestNode.children[0]
  }
  return deep
}