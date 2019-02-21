function $id(id){
    return document.getElementById(id);
}

function changeModel(){
<<<<<<< HEAD
    console.log("11111111111111111");
=======
>>>>>>> da79c88c697e968491b7611dfcd5024eee3c9058
    var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
            var ta = JSON.parse(xhr.responseText);
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
                // closeFriendBox();
                
            }
        };
        
		xhr.open("Post","getMemData.php",true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send("from="+"gift");

<<<<<<< HEAD

    


    // var idList
    // var ta = e.target;
    // var no = ta.className.split(",");
    // console.log(ta.className);
    // $id("rwd-showId").innerText = no[0];
    // $id("showId").innerText = no[0];
    // // console.log(no);
    // $id("model_animal").src = "shop-images/model_" + no[1] +".png";
    // $id("model_hat").src = "shop-images/hat_" + no[2] +".png";
    // closeFriendBox();
=======
>>>>>>> da79c88c697e968491b7611dfcd5024eee3c9058
    TweenMax.fromTo('#showModel', 1.5, {
        y:-45,
        scale: .5,
        }, {
            y:0,
            scale: 1,
            ease: Power2.easeIn
        });
}

function closeFriendBox(){ //關掉選朋友燈箱
    var friend_LightBox = document.getElementById("friend_LightBox");
    friend_LightBox.style.display ="none";
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].addEventListener("click",showfriendBox);
    }
}

function showfriendBox(){
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
				//[memNo||暱稱||動物||眼睛||毛色,霹靂嬌媧||2||1||1,理科太太||3||3||2,蔡小英||1||3||1]

				var num = giftTa_chooseBox.children.length;
                var datalength = friendArr.length;
				if(num==0){
					for(var i = 0;i<friendInfo.length;i++){ // i:朋友數量
						for(var j = 0;j<5;j++){ // j:撈回的資料欄位數量
							infoArr[i] = friendInfo[i].split("||",5); 
							//infoArr[i]:朋友資料陣列;
							//infoArr[i][0]:會員編號; infoArr[i][1]:會員暱稱 infoArr[i][2]:動物
						}

                        
                        // 產生朋友列表<label>*N
                        var a_btn = document.createElement("a");
                        a_btn.className = "gift_friendList";
                        a_btn.href=`getMemData.php?no=${infoArr[i][0]}`;
                        
                            //頭貼div
                            var headImg_div = document.createElement("div");
                            headImg_div.className="headBox gift_headBox";

                            //創建p_memName朋友暱稱
                            var p_memName = document.createElement("p");
                            p_memName.innerText = infoArr[i][1];
                            // p_memName.className = friendList[i-1];
                            var input = document.createElement("input");
                            input.type = "hidden";
                            input.value = infoArr[i][0]; //會員編號
<<<<<<< HEAD

                        //將img_friend、p_memNam、input_submit塞進a_btn
                        a_btn.appendChild(headImg_div);
                        a_btn.appendChild(p_memName);
                        a_btn.appendChild(input);

=======

                        //將img_friend、p_memNam、input_submit塞進a_btn
                        a_btn.appendChild(headImg_div);
                        a_btn.appendChild(p_memName);
                        a_btn.appendChild(input);

>>>>>>> da79c88c697e968491b7611dfcd5024eee3c9058
                        //將a_btn塞進form
                        giftTa_chooseBox.appendChild(a_btn);
                        
                        a_btn.addEventListener("click",changeModel);
                        
                        ooxxGetHead(headImg_div, {
							animal: infoArr[i][2],
							color: infoArr[i][4],
							eyes: infoArr[i][3],
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
