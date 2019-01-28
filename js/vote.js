
function addHeart(e){
    // var voteNum=document.getElementsByClassName("voteNum")[i];
    e.target.parentNode.children[4].innerText=parseInt(e.target.parentNode.children[4].innerText)+1;
    // voteNum.innerText=parseInt(voteNum.innerText)+1;
    console.log(e.target.parentNode.children[4]);


}
function init(){
    var heart =document.getElementsByClassName("heart");
    for(var i = 0; i < heart.length; i++){
    

    heart[i].addEventListener("click",addHeart,false);
    }
}

window.addEventListener("load",init,false);