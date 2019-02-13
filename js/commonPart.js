var body = document.getElementsByTagName('body');

console.log(body);

function head_html() {

	var str_tag = `
	<div id="head" class="head mnone">
        <div class="headWrap">
            <a href="index.html"><img id="logo" src="images/logo.svg" alt="logo"></a>
            <ul class="menu">
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.html">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
                <li><a href="photo.html">照片牆</a></li>
                <li><a href="myRoom.html">我的窩</a></li>
            </ul>
            <div class="loginBox">
                <div class="loginImg">
                    <img src="images/loginPhoto.svg">
                </div>
                <div class="loginTxtWrap">
                    <div class="loginNot">
                        <a href="#"><span>登入</span></a> 
                    </div>
                    <div class="loginContent">
                        <div class="loginTitle">
                            <span>ID</span><span>等級</span>
                        </div>
                        <div class="loginMj">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="head_phone  dnone ">
        <a href="#">
            <img id="btn_menu_menu" src="pic/phone_icon_menu.svg" alt="">
        </a>
        <a href="index.html" class="logo_phone">
            <img src="pic/logo_phone03.png" alt="">
        </a>
        <a href="#">
            <img id="btn_chatroom_phone" src="pic/phone_icon_chat.svg" alt="">
        </a>
        <div id="menu_phone" class="menu_phone">
            <ul>
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.html">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
                <li><a href="photo.html">照片牆</a></li>
                <li><a href="#">登入</a></li>
                <li><a href="#">魅力值</a></li>
                <li><a id="head_member_icon" href="myRoom.html">會員中心</a></li>
            </ul>
        </div>
    </div>
    <div id="loginBox" class="LightBoxMask"></div>
    <div id="lightBoxInner" class="middleLightBox login_box">
        <h2>登入/註冊</h2>
        <form id="login_form" action="">
            <input type="e-mail" placeholder="hi@gmail.com">
            <input type="psw" placeholder="6位數密碼">
            <input type="submit" value="送出" class="input_R">
        </form>
        <!-- 關掉按鈕 -->
        <div id="loginBoxClose" class="lightBoxXX"></div>
    </div>
	`;

	document.write(str_tag);
}



function foot_html() {

	var str_tag2 = `
		   <!-- 桌機聊天室 -->
	    <div id="chatRoom" class="chatRoom">
	    <!-- 聊天室右側主要顯示區  -->
	    <h2 id="chatRoom_control">麻吉聊天室</h2>
	    <div class="chatRoom_info">
	        <img id="friendPic" src="pic/friend_demo_03.svg" alt="朋友大頭照">
	        <span id="mem-2">An</span>
	        <a href="#"><img src="pic/chatroom_btn_gift.svg" alt="送禮物按鍵"></a>
	        <a href="#"><img src="pic/chatroom_btn_profile.svg" alt="查看個人檔案按鍵"></a>
	    </div> 
	    <div class="chatboxRight">
	        <div class="chatbox_show">
	            <img id="friendPicSmall" src="pic/friend_demo_03.svg" alt="朋友大頭照">
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
	    <label for=""><img id="chatroom_btn_open" src="pic/chatroom_btn_open1.svg" alt="收合左側欄按鍵"></label>
	    <div id="chatboxLeft" class="chatboxLeft">
	        <input id="search_input" type="text" placeholder="搜尋好友">
	        <div class="friendbox">

	        </div>
	        <div class="replybox">
	            <h4>待回覆好友邀請</h4>
	        </div>
	    </div>
	</div>
	    <!-- 手機聊天室 -->
	    <div class="chatRoom_phone_part1" id="chatRoom_phone_part1">
	            <input id="search_input_phone" type="text" placeholder="搜尋好友">
	            <img src="pic/friendbox_demo.png" alt="fr_demo" class="fr_demo" id="fr_demo">
	            <!-- <div id="friendbox_phone">
	                friendbox//之後寫入
	            </div> -->
	            <div id="replybox_phone">
	                <h4>待回覆好友邀請</h4>
	            </div>
	    </div>
	    <div class="chatRoom_phone_part2" id="chatRoom_phone_part2">
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
	    </div>
	    <!-- 手機聊天室結束 -->
	    
	</div>
	`;

	document.write(str_tag2);
}

function msgDB(){
	
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if(xhr.responseText == "null"){
			alert("xhr錯誤發生");
		}else{
			var chatbox_show = document.getElementsByClassName('chatbox_show')[0]; //聊天內容顯示區域
			var data = JSON.parse(xhr.responseText);
			
			console.log(data.content);
			for(var i=0;data.content.length;i++){
				var msg_div = document.createElement("div");
				var msg_span = document.createElement("span");
				msg_span.innerText = data.content[i].replace(/\r\n|\n/g,"");
				msg_div.appendChild(msg_span);
				chatbox_show.appendChild(msg_div);
				
				if(data.sendMem[i]==1){ //我發的訊息:靠右
					msg_div.className="iSaid";			
				}else{
					msg_div.className="youSaid";
				}
			}
			// var mineMsg = data.mine.split("||");
			// for(var i=0;i<mineMsg.length;i++){ //有撈到(回傳)聊天內容的話

		}
	};
	xhr.open("Post","getChatMsg.php",true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	var chatMems = {
		sendMemId: 1,
		taMemId: 2,
	}; //聊天雙方會員ID組成物件
	xhr.send("chatMems="+ JSON.stringify(chatMems));
}





window.addEventListener('load', function () {

	


	//聊天室操控
	var chatRoom_control = document.getElementById('chatRoom_control');
	var chatroom_btn_open = document.getElementById('chatroom_btn_open');
	//取得物件
	var chatRoom = document.getElementById('chatRoom');
	var chatboxLeft = document.getElementById('chatboxLeft');
	var ch = 0, //控制開關，0為初始關閉值，1為打開
		ch1 = 0;

	// console.log(chatboxLeft);

	//聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉
	chatRoom_control.addEventListener('click', function () {

		

		if (ch1 == 0) { //如果視窗是關閉狀態，就打開
			chatRoom.style.cssText = "transform:translateY(0%)";
			chatboxLeft.style.cssText = "opacity:1;";
			msgDB();
			return ch1 = 1;
		} else {
			chatRoom.style.cssText = "transform:translateY(82%)";
			chatboxLeft.style.cssText = "opacity:1;";
			return ch1 = 0, ch = 0;
		}

	});

	//聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉
	chatroom_btn_open.addEventListener('click', function () {
		if (ch == 0) { //要顯示出來
			chatboxLeft.style.cssText = "opacity:0;";
			return ch = 1;
		} else { //要關閉
			chatboxLeft.style.cssText = "opacity:1;";
			return ch = 0;
		}
	});


	//手機版聊天室操控_01
	var btn_chatroom_phone = document.getElementById('btn_chatroom_phone');
	var chatRoom_phone_part1 = document.getElementById('chatRoom_phone_part1');
	var chatRoom_phone_part2 = document.getElementById('chatRoom_phone_part2');
	var fr_demo = document.getElementById('fr_demo');
	var btn_menu_menu = document.getElementById('btn_menu_menu');
	var menu_phone = document.getElementById('menu_phone');
	var btn_chat_prev = document.getElementById('btn_chat_prev');


	btn_chatroom_phone.addEventListener('click', function () {
		if (chatRoom_phone_part1.hasAttribute('value') == false) {
			chatRoom_phone_part1.style.cssText = " top: 8vh;;opacity:1";
			chatRoom_phone_part2.style.cssText = "opacity:0";
			chatRoom_phone_part1.setAttribute('value', '打開');
		} else {
			chatRoom_phone_part1.style.cssText = " top: -100vh;;opacity:0";
			chatRoom_phone_part2.style.cssText = "opacity:0";
			chatRoom_phone_part1.removeAttribute('value', '打開');
		}

	}, false);


	//手機版聊天室操控_02
	fr_demo.addEventListener('click', function () {
		chatRoom_phone_part1.style.cssText = " top:8vh;left:0%;opacity:1; ";
		chatRoom_phone_part2.style.cssText = " left: 0;display:flex;opacity:1;z-index:11";
	});

	btn_chat_prev.addEventListener('click', function () {
		chatRoom_phone_part1.style.cssText = " top:8vh;left:0;opacity:1; ";
		chatRoom_phone_part2.style.cssText = "opacity:0;z-index:-1";
	}, false);


	//手機版menu操控
	btn_menu_menu.addEventListener('click', function () {

		if (menu_phone.hasAttribute('value') == false) {
			menu_phone.style.cssText = "transform: scale(1);opacity:1";
			menu_phone.setAttribute('value', '打開');
		} else {
			menu_phone.style.cssText = "transform: scale(0);opacity:0";
			menu_phone.removeAttribute('value', '打開');
		}
	});

	//聊天室貼圖操作
	var chatbox_faces = document.getElementById('chatbox_faces');
	var chat_facesImgs = document.getElementsByClassName('chat_faces');
	var chatbox_show = document.getElementsByClassName('chatbox_show')[0];

	for (var i = 0; i < chat_facesImgs.length; i++) {
		chat_facesImgs[i].addEventListener('click', function () {
			var src_face = this.src;
			console.log(src_face);
			var img = document.createElement('img');
			img.setAttribute('style', 'float:right;width:10%;position:relative;right:50px');
			img.src = src_face;

			var divImg = document.createElement('div');
			divImg.appendChild(img);
			divImg.setAttribute('style', 'display:inline-block;width:100%;');

			var clearbox = document.createElement('div');
			divImg.appendChild(clearbox);
			clearbox.setAttribute('class', 'clearbox');


			chatbox_show.appendChild(divImg);

			boxScroll(chatbox_show);

		}, false);
	}

	//讓
	function boxScroll(o) {
		o.scrollTop = o.scrollHeight;
	}

	//登入燈箱操作
	var login_box = document.getElementById('login_box');
	var login_form = document.getElementById('login_form');
	var btn_login = document.getElementById('btn_login');
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

//手機聊天室貼圖顯示控制
window.addEventListener('load', function () {

	var chatbox_faces_phone = document.getElementById('chatbox_faces_phone');
	var btn_chat_picbox = document.getElementById('btn_chat_picbox');

	btn_chat_picbox.addEventListener('click', function () {

		if (chatbox_faces_phone.style.opacity == 0) {
			chatbox_faces_phone.style.cssText = "opacity:1";
		} else {
			chatbox_faces_phone.style.cssText = "opacity:0";
		}

	}, false);


	var chat_facesImgs_phone = document.getElementsByClassName('chat_faces_phone');
	var info_chatbox = document.getElementById('info_chatbox');

	for (var i = 0; i < chat_facesImgs_phone.length; i++) {
		chat_facesImgs_phone[i].addEventListener('click', function () {
			var src_face_phone = this.src;
			var img_phone = document.createElement('img');
			img_phone.setAttribute('style', 'float:right;width:12%;margin:5px 0;height:50px;position:relative;right:50px');
			img_phone.src = src_face_phone;

			var divImg = document.createElement('div');
			divImg.appendChild(img_phone);
			divImg.setAttribute('style', 'display:inline-block;width:100%;');

			var clearbox = document.createElement('div');
			divImg.appendChild(clearbox);
			clearbox.setAttribute('class', 'clearbox');


			info_chatbox.appendChild(divImg);

			boxScroll(info_chatbox);

		}, false);

		function boxScroll(o) {
			o.scrollTop = o.scrollHeight;
		}
	}


}, false);

window.addEventListener('load', function () {
	var chatTxt_input = document.getElementById('chatTxt_input');
	var chatTxt_send = document.getElementById('chatTxt_send');
	var chatbox_show = document.getElementsByClassName('chatbox_show')[0];


	chatTxt_input.addEventListener('keydown', function (e) {
		if (e.keyCode == 13) { //enter代碼
			var txt = chatTxt_input.value;

			if (chatTxt_input.value != "") {
				var span = document.createElement('p');
				span.setAttribute('style', 'float:right;display:block;height:30px;position:relative;right:50px');
				span.innerText = txt;

				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style', 'display:inline-block;width:100%;height:30px;margin:5px 0;');

				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class', 'clearbox');

				chatbox_show.appendChild(divspan);
				chatTxt_input.value = '';

				boxScroll(chatbox_show);
			}

		}
	}, false);

	chatTxt_send.addEventListener('click', function () {
		var txt = chatTxt_input.value;

		if (chatTxt_input.value != "") {
			var span = document.createElement('p');
			span.setAttribute('style', 'float:right;display:block;height:30px;position:relative;right:50px;padding:5px 0;');
			span.innerText = txt;

			var divspan = document.createElement('div');
			divspan.appendChild(span);
			divspan.setAttribute('style', 'display:inline-block;width:100%;height:30px;margin:5px 0;');

			var clearbox = document.createElement('div');
			divspan.appendChild(clearbox);
			clearbox.setAttribute('class', 'clearbox');

			chatbox_show.appendChild(divspan);
			chatTxt_input.value = '';

			boxScroll(chatbox_show);
		}
	}, false);

	function boxScroll(o) {
		o.scrollTop = o.scrollHeight;
	}

	//手機聊天室輸入

	var info_input_phone = document.getElementById('info_input_phone');
	var info_chatbox = document.getElementById('info_chatbox');

	info_input_phone.addEventListener('keydown', function (e) {
		if (e.keyCode == 13) { //enter代碼
			var txt = info_input_phone.value;

			if (info_input_phone.value != "") {
				var span = document.createElement('p');
				span.setAttribute('style', 'float:right;display:block;height:30px;position:relative;right:50px');
				span.innerText = txt;

				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style', 'display:inline-block;width:100%;height:30px;margin:5px 0;');

				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class', 'clearbox');

				info_chatbox.appendChild(divspan);
				info_input_phone.value = '';

				boxScroll(info_chatbox);
			}

		}
	}, false);

	window.addEventListener('resize', function () { //可能要再改
		var clientWidrh = document.body.clientWidth;
		console.log(clientWidrh);
		if (clientWidrh < 1000) {
			while (chatbox_show.firstChild) {
				chatbox_show.removeChild(chatbox_show.firstChild);
				console.log('ddd');
			}
		}
		if (clientWidrh > 760) {
			while (info_chatbox.firstChild) {
				info_chatbox.removeChild(info_chatbox.firstChild);
				console.log('ddd');
			}
		}


	}, false);

}, false);

//燈箱
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




window.addEventListener('load', function () {


	function $id(id) {
		return document.getElementById(id);
	}


	$id('btn_login').addEventListener('click', function () {
		ooxxLightBox($id('loginBox'), $id('lightBoxInner'), $id('loginBoxClose'));
	}, false);

}, false);


window.addEventListener('load', function () {
	//head消失
	var head = $id('head');
	console.log(head);

	window.addEventListener('scroll', function (e) {
		var scrollY = document.documentElement.scrollTop;
		if (window.innerWidth > 844) {
			if (scrollY > 120) {
				head.style.display = 'none';
			} else {
				head.style.display = 'block';
			}
		}
	}, false);

	window.addEventListener('resize', function () {
		if (window.innerWidth < 767) {
			head.style.display = 'none';
		} else {
			head.style.display = 'block';
		}
	}, false);

}, false);


var scrollY = document.documentElement.scrollTop;
console.log(scrollY);

if (window.innerWidth > 844) {
	if (scrollY > 120) {
		head.style.display = 'none';
	} else {
		head.style.display = 'block';
	}
}




ooxxGetRole = (roleId, roleData) => {
    // 載入角色
    roleId.innerHTML = `<div class="role">
                            <embed class="bodySvg" src="roleImages/body${roleData.animal}.svg" style="display:block;">
                         </div>
                        <div class="roleEyes">
                            <embed class="eyesSvg" src="roleImages/eyes${roleData.eyes}.svg" style="display:block;">
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
        roleId.getElementsByClassName('roleHat')[0].style.backgroundImage = `url(hatImages/hat${roleData.hat}.png`;
    }
    if (roleData.clothes) {
        roleId.getElementsByClassName('roleClothes')[0].style.backgroundImage = `url(clothesImages/clothes${roleData.clothes}.png`;
    }

    //眼睛動起來
    scaleY = 1;

    eyesAnimate = (...eyesArray) => {

        eyesGo = () => {
            eyesArray[0].animate([
                { transform: 'scaleY(1)' },
                { transform: 'scaleY(0.01)' },
                { transform: 'scaleY(1)' }
            ], {
                    duration: 500,
                    endDelay: 1000,
                });

            eyesArray[1].animate([
                { transform: 'scaleY(1)' },
                { transform: 'scaleY(0.01)' },
                { transform: 'scaleY(1)' }
            ], {
                    duration: 500,
                    endDelay: 1000,
                });
        }
        setInterval(eyesGo, 2500);
    }

    roleId.getElementsByTagName('embed')[1].addEventListener('load', (e) => {
        switch (roleData.eyes) {
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
                            <embed class="headSvg" src="roleImages/head${headData.animal}.svg" style="display:block;">
                        </div>
                        <div class="headEyes"></div>`;

    headId.getElementsByTagName('embed')[0].addEventListener('load', (e) => {
        let fillColor = e.path[0].getSVGDocument().getElementsByClassName('cls-1')[0];
        fillColor.style.fill = `#${headData.color}`;
    })

    //插入眼睛
    headId.getElementsByClassName('headEyes')[0].style.backgroundImage = `url(roleImages/eyes${headData.eyes}.svg`;
}


