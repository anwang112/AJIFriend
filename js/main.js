

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
    // chatboxLeft.style.transform='translateX(-100%)';
    if(ch==0){//要顯示出來
        chatboxLeft.style.cssText="left:-80%;opacity:1;";
        // chatboxLeft.style.top="40%";
        return ch = 1;
    }else{//要關閉
        chatboxLeft.style.cssText="left:0%;opacity:0;";
        // chatboxLeft.style.top="40%";
        return ch = 0;
    }
});


//spotlight控制

var spotLight_01=document.getElementsByClassName('spotLight_01');
console.log(spotLight_01);

for(var i=0;i<spotLight_01.length;i++){
    spotLight_01[i].addEventListener('mouseover',spotlight);
}

function spotlight(){
    style='';
    this.style.cssText="width:100px;transform:rotate(13deg);";
}