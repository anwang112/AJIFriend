
//搜尋好友
$('.search').click(function(){
    alert('查無此麻吉');
})
//搜尋好友結束

//翻牌
var Y = 0;
$('.matchNext').click(function () {
    Y += 360;
    $('.matchMem').css({
        'transform': 'rotateY(' + Y + 'deg)',
    });
    $(".matchBody").attr("src", "images/body2.png");
    //魅力值跑分
    var demo = {
            score: 0
        },
        mj = Math.ceil(Math.random() * 100),
        scoreDisplay = document.getElementById("scoreDisplay");

    //create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
    var tween = TweenLite.to(demo, 5, {
        score: mj,
        onUpdate: showScore
    })

    //each time the tween updates this function will be called.
    function showScore() {
        scoreDisplay.innerHTML = demo.score.toFixed(1);
    }
    //魅力值跑分結束
 var mem = document.getElementById('mem');
 mem.value = Math.ceil(Math.random() * 3);
});
//翻牌結束


//名人榜切換
$('.rankNav').each(function () {
    var $this = $(this);
   var $tab = $this.find('li.active');
   var $link = $tab.find('a');
   var $panel = $($link.attr('href'));
   $this.on('click','.tabControl',function(e){
    e.preventDefault();
    var $link = $(this);
    var id = this.hash;
    if(id && !$(this).is('.active')){
        $panel.removeClass('active');
        $tab.removeClass('active');
        $panel = $(id).addClass('active');
        $tab = $link.parent().addClass('active')
    }
   })
});
//名人榜切換結束


//魅力值跑分第一次
var demo = {
        score: 0
    },
    mj = Math.ceil((Math.random() * 50) + 50),
    scoreDisplay = document.getElementById("scoreDisplay");
//create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
var tween = TweenLite.to(demo, 2, {
    score: mj,
    onUpdate: showScore
})

//each time the tween updates this function will be called.
function showScore() {
    scoreDisplay.innerHTML = demo.score.toFixed(1);
}
//魅力值跑分結束


