function $id(id){
    return document.getElementById(id);
}

function closeFriendBox(){
    var friend_LightBox = document.getElementById("friend_LightBox");
    friend_LightBox.style.display ="none";
}

function changeModel(no){
    console.log(typeof no);
    if(typeof no == 'object'){
        
        no = storage.getItem("memNo");
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
                    // $id("rwd-showName").innerText=ta.name; //改--
                    $id("showName").innerText=ta.name; //改--
                    // $id("showId").value = ta.no; //改--
                    // alert("me"+ta.no);

                    // if(ta.no==storage.getItem("memNo")){
                    //     var divChoose = document.getElementsByClassName("choose-friend") ;
                    //     for(var i = 0 ; i < divChoose.length ; i++){
                    //         divChoose[i].removeEventListener("click",changeModel,false);
                    //         divChoose[i].addEventListener("click",showfriendBox,false);
                    //     }
                    // }else{
                    //     var divChoose = document.getElementsByClassName("choose-friend") ;
                    //     for(var i = 0 ; i < divChoose.length ; i++){
                    //         divChoose[i].addEventListener("click",changeModel,false);
                    //         divChoose[i].removeEventListener("click",showfriendBox,false);
                    //     }
                    // }
                    
                // closeFriendBox();
                
                // getProducts(1);
            }
        };
        // console.log("8 8 8 8 8 "+b);
        url = `getMemData.php?no=${no}`;
		xhr.open("get",url,true);
		xhr.send(null);


}

function photo_showfriendBox(){
    friend_LightBox.style.display="block";
    $id("btn_friendBoxClose").addEventListener("click",closeFriendBox,false)//改

    var friendInfoArr = new Array;
    friendInfoArr = [];
    //進資料庫撈朋友名單
    var photo_chooseBox = document.getElementById("chooseBox"); // 改--
    // friend_LightBox.style.display ="block";
    
    // console.log("------------"+storage.getItem("memNo"));

    // 如果有登入會員
    if(storage.getItem("memNo")){

        // ajax start
        var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
			if(xhr.responseText == "null"){ //失敗狀態
				console.log("沒有朋友");

            }else{ //成功取得
                
            
				var friendArr = JSON.parse(xhr.responseText);
				var friendInfo = friendArr.friendsInfo; 
				//[memNo||暱稱||動物||眼睛||毛色||帳號,霹靂嬌媧||2||1||1,理科太太||3||3||2,蔡小英||1||3||1]

				var num = photo_chooseBox.children.length; // 改--
                var datalength = friendArr.length;
				if(num==0){
                    
                    for(var i = 0;i<friendInfo.length;i++){ // i:朋友數量
                        
                        var str=photo_chooseBox.innerHTML;// 改--

						for(var j = 0;j<6;j++){ // j:撈回的資料欄位數量
							friendInfoArr[i] = friendInfo[i].split("||",6); 
							//friendInfoArr[i]:朋友資料陣列;
							//friendInfoArr[i][0]:會員編號; friendInfoArr[i][1]:會員暱稱 friendInfoArr[i][2]:動物
						}
                        str += 
                            `<a class="gift_friendList" onClick="changeModel(${friendInfoArr[i][0]})">
                                <div class="headBox gift_headBox" id="photoHead${friendInfoArr[i][0]}">
                                
                                </div>
                                <p>${friendInfoArr[i][1]}</p>
                                <input type="hidden" value=${friendInfoArr[i][0]}>
                            </a>`;
                        
                        //改--放朋友列表的div(giftTa_chooseBox) 
                        photo_chooseBox.innerHTML=str; 
                        
                        // 改--
                        ooxxGetHead($id(`photoHead${friendInfoArr[i][0]}`), {
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
        
        xhr.send("me="+ storage.getItem("memNo"));  

    }

}







