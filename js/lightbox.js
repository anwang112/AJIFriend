
//top的燈箱
function topLB(e){
    if( e.target.className.includes('top') ==  false){
        var parent = e.target.parentNode;
    }else{
        var parent = e.target;
    }
// 創建div
    var divTop=document.createElement("div");
    var wrap=document.getElementsByClassName("wrap")[0];
    divTop.className="top";
    divTop.id="LB";

    // 創建img 獲獎照片
    var imgTop=document.createElement("img");
    imgTop.src = parent.childNodes[1].src;
    // 創建img member
    var imgMem=document.createElement("img");
    imgMem.className="member";
    imgMem.src=parent.childNodes[3].src;
    // 創建會員帳號連結
    var aMem=document.createElement("a");
    aMem.src="#";
    aMem.innerText=parent.childNodes[5].innerText;
    // 創建 照片得票數
    var spanVote=document.createElement("span");
    spanVote.innerText=parent.childNodes[9].innerText;
    // 創建愛心數
    var imgHeart=document.createElement("img"); 
    imgHeart.className="heart";
    imgHeart.src =parent.childNodes[7].src;
    // 創建p
    var pContent=document.createElement("p");
    console.log(parent.childNodes[11]);
        // pContent.innerText=parent.childNodes[10].innerText;
    pContent.innerText="整個城市都是我們的伸展台";

    //創建svg關閉圖片
    var imgclose=document.createElement("img");
    imgclose.src="images/times-circle-32.png";
    imgclose.id="close";
    imgclose.addEventListener("click",closeTop,false);

    wrap.appendChild(divTop);
    divTop.appendChild(imgTop);
    divTop.appendChild(imgMem);
    divTop.appendChild(aMem);
    divTop.appendChild(imgHeart);
    divTop.appendChild(spanVote);
    divTop.appendChild(pContent);
    divTop.appendChild(imgclose);
}
function closeTop(){
    var wrap=document.getElementsByClassName("wrap")[0];
    var divTop=document.getElementById("LB");
    wrap.removeChild(divTop);
}
// card的燈箱
function cardLB(e){
    console.log(e.target);
    if( e.target.className.includes('card') ==  false){
        var parent = e.target.parentNode;
    }else{
        var parent = e.target;
    }
    // 創建div
    var divCard=document.createElement("div");
    var postArea=document.getElementsByClassName("postArea")[0];
    divCard.className="card-" +e.target.parentNode.id ;
    divCard.id="cardLB" ;
    

    // 創建img 獲獎照片
    var imgCard=document.createElement("img");
    imgCard.src = e.target.src;
    imgCard.className="cardPhoto";
    // 創建img member
    var imgMem=document.createElement("img");
    imgMem.className="member";
    imgMem.src=e.target.parentNode.children[1].src;
    // 創建會員帳號連結
    var aMem=document.createElement("a");
    aMem.src="#";
    aMem.innerText=e.target.parentNode.children[2].innerText;
    // 創建 照片得票數
    var spanVote=document.createElement("span");
    spanVote.innerText=e.target.parentNode.children[4].innerText;
    // 創建愛心數
    var imgHeart=document.createElement("img"); 
    imgHeart.className="heart";
    imgHeart.src ="images/fullheart-16.png";
    // 創建p
    var pContent=document.createElement("p");
    //console.log(parent.childNodes[11]);
        // pContent.innerText=parent.childNodes[10].innerText;
    pContent.innerText="整個城市都是我們的伸展台";

    //創建svg關閉圖片
    var imgClose=document.createElement("img");
    imgClose.src="images/times-circle-32.png";
    imgClose.id="close";
    imgClose.addEventListener("click",closeCard,false);
    // 創建svg刪除圖片
    var imgDel=document.createElement("img");
    imgDel.src="images/trash-alt.svg";
    imgDel.id="del";
    imgDel.addEventListener("click",delCard,false);



    postArea.appendChild(divCard);
    divCard.appendChild(imgCard);
    divCard.appendChild(imgMem);
    divCard.appendChild(aMem);
    divCard.appendChild(imgHeart);
    divCard.appendChild(spanVote);
    divCard.appendChild(pContent);
    divCard.appendChild(imgClose);
    divCard.appendChild(imgDel);

}
function closeCard(e){
    var postArea=document.getElementsByClassName("postArea")[0];
    // var divCard=document.getElementById("cardLB");
    postArea.removeChild(e.target.parentNode);
}
function delCard(e){

    var lightBox = e.target.parentNode; //DIV-cardLB
    var postArea =document.getElementsByClassName("postArea")[0];
    postArea.removeChild(lightBox); //關掉燈箱



    var taImg = lightBox.className.split("-"); //拆解字串
    console.log(taImg[1]);
    // [0]card [1]photo數字 ex.photo7

    postArea.removeChild(document.getElementById(taImg[1]));



}
function init(){
    var top  =document.getElementsByClassName("winnerPhoto");
    for(var i = 0; i < top.length; i++){
        top[i].addEventListener("click",topLB, true);
   }
    var wrap=document.getElementsByClassName("wrap")[0];
    
    var card =document.getElementsByClassName("cardPhoto");
    for(var i=0;i<card.length;i++){
        card[i].addEventListener("click",cardLB,true);
    }
    var postArea=document.getElementsByClassName("postArea")[0];
    
}
window.addEventListener("load", init, false);	






