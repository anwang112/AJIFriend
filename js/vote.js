
function addHeart(e){
    // var voteNum=document.getElementsByClassName("voteNum");
    e.target.parentNode.children[5].innerText=parseInt(e.target.parentNode.children[5].innerText)+1;
    // voteNum[i].innerText=parseInt(voteNum.innerText)+1;
    console.log(e.target.parentNode.children[5]);
}

function showHeart(e){
    // var bigHeart=document.getElementsByClassName("bigHeart");
    e.target.parentNode.children[6].style.display=="block";

    console.log("in");
    e.target.parentNode.children[6].addEventListener("click",addHeart,false);

}
function hiddenHeart(e){
    // var bigHeart=document.getElementsByClassName("bigHeart");
    // bigHeart[j].style.display="none";
    e.target.parentNode.children[6].style.display=="none";

    console.log("out");

}
function init(){
    var heart =document.getElementsByClassName("heart");
    for(var i = 0; i < heart.length; i++){
        heart[i].addEventListener("click",addHeart,false);
    }
    var card=document.getElementsByClassName("card");
    for(var j=0;j<card.length;j++){
        card[j].addEventListener("mouseover",showHeart,false);
        card[j].addEventListener("mouseout",hiddenHeart,false);
    }
    

}

window.addEventListener("load",init,false);