
function $id(id) {
    return document.getElementById(id);
}
function boxScroll(o){
    o.scrollTop = o.scrollHeight;
}

function CloseLightActBox(){
    var lightbox_actsCheckout_outside = $id('lightbox_actsCheckout_outside');
    var lightbox_actsCheckout = $id('lightbox_actsCheckout');
    lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;";
    lightbox_actsCheckout.style.cssText="display:none;z-index:-1;";
    var myMessagebox = $id('myMessagebox');
    if( myMessagebox.hasChildNodes){
        divs = document.getElementsByClassName('dddd');
        // console.log(divs )
        for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
            divs[i].remove();
            console.log('dddd')
        }
    }
}

function reBtn(){
    var checkout_act=document.getElementsByClassName('checkout_act') ;
    var btn_ActJoinToDB=document.getElementById('btn_ActJoinToDB');
    for(var i=0;i<checkout_act.length;i++){
        checkout_act[i].addEventListener('click',function(){
            lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;bottom: 14%;";
            lightbox_actsCheckout.style.cssText="display:block;z-index:10;bottom: 14%;";
            btn_ActJoinToDB.style.cssText = "background-color:#ccc";
            lightbox_actsCheckout.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_actsCheckout_outside.addEventListener('click',function(){
                lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";
                lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
                btn_ActJoinToDB.style.cssText = "background-color:#f05c79";
                var myMessagebox = $id('myMessagebox');
                if( myMessagebox.hasChildNodes){
                    divs = document.getElementsByClassName('dddd');
                    // console.log(divs);
                    for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                        divs[i].remove();
                        console.log('dddd');
                    }
                }
            },false);
        },false);
    }
    var btn_xx03 = $id('btn_xx03');
    btn_xx03.addEventListener('click',function(){
        lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";
        lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
        btn_ActJoinToDB.style.cssText = "background-color:#f05c79";
        var myMessagebox = $id('myMessagebox');
        if( myMessagebox.hasChildNodes){
            divs = document.getElementsByClassName('dddd');
            // console.log(divs);
            for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                divs[i].remove();
                console.log('dddd');
            }
        }
    },false);

    var cancel_act = document.getElementsByClassName('cancel_act');
    for(var i = 0;i<cancel_act.length;i++){
        cancel_act[i].addEventListener('click',function(){

            var actNo = this.nextSibling.nextSibling.value;
            var member = this.nextSibling.nextSibling.nextSibling.nextSibling.value;
            var target = this.parentNode.parentNode;
            // member = 2;
            // alert('actNo:'+actNo); //8
            // alert('member:'+member); //2
            CancelActTo(actNo,member,target);

        },false);
    }
}

function comDB (memNo, actNoGet , txtGet){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
         if( xhr.responseText == "null" ){
            alert ('xhr有錯誤喔');
         }else{
            //寫入前清除
            var myMessagebox = $id('myMessagebox');
            if( myMessagebox.hasChildNodes){
                divs = document.getElementsByClassName('dddd');
                console.log(divs )
                for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                    divs[i].remove();
                    console.log('dddd')
                }
            }
            //寫入
            var comments= JSON.parse(xhr.responseText);
            var str ='';
            // alert(comments.arr);
            var strAll = [];

            if( comments.arr == undefined){//沒有內容 印尚未有留言
                str += "尚未有留言喔～～"
            }else{
                for( var i=0;i<comments.arr.length;i++){
                    //印出來名字跟聊天內容
                    strAll[i] = comments.arr[i].split(",");
                    // str += `<div>`;
                    // str += `<div class="headBoxOut"><div class="headBox" id="theUserBBB${i}"></div></div>`;
                    str +=`<span style="padding:10px 10px;">`;
                    str += `${strAll[i][0]}:`;
                    str += `${strAll[i][4]}`;
                    str += `</span>`;
    
                    //印出大頭
        
                    // rrr = document.getElementById('theUserBBB'+i);
                    // ooxxGetHead(rrr, {
                    //     animal:  strAll[i][1],
                    //     color: strAll[i][3],
                    //     eyes: strAll[i][2],
                    // });  
                }
            }
            
            var myMessagebox = $id('myMessagebox');
            var div = document.createElement('div');
            div.setAttribute('class','dddd');
            div.innerHTML =  str;
            myMessagebox.appendChild(div);

            
            // console.log( strAll );
            var myMessagebox_input = $id('myMessagebox_input');
            myMessagebox_input.value = '';

            boxScroll(myMessagebox);

         }
    }
    xhr.open("post", "comment.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    var actBoxObj = {
        memNo : memNo ,
        actNO : actNoGet ,
        txt:txtGet,
    };

    xhr.send( "actBoxObj=" + JSON.stringify(actBoxObj));
}

function sendCom(memNo,actNo,txt){
    // alert(txt);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
           alert('xhr有錯誤喔');
        }else{
            // console.log("xhr:"+xhr.responseText);
            // console.log(txt);
            comDB(memNo,actNo , txt);

        }
   }

   var actBoxObj = {
        memNo : memNo ,
        actNO : actNo ,
        txt: txt,
    };


    xhr.open("post", "comInsert.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "actBoxObj=" + JSON.stringify(actBoxObj));//轉成字串送到php
}

function JoinActTo(actNo,member){
        console.log(actNo);
        console.log(member);
        var xhr = new XMLHttpRequest();
        xhr.onload=function (){
            if( xhr.responseText == "null" ){
                alert('xhr有錯誤喔');
             }else{

                // alert(JSON.parse(xhr.responseText));
                var JoinActBackToJs = JSON.parse(xhr.responseText);
                // alert(JoinActBackToJs.DBmsg);
                if( JoinActBackToJs.DBmsg == '1111'){
                    alert('完成報名 你可以在我的活動看到新增喔！') ;
                    // location.reload();
                    CloseLightActBox();
                    renewJoin(actNo,member);
                    
                }else if(JoinActBackToJs.DBmsg == '2222'){
                    alert('你已經報名過嘍'+actNo);
                    var btn_ActJoinToDB = $id('btn_ActJoinToDB');
                    CloseLightActBox();
                }else{
                    alert('錯誤');
                }
             }

       }
       var JoinActObj = {
            actNo: actNo ,
            member: member,
        };
    
    
        xhr.open("post", "JoinDelAct.php", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send( "JoinActObj=" + JSON.stringify(JoinActObj));//轉成字串送到php
}

function renewJoin(actNo,member){ 
    console.log(actNo);
    console.log(member);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
            // alert(JSON.parse(xhr.responseText));
            // var JoinActBackToJs = JSON.parse(xhr.responseText);
            // alert(xhr.responseText);
            //印在已報名活動
            var str =[];
            var str_a = xhr.responseText;
            
            str = str_a.split(',');
            console.log(str);
            var partB_top = $id('partB_top');
            var partB_top_content = document.getElementsByClassName('partB_top_content');
            var div = document.createElement('div');
            htmlappendTo=`
                <div class="contentImg" style="background-image: url('images/${str[3]}');"></div>
                <div class="spanbox">
                    <span>活動名稱：${str[5]} </span>
                    <span>活動介紹：${str[8]} </span>
                    <span>發起人:${str[4]}</span>
                    <span>地點：${str[9]}</span>
                    <span>時間：${str[6]}</span>
                    <span>獎勵:100MJ</span>
                </div>
                <div class="buttonbox">
                <button class="checkout_act btn_R " value="${str[1]}">查看</button>
                <input style="display:none" type="text" value="${str[5]}">
                <input style="display:none" type="text" value="${str[1]}">
                <input style="display:none" type="text" value="${str[4]}">
                <input style="display:none" type="text" value="${str[9]}">
                <input style="display:none" type="text" value="${str[6]}">
                <input style="display:none" type="text" value="${str[7]}">
                <input style="display:none" type="text" value="${str[8]}">
                <button class="btn_R cancel_act" style="background-color:#ccc;">取消參加</button>
                <input style="display:none" type="text" value="${str[1]}">
                <input class="userInput02" style="display:none" type="text" value="${str[0]}">
            </div>
            `;
            div.setAttribute('class','partB_top_content');
            div.innerHTML=htmlappendTo;
            // partB_top.appendChild(div);
            partB_top.insertBefore(div,partB_top_content[0]);
            reBtn();
            // alert('ok');
        }
    }
   var JoinActObj = {
        actNo: actNo ,
        member: member,
    };
    

    xhr.open("post", "renewJoin.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "JoinActObj=" + JSON.stringify(JoinActObj));//轉成字串送到php
}

function CancelActTo(actNo,member,target){
    console.log(actNo);
    console.log(member);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
            // alert(JSON.parse(xhr.responseText));
            // alert('已取消參加活動');
            // alert(target);
            // location.reload();
            // target.class
            target.setAttribute('class','deleteFromPage');
            target.style.display="none";
         }

   }
   var CancelActObj = {
        actNo: actNo ,
        member: member,
    };


    xhr.open("post", "JoinDelAct.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "CancelActObj=" + JSON.stringify(CancelActObj));//轉成字串送到php

}
var keyTotal = 3 ;
// var key = 1;
function officalAllAct(actNo,member,key){
    console.log(actNo);
    console.log(member);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
             
            // alert(JSON.parse(xhr.responseText));
            // alert( xhr.responseText);
            var fromAllAct_obj = JSON.parse(xhr.responseText);
            // alert(xhr.responseText);
            console.log(fromAllAct_obj.total);
            var box_Loc =$id('box_Loc');
            var box_Intro =$id('box_Intro');
            var box_actNo =$id('box_actNo');
            var imgBoxImg_B = $id('imgBoxImg_B');
            var imgBoxImg = $id('imgBoxImg');
            box_Loc.innerHTML=fromAllAct_obj.loc;
            box_Intro.innerHTML=fromAllAct_obj.actIntro;
            box_actNo.value=fromAllAct_obj.no;
            imgBoxImg_B.src='images/activity/' +  fromAllAct_obj.img;
            imgBoxImg.src='images/activity/' +  fromAllAct_obj.img;

            return keyTotal = fromAllAct_obj.total;
            

         }

   }
   var officalAllObj = {
        actNo: actNo ,
        member: member,
        key: key,
    };


    xhr.open("post", "officalAllAct.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "officalAllObj=" + JSON.stringify(officalAllObj));//轉成字串送到php            
             
}

function countJoinNum(host_memNoValue,actNoValue){
    console.log(host_memNoValue);
    console.log(actNoValue);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
            // alert(JSON.parse(xhr.responseText));
            // alert('參加人數：' + xhr.responseText);
            // var n = xhr.responseText
            // var actJoinCount = $id('actJoinCount');
            // actJoinCount.innerHTML="參加人數："+ n;

         }

   }
   var ActJoinObj = {
        host_memNoValue: host_memNoValue ,
        actNoValue: actNoValue,
    };


    xhr.open("post", "actNumSelect.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "ActJoinObj=" + JSON.stringify(ActJoinObj));//轉成字串送到php   
}

//大頭方法 要放到對話輸入欄
// rrract = document.getElementById('theUser');
// ooxxGetHead(rrract, {
//     animal: 2,
//     color: 'aaaaaa',
//     eyes: 2,
// })

// function innerMemValue(){
//     var userNo = document.getElementById('userNo');
//     console.log(userNo.value );

//     var userInput01= $id('userInput01');
//     userInput01.value = userNo.value ;

//     console.log(userInput01);

//     var userInput02 = document.getElementsByClassName('userInput02');
//     console.log(userInput02);
//     for(var i = 0;i<userInput02.length;i++){
//         userInput02[i].value = userNo.value;
//     }
//     var userInput03 = $id('userInput03');
//         userInput03.value = userNo.value;
// }

window.addEventListener('load',function(){
    //燈箱關閉按鈕
    var btn_xx01 = $id('btn_xx01');//第一屏燈箱 lightbox_act_info
    var btn_xx02 = $id('btn_xx02');//創立活動燈箱 lightbox_holdact
    var btn_xx03 = $id('btn_xx03');//查看活動燈箱 lightbox_actsCheckout


    //更換第一屏燈箱
    var btn_actL = $id('btn_actL');
    var btn_actR = $id('btn_actR');
    var key = 1;

    btn_actL.addEventListener('click',function(){
        var btn_Actjoin = $id('btn_Actjoin');
        actNo = btn_Actjoin.nextSibling.nextSibling.value;
        member = btn_Actjoin.nextSibling.nextSibling.nextSibling.nextSibling.value;
        // alert('actNo:'+actNo);
        officalAllAct(actNo,member,key);
        if(key == 4){
            key = 1;
        }else{
            key++;
        }  
        
    },false);
    btn_actR.addEventListener('click',function(){
        var btn_Actjoin = $id('btn_Actjoin');
        actNo = btn_Actjoin.nextSibling.nextSibling.value;
        member = btn_Actjoin.nextSibling.nextSibling.nextSibling.nextSibling.value;
        // alert('actNo:'+actNo);
        officalAllAct(actNo,member,key);
        if(key == 1){
            key = 4;
        }else{
            key--;
        }  
    },false);


    //取消報名
    var cancel_act = document.getElementsByClassName('cancel_act');
    for(var i = 0;i<cancel_act.length;i++){
        cancel_act[i].addEventListener('click',function(){

            var actNo = this.nextSibling.nextSibling.value;
            var member = this.nextSibling.nextSibling.nextSibling.nextSibling.value;
            var target = this.parentNode.parentNode;
            // member = 2;
            // alert('actNo:'+actNo); //8
            // alert('member:'+member); //2
            CancelActTo(actNo,member,target);

        },false);

    }

    //報名功能
    // var btn_actJoin = $id('btn_actJoin');
    // btn_actJoin.addEventListener('click',function(){
    //     var actNo = btn_actJoin.nextSibling.nextSibling.value;
    //     var member = btn_actJoin.nextSibling.nextSibling.nextSibling.nextSibling.value;
    //     // alert('actNo:'+actNo); //8
    //     // alert('member:'+member); //2
    //     JoinActTo(actNo,member);
    // },false);
    
    var btn_Actjoin =$id('btn_Actjoin');
    btn_Actjoin.addEventListener('click',function(){
        console.log("註冊");
        var actNo = btn_Actjoin.nextSibling.nextSibling.value; 
        var member = btn_Actjoin.nextSibling.nextSibling.nextSibling.nextSibling.value;
        // var userInputA = $id('userInputA');
        // var member = userInputA.value;
        // alert('actNo:'+actNo); //8
        // alert('member:'+member); //2
        JoinActTo(actNo,member);
        renewJoin(actNo,member);
    },false);

    var myMessagebox_input = $id('myMessagebox_input');
    var myMessagebox_inputNone = $id('myMessagebox_inputNone');
    myMessagebox_input.addEventListener('keydown',function(e){
        if(e.keyCode == 13 ){//enter代碼
            var txt = '';
            txt += myMessagebox_input.value;
            actNo = myMessagebox_inputNone.value;
            var memNo = myMessagebox_input.nextSibling.nextSibling.nextSibling.nextSibling.value;
            // alert('memNo:'+ memNo);
            sendCom(memNo,actNo,txt);
        }
    },false);

    // var r_act = document.getElementById('theUser');
    // ooxxGetHead(r_act, {
    //     animal: 2,
    //     color: 'aaaaaa',
    //     eyes: 3,
    // })


    
    var tab_allAct = $id('tab_allAct');
    var tab_myAct = $id('tab_myAct');
    var btn_holdAct = $id('btn_holdAct');
    var partA = $id('partA');
    var partB = $id('partB');
    // console.log(btn_holdAct);
    tab_allAct.addEventListener('click',function(){
        partA.style.cssText="display:block;";
        partB.style.cssText="display:none;";
        btn_holdAct.style.cssText="display:block;";
        // tab_myAct.style.cssText='color:rgba(255, 255, 255,.5);';
        // tab_allAct.style.cssText='color:#fff;';        

    },false);
    tab_myAct.addEventListener('click',function(){
        partB.style.cssText="display:block;";
        partA.style.cssText="display:none;";
        btn_holdAct.style.cssText="display:none;";
        // tab_myAct.style.cssText='color:#fff;';
        // tab_allAct.style.cssText='color:rgba(255, 255, 255,.5);';
    },false);

    // if(partA.style.cssText == cTab){
    //     tab_allAct.style.cssText='color:#fff;border-bottom:1px solid #fff';
    // }

    //#btn_actL btn_actR
    var btn_actL = $id('btn_actL');
    var btn_actR = $id('btn_actR');
    var imgBoxImg = $id('imgBoxImg');
    var imgBoxImg_B = $id('imgBoxImg_B');
    var act_bus = $id('act_bus');
    var wrap1 = $id('wrap1');
    // console.log(wrap1);
    var count_img = 0 ;
    // var btn_actArray = [
    //     'images/activity/act_number01.svg',
    //     'images/activity/act_number02.svg',
    //     'images/activity/act_number03.svg',
    // ];
    btn_actL.addEventListener('click',function(){
        if(count_img == 0){
            // imgBoxImg.src = btn_actArray[2];
            wrap1.style.cssText=`background-color:#7389a1;`;
            return count_img = 2 ;
        }else if(count_img == 1){
            // imgBoxImg.src = btn_actArray[0];
            wrap1.style.cssText=`background-color:#abe9ff;`;
            return count_img = 0 ;

        }else{
            // imgBoxImg.src = btn_actArray[1];
            wrap1.style.cssText=`background-color:#f9de96`;
            return count_img = 1 ;
        }
    },false);


    btn_actR.addEventListener('click',function(){
        if(count_img == 0){
            // imgBoxImg.src = btn_actArray[1];
            wrap1.style.cssText=`background-color:#f9de96`;
            return count_img = 1 ;
        }else if(count_img == 1){
            // imgBoxImg.src = btn_actArray[2];
            wrap1.style.cssText=`background-color:#7389a1;`;
            return count_img = 2 ;
        }else{
            // imgBoxImg.src = btn_actArray[0];
            wrap1.style.cssText=`background-color:#abe9ff;`;
            return count_img = 0 ;
        }
    },false);



    //actbox01
    var lightbox_act = $id('lightbox_act');
    var lightbox_act_info = $id('lightbox_act_info');

    imgBoxImg.addEventListener('click',function(e){

        lightbox_act.style.cssText="display:flex;z-index:10;";
        lightbox_act_info.style.cssText="display:flex;z-index:10;";

        lightbox_act_info.addEventListener('click',function(e){
            e.stopPropagation();
        },false);
        lightbox_act.addEventListener('click',function(){
            lightbox_act.style.cssText="display:none;z-index:-1;";
            lightbox_act_info.style.cssText="display:none;z-index:-1;";
        },false);
        // var thisSrc = e.target.src;
        // imgBoxImg_B.src = thisSrc ;

    },false);

    //actbox02
    var lightbox_holdact = $id('lightbox_holdact');
    var lightbox_holdact_info = $id('lightbox_holdact_info');
    var btn_holdAct=$id('btn_holdAct');
    var act_memberHold = $id('act_memberHold');
    // console.log(lightbox_holdact_info.scrollTop);
    btn_holdAct.addEventListener('click',function(e){

        window.scrollTo(0,(act_memberHold.offsetTop+400));
        console.log(act_memberHold.offsetTop);

        lightbox_holdact.style.cssText="display:flex;z-index:10;";
        lightbox_holdact_info.style.cssText="display:block;z-index:10;";

        lightbox_holdact_info.addEventListener('click',function(e){
            e.stopPropagation();
        },false);
        lightbox_holdact.addEventListener('click',function(){
            lightbox_holdact.style.cssText="display:none;z-index:-1;";
            lightbox_holdact_info.style.cssText="display:none;z-index:-1;";
        },false);

    },false);
    
    //actbox03
    var lightbox_actsCheckout_outside = $id('lightbox_actsCheckout_outside');
    var lightbox_actsCheckout = $id('lightbox_actsCheckout');
    var btn_ActJoin=document.getElementsByClassName('btn_ActJoin') ;
    var Hold_box = $id('Hold_box');
    // console.log(lightbox_actsCheckout_outside.scrollTop);
    // if(clientWidrh > 768){}
    for(var i=0;i<btn_ActJoin.length;i++){
            btn_ActJoin[i].addEventListener('click',function(e){
            // window.scrollTo(0,(Hold_box.offsetTop + 450));
            // console.log(Hold_box.offsetTop+'這個行號之後要改喔！');
            var btn_ActJoinToDB = $id('btn_ActJoinToDB');
            btn_ActJoinToDB.disabled=false;

            lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;";
            lightbox_actsCheckout.style.cssText="display:block;z-index:10;";

            lightbox_actsCheckout.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_actsCheckout_outside.addEventListener('click',function(){
                // lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;";
                // lightbox_actsCheckout.style.cssText="display:none;z-index:-1;";
                // var myMessagebox = $id('myMessagebox');
                // if( myMessagebox.hasChildNodes){
                //     divs = document.getElementsByClassName('dddd');
                //     // console.log(divs )
                //     for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                //         divs[i].remove();
                //         console.log('dddd')
                //     }
                // }
                CloseLightActBox();
            },false);

        },false);

        //活動燈箱打開 載入活動資訊   Ajax載入留言
        btn_ActJoin[i].addEventListener('click',function(e){
            
            // <button class="btn_ActJoin btn_R" value="<?php echo $actNo ;?>"> 查看更多 </button>
            // <input style="display:none" type="text" value="<?php echo $actTitle ;?>">
            // <input style="display:none" type="text" value="<?php echo $actNo ;?>">
            // <input style="display:none" type="text" value="<?php echo $host_memNo ;?>">
            // <input style="display:none" type="text" value="<?php echo $actLoc ;?>">
            // <input style="display:none" type="text" value="<?php echo $act_begin ;?>">
            // <input style="display:none" type="text" value="<?php echo $act_end ;?>">
            // <input style="display:none" type="text" value="<?php echo $actIntro ;?>">
            //來源 
            // var elements = document.querySelectorAll("#acts_lightbox_top_right span");

            var actTitleValue = this.nextSibling.nextSibling.value; //
            var actNoValue = this.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var host_memNoValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var actLocValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var act_beginValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var act_endValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var actIntroValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
            var actImgValue = this.parentNode.previousSibling.previousSibling.style.backgroundImage;
            // alert(actImgValue);
  
            //放置目標
            var acts_lightbox_topImg = $id('acts_lightbox_topImg');
            var acts_lightbox_top_right = $id('acts_lightbox_top_right');
            var acts_lightbox_top_img = $id('acts_lightbox_top_img');
            var element_actTitle = document.querySelectorAll("#acts_lightbox_top_right h3")
            var elements = document.querySelectorAll("#acts_lightbox_top_right span");
            var myMessagebox_inputNone = $id('myMessagebox_inputNone');
            element_actTitle[0].innerHTML=actTitleValue;
            elements[0].innerHTML='發起人：'+host_memNoValue;
            elements[1].innerHTML='地點：'+actLocValue;
            elements[2].innerHTML='時間：'+act_beginValue.substring(0, 10);+'至'+act_endValue.substring(0, 10);
            elements[3].innerHTML='活動介紹：'+actIntroValue;
            myMessagebox_inputNone.setAttribute('value',actNoValue);
            $id('lightBox_actNo').value = actNoValue;
            
            // acts_lightbox_top_img.src = actImgValue;
            acts_lightbox_topImg.style.backgroundImage = actImgValue;
            // alert('actNoValue:'+actNoValue);
            var memNo = $id('userInput04').value;
            // alert('memNo:'+memNo);
            // console.log(memNo);
            comDB(memNo,this.value,'');
            countJoinNum(host_memNoValue,actNoValue);


            // var lightbox_actsCheckout_outside = $id('lightbox_actsCheckout_outside');
            // lightbox_actsCheckout_outside.addEventListener('click',function(){
            // },false);
        },false);

    }
    var btn_ActJoinToDB = $id('btn_ActJoinToDB');
        
    btn_ActJoinToDB.addEventListener('click',function(){
        // var actNo = actNoValue;
        // var member = this.nextSibling.nextSibling.nextSibling.nextSibling.value; //之後要改動態
        // alert('actNo:'+actNoValue); 
        // alert('member:'+member); 
        console.log("5j4");
        JoinActTo($id("lightBox_actNo").value,$id("userNo").value);
        this.disabled=true; 

    },false);

    //actbox03-2
    var checkout_act=document.getElementsByClassName('checkout_act') ;
    var btn_ActJoinToDB=document.getElementById('btn_ActJoinToDB');
    for(var i=0;i<checkout_act.length;i++){
        checkout_act[i].addEventListener('click',function(){
            lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;bottom: 14%;";
            lightbox_actsCheckout.style.cssText="display:block;z-index:10;bottom: 14%;";
            btn_ActJoinToDB.style.cssText = "background-color:#ccc";
            lightbox_actsCheckout.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_actsCheckout_outside.addEventListener('click',function(){
                lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";
                lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
                btn_ActJoinToDB.style.cssText = "background-color:#f05c79";
                var myMessagebox = $id('myMessagebox');
                if( myMessagebox.hasChildNodes){
                    divs = document.getElementsByClassName('dddd');
                    // console.log(divs);
                    for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                        divs[i].remove();
                        console.log('dddd')
                    }
                }
                
            },false);
        },false);

        //活動燈箱打開 載入活動資訊   Ajax載入留言
        checkout_act[i].addEventListener('click',function(e){
            
        //來源 
        var actTitleValue = this.nextSibling.nextSibling.value; 
        var actNoValue = this.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var host_memNoValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var actLocValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var act_beginValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var act_endValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var actIntroValue = this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value; 
        var actImgValue = this.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.backgroundImage;

  
        // //放置目標
        var acts_lightbox_top_right = $id('acts_lightbox_top_right');
        var element_actTitle = document.querySelectorAll("#acts_lightbox_top_right h3")
        var elements = document.querySelectorAll("#acts_lightbox_top_right span")
        element_actTitle[0].innerHTML=actTitleValue;
        elements[0].innerHTML='發起人：'+host_memNoValue;

        elements[1].innerHTML='地點：'+actLocValue;
        elements[2].innerHTML='時間：'+act_beginValue.substring(0, 10);+'至'+act_endValue.substring(0, 10);
        elements[3].innerHTML='活動介紹：'+actIntroValue;
        myMessagebox_inputNone.setAttribute('value',actNoValue);
        var acts_lightbox_topImg = $id('acts_lightbox_topImg');
        
        acts_lightbox_topImg.style.backgroundImage = actImgValue;
        // alert(acts_lightbox_topImg);
        // alert(actImgValue);

        var memNo = $id('userInput04').value;
        comDB(memNo,this.value,'');
        },false);
    }
    
    var btn_xx03 = $id('btn_xx03');
    btn_xx03.addEventListener('click',function(){
        lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";
        lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
        btn_ActJoinToDB.style.cssText = "background-color:#f05c79";
        var myMessagebox = $id('myMessagebox');
        if( myMessagebox.hasChildNodes){
            divs = document.getElementsByClassName('dddd');
            // console.log(divs);
            for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
                divs[i].remove();
                console.log('dddd');
            }
        }
    },false);


    // $id('btn_holdAct').addEventListener('click',function(){
	// 	ooxxLightBox($id('lightbox_act'),$id('lightbox_act_info'),$id('lightbox_act_close'));
	// },false);



    //joinBtn
    var act_memberHold_boxs  = document.getElementsByClassName('act_memberHold_box');
    var act_memberHold_joins = document.getElementsByClassName('act_memberHold_join');
    var tar = new Object;
    // console.log(act_memberHold_boxs );
    // console.log(act_memberHold_joins);
    // if(window.clientWidrh > 768){
    //     for(var i=0; i < act_memberHold_joins.length;i++){
    //         act_memberHold_boxs[i].addEventListener('mouseenter',function(e){
    //             var target = e.target.firstChild.nextSibling.nextSibling.nextSibling;
    //             // console.log(target);
    //             target.style.cssText=`opacity: 1;`;
    //             target.addEventListener('mouseenter',function(){
    //                 target.style.cssText=`opacity: 1;`;
    //             },false);
    //             return tar = target;
    //         },false);
    //     }
        
    //     for(var i=0; i < act_memberHold_joins.length;i++){
    //         act_memberHold_boxs[i].addEventListener('mouseleave',function(e){
    //             tar.style.cssText=`opacity:0;`;
    //         },false);
    //     }
    // }
        for(var i=0; i < act_memberHold_joins.length;i++){
            act_memberHold_boxs[i].addEventListener('mouseenter',function(e){
                var target = e.target.firstChild.nextSibling.nextSibling.nextSibling;
                // console.log(target);
                target.style.cssText=`opacity: 1;`;
                target.addEventListener('mouseenter',function(){
                    target.style.cssText=`opacity: 1;`;
                },false);
                return tar = target;
            },false);
        }
        
        for(var i=0; i < act_memberHold_joins.length;i++){
            act_memberHold_boxs[i].addEventListener('mouseleave',function(e){
                tar.style.cssText=`opacity:0;`;
            },false);
        }


    //分頁操作
    var act_tab_pages = document.querySelectorAll('#act_tab_pages span');
    for(var i = 0;i<act_tab_pages.length;i++){
        act_tab_pages[i].addEventListener('click',function(e){
            var target = e.target;
            if(target.innerHTML ==1){
                var act_memberHold =$id('act_memberHold');
                act_memberHold.innerHTML=`

                `;
            }
        },false);
    }


    //留言回覆
    // var myMessagebox = $id('myMessagebox');
    // var myMessagebox_input = $id('myMessagebox_input');
    // myMessagebox_input.addEventListener('keydown',function(e){
    //     if(e.keyCode == 13 ){//enter代碼
    //         var txt = '阿吉:';
	// 		txt += myMessagebox_input.value;

	// 		if( myMessagebox_input.value != ""){
	// 			var span = document.createElement('p');
	// 			span.setAttribute('style','float:left;display:block;height:30px;position:relative;left:0px;color:#444');
	// 			span.innerText = txt;
	
	// 			var divspan = document.createElement('div');
	// 			divspan.appendChild(span);
	// 			divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
	// 			var clearbox = document.createElement('div');
	// 			divspan.appendChild(clearbox);
	// 			clearbox.setAttribute('class','clearbox');
	
	// 			myMessagebox.appendChild(divspan);
	// 			myMessagebox_input.value='';
	
	// 			boxScroll(myMessagebox);
	// 		}
	// 	}
    // },false);

    // var JoinMessagebox = $id('JoinMessagebox');
    // var JoinMessagebox_input = $id('JoinMessagebox_input');
    
    // JoinMessagebox_input.addEventListener('keydown',function(e){
    //     if(e.keyCode == 13 ){//enter代碼
    //         var txt = '阿吉:';
	// 		txt += JoinMessagebox_input.value;

	// 		if( JoinMessagebox_input.value != ""){
	// 			var span = document.createElement('p');
	// 			span.setAttribute('style','float:left;display:block;height:30px;position:relative;left:0px;color:#444');
	// 			span.innerText = txt;
	
	// 			var divspan = document.createElement('div');
	// 			divspan.appendChild(span);
	// 			divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
	// 			var clearbox = document.createElement('div');
	// 			divspan.appendChild(clearbox);
	// 			clearbox.setAttribute('class','clearbox');
	
	// 			JoinMessagebox.appendChild(divspan);
	// 			JoinMessagebox_input.value='';
	
	// 			boxScroll(JoinMessagebox);
	// 		}
	// 	}
    // },false);

    var controller = new ScrollMagic.Controller();
    //scroll 動態 第一屏
    var an00 = new TimelineMax();
    an00.fromTo('#act_bus',1,{
        x:-180,
    },{
        x:-0,
    }).fromTo('#Agee', 1, {
        opacity: 0,
    }, {
        opacity: 1,
    }).delay(1.5);


    // var an01 = new TimelineMax();
    // an01.fromTo('#tab_allAct', .5, {
    //     opacity: 0,
    //     y: -70
    // }, {
    //     opacity: 1,
    //     y: 0
    // }).fromTo('#tab_myAct', .5, {
    //     opacity: 0,
    //     y: -70
    // }, {
    //     opacity: 1,
    //     y: 0
    // }).fromTo('#btn_holdAct', .5, {
    //     opacity: 0,
    //     right: -30
    // }, {
    //     opacity: 1,
    //     right: 0
    // })

    var an02 = new TimelineMax();
    an02.fromTo('.act_memberHold_box1', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box2', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box3', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box4', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box5', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box6', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box7', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box8', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.act_memberHold_box9', .5, {
        opacity: 0,
        y: -70
    }, {
        opacity: 1,
        y: 0
    })

    //場景
    // var scene = new ScrollMagic.Scene({
    //     //觸發點id
    //     triggerElement: '.wrap2',
    //     offset:80
    // }).setTween(an01).
    // // addIndicators({
    // //     name: 'scence 01'
    // // }).
    // addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        //觸發點id
        triggerElement: '.act_info',
        offset:280
    }).setTween(an02).
    // addIndicators({
    //     name: 'scence 02'
    // }).
    addTo(controller);

},false);

