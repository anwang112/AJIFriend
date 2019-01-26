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
        btn_beFriend.style.backgroundImage="url('../pic/txtbox_03.svg')";

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
    var hearts = Math.ceil((Math.random()*20)+17);;
    //Math.random()
    console.log(hearts);
    //創造愛心
    for(var i=0;i<hearts;i++){
        var topPosition = Math.ceil((Math.random()*170));
        var leftPosition = 10+Math.ceil((Math.random()*450));
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
    btn_beFriend.style.backgroundImage="url('../pic/txtbox_04.svg')";
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