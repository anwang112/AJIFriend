// var tlC = new TimelineMax({
//     repeat: -1,
//     delay: 3,
// });
// tlC.add("re1");
// tlC.to('.dotGrop', 1, {
//     y: -40,
//     opacity: 0,
//     // rotationX: 0,
//     // transformOrigin: 'center top',
//     // transformPerspective: 600,
// }).staggerFromTo('.typing1', 1, {
//     y: 0,
// }, {
//     y: -10,
// }, 're1').to('.chat1', 1, {
//     opacity: 1,
// }, 're1').to('.textWrap', 1, {
//     y: -20,
// }, 're2').to('.chat1', 1, {
//     opacity: 0,
// },'re2').to('.textWrap', 1, {
//     y: -40,
// },'re2');
// tlC.add('re2');
// tlC.to('.dotGrop', 1, {
//     opacity:1,
// },'re3').to('.dotGrop', 1, {
//     y: 0,
//     opacity:1,
// },'re3');

// tlC.to('.textWrap', 1, {
//     y: -20,
// }, 're2').to('.chat2', 1, {
//     opacity: 1
// },'re2');
// tlC.add("begin");
// tlC.staggerFromTo('.box', 1, {
//     y: 0,

// }, {
//     y: -40,

// });



var controller = new ScrollMagic.Controller();

var tl2 = new TimelineMax();
tl2.to('#indexSec', 1, {
    y: '-120%'
});

var scene04 = new ScrollMagic.Scene({
        triggerElement: '#trigger01',
        duration: '80%',
        triggerHook: 0,

        // reverse: true
    }).setPin('#indexFir')
    .setTween(tl2)
    .addIndicators({
        name: 'scence pin 04'
    })
    .addTo(controller);



var $showImage = $('#eyes');



// 用來顯示大圖片用
var $showhead = $('#bodyWrap');

// 當滑鼠移到 .abgne-block-20120106 中的某一個超連結時
var shake = function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    var tis = new TimelineMax({});
    tis.to($showhead, .4, {

        y: -100,
        repeat: 1,
        yoyo: true,
        ease: Power4.easeInOut,

    });
};

$('.bearHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.css('background-image', 'url(images/body1.png)');
    shake();
});
$('.rabiHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.css('background-image', 'url(images/body3.png)');
    shake();
});
$('.catHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.css('background-image', 'url(images/body2.png)');
    shake();
});
$('.dogHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.css('background-image', 'url(images/body4.png)');
    shake();
});
var $showeye = $('#eyes');
$('.eye1').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showeye.attr('src', 'images/eye1.png');
});
$('.eye2').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showeye.attr('src', 'images/eye2.png');
});
$('.eye3').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showeye.attr('src', 'images/eye3.png');
});
$('.eye4').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showeye.attr('src', 'images/eye4.png');
});

$('.eyesChoice').hide();
$('.colorChoice').hide();
$('.eyesCir').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $('.bodyChoice').hide();
    $('.eyesChoice').show();
    $('.colorChoice').hide();
});
$('.bodyCir').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $('.bodyChoice').show();
    $('.eyesChoice').hide();
    $('.colorChoice').hide();
});
$('.colorCir').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $('.bodyChoice').hide();
    $('.eyesChoice').hide();
    $('.colorChoice').show();
});





var tllC = new TimelineMax({
    repeat: -1,
});
tllC.to('.lC1', .5, {
    opacity: 0.8,

}).to('.lC2', .5, {
    opacity: 0.8,

}).to('.lC3', .5, {
    opacity: 0.8,

}).to('.lC4', .5, {
    opacity: 0.8,

}).to('.lC5', .5, {
    opacity: 0.8,

}).to('.lC6', .5, {
    opacity: 0.8,

}).to('.littleChat', 1, {
    opacity: 0,
    y: -40,

});

$('.matchObj').click(function(){
    $('.right').toggleClass('right').toggleClass('middle');
    $('.left').toggleClass('left').addClass('right');
    $(this).addClass('left').removeClass('middle');
});

// $("#aaa").fullpage({

//     navigation: true, // 顯示導行列
//     navigationPosition: "right" // 導行列位置

// });



