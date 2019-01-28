//送禮動畫
TweenMax.fromTo('.gift-info', 2, {
    x: -80,
    opacity: 1,
    scale: 1,
}, {
    x: 120,
    opacity: 0,
    scale: 0.3,
    repeat: -1,//無限重複
});

