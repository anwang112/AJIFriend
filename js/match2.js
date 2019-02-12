var Y = 0;
$('.matchNext').click(function(){
    Y += 360;
    $('.matchMem').css({
        'transform':'rotateY('+ Y +'deg)',
    });
    $(".matchBody").attr("src","images/body2.png");
});

$('.rankNavBtn').click(function(){
    $('.rankNavBtn').not(this).removeClass('achive');
    $(this).addClass('achive');
});


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