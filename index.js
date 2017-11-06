function getFirstSelector(selector){
  return document.querySelectorAll(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target");
}
function increaseRankBy(n){
  const rankedLists = document.querySelector(".ranked-list");

  for(let i = 0, l = rankedLists.length; i < l; i++){
    let children = rankedLists[0].children

  for(let j = 0, k = children.length; j < k; j++){
    children[j] = parseInt(children[j].innerHTML) + n
  }
}
}
