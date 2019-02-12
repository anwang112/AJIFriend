var body = document.getElementsByTagName('body');
function $id(id) {
    return document.getElementById(id);
}

function head_html(){
	
	var str_tag = `
	<div id="head" class="head mnone">
	    <a href="index.html"><img id="logo" src="pic/logo.svg" alt="logo"></a>
	    <ul class="menu">
	        <li><a href="match.html">找麻吉</a></li>
	        <li><a href="activity_v2.html">活動巴士</a></li>
	        <li><a href="BearMJ_shop.html">造型商城</a></li>
			<li><a href="photo.html">照片牆</a></li>
			<li><a href="myRoom.html">我的窩</a></li>
	    </ul>
	    <ul class="menu_sub">
	        <li><a id="btn_login"href="javascript:;">登入</a></li>
	        <li><a href="#">魅力值</a></li>
	    </ul>
	</div>
	<div class="head_phone  dnone ">
	    <a href="#">
	        <img id="btn_menu_menu" src="pic/phone_icon_menu.svg" alt="">
	    </a>
	    <a href="#" class="logo_phone">
	        <img src="pic/logo_phone03.png" alt="">
	    </a>
	    <a href="#">
	        <img id="btn_chatroom_phone" src="pic/phone_icon_chat.svg" alt="">
	    </a>
	    <div id="menu_phone" class="menu_phone">
	        <ul>
	            <li><a href="match.html">找麻吉</a></li>
	            <li><a href="activity_v2.html">活動巴士</a></li>
	            <li><a href="BearMJ_shop.html">造型商城</a></li>
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



function foot_html(){

	var str_tag2 = `
	<!-- 桌機聊天室 -->
	<div id="chatRoom" class="chatRoom">
	<!-- 聊天室右側主要顯示區  -->
	<h2 id="chatRoom_control">麻吉聊天室</h2>
	<div class="chatRoom_info">
		<img id="friendPic" src="pic/friend_demo_03.svg" alt="朋友大頭照">
		<span>吐2</span>
		<a href="#"><img src="pic/btn_chat_gift.svg" alt="送禮物按鍵"></a>
		<a href="#"><img src="pic/btn_chat_profile.svg" alt="查看個人檔案按鍵"></a>
	</div> 
	<div class="chatboxRight">
		<div id="chatbox_show" class="chatbox_show">
			<img id="friendPicSmall" src="pic/friend_demo_03.svg" alt="朋友大頭照">
			<span>hello</span>
		</div>
		<div id="chatbox_faces" class="chatbox_faces">
			<img class="chat_faces" src="pic/chatroom_face_01.svg" alt="喜">
			<img class="chat_faces" src="pic/chatroom_face_02.svg" alt="怒">
			<img class="chat_faces" src="pic/chatroom_face_03.svg" alt="哀">
			<img class="chat_faces" src="pic/chatroom_face_04.svg" alt="樂">
		</div>
		<div class="chatbox_input">
			<input id="chatTxt_input" type="text">
			<input id="chatTxt_send" class="btn_R" type="button" value="送出">
		</div>      
	</div> 
	<!-- 聊天室收合左側欄  -->
	<label for=""><img id="chatroom_btn_open" src="pic/chatroom_btn_open1.svg" alt="收合左側欄按鍵"></label>
	<div id="chatboxLeft" class="chatboxLeft">
		<input id="search_input" class="input_R" type="text" placeholder="搜尋好友">
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
		<div id="info_chatbox" class="info_chatbox">
			<span>hi~~</span>
		</div>
		<div id="info_controlbox" class="info_controlbox">
			<img id="" src="pic/btn_chat_gift.svg" alt="">
			<img src="pic/btn_chat_profile.svg" alt="">
			<img id="btn_chat_picbox" src="pic/btn_chat_send.svg" alt="">
			<input id="info_input_phone" type="text">
		</div>
		<div id="chatbox_faces_phone" class="chatbox_faces_phone">
				<img class="chat_faces_phone" src="pic/chatroom_face_01.svg" alt="喜">
				<img class="chat_faces_phone" src="pic/chatroom_face_02.svg" alt="怒">
				<img class="chat_faces_phone" src="pic/chatroom_face_03.svg" alt="哀">
				<img class="chat_faces_phone" src="pic/chatroom_face_04.svg" alt="樂">
		</div>
	</div>
	`; 

	document.write(str_tag2);
}


window.addEventListener('load',function(){


    //聊天室操控
    var chatRoom_control = document.getElementById('chatRoom_control');
    var chatroom_btn_open = document.getElementById('chatroom_btn_open');
    //取得物件
    var chatRoom = document.getElementById('chatRoom');
    var chatboxLeft = document.getElementById('chatboxLeft');
    var ch = 0,//控制開關，0為初始關閉值，1為打開
    ch1 =0;


    //聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatRoom_control.addEventListener('click',function(){
        if(ch1==0){//如果視窗是關閉狀態，就打開
            chatRoom.style.cssText="transform:translateY(0%)";
            chatboxLeft.style.cssText="opacity:1;";
            return ch1 =1;
        }else{
            chatRoom.style.cssText="transform:translateY(82%)";
            chatboxLeft.style.cssText="opacity:1;"; 
            return ch1 =0,ch=0;      
        }

    });

    //聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatroom_btn_open.addEventListener('click',function(){
        if(ch==0){//要顯示出來
            chatboxLeft.style.cssText="opacity:0;";
            return ch = 1;
        }else{//要關閉
            chatboxLeft.style.cssText="opacity:1;";
            return ch = 0;
        }
    });


    //手機版聊天室操控_01
    var btn_chatroom_phone = document.getElementById('btn_chatroom_phone');
    var chatRoom_phone_part1 = document.getElementById('chatRoom_phone_part1');
    var chatRoom_phone_part2 = document.getElementById('chatRoom_phone_part2');
    var fr_demo = document.getElementById('fr_demo');
    var btn_menu_menu =document.getElementById('btn_menu_menu');
    var menu_phone = document.getElementById('menu_phone');
    var btn_chat_prev =document.getElementById('btn_chat_prev');


    btn_chatroom_phone.addEventListener('click',function(){
        if(chatRoom_phone_part1.hasAttribute('value') == false){
            chatRoom_phone_part1.style.cssText=" top: 8vh;;opacity:1";
            chatRoom_phone_part2.style.cssText="opacity:0";
            chatRoom_phone_part1.setAttribute('value','打開');
        }else{
            chatRoom_phone_part1.style.cssText=" top: -100vh;;opacity:0";
            chatRoom_phone_part2.style.cssText="opacity:0";
            chatRoom_phone_part1.removeAttribute('value','打開');
        }

    },false);


    //手機版聊天室操控_02
    fr_demo.addEventListener('click',function(){
        chatRoom_phone_part1.style.cssText=" top:8vh;left:0%;opacity:1; ";
        chatRoom_phone_part2.style.cssText=" left: 0;display:flex;opacity:1;z-index:11";
    });

    btn_chat_prev.addEventListener('click',function(){
        chatRoom_phone_part1.style.cssText=" top:8vh;left:0;opacity:1; ";
        chatRoom_phone_part2.style.cssText="opacity:0;z-index:-1";
    },false);


    //手機版menu操控
    btn_menu_menu.addEventListener('click',function(){

        if(menu_phone.hasAttribute('value') == false){
            menu_phone.style.cssText="transform: scale(1);opacity:1";
            menu_phone.setAttribute('value','打開');
        }else{
            menu_phone.style.cssText="transform: scale(0);opacity:0";
            menu_phone.removeAttribute('value','打開');
        }
	});

	//聊天室貼圖操作
	var chatbox_faces = document.getElementById('chatbox_faces');
	var chat_facesImgs = document.getElementsByClassName('chat_faces');
	var chatbox_show = document.getElementById('chatbox_show');

	for(var i=0; i<chat_facesImgs.length;i++){
		chat_facesImgs[i].addEventListener('click',function(){
			var src_face = this.src;
			var img = document.createElement('img');
			img.setAttribute('style','float:right;width:10%;position:relative;right:50px');
			img.src = src_face;

			var divImg = document.createElement('div');
			divImg.appendChild(img);
			divImg.setAttribute('style','display:inline-block;width:100%;');

			var clearbox = document.createElement('div');
			divImg.appendChild(clearbox);
			clearbox.setAttribute('class','clearbox');


			chatbox_show.appendChild(divImg);

			boxScroll(chatbox_show);

		},false);
	}
	
	//讓
	function boxScroll(o){
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
	

},false);

//手機聊天室貼圖顯示控制
window.addEventListener('load',function(){

	var chatbox_faces_phone = document.getElementById('chatbox_faces_phone');
	var btn_chat_picbox = document.getElementById('btn_chat_picbox');

	btn_chat_picbox.addEventListener('click',function(){

		if(chatbox_faces_phone.style.opacity == 0){
			chatbox_faces_phone.style.cssText="opacity:1";
		}else{
			chatbox_faces_phone.style.cssText="opacity:0";
		}
		
	},false);


	var chat_facesImgs_phone = document.getElementsByClassName('chat_faces_phone');
	var info_chatbox = document.getElementById('info_chatbox');

	for(var i=0; i<chat_facesImgs_phone.length;i++){
		chat_facesImgs_phone[i].addEventListener('click',function(){
			var src_face_phone = this.src;
			var img_phone = document.createElement('img');
			img_phone.setAttribute('style','float:right;width:12%;margin:5px 0;height:50px;position:relative;right:50px');
			img_phone.src = src_face_phone;

			var divImg = document.createElement('div');
			divImg.appendChild(img_phone);
			divImg.setAttribute('style','display:inline-block;width:100%;');

			var clearbox = document.createElement('div');
			divImg.appendChild(clearbox);
			clearbox.setAttribute('class','clearbox');


			info_chatbox.appendChild(divImg);

			boxScroll(info_chatbox);

		},false);
		function boxScroll(o){
			o.scrollTop = o.scrollHeight;
		}
	}


},false);

window.addEventListener('load',function(){
	var chatTxt_input = document.getElementById('chatTxt_input');
	var chatTxt_send = document.getElementById('chatTxt_send');
	var chatbox_show = document.getElementById('chatbox_show');

	
		chatTxt_input.addEventListener('keydown',function(e){
			if(e.keyCode == 13 ){//enter代碼
				var txt = chatTxt_input.value;

				if( chatTxt_input.value != ""){
					var span = document.createElement('p');
					span.setAttribute('style','float:right;display:block;height:30px;position:relative;right:50px');
					span.innerText = txt;
		
					var divspan = document.createElement('div');
					divspan.appendChild(span);
					divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
		
					var clearbox = document.createElement('div');
					divspan.appendChild(clearbox);
					clearbox.setAttribute('class','clearbox');
		
					chatbox_show.appendChild(divspan);
					chatTxt_input.value='';
		
					boxScroll(chatbox_show);
				}

			}
		},false);

		chatTxt_send.addEventListener('click',function(){
			var txt = chatTxt_input.value;

			if( chatTxt_input.value != ""){
				var span = document.createElement('p');
				span.setAttribute('style','float:right;display:block;height:30px;position:relative;right:50px;padding:5px 0;');
				span.innerText = txt;
	
				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class','clearbox');
	
				chatbox_show.appendChild(divspan);
				chatTxt_input.value='';
	
				boxScroll(chatbox_show);
			}			
		},false);
	function boxScroll(o){
		o.scrollTop = o.scrollHeight;
	}

	//手機聊天室輸入

	var info_input_phone = document.getElementById('info_input_phone');
	var info_chatbox = document.getElementById('info_chatbox');

	info_input_phone.addEventListener('keydown',function(e){
		if(e.keyCode == 13 ){//enter代碼
			var txt = info_input_phone.value;

			if( info_input_phone.value != ""){
				var span = document.createElement('p');
				span.setAttribute('style','float:right;display:block;height:30px;position:relative;right:50px');
				span.innerText = txt;
	
				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class','clearbox');
	
				info_chatbox.appendChild(divspan);
				info_input_phone.value='';
	
				boxScroll(info_chatbox);
			}

		}
	},false);

	window.addEventListener('resize',function(){//可能要再改
		var clientWidrh = document.body.clientWidth;
		if(clientWidrh  < 1000){
			while (chatbox_show.firstChild) {
				chatbox_show.removeChild(chatbox_show.firstChild);
				console.log('ddd');
			}
		}
		if(clientWidrh  > 760){
			while (info_chatbox.firstChild) {
				info_chatbox.removeChild(info_chatbox.firstChild);
				console.log('ddd');
			}
		}


	},false);

},false);

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




window.addEventListener('load',function(){


	function $id(id) {
		return document.getElementById(id);
	}


	$id('btn_login').addEventListener('click',function(){
		ooxxLightBox($id('loginBox'),$id('lightBoxInner'),$id('loginBoxClose'));
	},false);
	
},false);


// window.addEventListener('load',function(){
// 	    //head消失
// 	var head = $id('head');

// 	window.addEventListener('scroll',function(e){
// 		var scrollY = document.documentElement.scrollTop;
// 		if(window.innerWidth > 844){
// 			if(scrollY > 120){
// 				head.style.display='none';
// 			}else{
// 				head.style.display='block';
// 			}
// 		}
// 	},false);

// 	window.addEventListener('resize',function(){
// 		if(window.innerWidth < 767){
// 			head.style.display='none';
// 		}else{
// 			head.style.display='block';
// 		}
// 	},false);

// },false);

// var scrollY = document.documentElement.scrollTop;

// if(window.innerWidth > 844){
// 	var head = $id('head');
// 	if(scrollY > 120 ){
// 		head.style.display='none';
// 	}else{
// 		head.style.display='block';
// 	}
// }

