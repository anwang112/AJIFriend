//產生head與聊天室
function Pageini(){
    var commomPart =document.getElementById('commomPart');
    var str_mm=`
      <div class="wrap">
      <!-- head頁首 -->
          <div class="head">
              <a href="#"><img id="logo" src="pic/logo.svg" alt="logo"></a>
              <ul class="menu">
                  <li><a href="#">找麻吉</a></li>
                  <li><a href="#">活動巴士</a></li>
                  <li><a href="#">造型商城</a></li>
                  <li><a href="#">照片牆</a></li>
              </ul>
              <ul class="menu_sub">
                  <li><a href="#">登入</a></li>
                  <li><a href="#">魅力值</a></li>
                  <li><a id="head_member_icon" href="#"><img  src="pic/head_member_icon.svg" alt="會員"></a></li>
              </ul>
          </div>
      <!-- chatRoom聊天室 -->
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
              <a href="#"><img id="chatroom_btn_open" src="pic/chatroom_btn_open1.svg" alt="收合左側欄按鍵"></a>
              <div id="chatboxLeft" class="chatboxLeft">
                  <input id="search_input" type="text" placeholder="搜尋好友">
                  <div class="friendbox">
                  </div>
                  <div class="replybox">
                      <h4>待回覆好友邀請</h3>
                  </div>
              </div>
          </div>
      <!-- footer頁尾 -->
          <div class="footer"></div>
      <!-- wrap結束 -->
      </div>
    
    `;
    commomPart.innerHTML=str_mm;
}

function ini(){
    //取得按鍵
    var chatRoom_control = document.getElementById('chatRoom_control');
    var chatroom_btn_open = document.getElementById('chatroom_btn_open');
    //取得物件
    var chatRoom = document.getElementById('chatRoom');
    var chatboxLeft = document.getElementById('chatboxLeft');
    var ch = 0,//控制開關，0為初始關閉值，1為打開
    ch1 =0;

    console.log(chatboxLeft);

    //聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatRoom_control.addEventListener('click',function(){
        if(ch1==0){//如果視窗是關閉狀態，就打開
            chatRoom.style.cssText="transform:translateY(0%)";
            chatboxLeft.style.cssText="transform:translateY(0%);opacity:0;";
            return ch1 =1;
        }else{
            chatRoom.style.cssText="transform:translateY(77%)";
            chatboxLeft.style.cssText="transform:translateY(77%);opacity:0;"; 
            return ch1 =0,ch=0;      
        }

    });

    //聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉
    chatroom_btn_open.addEventListener('click',function(){
        // chatboxLeft.style.transform='translateX(-100%)';
        if(ch==0){
            chatboxLeft.style.cssText="transform:translateX(-100%);opacity:1;";
            return ch = 1;
        }else{
            chatboxLeft.style.cssText="transform:translateX(0%);opacity:0;";
            return ch = 0;
        }
    });
}



