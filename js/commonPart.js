

function $id(id){
	return document.getElementById(id);
}
function boxScroll(o) {
	o.scrollTop = o.scrollHeight;
	o.scrollTop+=200;
	console.log(o.scrollTop+':'+o.scrollHeight);
	
}

var body = document.getElementsByTagName('body');
var chatbox_show = document.getElementsByClassName('chatbox_show')[0];
var friend_infoArr = new Array();
friend_infoArr = []; //朋友資料陣列
console.log(body);
var storage = sessionStorage;
// by 宗聖
function head_html() {
	

	var str_tag = `
	
	<!-- Header開始 -->
        <div id="head" class="head mnone">
        <div class="headWrap">
            <a href="home.php"><img id="logo" src="images/logo.svg" alt="logo"></a>
            <ul class="menu">
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.php">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
                <li><a href="photo.html">照片牆</a></li>
                <li><a href="myRoom.html">我的窩</a></li>
            </ul>
			<div class="loginBox">
				<input type="hidden" id="userNo" value="">
				<input type="hidden" id="userId" value="">
				<input type="hidden" id="userCoin" value="">
				<input type="hidden" id="userAnimal" value="">
				<input type="hidden" id="userEye" value="">
				<input type="hidden" id="userColor" value="">
				<input type="hidden" id="userStar" value="">
				<input type="hidden" id="userHobby" value="">
				<input type="hidden" id="userSelf" value="">
				<input type="hidden" id="userHat" value="">
				<input type="hidden" id="userClothes" value="">
				<input type="hidden" id="userPlay" value="">
				<input type="hidden" id="userLove" value=""> 
                <div class="loginImg headBox" id = "loginHead">
				<img src='images/loginPhoto.svg' >
                </div>
                <div class="loginTxtWrap">
                    <div class="loginContent">
                        <div class="loginTitle">
                            <span id="memName">
                            </span>
                            <span id="mLv">
                            </span>
                        </div>
						<div class="loginMj">
							<span>MJ /</span>
							
							<span id="memMJ">
                            </span>
						</div>
						<div class="Mjbar"></div>
                    </div>
                    <div class="loginNot">
                        <span id="loginNot">
                        </span> 
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="head_phone  dnone ">
        <a href="#">
            <img id="btn_menu_menu" src="pic/phone_icon_menu.svg" alt="">
        </a>
        <a href="home.php" class="logo_phone">
            <img src="pic/logo_phone03.png" alt="">
        </a>
        <input type="checkbox" id="control_checkbox">
        <!-- 手機聊天室開合控制 -->
        <label for="control_checkbox" id="control_rwdChat">
            <img id="btn_chatroom_phone" src="pic/phone_icon_chat.svg" alt="">
        </label>
        
 
    </div>        
    <div id="menu_phone" class="menu_phone">
            <ul>
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.php">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
				<li><a href="photo.html">照片牆</a></li>
				<li><a id="head_member_icon" href="myRoom.html">我的窩</a></li>
                <li><a href="#">登入</a></li>
                
            </ul>
        </div>
    <!--  -->
    <div id="loginBox" class="LightBoxMask"></div>
    <div id="lightBoxInner" class="middleLightBox login_box">
        <h2>登入/註冊</h2>
        <form id="login_form" >
            <input type="text" name="memId" placeholder="hi@gmail.com" id="memId_input">
            <input type="password" name="memPsw" placeholder="8位數密碼" id="memPsw_input">
            <input type="submit" value="送出" class="input_R" id="login_send" >
        </form>
        <!-- 關掉按鈕 -->
        <div id="loginBoxClose" class="lightBoxXX" ></div>
    </div>

<!-- Header結束 -->
	`;

	document.write(str_tag);
	$id("memName").innerText = storage.getItem("mName");
	// $id("mLv").innerText = 1;
	$id("memMJ").innerText = storage.getItem("mMJ");
	if(!storage.getItem("mName")){
		$id("loginNot").innerText = '登入';
	}else{
		$id("loginNot").innerText = '登出';
	}
	$id("login_send").addEventListener("click",function(){
		
		alert($id("memId_input").value+":::"+$id("memPsw_input").value);
		sendForm($id("memId_input").value , $id("memPsw_input").value);
	},false);
	
	if( storage.getItem("memNo") ){ 
		ooxxGetHead($id("loginHead"), {
			animal:  storage.getItem("animal"),
			color: storage.getItem("mColor"),
			eyes: storage.getItem("eye"),
		});
	}

}


// by 宗聖
function foot_html() {

	var str_tag2 = `
		    
    <div id="chatRoom" class="chatRoom">
	    <!-- 聊天室右側主要顯示區  -->
	    <h2 id="chatRoom_control">麻吉聊天室</h2>
	    <div class="chatRoom_info">
            <div id="friendPic" class="headBox chatTaHead" alt="朋友大頭照"></div>
            <input type="hidden" id="chatTaNo">
			<span id="mem-2" class="2"></span>
	        <a href="#"><img src="pic/chatroom_btn_gift.svg" alt="送禮物按鍵"></a>
	        <a href="#"><img src="pic/chatroom_btn_profile.svg" alt="查看個人檔案按鍵"></a>
	    </div> 
	    <div class="chatboxRight">
	        <div class="chatbox_show">
	        </div>
	        <div class="chatbox_faces">
	            <img src="pic/chatroom_face_01.svg" alt="喜">
	            <img src="pic/chatroom_face_02.svg" alt="怒">
	            <img src="pic/chatroom_face_03.svg" alt="哀">
	            <img src="pic/chatroom_face_04.svg" alt="樂">
	        </div>
	        <div class="chatbox_input">
	            <input id="chatTxt_input" type="text">
	            <input id="chatTxt_send" type="button" value="送出">
	        </div>      
	    </div> 
	    <!-- 聊天室收合左側欄  -->
	    <label for="" id="closeLabel"><img id="chatroom_btn_open" src="pic/chatroom_btn_open1.svg" alt="收合左側欄按鍵"></label>
	    <div id="chatboxLeft" class="chatboxLeft">
	        <input id="search_input" type="text" placeholder="搜尋好友">
	        <div class="friendbox">
				<label class="friendClick">
					<div id="admin">
						<img src="shop-images/gift.png" class="friendClick">
					</div>
					<p class="friendClick">管理員</p>
				</label>
	        </div>
			<div id="replybox">
				<p id="replyboxTitle">回覆好友邀請</p>
	        </div>
	    </div>
	</div>
        <!-- 手機聊天室 -->
        <!-- 聊天列表分頁 -->
	    <div class="rwd_chatRoom" id="chatRoom_phone_part1">
            <div id="rwd_chatListBox">
                <input id="search_input_phone" type="text" placeholder="搜尋好友">
            
                <div id="rwd_chatList"> 

                </div>

            </div>
            <!-- 聊天室分頁 -->
            <div id="rwd_chatContent">
                <div id="rwd_chatContentTitle">
                    <span onclick="close_rwdChat();" style="font-size:30px">^</span>
                    <div id="rwd_chatTaHead" class="headBox" alt="朋友大頭照"></div>
                    <p id="rwd_chatTaName" class="">寂寞阿吉</p>
                    <input type="hidden" id="rwd_chatTaNo" >
                </div>
                <!-- 聊天室訊息 -->
                <div id="rwd_chatbox">

                </div>
                <div id="rwd_sendMsgBox">
                    <input id="rwd_chatTxt_input" type="text">
                    <input id="rwd_chatTxt_send" type="button" value="送出">
                </div>
            </div>

            <!-- 朋友列表分頁 -->
            <div id="rwd_chatFriendList">
                <div id="replybox_phone">
                    <h4>待回覆好友邀請</h4>
                </div>

            </div>
            
            
	    </div>

        
	    <!-- <div class="chatRoom_phone_part2" id="chatRoom_phone_part2">
	        <div class="info_bar">
	            <img id="btn_chat_prev" src="pic/btn_chat_prev.svg" alt="搜尋朋友">
	            <span id="friend_id_show">傻眼貓咪</span>
	        </div>
	        <div class="info_chatbox">
	            <span>hi~~</span>
	        </div>
	        <div class="info_controlbox">
	            <img id="" src="pic/btn_chat_gift.svg" alt="">
	            <img src="pic/btn_chat_profile.svg" alt="">
	            <img src="pic/btn_chat_send.svg" alt="">
	            <input id="info_input_phone" type="text">
	        </div>
	    </div> -->
	    <!-- 手機聊天室結束 -->
	    
	</div>
	`;

	document.write(str_tag2);

	if( storage.getItem("memNo") ){
		friendList(storage.getItem("memNo"));
		requireBack(storage.getItem("memNo")); 
	}
}



// 不知道誰寫的
function loginPhoto(){
	var photo = `
	<script>
	loginphoto = document.getElementById('loginphoto');
	ooxxGetHead(loginphoto, {
		animal:  <?php  echo  $stadRow["animal"];?>,
		color: '<?php  echo $stadRow["mColor"];?>',
		eyes: <?php  echo  $stadRow["eye"];?>,
	})
	</script>`;
	document.write(photo);
}

//login Ajax --by ga
function sendForm(memId,memPsw){
	//=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
	
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if( xhr.responseText == "error"){
		alert("帳密錯誤，請重新輸入");
		}else{ 
			var user = JSON.parse(xhr.responseText); 
			alert(user.arr["mName"]);
			//header的使用者資料Show
			// document.getElementById("memName").innerText =  user.arr["mName"]; 
			// document.getElementById("memMJ").innerText =  user.arr["mMJ"]+"/"+"1000";
			// document.getElementsByClassName("Mjbar")[0].style.width =  (user.arr["mMJ"] / 1000 *100)+"%";
			//載入頭像
			// var loginImg = document.getElementsByClassName("loginImg")[0];


			//登入的使用者資料暗樁 --各頁面可直接複製取用
			document.getElementById("userNo").value = user.arr["memNo"];
			document.getElementById("userId").value = user.arr["memId"];
			document.getElementById("userCoin").value = user.arr["mCoin"];
			document.getElementById("userAnimal").value = user.arr["animal"];
			document.getElementById("userEye").value = user.arr["eye"];
			document.getElementById("userColor").value = user.arr["mColor"];
			document.getElementById("userStar").value = user.arr["constellation"];
			document.getElementById("userHobby").value = user.arr["hobby"];
			document.getElementById("userSelf").value = user.arr["self-intro"];
			document.getElementById("userHat").value = user.arr["wearHat"];
			document.getElementById("userClothes").value = user.arr["wearClothes"];
			document.getElementById("userPlay").value = user.arr["last_play"];
			document.getElementById("userLove").value = user.arr["loveGiven"];


			// 資料存進storage
			
			for(var key in user.arr){
				storage.setItem(key,user.arr[key]);
			}
			$id("loginNot").innerText='登出';
			ooxxGetHead(loginImg, {
				animal: storage.getItem("animal") ,
				color: storage.getItem("mColor") ,
				eyes: storage.getItem("eye"),
			});

			heartItem = document.querySelectorAll('.heart div');
			// heartM =  document.getElementById('userLove').value;
			// alert(love);
			// console.log(heartM);
			if(heartItem){
			switch(user.arr["loveGiven"]){
				case '2':
				heartItem[2].style.backgroundImage = 'url(images/heartdark.svg)';
				break;
				case '1':
				heartItem[2].style.backgroundImage = 'url(images/heartdark.svg)';
				heartItem[1].style.backgroundImage = 'url(images/heartdark.svg)';
				break;
				case '0':
				heartItem[0].style.backgroundImage = 'url(images/heartdark.svg)';
				heartItem[1].style.backgroundImage = 'url(images/heartdark.svg)';
				heartItem[2].style.backgroundImage = 'url(images/heartdark.svg)';
				break;
			   }
			}
	  	}
	}
	xhr.open("Post", "ajaxLogin.php", true);
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.send(`memId=${memId}&memPsw=${memPsw}`);

	// friendList();
}
// sendForm();







//撈朋友列表 Ajax -- by ga 
function friendList(myNo=-1){  
	console.log("friendList():"+myNo);
	// console.log(friend_infoArr[i]);
	
	var div_chooseBox = document.getElementsByClassName("friendbox")[0];
	//撈朋友資料並動態新增列表--start
	if(myNo!=-1){
		var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
			
			if(xhr.responseText == "null"){ //失敗狀態
				console.log("沒有朋友");

			}else{ //成功取得
				var friendArr = JSON.parse(xhr.responseText);
				var friendInfo = friendArr.friendsInfo; 
				//[memNo||暱稱||動物||眼睛||毛色||帳號 , ...... , ....... , ....... ]

				var num = div_chooseBox.children.length;
				if(num==1){
					for(var i = 0 ; i<friendInfo.length;i++){ // i:朋友數量
						for(var j = 0 ; j < 6 ; j++){ // j:撈回的資料欄位數量
							friend_infoArr[i] = friendInfo[i].split("||",6); 
							//friend_infoArr[i]:朋友資料陣列;
							//friend_infoArr[i][0]:會員編號; friend_infoArr[i][1]:會員暱稱 friend_infoArr[i][2]:動物
							
						}
						var chatList=div_chooseBox.innerHTML;

						chatList +=	`<label for="" class="rwd_chatList" onclick="changeChat(${friend_infoArr[i][0]});">
                        <!-- 頭貼 -->
                        <div class="friendClick headBox headDiv" id="chatListHead${friend_infoArr[i][0]}"></div>
                        
                            <!-- 暱稱 -->
                            <p class="friendClick">${friend_infoArr[i][1]}</p>
                            <!-- 會員編號 -->
                            <input type="hidden" value="${friend_infoArr[i][0]}">
                        </div>
					</label> `;
						div_chooseBox.innerHTML = chatList;

						//載入朋友頭像
						// rrr = document.getElementById('自己取');
						ooxxGetHead($id(`chatListHead${friend_infoArr[i][0]}`), {
							animal: friend_infoArr[i][2],
							color: friend_infoArr[i][4],
							eyes: friend_infoArr[i][3],
						});
					}
				}
				var rwd_num = $id("rwd_chatList").children.length;
				console.log("hjsfL:"+friendInfo.length);
				if(rwd_num==0){
					for(var i = 0 ; i<friendInfo.length;i++){ // i:朋友數量
						for(var j = 0 ; j < 6 ; j++){ // j:撈回的資料欄位數量
							friend_infoArr[i] = friendInfo[i].split("||",6); 
							//friend_infoArr[i]:朋友資料陣列;
							//friend_infoArr[i][0]:會員編號; friend_infoArr[i][1]:會員暱稱 friend_infoArr[i][2]:動物
						}
					var rwd_chatList=$id("rwd_chatList").innerHTML;

					// 手機聊天室的聊天列表生成
					rwd_chatList +=	`<label for="" class="rwd_chatList" onclick="rwd_changeChat(${friend_infoArr[i][0]});">
                        <!-- 頭貼 -->
                        <div class="headBox rwd_chatListHead " id="rwd_chatListHead${friend_infoArr[i][0]}"></div>
                        <div class="rwd_chatListItem">
                            <!-- 暱稱 -->
                            <p class="rwd_chatListName">${friend_infoArr[i][1]}</p>
                            <!-- 會員編號 -->
                            <input type="hidden" id="rwd_chatMem${friend_infoArr[i][0]}" value="${friend_infoArr[i][0]}">
                        </div>
					</label> `;
					$id("rwd_chatList").innerHTML = rwd_chatList;

					ooxxGetHead($id(`rwd_chatListHead${friend_infoArr[i][0]}`), {
						animal: friend_infoArr[i][2],
						color: friend_infoArr[i][4],
						eyes: friend_infoArr[i][3],
					});
					}

				}
				// 執行動作撰寫
				// var friendLabels = document.getElementsByClassName("friendClick"); 
				
				// for(var i = 0;i<friendLabels.length;i++){
				// 	friendLabels[i].addEventListener('click',changeChat,false);
				// }
			}
		};
		xhr.open("Post","getFriend.php",true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send("me="+ myNo);
	}else{
		console.log("沒有登入");
	}

	//撈朋友資料並動態新增列表--end
	// return friend_infoArr;
}

// 利用暱稱在friend_infoArr陣列裡找會員編號
function echoNo(name,arr){
	// console.log( arr.length );
	for(var i=0;i<arr.length;i++){
		
		for(var j=0;j<arr[i].length;j++){
			if(arr[i][1]==name){
				return i;
			}
		}
	}
}

//桌機聊天室切換朋友聊天 -- by ga
function changeChat(taNo){
	// alert(friend_infoArr[i][0]);
	// console.log(friend_infoArr);
	var taName = document.getElementById("mem-2");
	var taPic = document.getElementById("friendPic"); //頭像div
	var index;
	//得到聊天對象資訊在朋友陣列friend_infoArr的索引值
	for(var i=0;i<friend_infoArr.length;i++){
		for(var j=0;j<friend_infoArr[i].length;j++){
			if(friend_infoArr[i][0]==taNo){
				index = i;
			}
		}
	}
	$id("mem-2").innerText=friend_infoArr[index][1];
	storage.setItem("chatTaNo" , taNo);
	storage.setItem("chatTaName", friend_infoArr[index][1]);
	// console.log("index:"+index);
	//載入聊天對象頭頭
	ooxxGetHead(taPic, {
		animal: friend_infoArr[index][2],
		color: friend_infoArr[index][4],
		eyes: friend_infoArr[index][3],
	})

	var chatbox_show = document.getElementsByClassName('chatbox_show')[0];
	//先把聊天室清掉
	while(chatbox_show.firstChild) {
		chatbox_show.removeChild(chatbox_show.firstChild);
	}
	var taNo = echoNo( taName.innerText ,friend_infoArr);
	taName.className = taNo; 
	msgDB();
	chatBoxreload = setInterval(msgDB,3000);

}
function rwd_changeChat(taNo){
	// console.log(friend_infoArr);
	// var taName = document.getElementById("mem-2");
	var taPic = document.getElementById("rwd_chatTaHead"); //頭像div
	var index;
	//得到聊天對象資訊在朋友陣列friend_infoArr的索引值
	for(var i=0;i<friend_infoArr.length;i++){
		for(var j=0;j<friend_infoArr[i].length;j++){
			if(friend_infoArr[i][0]==taNo){
				index = i;
			}
		}
	}
	$id("rwd_chatTaName").innerText=friend_infoArr[index][1];
	storage.setItem("chatTaNo" , taNo);
	storage.setItem("chatTaName",friend_infoArr[index][1]);
	// $id("rwd_chatTaName").innerText=friend_infoArr[index][1];
	// $id("rwd_chatTaNo").value = friend_infoArr[index][0];
	// $id("chatTaNo").value = friend_infoArr[index][0];
	// console.log("index:"+index);
	//載入聊天對象頭頭
	ooxxGetHead(taPic, {
		animal: friend_infoArr[index][2],
		color: friend_infoArr[index][4],
		eyes: friend_infoArr[index][3],
	})

	var rwd_chatbox_show = document.getElementById("rwd_chatbox");;
	//先把聊天室清掉
	while(rwd_chatbox_show.firstChild) {
		rwd_chatbox_show.removeChild(rwd_chatbox_show.firstChild);
	}
	
	// 進入私人對話框
	$id("rwd_chatContent").style.cssText = "bottom:0%;";
	
	// 啟動訊息reload
	msgDB();
	chatBoxreload = setInterval(msgDB,3000);

}
// 拒絕交友邀請(更新關係資料表)Ajax -- by ga
function rejectRequire(e){
	console.log(0);
	var replybox = e.target.parentNode.parentNode.parentNode;
	var label = e.target.parentNode.parentNode;
	replybox.removeChild(label);
	var taNo = label.children[1].value;
	alert(taNo);
	// 更新關係列表 Ajax 
	var xhr = new XMLHttpRequest(); // 建立xhr
	xhr.onload = function(){
		if(xhr.responseText == "null"){
			alert("xhr錯誤發生");

		}else{ //成功取得
			console.log(xhr.responseText);
			//執行動作撰寫
		}
	};
	xhr.open("Post","updateRelationship.php",true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	
	var chatMems = {
		sendMemId: 1,
		taMemId: taNo,
		action: 0 , // 0:拒絕 ,  1:加為好友 , 2:刪除好友 
	}; //物件範例
	xhr.send("upMem="+ JSON.stringify(chatMems));
}

//撈出待回覆好友邀請的資料列表 Ajax  -- by ga
function requireBack(myNo=-1){

	if(myNo!=-1){
		var xhr = new XMLHttpRequest(); // 建立xhr
		xhr.onload = function(){
			if(xhr.responseText == "null"){ //
				console.log("沒有待回覆邀請");

			}else{ //成功取得

				var friendArr = JSON.parse(xhr.responseText);
				var friendInfo = friendArr.friendsInfo; 
				//[memNo||暱稱||動物||眼睛||毛色,霹靂嬌媧||2||1||1,理科太太||3||3||2,蔡小英||1||3||1]
				var replybox = document.getElementById("replybox");
				var replybox_phone =  document.getElementById("replybox_phone");
				console.log(replybox_phone);
				var num = replybox.children.length;
				var requireList = new Array();
				var i_start;
				if(num==1){
					i_start = 0;
				}else{
					i_start = num;
				}
				// alert(friendInfo);
					for(var i = i_start;i<friendInfo.length;i++){ // i:朋友數量
						for(var j = 0;j<5;j++){ // j:撈回的資料欄位數量
							requireList[i] = friendInfo[i].split("||",5); 
							//friend_infoArr[i]:朋友資料陣列;
							//friend_infoArr[i][0]:會員編號; friend_infoArr[i][1]:會員暱稱 friend_infoArr[i][2]:動物
						}
						var label = document.createElement("label");
						label.className = "requireLabel";

							// //頭貼div
							// var headImg_div = document.createElement("div");
							// headImg_div.id= "requireHead";

							//創建p_memName朋友暱稱
							var p_memName = document.createElement("p");
							p_memName.innerText = requireList[i][1]; //會員暱稱

							var input = document.createElement("input");
							input.type = "hidden";
							input.value = requireList[i][0];

							var reply_btnGroup = document.createElement("div");
							reply_btnGroup.className = "reply_btnGroup" ;


							var btn_Y = document.createElement("button");
							btn_Y.innerText = "查看檔案";
							btn_Y.className = "btn_reply";

							var btn_N = document.createElement("button");
							btn_N.innerText = "拒絕";
							btn_N.className = "btn_reply";
							
							reply_btnGroup.appendChild(btn_Y);
							reply_btnGroup.appendChild(btn_N);

						//將img_friend、p_memNam、塞進label
						label.appendChild(p_memName);
						label.appendChild(input);
						label.appendChild(reply_btnGroup);

						//將label塞進div
						replybox.appendChild(label);
						
						// 手機
						var str_rwdChat = replybox_phone.innerHTML;
						str_rwdChat += 
						`<label class="rwd_requireLabel">
							<p>${requireList[i][1]}</p>
							<input type="hidden" value="${requireList[i][0]}">
							<div class="reply_btnGroup">
								<button class="btn_reply">查看檔案</button>
								<button class="btn_reply">拒絕</button>
							</div>
						</label>`;
						//將label塞進div
						replybox_phone.innerHTML = str_rwdChat;
						
						// //載入朋友頭像
						// // rrr = document.getElementById('自己取');
						// ooxxGetHead(headImg_div, {
						// 	animal: friend_infoArr[i][2],
						// 	color: friend_infoArr[i][4],
						// 	eyes: friend_infoArr[i][3],
						// });
						
					}
					
				
				var btn_N = document.getElementsByClassName("btn_reply");
				console.log(btn_N);
				for(var i = 0;i<btn_N.length;i++){
					// alert('11');
					// btn_N[i].addEventListener('click',rejectRequire);
					btn_N[i].onclick=rejectRequire;
				}
			}
		};
		xhr.open("Post","getRequireList.php",true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send("me="+ myNo);


	}else{
		console.log("沒有登入");
	}



}

//進資料庫撈聊天歷史訊息 --by ga
function msgDB(){ 
	console.log("還在reload唷!");
	var chatbox_show = document.getElementsByClassName('chatbox_show')[0]; //桌機聊天內容顯示區域
	var rwd_chatbox_show = document.getElementById("rwd_chatbox"); //手機聊天內容顯示區域

	var xhr = new XMLHttpRequest(); // 建立xhr
	xhr.onload = function(){
		if(xhr.responseText == "null"){ //失敗狀態
			console.log("沒有聊天紀錄");

		}else{ //成功取得

			//執行動作撰寫
			var data = JSON.parse(xhr.responseText);
			var num = chatbox_show.children.length;
			
			var i_start = 0;
			var i_end = data.content.length;
			console.log(num);
			// 桌機聊天室
			if(num==0){
				i_start = 0;
				boxScroll(chatbox_show);
			}else{
				i_start = num;
			}
			for(var i=i_start;i<data.content.length;i++){
				var msg_div = document.createElement("div");
				var msg_span = document.createElement("span");
				msg_span.innerText = data.content[i].replace(/\r\n|\n/g,"");
				msg_div.appendChild(msg_span);
				chatbox_show.appendChild(msg_div); //塞進桌機聊天室
				
				if(data.sendMem[i]==storage.getItem("memNo")){ //我發的訊息:靠右
					msg_div.className="iSaid";			
				}else{ //我發的訊息:靠右
					msg_div.className="youSaid";
				}
			
			}
			if(num==0){
				boxScroll(chatbox_show);
			}
			// 生成歷史訊息物件(手機聊天室)
			var rwd_num = rwd_chatbox_show.children.length;
			if(rwd_num==0){
				i_start = 0;
				boxScroll($id("rwd_chatbox"));
			}else{
				i_start = rwd_num;
			}
			for(var i=i_start;i<data.content.length;i++){
				var msg_div = document.createElement("div");
				var msg_span = document.createElement("span");
				msg_span.innerText = data.content[i].replace(/\r\n|\n/g,"");
				msg_div.appendChild(msg_span);
				rwd_chatbox_show.appendChild(msg_div); //塞進手機聊天室
				
				if(data.sendMem[i]==storage.getItem("memNo")){ //我發的訊息:靠右
					msg_div.className="iSaid";			
				}else{ //我發的訊息:靠右
					msg_div.className="youSaid";
				}
			
			}
			if(rwd_num==0){
				boxScroll($id("rwd_chatbox"));
			}

			
			
		}
	};
	xhr.open("Post","getChatMsg.php",true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	// console.log("me:"+me+"ta"+ta);

	var chatMems = {
		sendMemId: storage.getItem("memNo"),
		taMemId: storage.getItem("chatTaNo"),
	}; //聊天雙方會員ID組成物件
	
	xhr.send("chatMems="+ JSON.stringify(chatMems));

}

// 收起私人對話框
function close_rwdChat(){
	$id("rwd_chatContent").style.cssText = "bottom:104%";
}

window.addEventListener('load', function () {
	

	if($id("loginNot").innerText=='登入'){
		$id("loginNot").addEventListener('click',function(){

			$id("lightBoxInner").style.cssText = 'opacity:1;z-index:15;display: block;';
			$id("loginBox").style.cssText = 'display: block;z-index:14;';

		},false);
	

	}else{
		$id("loginNot").addEventListener('click',function(){
			storage.clear();
		},false);
	}


	//聊天室操控
	var chatRoom_control = document.getElementById('chatRoom_control');
	var chatroom_btn_open = document.getElementById('chatroom_btn_open');
	//取得物件
	var chatRoom = document.getElementById('chatRoom');
	var chatboxLeft = document.getElementById('chatboxLeft');
	var taName = document.getElementById("mem-2");
	var ch = 0, //控制開關，0為初始關閉值，1為打開
	ch1 = 0;

//桌機聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉 --by ga
	chatRoom_control.addEventListener('click', function () {
		var chatbox_show = document.getElementsByClassName('chatbox_show')[0];
		var chatTa = document.getElementById('mem-2').innerText;

		if (ch1 == 0) { //如果視窗是關閉狀態，就打開
			chatRoom.style.cssText = "transform:translateY(0%)";
			chatboxLeft.style.cssText = "opacity:1;";
			if($id("loginNot").innerText=='登出'){
				// console.log("chatTa:"+chatTa);
				if(chatTa!=''){
					msgDB();
					chatBoxreload = setInterval(msgDB,3000);
				}

				boxScroll(chatbox_show);

			}
			return ch1 = 1;
		} else {
			chatRoom.style.cssText = "transform:translateY(82%)";
			chatboxLeft.style.cssText = "opacity:1;";
			if(typeof(chatBoxreload)!= 'undefined'){
				clearInterval(chatBoxreload);

			}
			return ch1 = 0, ch = 0;
		}

	});

//桌機聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉 --宗聖
	chatroom_btn_open.addEventListener('click', function () {
		if (ch == 0) { //要顯示出來
			chatboxLeft.style.cssText = "opacity:0;";
			return ch = 1;
		} else { //要關閉
			chatboxLeft.style.cssText = "opacity:1;";
			return ch = 0;
		}
	});


//聊天室收合操控 start--by ga
	var btn_chatroom_phone = document.getElementById('btn_chatroom_phone');
	var chatRoom_phone_part1 = document.getElementById('chatRoom_phone_part1');
	// var chatRoom_phone_part2 = document.getElementById('chatRoom_phone_part2');
	// var fr_demo = document.getElementById('fr_demo');
	var btn_menu_menu = document.getElementById('btn_menu_menu');
	var menu_phone = document.getElementById('menu_phone');
	// var btn_chat_prev = document.getElementById('btn_chat_prev');
	// var control_checkbox = document.getElementById('control_checkbox');

//手機版聊天室收合操控 start--by ga
	var control_openChat=false;
	btn_chatroom_phone.addEventListener('click', function () {
		if (control_openChat == false) {
			chatRoom_phone_part1.style.cssText = " top: 8vh;opacity:1";
			control_openChat = true;
		} else {
			chatRoom_phone_part1.style.cssText = " top: -100vh;opacity:0";
			control_openChat = false;
		}

	}, false);
//手機版聊天室收合操控 end--by ga


//手機版menu收合操控 start--by ga
	var control_openMenu=false;
	btn_menu_menu.addEventListener('click', function () {
		if (control_openMenu == false) {
			menu_phone.style.cssText = "transform: translateX(0%)";
			control_openMenu = true;
		} else {
			menu_phone.style.cssText = "transform: translateX(-100%)";
			control_openMenu = false;
		}
	});
//手機版menu操控 end--by ga

	//聊天室貼圖操作
	// var chatbox_faces = document.getElementById('chatbox_faces');
	// var chat_facesImgs = document.getElementsByClassName('chat_faces');
	

	// for (var i = 0; i < chat_facesImgs.length; i++) {
	// 	chat_facesImgs[i].addEventListener('click', function () {
	// 		var src_face = this.src;
	// 		console.log(src_face);
	// 		var img = document.createElement('img');
	// 		img.setAttribute('style', 'float:right;width:10%;position:relative;right:50px');
	// 		img.src = src_face;

	// 		var divImg = document.createElement('div');
	// 		divImg.appendChild(img);
	// 		divImg.setAttribute('style', 'display:inline-block;width:100%;');

	// 		var clearbox = document.createElement('div');
	// 		divImg.appendChild(clearbox);
	// 		clearbox.setAttribute('class', 'clearbox');


	// 		chatbox_show.appendChild(divImg);

	// 		boxScroll(chatbox_show);

	// 	}, false);
	// }

	// //讓
	// function boxScroll(o) {
	// 	o.scrollTop = o.scrollHeight;
	// }

	//登入燈箱操作
	var login_box = document.getElementById('login_box');
	var login_form = document.getElementById('login_form');
	var btn_login = document.getElementById('loginNot');
	// btn_login.addEventListener('click',function(){

	// 	login_box.style.cssText = 'opacity:1;z-index:15;';

	// 	login_form.addEventListener('click',function(e){
	// 		e.stopPropagation();
	// 	},false);

	// 	login_box.addEventListener('click',function(){
	// 		login_box.style.cssText = 'opacity:0;z-index:-1;';
	// 	},false);

	// },false);


}, false);

//手機聊天室貼圖顯示控制 --宗聖
	// window.addEventListener('load', function () {

	// 	var chatbox_faces_phone = document.getElementById('chatbox_faces_phone');
	// 	var btn_chat_picbox = document.getElementById('btn_chat_picbox');

	// 	btn_chat_picbox.addEventListener('click', function () {

	// 		if (chatbox_faces_phone.style.opacity == 0) {
	// 			chatbox_faces_phone.style.cssText = "opacity:1";
	// 		} else {
	// 			chatbox_faces_phone.style.cssText = "opacity:0";
	// 		}

	// 	}, false);


	// 	var chat_facesImgs_phone = document.getElementsByClassName('chat_faces_phone');
	// 	var info_chatbox = document.getElementById('info_chatbox');

	// 	for (var i = 0; i < chat_facesImgs_phone.length; i++) {
	// 		chat_facesImgs_phone[i].addEventListener('click', function () {
	// 			var src_face_phone = this.src;
	// 			var img_phone = document.createElement('img');
	// 			img_phone.setAttribute('style', 'float:right;width:12%;margin:5px 0;height:50px;position:relative;right:50px');
	// 			img_phone.src = src_face_phone;

	// 			var divImg = document.createElement('div');
	// 			divImg.appendChild(img_phone);
	// 			divImg.setAttribute('style', 'display:inline-block;width:100%;');

	// 			var clearbox = document.createElement('div');
	// 			divImg.appendChild(clearbox);
	// 			clearbox.setAttribute('class', 'clearbox');


	// 			info_chatbox.appendChild(divImg);

	// 			boxScroll(info_chatbox);

	// 		}, false);


	// 	}


	// }, false);


// 聊天訊息送出--寫進資料庫  --by ga
function sendMsg(str) {
	var chatbox_show = document.getElementsByClassName('chatbox_show')[0];
	var rwd_chatbox_show = document.getElementById('rwd_chatbox');
	// 廷嘉寫的開始
	// 送出訊息：
	// step1>>寫進資料庫
	
	// 取得發送訊息時間
	var time = new Date();
	var YY = time.getFullYear();
	var MM = time.getMonth()+1;
	var DD = time.getDate();
	var hh = time.getHours();
	var mm = time.getMinutes();
	var ss = time.getSeconds();
	var ms = time.getMilliseconds();  
	var timeStr =`${YY}-${MM}-${DD} ${hh}:${mm}:${ss}.${ms}`;

	var data = {
		me : storage.getItem("memNo"), //我的編號
		chatTA : storage.getItem("chatTaNo"), //聊天對象編號
		taIsWho : 'mem', //聊天對象是會員還是管理員
		msg : str, //送出的訊息
		timeNow : timeStr, //送出訊息時間
	};

	// step2>>寫進資料庫
	// Ajax開始
	var xhr = new XMLHttpRequest();// new xhr
	xhr.onload = function(){
	     if(xhr.responseText != "sucess"){      // 失敗狀態
	            alert("xhr錯誤發生");     
		}else{      //成功取得
			console.log(xhr.responseText);
			msgDB();
			chatTxt_input.value = "";
			rwd_chatTxt_input.value = "";
			boxScroll(chatbox_show);
			boxScroll(rwd_chatbox_show);
		}
	};
	xhr.open("Post" , "msgInsert.php " , true );     
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");    //參考董董講義
	xhr.send("data="+JSON.stringify(data));
	// step3>>reload訊息框
	msgDB();
}


window.addEventListener('load', function () {
	var chatTxt_input = document.getElementById('chatTxt_input');
	var rwd_chatTxt_input = document.getElementById('rwd_chatTxt_input');
	var chatTxt_send = document.getElementById('chatTxt_send');
	var rwd_chatTxt_send = document.getElementById('rwd_chatTxt_send');
	var chatbox_show = document.getElementsByClassName('chatbox_show')[0];
	var rwd_chatbox_show = document.getElementById('rwd_chatbox');

// 桌機送出訊息(按Enter) --ga
	chatTxt_input.addEventListener('keydown',function(e){
		if (e.keyCode == 13) { //enter代碼
			var txt = chatTxt_input.value; //送出的訊息
			if (chatTxt_input.value != "") {
				sendMsg(txt);
			}
		}
	}, false);
// 桌機送出訊息(按送出) --ga
	chatTxt_send.addEventListener('click', function () {
		var txt = chatTxt_input.value;
		sendMsg(txt);
	}, false);

// 手機送出訊息(按送出) --ga
rwd_chatTxt_send.addEventListener('click', function () {
		var txt = rwd_chatTxt_input.value;
		sendMsg(txt);
	}, false);


}, false);

window.addEventListener('load', function () {
	// sendForm();
	
	//聊天室內的好友邀請box收合 --by ga
	reply_control = false;
	$id("replyboxTitle").addEventListener("click",function(){
		if(reply_control==false){ //打開
			$id("replybox").style.height = "83%";
			document.getElementsByClassName("friendbox")[0].style.transition = "height .5s";
			document.getElementsByClassName("friendbox")[0].style.height = "0";
			reply_control = true;
		}else{ //收起來
			$id("replybox").style.height = "32px";
			$id("replybox").style.top = "";
			$id("replybox").style.bottom = "8px";
			document.getElementsByClassName("friendbox")[0].style.transition = "height 1s";
			document.getElementsByClassName("friendbox")[0].style.height = "";
			reply_control = false;

		}
	});
	// 登入start --by ga
	$id("loginNot").addEventListener("click",function(){
		if($id("loginNot").innerText=='登入'){

			// 打開登入燈箱(註冊觸發事件)
			$id("lightBoxInner").style.cssText = 'opacity:1;z-index:15;display: block;';
			$id("loginBox").style.cssText = 'display: block;z-index:14;';
			
			// document.getElementsByClassName("loginContent")[0].style.display="";
			// var div_chooseBox = document.getElementsByClassName("friendbox")[0];
			// var label = document.createElement("label");
			// label.className = "friendClick";

			// 	//頭貼div
			// 	var headImg_div = document.createElement("div");
			// 	headImg_div.id="admin";
			// 	headImg_div.innerHTML='<img src="shop-images/gift.png" class="friendClick"></img>';
			// 	headImg_div.className= "friendClick";

			// 	//創建p_memName朋友暱稱
			// 	var p_memName = document.createElement("p");
			// 	p_memName.innerText = "管理員";
			// 	p_memName.className = "friendClick";


			// //將img_friend、p_memNam、input_submit塞進label
			// // label.appendChild(input);
			// label.appendChild(headImg_div);
			// label.appendChild(p_memName);
			// //將label塞進div
			// div_chooseBox.appendChild(label);
		}else{
			var xhr = new XMLHttpRequest(); // 建立xhr
			xhr.onload = function(){
				if(xhr.responseText == "null"){ //失敗狀態
					alert("xhr錯誤發生");

				}else{ //成功
					alert("您已登出~");
					$id("loginNot").innerText='登入';
				}
			};
			xhr.open("Post","ajaxLogout.php",true);
			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
			xhr.send(null);

			document.getElementById('mem-2').innerText='';
			document.getElementById("memName").innerText =  ''; 
			document.getElementById("memMJ").innerText =  '';
			document.getElementsByClassName("Mjbar")[0].style.width = "0%";

			document.getElementsByClassName("loginContent")[0].style.display="none";
			document.getElementsByClassName("loginImg")[0].innerHTML= "<img src='images/loginPhoto.svg' >";

			//登入的使用者資料暗樁 --各頁面可直接複製取用
			document.getElementById("userNo").value = '';
			document.getElementById("userId").value = '';
			document.getElementById("userCoin").value = '';
			document.getElementById("userAnimal").value = '';
			document.getElementById("userEye").value = '';
			document.getElementById("userColor").value = '';
			document.getElementById("userStar").value = '';
			document.getElementById("userHobby").value = '';
			document.getElementById("userSelf").value = '';
			document.getElementById("userHat").value = '';
			document.getElementById("userClothes").value = '';
			document.getElementById("userPlay").value = '';
			document.getElementById("userLove").value = '';

			var friendbox = document.getElementsByClassName("friendbox")[0];
			var chatbox_show = document.getElementsByClassName("chatbox_show")[0];
			while(friendbox.firstChild) {
				friendbox.removeChild(friendbox.firstChild);
			}
			while(chatbox_show.firstChild) {
				chatbox_show.removeChild(chatbox_show.firstChild);
			}
			
		}
	});
	// 登入end --by ga
	
	//(註冊按鈕)關燈箱 
	$id("loginBoxClose").addEventListener("click",function(){
		$id("lightBoxInner").style.cssText = 'opacity:0;display: none;';
		$id("loginBox").style.cssText = 'display:none;';
	},false);

}, false);

//燈箱說明 --介庸
/*
		操作說明
        宣告註冊 燈箱id 燈箱遮罩ID 燈箱xx按鈕ID
        ex.
        ooxx = document.getElementById('ooxx');
        啟動你要ㄉ動作執行帶入ooxxLightBox函式
        ex. 
        ooxx.addEventListener('click', () => {
            ooxxLightBox(燈箱遮罩ID,燈箱ID,燈箱xx按鈕ID);
		})
    */

//燈箱function start --介庸
ooxxLightBox = (...lightBoxArray) => {
	let LightBoxMask = lightBoxArray[0];
	let LightBox = lightBoxArray[1];
	let lightBoxXX = lightBoxArray[2];
	LightBox.style.display = 'none';
	opacity = 0;

	// 關掉按鈕樣式
	lightBoxXXGo = (e) => {
		if ((e.type == 'mousedown') || (e.type == 'touchstart')) {
			lightBoxXX.classList.add('lightBoxDown');
		} else if ((e.type == 'mouseup') || (e.type == 'touchend')) {
			lightBoxXX.classList.remove('lightBoxDown');
		}
	}
	lightBoxXX.addEventListener('mousedown', lightBoxXXGo);
	lightBoxXX.addEventListener('mouseup', lightBoxXXGo);
	lightBoxXX.addEventListener('touchstart', lightBoxXXGo);
	lightBoxXX.addEventListener('touchend', lightBoxXXGo);

	//燈箱開始
	LightBox.style.display = 'none';
	opacity = 0;

	//打開淡入    
	OpenLightBox = () => {
		LightBox.style.display = 'block';
		LightBoxMask.style.display = 'block';
		opacity += 0.086;
		LightBox.style.opacity = opacity;
		OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
		if (opacity > 1) {
			opacity = 1;
			LightBox.style.opacity = 1;
			cancelAnimationFrame(OpenLightBoxId);
		}
	}

	//關掉燈箱喔
	closeLightBox = () => {
		if (opacity > 0.4) {
			opacity -= 0.086;
		} else {
			opacity -= 0.026;
		}
		LightBox.style.opacity = opacity;
		closeLightBoxId = window.requestAnimationFrame(closeLightBox);
		if (opacity <= 0) {
			LightBoxMask.style.display = 'none';
			opacity = 0;
			LightBox.style.opacity = opacity;
			cancelAnimationFrame(closeLightBoxId);
			LightBox.style.display = 'none';
		}
	}
	// 開啟燈箱
	if (LightBox.style.display == 'none') {
		OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
	}

	//關掉燈箱函式
	lightBoxXX.addEventListener('click', () => {
		closeLightBoxId = window.requestAnimationFrame(closeLightBox);
	})
	LightBoxMask.addEventListener('click', () => {
		closeLightBoxId = window.requestAnimationFrame(closeLightBox);
	})
}

//燈箱function end --介庸


window.addEventListener('load', function () {
	
	//聊天室內的好友邀請box收合 --by ga
	reply_control = false;
	$id("replyboxTitle").addEventListener("click",function(){
		if(reply_control==false){ //打開
			$id("replybox").style.height = "83%";
			document.getElementsByClassName("friendbox")[0].style.transition = "height .5s";
			document.getElementsByClassName("friendbox")[0].style.height = "0";
			reply_control = true;
		}else{ //收起來
			$id("replybox").style.height = "32px";
			$id("replybox").style.top = "";
			$id("replybox").style.bottom = "8px";
			document.getElementsByClassName("friendbox")[0].style.transition = "height 1s";
			document.getElementsByClassName("friendbox")[0].style.height = "";
			reply_control = false;

		}
	});
	// 登入start --by ga
	$id("loginNot").addEventListener("click",function(){
		if($id("loginNot").innerText=='登入'){
			sendForm();
			$id("loginNot").innerText='登出';
			document.getElementsByClassName("loginContent")[0].style.display="";
			var div_chooseBox = document.getElementsByClassName("friendbox")[0];
			var label = document.createElement("label");
			label.className = "friendClick";

				//頭貼div
				var headImg_div = document.createElement("div");
				headImg_div.id="admin";
				headImg_div.innerHTML='<img src="shop-images/gift.png" class="friendClick"></img>';
				headImg_div.className= "friendClick";

				//創建p_memName朋友暱稱
				var p_memName = document.createElement("p");
				p_memName.innerText = "管理員";
				p_memName.className = "friendClick";


			//將img_friend、p_memNam、input_submit塞進label
			// label.appendChild(input);
			label.appendChild(headImg_div);
			label.appendChild(p_memName);
			//將label塞進div
			div_chooseBox.appendChild(label);
		}else{
			var xhr = new XMLHttpRequest(); // 建立xhr
			xhr.onload = function(){
				if(xhr.responseText == "null"){ //失敗狀態
					alert("xhr錯誤發生");

				}else{ //成功
					alert("您已登出~");
					$id("loginNot").innerText='登入';
				}
			};
			xhr.open("Post","ajaxLogout.php",true);
			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
			xhr.send(null);

			document.getElementById('mem-2').innerText='';
			document.getElementById("memName").innerText =  ''; 
			document.getElementById("memMJ").innerText =  '';
			document.getElementsByClassName("Mjbar")[0].style.width = "0%";

			document.getElementsByClassName("loginContent")[0].style.display="none";
			document.getElementsByClassName("loginImg")[0].innerHTML= "<img src='images/loginPhoto.svg' >";

			//登入的使用者資料暗樁 --各頁面可直接複製取用
			document.getElementById("userNo").value = '';
			document.getElementById("userId").value = '';
			document.getElementById("userCoin").value = '';
			document.getElementById("userAnimal").value = '';
			document.getElementById("userEye").value = '';
			document.getElementById("userColor").value = '';
			document.getElementById("userStar").value = '';
			document.getElementById("userHobby").value = '';
			document.getElementById("userSelf").value = '';
			document.getElementById("userHat").value = '';
			document.getElementById("userClothes").value = '';
			document.getElementById("userPlay").value = '';
			document.getElementById("userLove").value = '';

			var friendbox = document.getElementsByClassName("friendbox")[0];
			var chatbox_show = document.getElementsByClassName("chatbox_show")[0];
			while(friendbox.firstChild) {
				friendbox.removeChild(friendbox.firstChild);
			}
			while(chatbox_show.firstChild) {
				chatbox_show.removeChild(chatbox_show.firstChild);
			}
			


			
			
		}
		
		
		
	});
	// 登入end --by ga

}, false);


// 角色外觀載入函式start -- 介庸
ooxxGetRole = (roleId, roleData) => {

	// 載入角色
	roleId.innerHTML = `<div class="role">
                            <embed class="bodySvg" src="images/roleImages/body${roleData.animal}.svg" style="display:block;">
                         </div>
                        <div class="roleEyes">
                            <embed class="eyesSvg" src="images/roleImages/eyes${roleData.eyes}.svg" style="display:block;">
                        </div>
                        <div class="roleHat"></div>
                        <div class="roleClothes"></div>`;

	//填入顏色
	roleId.getElementsByTagName('embed')[0].addEventListener('load', (e) => {
		let fillColor = e.path[0].getSVGDocument().getElementsByClassName('cls-2');
		for (let i = 0; i < fillColor.length; i++) {
			fillColor[i].style.fill = `#${roleData.color}`;
		}
	})

	// 眼睛 帽帽 衣服喔 
	// roleId.getElementsByClassName('roleEyes')[0].style.backgroundImage = `url(roleImages/eyes${roleData.eyes}.svg`;
	if (roleData.hat) {
		roleId.getElementsByClassName('roleHat')[0].style.backgroundImage = `url(images/hatImages/hat${roleData.hat}.png`;
	}
	if (roleData.clothes) {
		roleId.getElementsByClassName('roleClothes')[0].style.backgroundImage = `url(images/clothesImages/clothes${roleData.clothes}.png`;
	}

	//眼睛動起來
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	scaleY = 1;

	eyesAnimate = (...eyesArray) => {
		
		eyesGo = () => {
			eyesArray[0].animate([{
					transform: 'scaleY(1)'
				},
				{
					transform: 'scaleY(0.01)'
				},
				{
					transform: 'scaleY(1)'
				}
			], {
				duration: 500,
				endDelay: 1000,
			});

			eyesArray[1].animate([{
					transform: 'scaleY(1)'
				},
				{
					transform: 'scaleY(0.01)'
				},
				{
					transform: 'scaleY(1)'
				}
			], {
				duration: 500,
				endDelay: 1000,
			});
		}
		setInterval(eyesGo, getRandom(2000, 3500));
	}

	roleId.getElementsByTagName('embed')[1].addEventListener('load', (e) => {
		switch (parseInt(roleData.eyes)) {
			case 1:
				eyes1 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
				eyes1[0].style.transformOrigin = `center 52%`;
				eyes1[1].style.transformOrigin = `center 52%`;

				eyesAnimate(eyes1[0], eyes1[1]);
				break;
			case 2:
				eyes2 = e.path[0].getSVGDocument().getElementsByClassName('cls-3');
				eyes2[1].style.transformOrigin = `center 52%`;
				eyes2[2].style.transformOrigin = `center 52%`;
				eyesAnimate(eyes2[1], eyes2[2]);
				break;
			case 3:
				eyes3 = e.path[0].getSVGDocument().getElementsByClassName('cls-3');
				eyes3[1].style.transformOrigin = `center 52%`;
				eyes3[2].style.transformOrigin = `center 52%`;
				eyesAnimate(eyes3[1], eyes3[2]);
				break;
			case 4:
				eyes4 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
				eyes4[1].style.transformOrigin = `center 52%`;
				eyes4[3].style.transformOrigin = `center 52%`;
				eyesAnimate(eyes4[1], eyes4[3]);
				break;
			case 5:
				eyes5 = e.path[0].getSVGDocument().getElementsByClassName('cls-2');
				eyes5[0].style.transformOrigin = `center 52%`;
				eyes5[1].style.transformOrigin = `center 52%`;
				eyesAnimate(eyes5[0], eyes5[1]);
				break;
			case 6:
				eyes6 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
				eyes6[1].style.transformOrigin = `center 51%`;
				eyes6[4].style.transformOrigin = `center 51%`;
				eyesAnimate(eyes6[1], eyes6[4]);
				break;
		}
	})
	
}

ooxxGetHead = (headId, headData) => {
	// 載入頭頭
	headId.innerHTML = `<div class="roadHead">
                            <embed class="headSvg" src="images/roleImages/head${headData.animal}.svg" style="display:block;">
                        </div>
                        <div class="headEyes"></div>`;

	headId.getElementsByTagName('embed')[0].addEventListener('load', (e) => {
		let fillColor = e.path[0].getSVGDocument().getElementsByClassName('cls-1')[0];
		fillColor.style.fill = `#${headData.color}`;
	})

	//插入眼睛
	headId.getElementsByClassName('headEyes')[0].style.backgroundImage = `url(images/roleImages/eyes${headData.eyes}.svg`;
}

// 角色外觀載入函式end -- 介庸