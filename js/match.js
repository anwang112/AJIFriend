

window.addEventListener('load',function(){


    // //聊天室操控
    // var chatRoom_control = document.getElementById('chatRoom_control');
    // var chatroom_btn_open = document.getElementById('chatroom_btn_open');
    // //取得物件
    // var chatRoom = document.getElementById('chatRoom');
    // var chatboxLeft = document.getElementById('chatboxLeft');
    // var ch = 0,//控制開關，0為初始關閉值，1為打開
    // ch1 =0;

    // // console.log(chatboxLeft);

    // //聊天室標題被點擊後要顯示出完整視窗，反之已顯示則關閉
    // chatRoom_control.addEventListener('click',function(){
    //     if(ch1==0){//如果視窗是關閉狀態，就打開
    //         chatRoom.style.cssText="transform:translateY(0%)";
    //         chatboxLeft.style.cssText="opacity:0;";
    //         return ch1 =1;
    //     }else{
    //         chatRoom.style.cssText="transform:translateY(77%)";
    //         chatboxLeft.style.cssText="opacity:0;"; 
    //         return ch1 =0,ch=0;      
    //     }

    // });

    // //聊天室左側區塊被點擊後要顯示出完整視窗，反之已顯示則關閉
    // chatroom_btn_open.addEventListener('click',function(){
    //     if(ch==0){//要顯示出來
    //         chatboxLeft.style.cssText="opacity:1;";
    //         return ch = 1;
    //     }else{//要關閉
    //         chatboxLeft.style.cssText="opacity:0;";
    //         return ch = 0;
    //     }
    // });


    // //手機版聊天室操控_01
    // var btn_chatroom_phone = document.getElementById('btn_chatroom_phone');
    // var chatRoom_phone_part1 = document.getElementById('chatRoom_phone_part1');
    // var chatRoom_phone_part2 = document.getElementById('chatRoom_phone_part2');
    // var fr_demo = document.getElementById('fr_demo');
    // var btn_menu_menu =document.getElementById('btn_menu_menu');
    // var menu_phone = document.getElementById('menu_phone');
    // var btn_chat_prev =document.getElementById('btn_chat_prev');


    // btn_chatroom_phone.addEventListener('click',function(){
    //     if(chatRoom_phone_part1.hasAttribute('value') == false){
    //         chatRoom_phone_part1.style.cssText=" top: 8vh;;opacity:1";
    //         chatRoom_phone_part2.style.cssText="opacity:0";
    //         chatRoom_phone_part1.setAttribute('value','打開');
    //     }else{
    //         chatRoom_phone_part1.style.cssText=" top: -100vh;;opacity:0";
    //         chatRoom_phone_part2.style.cssText="opacity:0";
    //         chatRoom_phone_part1.removeAttribute('value','打開');
    //     }

    // },false);


    // //手機版聊天室操控_02
    // fr_demo.addEventListener('click',function(){
    //     chatRoom_phone_part1.style.cssText=" top:8vh;left:0%;opacity:1; ";
    //     chatRoom_phone_part2.style.cssText=" left: 0;display:flex;opacity:1;z-index:4";
    // });

    // btn_chat_prev.addEventListener('click',function(){
    //     chatRoom_phone_part1.style.cssText=" top:8vh;left:0;opacity:1; ";
    //     chatRoom_phone_part2.style.cssText="opacity:0;z-index:-1";
    // },false);


    // //手機版menu操控
    // btn_menu_menu.addEventListener('click',function(){

    //     if(menu_phone.hasAttribute('value') == false){
    //         menu_phone.style.cssText="transform: scale(1);opacity:1; ";
    //         menu_phone.setAttribute('value','打開');
    //     }else{
    //         menu_phone.style.cssText="transform: scale(0);opacity:0; ";
    //         menu_phone.removeAttribute('value','打開');
    //     }
    // });



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

    //match功能操作＿點選切換觀看者

    var other_actors = document.getElementsByClassName('other_actors');
    var colbox_actor = document.getElementById('colbox_actor');
    console.log(colbox_actor);

    for(var i=0;i<other_actors.length;i++){
        other_actors[i].addEventListener('click',function(){
            btn_beFriend.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            var srcForActor = this.src  ;
            var srcForOtherActors = colbox_actor.src ;
            // console.log(srcForActor);
            colbox_actor.src = srcForActor ;
            this.src = srcForOtherActors;

            //重新reset送出交友
            btn_beFriend.removeAttribute('class','bounceIn');
            btn_beFriend.setAttribute('class','pulse');
            btn_beFriend.style.backgroundImage="url('pic/txtbox_03.svg')";

            while (effectbox.firstChild) {
                effectbox.removeChild(effectbox.firstChild);
                console.log('ddd');
            }
            

        },false);
    }

    //match功能操作＿按鈕＿興趣挑選
    var btn_choose_hobby = document.getElementById('btn_choose_hobby');
    var lightbox_hobby = document.getElementById('lightbox_hobby');
    var lightbox_info_hobby = document.getElementById('lightbox_info_hobby');
    btn_choose_hobby.addEventListener('click',function(){
        
        lightbox_hobby.style.cssText="display:flex;z-index:10;";
        lightbox_info_hobby.style.cssText="display:flex;z-index:10;";

        lightbox_info_hobby.addEventListener('click',function(e){
            e.stopPropagation();
        },false);
        lightbox_hobby.addEventListener('click',function(){
            lightbox_hobby.style.cssText="display:none;z-index:-1;";
            lightbox_info_hobby.style.cssText="display:none;z-index:-1;";
        },false);
    },false);

    //match功能操作_按鈕_家朋友
    var btn_beFriend =document.getElementById('btn_beFriend');
    btn_beFriend.addEventListener('click',function(e){
    
    },false);


    //match_愛心動畫
    var effectbox = document.getElementById('effectbox');

    function creatHearts(){
        effectbox.setAttribute('style','z-index:1');
        var hearts = Math.ceil((Math.random()*20)+37);;
        //Math.random()
        console.log(hearts);
        //創造愛心
        for(var i=0;i<hearts;i++){
            var topPosition = Math.ceil((Math.random()*170));
            var leftPosition = 10+Math.ceil((Math.random()*400));
            var opacity = Math.random().toFixed(2) ;//0-1 

            var img_heart = document.createElement('img');
            img_heart.src = "pic/heartForMatch.png";
            img_heart.setAttribute('style',`position:relative;top:${topPosition + 40}px;left:${leftPosition}px;opacity:${opacity};margin:20px;`);
            effectbox.appendChild(img_heart);
            console.log(img_heart);
        }



    }


    //match_點擊觸發愛心動畫
    var btn_beFriend = document.getElementById('btn_beFriend');
    btn_beFriend.addEventListener('click',function(){
        btn_beFriend.removeAttribute('class','pulse');
        btn_beFriend.style.backgroundImage="url('pic/txtbox_04.svg')";
        btn_beFriend.setAttribute('class','bounceIn');

        if(effectbox.hasChildNodes() === false ){
            creatHearts();
        }else{
            // alert('已送出交友');
            while (effectbox.firstChild) {
                effectbox.removeChild(effectbox.firstChild);
                console.log('ddd');
            }
        }  
    },false);




    //match_視窗大小改變觸發清除愛心圖
    window.addEventListener('resize',function(){
        while (effectbox.firstChild) {
            effectbox.removeChild(effectbox.firstChild);
            console.log('ddd');
        }
    },false);


    //match bg_boat移動

    var wrapForBoat = document.getElementById('wrapForBoat');

    //新增pie圖

    // var startAngle=0;
    // var cx = 70; //圓心座標
    // var cy = 60; //圓心座標
    // var r = 50;
    // var deg1 = 180;
    // var deg2 = 90;
    // var deg3 = 170;

    // var x0 = cx+r*Math.cos(startAngle*Math.PI/180);
    // var y0 = cy-r*Math.sin(startAngle*Math.PI/180);

    // var x1 = cx+r*Math.cos(deg1*Math.PI/180); 
    // var y1 = cy-r*Math.sin(deg1*Math.PI/180); 

    // var x2 = cx+r*Math.cos(deg2*Math.PI/180); 
    // var y2 = cy-r*Math.sin(deg2*Math.PI/180); 

    // var x3 = cx+r*Math.cos(deg3*Math.PI/180); 
    // var y3 = cy-r*Math.sin(deg3*Math.PI/180); 

    // $(".test1").attr("d","M "+cx+","+cy+" L "+x0+","+y0+" A "+r+","+r+" 0 0,0 "+x1+","+y1+" Z");
    // $(".test2").attr("d","M "+cx+","+cy+" L "+x0+","+y0+" A "+r+","+r+" 0 0,0 "+x2+","+y2+" Z");
    // $(".test3").attr("d","M "+cx+","+cy+" L "+x0+","+y0+" A "+r+","+r+" 0 0,0 "+x3+","+y3+" Z");


    // var pie_svgShow = document.getElementById('pie_svgShow');
    // var piesvg = document.createElement('svg');
    // var piepath = document.createElement() ;







},false);

window.addEventListener('load',function(){
    //svg_bar
    var svg_data=[
        {h:35+(Math.floor(Math.random()*150)),t:'魅力值'},
        {h:35+(Math.floor(Math.random()*150)),t:'金幣數'},
        {h:35+(Math.floor(Math.random()*150)),t:'朋友數'},
    ];

    var svg_bar = document.getElementById('svg_bar');

    for( var i=0;i<svg_data.length;i++){
        var divH = document.createElement('div');
        var txtH3 = document.createElement('h3');
        svg_bar.appendChild(divH);
        divH.setAttribute('class','divH'); 
        divH.setAttribute('style',`height:${svg_data[i].h}px`);
        divH.innerText = `${svg_data[i].h}`
        divH.appendChild(txtH3).innerText = `${svg_data[i].t}`;
        console.log(svg_data[i].h);

    }

},false);


window.addEventListener('load',function(){
    var svg_data2=[
    {h:35+(Math.floor(Math.random()*150)),t:'魅力值'},
    {h:35+(Math.floor(Math.random()*150)),t:'金幣數'},
    {h:35+(Math.floor(Math.random()*150)),t:'朋友數'},
    ];

    var svg_bar2 = document.getElementById('svg_bar2');

    for( var i=0;i<svg_data2.length;i++){
        var divH = document.createElement('div');
        var txtH3 = document.createElement('h3');
        svg_bar2.appendChild(divH);
        divH.setAttribute('class','divH'); 
        divH.setAttribute('style',`height:${svg_data2[i].h}px`);
        divH.innerText = `${svg_data2[i].h}`
        divH.appendChild(txtH3).innerText = `${svg_data2[i].t}`;
        console.log(svg_data2[i].h);
    }

},false);

