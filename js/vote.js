//１.未登入者跳視窗 :登入才能按讚   alert請先登入
//2-1.登入者先回去撈資料會員帳號 照片標號 判斷是否按過讚
//2-2.你他媽已經按過了

// function addHeart(e){
//     var login=document.getElementById("loginNot");
//     if(login.innerText=="登入"){
//         alert("請先登入！");
//     }else if(login.innerText=="登出"){
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function(){
//           if( xhr.status == 200){
//             $id('memName').innerHTML = '&nbsp';
//             $id('spanLogin').innerHTML = '登入';
//             e.target.parentNode.children[5].innerText=parseInt(e.target.parentNode.children[5].innerText)+1;
//           }else{
//             alert( xhr.status );
//             alert("Dear你已經投過了～");
//           }
//         }
//         xhr.open("get", "ajaxCheckVote.php",true);
//         xhr.send(null);
//       }
        
    
// }


 




// function addHeart(e){
//     // var voteNum=document.getElementsByClassName("voteNum");
//     e.target.parentNode.children[5].innerText=parseInt(e.target.parentNode.children[5].innerText)+1;
//     // voteNum[i].innerText=parseInt(voteNum.innerText)+1;
//     console.log(e.target.parentNode.children[5]);
// }

// function showHeart(e){
//     // var bigHeart=document.getElementsByClassName("bigHeart");
//     e.target.parentNode.children[6].style.display=="block";

//     console.log("in");
//     e.target.parentNode.children[6].addEventListener("click",addHeart,false);

// }
// function hiddenHeart(e){
//     // var bigHeart=document.getElementsByClassName("bigHeart");
//     // bigHeart[j].style.display="none";
//     e.target.parentNode.children[6].style.display=="none";

//     console.log("out");

// }
// function init(){
//     var heart =document.getElementsByClassName("heart");
//     for(var i = 0; i < heart.length; i++){
//         heart[i].addEventListener("click",addHeart,false);
//     }
//     var card=document.getElementsByClassName("card");
//     for(var j=0;j<card.length;j++){
//         card[j].addEventListener("mouseover",showHeart,false);
//         card[j].addEventListener("mouseout",hiddenHeart,false);
//     }
    

// }

// window.addEventListener("load",init,false);