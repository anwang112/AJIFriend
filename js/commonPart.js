var body = document.getElementsByTagName('body');

console.log(body);

function head_html(){
	
	var str_tag = `
	<!-- head頁首 -->
	<div class="head mnone">
	    <a href="#"><img id="logo" src="pic/logo.svg" alt="logo"></a>
	    <ul class="menu">
	        <li><a href="match.html">找麻吉</a></li>
	        <li><a href="activity.html">活動巴士</a></li>
	        <li><a href="BearMJ_shop.html">造型商城</a></li>
	        <li><a href="photo.html">照片牆</a></li>
	    </ul>
	    <ul class="menu_sub">
	        <li><a href="#">登入</a></li>
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
	            <li><a href="#">找麻吉</a></li>
	            <li><a href="#">活動巴士</a></li>
	            <li><a href="#">造型商城</a></li>
	            <li><a href="#">照片牆</a></li>
	            <li><a href="#">登入</a></li>
	            <li><a href="#">魅力值</a></li>
	            <li><a id="head_member_icon" href="#">會員中心</a></li>
	        </ul>
	    </div>
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
	    <script src="js/main.js"></script>
	</div>
	`; 

	document.write(str_tag2);
}




