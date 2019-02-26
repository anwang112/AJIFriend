function $id(id) {
    return document.getElementById(id);
}
function boxScroll(o){
    o.scrollTop = o.scrollHeight;
}
lightbox_actsCheckout
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
            lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;";
            lightbox_actsCheckout.style.cssText="display:block;z-index:10;";
            lightbox_actsCheckout.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_actsCheckout_outside.addEventListener('click',function(){
                lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";
                lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
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
                    $('#alertText').text('已完成報名~');
                    $('.alertWrap').show();
                    // location.reload();
                    CloseLightActBox();
                    // renewJoin(actNo,member);
                    
                }else if(JoinActBackToJs.DBmsg == '2222'){
                    $('#alertText').text('記性不好齁~已經報名過囉!');
                    $('.alertWrap').show();
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

// function renewJoin(actNo,member){ 
//     console.log(actNo);
//     console.log(member);
//     var xhr = new XMLHttpRequest();
//     xhr.onload=function (){
//         if( xhr.responseText == "null" ){
//             alert('xhr有錯誤喔');
//          }else{
//             // alert(JSON.parse(xhr.responseText));
//             // var JoinActBackToJs = JSON.parse(xhr.responseText);
//             // alert(xhr.responseText);
//             //印在已報名活動
//             var str =[];
//             var str_a = xhr.responseText;
            
//             str = str_a.split(',');
//             console.log(str);
//             var partB_top = $id('partB_top');
//             var partB_top_content = document.getElementsByClassName('partB_top_content');
//             var div = document.createElement('div');
//             htmlappendTo=`
//                 <div class="contentImg" style="background-image: url('images/${str[3]}');"></div>
//                 <div class="spanbox">
//                     <span class="spanbox_title">活動名稱：</span><span class="spanbox_content">活動名稱：${str[5]} </span>
//                     <span class="spanbox_title">活動介紹：</span><span class="spanbox_content">活動名稱：${str[8]} </span>
//                     <span class="spanbox_title">發起人:</span><span class="spanbox_content">活動名稱：${str[4]} </span>
//                     <span class="spanbox_title">地點：</span><span class="spanbox_content">活動名稱：${str[9]} </span>
//                     <span class="spanbox_title">時間：</span><span class="spanbox_content">活動名稱：${str[6]} </span>
//                     <span class="spanbox_title">獎勵:100MJ</span>
//                 </div>
//                 <div class="buttonbox">
//                 <button class="checkout_act btn_R " value="${str[1]}">查看</button>
//                 <input style="display:none" type="text" value="${str[5]}">
//                 <input style="display:none" type="text" value="${str[1]}">
//                 <input style="display:none" type="text" value="${str[4]}">
//                 <input style="display:none" type="text" value="${str[9]}">
//                 <input style="display:none" type="text" value="${str[6]}">
//                 <input style="display:none" type="text" value="${str[7]}">
//                 <input style="display:none" type="text" value="${str[8]}">
//                 <button class="btn_R cancel_act" style="background-color:#ccc;">取消參加</button>
//                 <input style="display:none" type="text" value="${str[1]}">
//                 <input class="userInput02" style="display:none" type="text" value="${str[0]}">
//             </div>
//             `;
//             div.setAttribute('class','partB_top_content');
//             div.innerHTML=htmlappendTo;
//             // partB_top.appendChild(div);
//             partB_top.insertBefore(div,partB_top_content[0]);
//             reBtn();
//             // alert('ok');
//         }
//     }
//    var JoinActObj = {
//         actNo: actNo ,
//         member: member,
//     };
    

//     xhr.open("post", "renewJoin.php", true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send( "JoinActObj=" + JSON.stringify(JoinActObj));//轉成字串送到php
// }

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
// var keyTotal = 3 ;
// var key = 1;
function officalAllAct(actNo,member,key){
    // alert("key"+key);
    // console.log(actNo);
    // console.log(member);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
             
            // alert(JSON.parse(xhr.responseText));
            // alert( xhr.responseText);
       
            var fromAllAct_obj = JSON.parse(xhr.responseText);
            console.log(fromAllAct_obj);
            // alert(xhr.responseText);

            var box_Loc =$id('box_Loc');
            var box_Intro =$id('box_Intro');
            var box_actNo =$id('box_actNo');
            var imgBoxImg_B = $id('imgBoxImg_B');
            var imgBoxImg = $id('imgBoxImg');
            box_Loc.innerHTML=fromAllAct_obj.loc;
            box_Intro.innerHTML=fromAllAct_obj.actIntro;
            box_actNo.value=fromAllAct_obj.no;
            // imgBoxImg_B.src='images/' +  fromAllAct_obj.img;
            imgBoxImg.src='images/' +  fromAllAct_obj.img;


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

function CloseLightActBox(){
    var lightbox_actsCheckout_outside = $id('lightbox_actsCheckout_outside');
    var lightbox_actsCheckout = $id('lightbox_actsCheckout');
    lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;";
    while($id("myMessagebox").firstChild) {
        $id("myMessagebox").removeChild($id("myMessagebox").firstChild);
    }
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
    // 我的活動--打開查看
    var checkout_act=document.getElementsByClassName('checkout_act') ;
    var btn_ActJoinToDB=document.getElementById('btn_ActJoinToDB');
    for(var i=0;i<checkout_act.length;i++){
        checkout_act[i].addEventListener('click',function(){
            lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;";
            lightbox_actsCheckout.style.cssText="display:block;z-index:10;";
            btn_ActJoinToDB.style.cssText = "background-color:#ccc";
            lightbox_actsCheckout.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_actsCheckout_outside.addEventListener('click',function(){
                lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";

                while($id("myMessagebox").firstChild) {
                    $id("myMessagebox").removeChild($id("myMessagebox").firstChild);
                }
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


}
// 留言
function comDB (memNo, actNoGet){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        
         if( xhr.responseText == "null" ){
            alert ('xhr有錯誤喔');
         }else{
            //寫入
            var str ='';

            if( xhr.responseText == "null"){//沒有內容 印尚未有留言
                $id("myMessagebox").innerHTML = "<p>尚未有留言喔～～</p>";
            }else{
                var objData = JSON.parse(xhr.responseText);

                var name = JSON.parse(objData.name);
                var animal = JSON.parse(objData.animal);
                var eye= JSON.parse(objData.eye);
                var color= JSON.parse(objData.color);
                var comment = JSON.parse(objData.comment);
                var memNo = JSON.parse(objData.memNo);

                
                var num = $id("myMessagebox").children.length;
                var i_start = 0;
                // 桌機聊天室
                if(num==0){
                    i_start = 0;
                    
                }else{
                    i_start = num;
                }
                for(var i=i_start;i<name.length;i++){
                    //印出來名字跟聊天內容
                    var str = $id("myMessagebox").innerHTML;
                    str += `
                    <div class="commentItem">
                        <div id="commentHead${i}" class="headBox commentHead"></div> 
                        <input type="hidden" id="commentMemNo${i}" value=${memNo[i]}>
                        <div class="commentBox">
                            <p class="commentName">${name[i]}</p>
                            <p class="commentText">${comment[i]}</p>
                        </div>
                    </div>`
                    ;  
    
                    $id("myMessagebox").innerHTML = str;
                    //印出大頭
        
                    ooxxGetHead($id(`commentHead${i}`), {
                        animal:  animal[i],
                        color: color[i],
                        eyes: eye[i],
                    });  
                }
            }
            
            $id("myMessagebox_input").value = '';
            boxScroll($id("myMessagebox"));

         }
    }
    xhr.open("post", "comment.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    var actBoxObj = {
        memNo : memNo ,
        actNO : actNoGet 
    };

    xhr.send( "actBoxObj=" + JSON.stringify(actBoxObj));
}

function sendCom(memNo,actNo,txt){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "123" ){
        }else{
            comDB(memNo,actNo);

        }
   };

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
                    $('#alertText').text('已報名，可至我的活動查看囉');
                    $('.alertWrap').show();
                    // location.reload();
                    CloseLightActBox();
                    // renewJoin(actNo,member);
                    
                }else if(JoinActBackToJs.DBmsg == '2222'){
                    $('#alertText').text('已報名過，看看其他活動吧!');
                    $('.alertWrap').show();
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

// function renewJoin(actNo,member){ 
//     console.log(actNo);
//     console.log(member);
//     var xhr = new XMLHttpRequest();
//     xhr.onload=function (){
//         if( xhr.responseText == "null" ){
//             alert('xhr有錯誤喔');
//          }else{
//             // alert(JSON.parse(xhr.responseText));
//             // var JoinActBackToJs = JSON.parse(xhr.responseText);
//             // alert(xhr.responseText);
//             //印在已報名活動
//             var str =[];
//             var str_a = xhr.responseText;
            
//             str = str_a.split(',');
//             console.log(str);
//             var partB_top = $id('partB_top');
//             var partB_top_content = document.getElementsByClassName('partB_top_content');
//             var div = document.createElement('div');
//             htmlappendTo=`
//                 <div class="contentImg" style="background-image: url('images/${str[3]}');"></div>
//                 <div class="spanbox">
//                     <span>活動名稱：${str[5]} </span>
//                     <span>活動介紹：${str[8]} </span>
//                     <span>發起人:${str[4]}</span>
//                     <span>地點：${str[9]}</span>
//                     <span>時間：${str[6]}</span>
//                     <span>獎勵:100MJ</span>
//                 </div>
//                 <div class="buttonbox">
//                 <button class="checkout_act btn_R " value="${str[1]}">查看</button>
//                 <input style="display:none" type="text" value="${str[5]}">
//                 <input style="display:none" type="text" value="${str[1]}">
//                 <input style="display:none" type="text" value="${str[4]}">
//                 <input style="display:none" type="text" value="${str[9]}">
//                 <input style="display:none" type="text" value="${str[6]}">
//                 <input style="display:none" type="text" value="${str[7]}">
//                 <input style="display:none" type="text" value="${str[8]}">
//                 <button class="btn_R cancel_act" style="background-color:#ccc;">取消參加</button>
//                 <input style="display:none" type="text" value="${str[1]}">
//                 <input class="userInput02" style="display:none" type="text" value="${str[0]}">
//             </div>
//             `;
//             div.setAttribute('class','partB_top_content');
//             div.innerHTML=htmlappendTo;
//             // partB_top.appendChild(div);
//             partB_top.insertBefore(div,partB_top_content[0]);
//             reBtn();
//             // alert('ok');
//         }
//     }
//    var JoinActObj = {
//         actNo: actNo ,
//         member: member,
//     };
    

//     xhr.open("post", "renewJoin.php", true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send( "JoinActObj=" + JSON.stringify(JoinActObj));//轉成字串送到php
// }

function CancelActTo(actNo,member){
    console.log("============="+actNo);
    // console.log(member);
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
        if( xhr.responseText == "null" ){
            alert('xhr有錯誤喔');
         }else{
            $('#alertText').text('已取消參加這個活動!');
            $('.alertWrap').show();
            // alert(target);
            // location.reload();
            // target.class
            // target.setAttribute('class','deleteFromPage');
            // target.style.display="none";
         }
         checkMyAct();

   }
   var CancelActObj = {
        actNo: actNo ,
        member: member,
    };


    xhr.open("post", "JoinDelAct.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "CancelActObj=" + JSON.stringify(CancelActObj));//轉成字串送到php

}

// var keyTotal;
// function officialTotal(num){
//     keyTotal = num;
// }
// var key = 1;
// function officalAllAct(member,key){
//     // console.log(actNo);
//     console.log(member);
//     var xhr = new XMLHttpRequest();
//     xhr.onload=function (){
//         if( xhr.responseText == "null" ){
//             alert('xhr有錯誤喔');
//          }else{
             
//             var fromAllAct_obj = JSON.parse(xhr.responseText);
//             console.log(fromAllAct_obj.total);
//             var box_Loc =$id('box_Loc');
//             var box_Intro =$id('box_Intro');
//             var box_actNo =$id('box_actNo');
//             var imgBoxImg_B = $id('imgBoxImg_B');
//             var imgBoxImg = $id('imgBoxImg');
//             box_Loc.innerHTML=fromAllAct_obj.loc;
//             box_Intro.innerHTML=fromAllAct_obj.actIntro;
//             box_actNo.value=fromAllAct_obj.no;
//             imgBoxImg_B.src='images/' +  fromAllAct_obj.img;
//             imgBoxImg.src='images/' +  fromAllAct_obj.img;
//             officialTotal(fromAllAct_obj.total);
//             return keyTotal = fromAllAct_obj.total;
            
//          }

//    }
//    var officalAllObj = {
//         member: member,
//         key: key,
//     };


//     xhr.open("post", "officalAllAct.php", true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send( "officalAllObj=" + JSON.stringify(officalAllObj));//轉成字串送到php            
             
// }

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

function allAct_more(no){
    var checkout_act=document.getElementsByClassName('checkout_act') ;
    var btn_ActJoinToDB=document.getElementById('btn_ActJoinToDB');
    // //來源 
        var actTitleValue = $id(`act_actTitleV${no}`).value;  
        var actNoValue = no;  
        // var host_memNoValue = $id(`act_host_memNoV${no}`).value; 
        var actLocValue = $id(`act_actLocV${no}`).value; 
        var act_beginValue = $id(`act_act_beginV${no}`).value; 
        var act_endValue = $id(`act_act_endV${no}`).value;  
        var actIntroValue = $id(`act_actIntroV${no}`).value; 
        var actImgValue = $id(`act_actImgV${no}`).value; 
        var actHostIdValue = $id(`act_host_memIdV${no}`).value; 

  
        // //放置目標
        var acts_lightbox_top_right = $id('acts_lightbox_top_right');
        var element_actTitle = document.querySelectorAll("#acts_lightbox_top_right h3")
        var elements = document.querySelectorAll("#acts_lightbox_top_right span")
        element_actTitle[0].innerHTML=actTitleValue;
        elements[1].innerHTML=actHostIdValue;
        elements[3].innerHTML=actLocValue;
        elements[5].innerHTML=act_beginValue.substring(0, 10);+'至'+act_endValue.substring(0, 10);
        elements[7].innerHTML=actIntroValue;
        $id("lightBox_actNo").value = no;
        myMessagebox_inputNone.setAttribute('value',actNoValue);
        var acts_lightbox_topImg = $id('acts_lightbox_topImg');
        acts_lightbox_topImg.style.backgroundImage = `url("images/${actImgValue}")`;
        // alert(acts_lightbox_topImg);
        // alert(actImgValue);

        var memNo = storage.getItem("memNo");
        comDB(memNo,no);
        $id("indexActCloseBtn").onclick=CloseLightActBox;
        // $id("loginBox").style.cssText = 'display: block;z-index:14;';
}

// 我的活動
function checkMyAct(){
    while($id("partB_top").firstChild) {
        $id("partB_top").removeChild($id("partB_top").firstChild);
    }
    // alert(0);
    if(storage.getItem("memNo")){ //有登入
        partB.style.cssText="display:block;";
        partA.style.cssText="display:none;";
        btn_holdAct.style.cssText="display:none;";

        var xhr = new XMLHttpRequest(); // 建立xhr
        xhr.onload = function(){
            if(xhr.responseText == "null"){
                $('#alertText').text('快去參加活動認識新朋友!');
                $('.alertWrap').show();

            }else{ //成功取得

                var objData = JSON.parse(xhr.responseText);
                var orderNo = JSON.parse(objData.orderNo);
                var memNo = JSON.parse(objData.memNo);
                var no= JSON.parse(objData.no);
                var time= JSON.parse(objData.time);
                var img = JSON.parse(objData.img);
                var hostNo = JSON.parse(objData.hostNo);
                var title = JSON.parse(objData.title);
                var loc = JSON.parse(objData.loc);
                var begin = JSON.parse(objData.begin);
                var end = JSON.parse(objData.end);
                var intro = JSON.parse(objData.intro);
                var hostId = JSON.parse(objData.hostId);

                console.log(orderNo);
                for(var i = 0; i<intro.length;i++){
                    var str = $id("partB_top").innerHTML;
                    begin[i] = begin[i].substr(0,10);
                    end[i] = end[i].substr(0,10);
                    str += `
                    <div class="partB_top_content">                       
                        <div class="contentImg" style="background-image: url(images/${img[i]});">
                        </div>
                            <div class="spanbox">
                                <span class="myActItem_title">活動名稱</span><span class="myActItem_content">${title[i]}</span>
                                <span class="myActItem_title">活動介紹</span><span class="myActItem_content">${intro[i]}</span>
                                <span class="myActItem_title">發起人</span><span class="myActItem_content">${hostId[i]}</span>
                                <span class="myActItem_title">地點</span><span class="myActItem_content">${loc[i]}</span>
                                <span class="myActItem_title">時間</span><span class="myActItem_content">${begin[i]}至${end[i]}</span>
                                <!-- <span>人數:{{}}</span> -->
                            </div>
                            <div class="buttonbox">
                                <button class="checkout_act btn_R btn" value=${no[i]} onclick="myAct_more(${i});">查看</button>
                                <input type="hidden" id="actTitle${i}" value=${title[i]}>
                                <input type="hidden" id="hostNo${i}" value=${hostNo[i]}>
                                <input type="hidden" id="hostId${i}" value=${hostId[i]}>
                                <input type="hidden" id="actImg${i}" value=${img[i]}>
                                <input type="hidden" id="actLoc${i}" value=${loc[i]}>
                                <input type="hidden" id="actBegin${i}" value=${begin[i]}>
                                <input type="hidden" id="actEnd${i}" value=${end[i]}>
                                <input type="hidden" id="actIntro${i}" value=${intro[i]}>
                                <button class="cancel_act btn_cancel" onclick="CancelActTo(${no[i]},${storage.getItem("memNo")});">取消參加</button>
                                <input type="hidden" id="actNo${i}" value=${no[i]}>
                            </div>
                        </div>`;
                        $id("partB_top").innerHTML = str;
                }
                    
            }
        };
        xhr.open("Post","act.php",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

        xhr.send("action=checkMyAct");

    }else{ //沒登入的跳登入燈箱
        $id("lightBoxInner").style.cssText = 'opacity:1;z-index:15;display: block;';
        $id("loginBox").style.cssText = 'display: block;z-index:14;';

    }












    // tab_myAct.style.cssText='color:#fff;';
    // tab_allAct.style.cssText='color:rgba(255, 255, 255,.5);';
}

function myAct_more(no){
    lightbox_actsCheckout_outside.style.cssText="display:flex;z-index:10;";
    lightbox_actsCheckout.style.cssText="display:block;z-index:10;";
    lightbox_actsCheckout.addEventListener('click',function(e){
        e.stopPropagation();
    },false);
    lightbox_actsCheckout_outside.addEventListener('click',function(){
        lightbox_actsCheckout_outside.style.cssText="display:none;z-index:-1;bottom: 0%;";

        while($id("myMessagebox").firstChild) {
            $id("myMessagebox").removeChild($id("myMessagebox").firstChild);
        }
        lightbox_actsCheckout.style.cssText="display:none;z-index:-1;bottom: 0%;";
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

    var actTitleValue = $id(`actTitle${no}`).value;  
    var actNoValue = $id(`actNo${no}`).value;  
    var host_memNoValue = $id(`hostNo${no}`).value; 
    var actLocValue = $id(`actLoc${no}`).value; 
    var act_beginValue = $id(`actBegin${no}`).value; 
    var act_endValue = $id(`actEnd${no}`).value;  
    var actIntroValue = $id(`actIntro${no}`).value; 
    var actImgValue = $id(`actImg${no}`).value; 
    var actHostIdValue = $id(`hostId${no}`).value; 
    // alert(actImgValue);

    //放置目標
    var acts_lightbox_topImg = $id('acts_lightbox_topImg');
    acts_lightbox_topImg.style.backgroundImage= `url("images/${actImgValue}")`;
    var acts_lightbox_top_right = $id('acts_lightbox_top_right');
    var acts_lightbox_top_img = $id('acts_lightbox_top_img');
    var element_actTitle = document.querySelectorAll("#acts_lightbox_top_right h3")
    var elements = document.querySelectorAll("#acts_lightbox_top_right span");
    console.log(elements);
    var myMessagebox_inputNone = $id('myMessagebox_inputNone');
    element_actTitle[0].innerHTML=actTitleValue;
    elements[1].innerHTML=actHostIdValue;
    elements[3].innerHTML=actLocValue;
    elements[5].innerHTML=act_beginValue.substring(0, 10);+'至'+act_endValue.substring(0, 10);
    elements[7].innerHTML=actIntroValue;
    myMessagebox_inputNone.setAttribute('value',actNoValue);
    $id('lightBox_actNo').value = actNoValue;
    
    // acts_lightbox_top_img.src = actImgValue;
    acts_lightbox_topImg.style.backgroundImage = actImgValue;
    // alert('actNoValue:'+actNoValue);
    var memNo = storage.getItem("memNo");
    // alert('memNo:'+memNo);
    // console.log(memNo);
    comDB(memNo,actNoValue);
    // countJoinNum(host_memNoValue,actNoValue);


    // var lightbox_actsCheckout_outside = $id('lightbox_actsCheckout_outside');
    // lightbox_actsCheckout_outside.addEventListener('click',function(){
    // },false);
}

window.addEventListener('load',function(){
    //更換第一屏燈箱
    var btn_actL = $id('btn_actL');
    var btn_actR = $id('btn_actR');
    var key = 1;

    btn_actL.addEventListener('click',function(){
        var btn_Actjoin = $id('btn_Actjoin');
        member = storage.getItem("memNo");
        var actNo = $id('box_actNoB').value ;
        keytotalbus --; 
        if( keytotalbus  == -1){
            keytotalbus = parseInt( $id('totalbus').value) -1 ;
        }
        officalAllAct(actNo,member,keytotalbus);
        
    },false);
    btn_actR.addEventListener('click',function(){
        var btn_Actjoin = $id('btn_Actjoin');
        member = storage.getItem("memNo");
        // alert($id('totalbus').value);
        var actNo = $id('box_actNoB').value ;
        keytotalbus ++; 
        if( keytotalbus  >= parseInt( $id('totalbus').value)){
            keytotalbus =  0 ;
        }
        officalAllAct(actNo,member,keytotalbus);
    },false);


    

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

    // 官方活動報名按鈕註冊事件  
    btn_Actjoin.addEventListener('click',function(){    
        if(storage.getItem("memNo")){ //有登入的話
            var actNo = $id("box_actNo").value; 
            JoinActTo(actNo,storage.getItem("memNo"));
            // renewJoin(actNo,storage.getItem("memNo"));

        }else{ //沒登入的跳登入燈箱
            $id("lightBoxInner").style.cssText = 'opacity:1;z-index:15;display: block;';
            $id("loginBox").style.cssText = 'display: block;z-index:14;';
        }
    },false);

// 寫入留言
    var userInput_send = $id('userInput_send');
    var myMessagebox_input = $id('myMessagebox_input');
    var myMessagebox_inputNone = $id('myMessagebox_inputNone');
    myMessagebox_input.addEventListener('keydown',function(e){
        if(e.keyCode == 13 ){//enter代碼
            if(storage.getItem("memNo")){
                var txt = '';
                txt = myMessagebox_input.value;
                actNo = myMessagebox_inputNone.value;
                var memNo = storage.getItem("memNo");
                sendCom(memNo,actNo,txt);

            }else{
                $('#alertText').text('請先登入!');
                $('.alertWrap').show();
            }
        }
    },false);
    var btn_myMessagebox = document.getElementsByClassName("btn_myMessagebox")[0];
    btn_myMessagebox.addEventListener('click',function(e){
        if(myMessagebox_input.value != '' ){//enter代碼
            if(storage.getItem("memNo")){
                var txt = '';
                txt = myMessagebox_input.value;
                actNo = myMessagebox_inputNone.value;
                var memNo = storage.getItem("memNo");
                sendCom(memNo,actNo,txt);

            }else{
                $('#alertText').text('請先登入!');
                $('.alertWrap').show();
            }
        }
    },false);
    userInput_send.addEventListener('click',function(e){
        var txt = '';
        txt = myMessagebox_input.value;
        actNo = myMessagebox_inputNone.value;
        var memNo = storage.getItem("memNo");
        // alert('memNo:'+ memNo);
        sendCom(memNo,actNo,txt);
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

    // 查看我的活動事件註冊
    tab_myAct.addEventListener('click',checkMyAct,false);

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
        var imgBoxImg_B = $id('imgBoxImg_B');
        var imgBoxImg = $id('imgBoxImg');
        imgBoxImg_B.src=imgBoxImg.src;

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

<<<<<<< HEAD

        if(storage.getItem("memNo")){
            window.scrollTo(0,(act_memberHold.offsetTop+400));
            console.log(act_memberHold.offsetTop);

            lightbox_holdact.style.cssText="display:flex;z-index:10;";
            lightbox_holdact_info.style.cssText="display:block;z-index:10;";
=======
        if(storage.getItem("memNo")){ //有登入
            window.scrollTo(0,(act_memberHold.offsetTop+400));
            console.log(act_memberHold.offsetTop);
    
            lightbox_holdact.style.cssText="display:flex;z-index:10;";
            lightbox_holdact_info.style.cssText="display:block;z-index:10;";
    
>>>>>>> lien0213
            lightbox_holdact_info.addEventListener('click',function(e){
                e.stopPropagation();
            },false);
            lightbox_holdact.addEventListener('click',function(){
                lightbox_holdact.style.cssText="display:none;z-index:-1;";
                lightbox_holdact_info.style.cssText="display:none;z-index:-1;";
            },false);

        }else{
            $('#alertText').text('請先登入!');
            $('.alertWrap').show();
        }

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
        // btn_ActJoin[i].addEventListener('click',,false);

    }

    // 所有活動區的報名按鈕 --已確認
    var btn_ActJoinToDB = $id('btn_ActJoinToDB');
    btn_ActJoinToDB.addEventListener('click',function(){
          
        if(storage.getItem("memNo")){ //有登入
            var actNo = $id("lightBox_actNo").value; 
            JoinActTo(actNo,storage.getItem("memNo"));
        }else{ //沒登入就跳登入燈箱
            $id("lightBoxInner").style.cssText = 'opacity:1;z-index:15;display: block;';
            $id("loginBox").style.cssText = 'display: block;z-index:14;';
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

    //按鈕動畫事件 
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
        
        // for(var i=0; i < act_memberHold_joins.length;i++){
        //     act_memberHold_boxs[i].addEventListener('mouseleave',function(e){
        //         console.log("=========="+tar);
        //         tar.style.cssText=`opacity:0;`;
        //     },false);
        // }


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

    var keytotalbus = parseInt($id('totalbus').value)  - 1;

   
},false);
