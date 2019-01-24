

//聊天室操控
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
    chatRoom_phone_part2.style.cssText=" left: 0;display:flex;opacity:1;z-index:2";
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



//spotlight控制

// var spotLight_01=document.getElementsByClassName('spotLight_01');
// console.log(spotLight_01);

// for(var i=0;i<spotLight_01.length;i++){
//     spotLight_01[i].addEventListener('mouseover',spotlight);
// }

// function spotlight(){
//     style='';
//     this.style.cssText="width:100px;transform:rotate(13deg);";
// }