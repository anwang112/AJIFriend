function $id(id){
    return document.getElementById(id);
}

function changeModel(no){
    console.log(typeof no);
    if(typeof no == 'object'){
        no = $id("userNo").value;
    }
    var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function (){
            console.log(xhr.responseText);
            var ta = JSON.parse(xhr.responseText);
            // alert(0);
			if(xhr.responseText == "null"){ //失敗狀態
				console.log("沒有資料");

			}else{
                ooxxGetRole($id("showModel"), {
                        animal: ta.animal,
                        color: ta.color,
                        eyes: ta.eye,
                        hat: ta.hat,
                        clothes: ta.clothes,
                    });
                    $id("rwd-showName").innerText=ta.name;
                    $id("showName").innerText=ta.name;
                    $id("showId").value = ta.no;
                    // alert("me"+ta.no);
                        var span = document.getElementsByClassName("wearChange");

                    if(ta.no==$id("userNo").value){
                        span[0].innerText="麻吉";
                        span[1].innerText="麻吉";
                        var divChoose = document.getElementsByClassName("choose-friend") ;
                        for(var i = 0 ; i < divChoose.length ; i++){
                            divChoose[i].removeEventListener("click",changeModel,false);
                            divChoose[i].addEventListener("click",showfriendBox,false);
                        }
                    }else{
                        span[0].innerText="自己";
                        span[1].innerText="自己";
                        var divChoose = document.getElementsByClassName("choose-friend") ;
                        for(var i = 0 ; i < divChoose.length ; i++){
                            divChoose[i].addEventListener("click",changeModel,false);
                            divChoose[i].removeEventListener("click",showfriendBox,false);
                        }
                    }
                    
                closeFriendBox();
                
                getProducts(1);
            }
        };
        // console.log("8 8 8 8 8 "+b);
        url = `getMemData.php?no=${no}`;
		xhr.open("get",url,true);
		xhr.send(null);

    TweenMax.fromTo('#showModel', 1.5, {
        y:-45,
        scale: .5,
        }, {
            y:0,
            scale: 1,
            ease: Power2.easeIn
        });
}
// function changeModel(e){
//     var idList
//     var ta = e.target;
//     var no = ta.className.split(",");
//     console.log(no[1]);
//     $id("showId").innerText = no[0];
//     $id("model_animal").src = "shop-images/model_" + no[1] +".png";
//     $id("model_hat").src = "shop-images/hat_" + no[2] +".png";
//     closeFriendBox();
//     TweenMax.fromTo('#showModel', 1.5, {
//         scale: 0,
//     }, {
//         scale: 1,
//     });
// }

//關掉選朋友燈箱
function closeFriendBox(){
    // console.log(e.target.parentNode.parentNode);
    var close = document.getElementById("friendBoxClose");
    shop_background = document.getElementById("shop_background");
    $id("friendBox").removeChild(close.parentNode.parentNode);
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].addEventListener("click",showfriendBox);
    }
}

// function showfriendBox(e){
//     //創建div_friendBox
//     var div_friendBox = document.createElement("div");
//     div_friendBox.id = "friend_LightBox";
//     div_friendBox.className = "bg_friendBox";

//         //創建img_bg(燈箱背景)
//         var img_bg = document.createElement("img");
//         img_bg.src = "images/chooseF-31.png";
        
//         //創建div_close
//         var div_close = document.createElement("div");
//         div_close.id = "btn_friendBoxClose";    
//             //創建img_close(關燈箱按鈕)
//             var img_close = document.createElement("img");
//             img_close.src = "images/close.png";
//             img_close.id = "friendBoxClose";
        
//         //img_close塞進div_close    
//         div_close.appendChild(img_close);

//         //創建div_content
//         var div_content = document.createElement("div");
//         div_content.id = "content_friendBox";
//             //創建input_search
//             var input_search = document.createElement("input");
//             input_search.type = "text";
//             input_search.id = "searchBox";
//             input_search.placeholder = "搜尋朋友ID";
//             //創建div_chooseBox
//             var div_chooseBox = document.createElement("div");
//             div_chooseBox.id = "chooseBox";


//                     //進資料庫撈朋友名單，產生朋友列表<label>*N

//                     // [暫代]創建label
//                     friendList = [["煞氣阿吉","1","2","3"],["霹靂嬌媧","2","1","1"],["理科太太","3","3","2"],["蔡小英","1","3","1"]];
//                     console.log(friendList[0][1]);
//                     for(var i = 1;i<=4;i++){
//                         var label = document.createElement("label");
//                         label.className = friendList[i-1];
//                             //創建img_friend頭像
//                             var img_friend = document.createElement("img");
//                             img_friend.src = "images/member2-18.png";
//                             img_friend.className = friendList[i-1];
//                             //創建p_memName朋友暱稱
//                             var p_memName = document.createElement("p");
//                             p_memName.innerText = friendList[i-1][0];
//                             p_memName.className = friendList[i-1];

//                         //將img_friend、p_memNam、input_submit塞進label
//                         label.appendChild(img_friend);
//                         label.appendChild(p_memName);

//                         //將label塞進form
//                         div_chooseBox.appendChild(label);
//                     }

//         //將input_search、div_chooseBox塞進div_content
//         div_content.appendChild(input_search);
//         div_content.appendChild(div_chooseBox);

//     //將img_bg、div_close、div_content塞進div_friendBox
//     div_friendBox.appendChild(img_bg);
//     div_friendBox.appendChild(div_close);
//     div_friendBox.appendChild(div_content);

//     //將div_friendBox塞進friendBox
//     $id("friendBox").appendChild(div_friendBox);

//     $id("btn_friendBoxClose").onclick = closeFriendBox;
//     // 暫時關閉送禮給朋友按鈕功能


//     var choose = document.getElementsByClassName("gift");
//     for(var i = 0 ; i < choose.length ; i++){
//         choose[i].removeEventListener("click",showfriendBox);
//     }



//     var labelFriend = document.getElementsByTagName("label");
//     for(var i = 0 ; i < labelFriend.length ; i++){
//         labelFriend[i].addEventListener("click",changeModel);
//     }




// }

function showfriendBox(){
    var friendInfoArr = new Array;
    friendInfoArr = [];
    //進資料庫撈朋友名單
    var giftTa_chooseBox = document.getElementById("chooseBox");
    var friend_LightBox = document.getElementById("friend_LightBox");
    friend_LightBox.style.display ="block";
    if($id('userNo').value!=''){

        var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
			if(xhr.responseText == "null"){ //失敗狀態
				console.log("沒有朋友");

			}else{ //成功取得
				var friendArr = JSON.parse(xhr.responseText);
				friendInfo = friendArr.friendsInfo; 
				//[memNo||暱稱||動物||眼睛||毛色||帳號,霹靂嬌媧||2||1||1,理科太太||3||3||2,蔡小英||1||3||1]

				var num = giftTa_chooseBox.children.length;
                var datalength = friendArr.length;
				if(num==0){
                    
                    for(var i = 0;i<friendInfo.length;i++){ // i:朋友數量
                        var str=giftTa_chooseBox.innerHTML;
						for(var j = 0;j<6;j++){ // j:撈回的資料欄位數量
							friendInfoArr[i] = friendInfo[i].split("||",6); 
							//friendInfoArr[i]:朋友資料陣列;
							//friendInfoArr[i][0]:會員編號; friendInfoArr[i][1]:會員暱稱 friendInfoArr[i][2]:動物
						}
                        str += 
                            `<a class="gift_friendList" onClick="changeModel(${friendInfoArr[i][0]})">
                                <div class="headBox gift_headBox" id="headImg_div${friendInfoArr[i][0]}">
                                
                                </div>
                                <p>${friendInfoArr[i][1]}</p>
                                <input type="hidden" value=${friendInfoArr[i][0]}>
                            </a>`;
                        giftTa_chooseBox.innerHTML=str;
                        
                        ooxxGetHead($id(`headImg_div${friendInfoArr[i][0]}`), {
							animal: friendInfoArr[i][2],
							color: friendInfoArr[i][4],
							eyes: friendInfoArr[i][3],
						});

                    }
                }
            };
        }            
        xhr.open("Post","getFriend.php",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("me="+ $id('userNo').value);  

    }

    $id("btn_friendBoxClose").onclick = closeFriendBox;
    // 暫時關閉送禮給朋友按鈕功能
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].removeEventListener("click",showfriendBox);
    }


    


}

function init(){
    var choose = document.getElementById("chooseBtn");
    choose.addEventListener("click",showfriendBox);
        
}
window.addEventListener("load",init,false);
