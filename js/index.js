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
var tl1 = new TimelineMax();

tl1.fromTo('.chatBox', .5, {
    opacity: 1
}, {
    opacity: 0
});

var tl2 = new TimelineMax();
tl2.fromTo('#indexSec', .1, {
    y: "100%"
}, {
    y: '0%'
});


var scene04 = new ScrollMagic.Scene({
        // triggerElement: '#trigger01',
        duration: '150%',
        triggerHook: 0,

        // reverse: true
    }).setPin('#outerWrap')
    .setTween([tl1, tl2])
    .addIndicators({
        name: 'scence pin 04'
    })
    .addTo(controller);

var $showImage = $('#eyes');
$showImage.attr('src', 'images/eye2.svg');


// 用來顯示大圖片用
var $showhead = $('#head');

// 當滑鼠移到 .abgne-block-20120106 中的某一個超連結時
$('.bearHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.attr('src', 'images/body1.svg');
});
$('.rabiHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.attr('src', 'images/head2.svg');
});
$('.catHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.attr('src', 'images/head3.svg');
});
$('.dogHead').click(function () {
    // 把 #show-image 的 src 改成被移到的超連結的位置
    $showhead.attr('src', 'images/head4.svg');
});

var tllC = new TimelineMax({
    repeat: -1,
});
tllC.to('.lC1', 1, {
    opacity: 0.8,

}).to('.lC2', 1, {
    opacity: 0.8,

}).to('.lC3', 1, {
    opacity: 0.8,

}).to('.lC4', 1, {
    opacity: 0.8,

}).to('.lC5', 1, {
    opacity: 0.8,

}).to('.lC6', 1, {
    opacity: 0.8,

}).to('.littleChat', 1, {
    opacity: 0,
    y:-40,

});

