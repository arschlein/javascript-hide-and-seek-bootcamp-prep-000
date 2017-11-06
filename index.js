function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target");
}
function increaseRankBy(n){
  const rankedLists = document.querySelector(".ranked-list");

  for(let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[0].children
  }
  for(let j = 0; j < children.length; j++){
    let text = parseInt(text[0].innerHTML) + n
  }
}
