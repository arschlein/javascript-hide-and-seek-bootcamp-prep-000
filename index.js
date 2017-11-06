function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target");
}
function increaseRankBy(n){
  const rankedLists = document.querySelector(".ranked-list");

  for(i = 0; i < rankedLists.length; i++){
    let children = rankedLists[0].children
  }
  for(j = 0; j < children.length; j++){
    let text = parseInt(text[0].innerHTML) + n
  }
}
