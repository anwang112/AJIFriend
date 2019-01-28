var body = document.getElementsByTagName('body');

console.log(body);

function head_html(){
	
	var str_tag = `
	<div class="head mnone">
	    <a href="index.html"><img id="logo" src="pic/logo.svg" alt="logo"></a>
	    <ul class="menu">
	        <li><a href="match.html">找麻吉</a></li>
	        <li><a href="activity.html">活動巴士</a></li>
	        <li><a href="BearMJ_shop.html">造型商城</a></li>
	        <li><a href="photo.html">照片牆</a></li>
	    </ul>
	    <ul class="menu_sub">
	        <li><a id="btn_login"href="javascript:;">登入</a></li>
	        <li><a href="#">魅力值</a></li>
	        <li><a id="head_member_icon" href="myRoom.html"><img  src="pic/head_member_icon.svg" alt="會員"></a></li>
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
	            <li><a href="activity.html">活動巴士</a></li>
	            <li><a href="BearMJ_shop.html">造型商城</a></li>
	            <li><a href="photo.html">照片牆</a></li>
	            <li><a href="#">登入</a></li>
	            <li><a href="#">魅力值</a></li>
	            <li><a id="head_member_icon" href="myRoom.html">會員中心</a></li>
	        </ul>
	    </div>
	</div>
	
	<div id="login_box" class="login_box">
		<h2>登入/註冊</h2>
		<form id="login_form" action="">
			<input type="e-mail" placeholder="hi@gmail.com">
			<input type="psw" placeholder="6位數密碼">
			<input type="submit" value="送出">
		</form>
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
	        <a href="#"><img src="pic/chatroom_btn_gift.svg" alt="送禮物按鍵"></a>
	        <a href="#"><img src="pic/chatroom_btn_profile.svg" alt="查看個人檔案按鍵"></a>
	    </div> 
	    <div class="chatboxRight">
	        <div class="chatbox_show">
	            <img id="friendPicSmall" src="pic/friend_demo_03.svg" alt="朋友大頭照">
	            <span>聊天內容</span>
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


window.addEventListener('load',function(){


    //聊天室操控
    var chatRoom_control = document.getElementById('chatRoom_control');
    var chatroom_btn_open = document.getElementById('chatroom_btn_open');
    //取得物件
    var chatRoom = document.getElementById('chatRoom');
    var chatboxLeft = document.getElementById('chatboxLeft');
    var ch = 0,//控制開關，0為初始關閉值，1為打開
    ch1 =0;

    // console.log(chatboxLeft);

    //聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatRoom_control.addEventListener('click',function(){
        if(ch1==0){//如果視窗是關閉狀態，就打開
            chatRoom.style.cssText="transform:translateY(0%)";
            chatboxLeft.style.cssText="opacity:0;";
            return ch1 =1;
        }else{
            chatRoom.style.cssText="transform:translateY(77%)";
            chatboxLeft.style.cssText="opacity:0;"; 
            return ch1 =0,ch=0;      
        }

    });

    //聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatroom_btn_open.addEventListener('click',function(){
        if(ch==0){//要顯示出來
            chatboxLeft.style.cssText="opacity:1;";
            return ch = 1;
        }else{//要關閉
            chatboxLeft.style.cssText="opacity:0;";
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
        chatRoom_phone_part2.style.cssText=" left: 0;display:flex;opacity:1;z-index:4";
    });

    btn_chat_prev.addEventListener('click',function(){
        chatRoom_phone_part1.style.cssText=" top:8vh;left:0;opacity:1; ";
        chatRoom_phone_part2.style.cssText="opacity:0;z-index:-1";
    },false);


    //手機版menu操控
    btn_menu_menu.addEventListener('click',function(){

        if(menu_phone.hasAttribute('value') == false){
            menu_phone.style.cssText="transform: scale(1);opacity:1; ";
            menu_phone.setAttribute('value','打開');
        }else{
            menu_phone.style.cssText="transform: scale(0);opacity:0; ";
            menu_phone.removeAttribute('value','打開');
        }
	});



	//登入燈箱操作
	var login_box = document.getElementById('login_box');
	var login_form = document.getElementById('login_form');
	var btn_login = document.getElementById('btn_login');
	btn_login.addEventListener('click',function(){
		
		login_box.style.cssText = 'opacity:1;z-index:15;';

		login_form.addEventListener('click',function(e){
			e.stopPropagation();
		},false);

		login_box.addEventListener('click',function(){
			login_box.style.cssText = 'opacity:0;z-index:-1;';
		},false);

		

	},false);

},false);

