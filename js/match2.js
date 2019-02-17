//搜尋角色變數
sEye = 1;
sBody = 1;
sColor = 'aaaaaa';
sHat = 1;
sClothes = 1;
totalMatch = 55;
//init role type
topMoney05 = document.getElementById('topMoney05');
ooxxGetRole(topMoney05, {
    animal: sBody,
    color: sColor,
    eyes: sEye,
    hat: sHat,
    clothes: sClothes,
});
mcEye = 1;
mcBody = 1;
mcColor = 'aaaaaa';
mcHat = 1;
mcClothes = 1;

matchMaji = document.getElementById('matchMaji');
ooxxGetRole(matchMaji, {
    animal: mcBody,
    color: mcColor,
    eyes: mcEye,
    hat: mcHat,
    clothes: mcClothes,
});



ooo = [];
for (i = 0; i <= 2; i++) {
    rankEye = 1;
    rankBody = 1;
    rankColor = 'aaaaaa';
    rankHat = 1;
    rankClothes = 1;

    topMoney = document.getElementById('topMoney' + i);
    ooo.push(topMoney);

    ooxxGetRole(ooo[i], {
        animal: rankBody,
        color: rankColor,
        eyes: rankEye,
        hat: rankHat,
        clothes: rankClothes,
    });
}
console.log(ooo);



$('.searchClose').click(function () {
    $('.searchWrap').hide();

});

//搜尋好友
//enter
function enter() {
    if (event.keyCode == "13") {
        $('.search').click();
    }
}
$('.search').click(function () {

    profile = {
        memId: document.getElementById('sId').value,
    };
    searchMem(profile);
});


//搜尋好友結束

//配對
profile = {
    con: document.getElementById('con').value,
    hob: document.getElementById('hob').value
};
getMem(profile);
//翻牌
var Y = 0;
turn = true;

$('.matchNext').click(function () {
    if (turn == true) {
        turn = false;
        setTimeout(() => {
            Y += 360;
            $('.matchMem').css({
                'transform': 'rotateY(' + Y + 'deg)',
            });
        }, 0);
        setTimeout(() => {
            profile = {
                con: document.getElementById('con').value,
                hob: document.getElementById('hob').value
            };
            getMem(profile);
        }, 500);

        setTimeout(() => {
            delay();
        }, 1500);

        function delay() {
            turn = true;
        }

    }
});


//翻牌結束


//名人榜切換
$('.rankNav').each(function () {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));
    $this.on('click', '.tabControl', function (e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;
        if (id && !$(this).is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');
            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active')
        }
    })
});
$('#topFriend').click(function () {
    profile = {
        rank: 'friend',
    };
    getRank(profile);
});
$('#topMoney').click(function () {
    profile = {
        rank: 'money',
    };
    getRank(profile);
});
$('#topMJ').click(function () {
    profile = {
        rank: 'topMJ',
    };
    getRank(profile);
});
//名人榜切換結束




//ajax
function searchMem(profile) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == 0) {
            alert("找不到這個ID的麻吉唷，請重新輸入正確ID");

        } else {
            $('.searchWrap').show();
            var hobbyinfo = document.getElementById('hobby');
            var sNameinfo = document.getElementById('sName');
            var sMJinfo = document.getElementById('sMJ');
            var conste = document.getElementById('sConstellation');
            var sMemId = document.getElementById('sMemId');
            var info = JSON.parse(xhr.responseText);
            //興趣
            hobbyinfo.innerText = '';
            var hobby = info.hobby.split("");
            var hobbys = ['打籃球', '抓寶可夢', '跑步', '看電影', '吃美食', '游泳', '唱歌', '看書', '爬山', '健身'];
            var c = [];
            for (var i = 0; i < hobby.length; i++) {
                var a = hobby[i];
                var b = hobbys[a];
                c.push(b);
            }
            for (var j = 0; j < c.length; j++) {
                var d = c[j] + ' | ';
                hobbyinfo.innerText += d;
            }
            //暱稱
            sNameinfo.innerText = info.name;
            //MJ
            sMJinfo.innerText = 'MJ: ' + info.mj;
            //星座
            constellation = info.constellation;
            switch (constellation) {
                case '1':
                    conste.innerText = "牡羊座";
                    break;
                case '2':
                    conste.innerText = "金牛座";
                    break;
                case '3':
                    conste.innerText = "雙子座";
                    break;
                case '4':
                    conste.innerText = "巨蟹座";
                    break;
                case '5':
                    conste.innerText = "獅子座";
                    break;
                case '6':
                    conste.innerText = "處女座";
                    break;
                case '7':
                    conste.innerText = "天秤座";
                    break;
                case '8':
                    conste.innerText = "天蠍座";
                    break;
                case '9':
                    conste.innerText = "射手座";
                    break;
                case '10':
                    conste.innerText = "摩羯座";
                    break;
                case '11':
                    conste.innerText = "水瓶座";
                    break;
                case '12':
                    conste.innerText = "雙魚座";
                    break;
            }
            //角色
            sEye = info.eye;
            sBody = info.body;
            sColor = info.color;
            sHat = info.hat;
            sClothes = info.clothes;

            //test write
            ooxxGetRole(topMoney05, {
                animal: sBody,
                color: sColor,
                eyes: sEye,
                hat: sHat,
                clothes: sClothes,
            });
            //id
            sMemId.innerText = info.memId;
            if (parseInt(info.mj) >= 1000) {
                lv = "LV.3 萬人迷";
            } else if (parseInt(info.mj) >= 500) {
                lv = "LV.2 潛力股";
            } else {
                lv = "LV.1 邊緣人";
            }
            document.getElementById('sLv').innerText = lv;
        }

        // var mineMsg = data.mine.split("||");
        // for(var i=0;i<mineMsg.length;i++){ //有撈到(回傳)聊天內容的話

    };
    xhr.open("Post", "search.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));

}

// 配對篩選
function getMem(profile) {

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == 0) {
            alert("沒有符合條件的麻吉唷，請重新挑選");
        } else {
            var info = JSON.parse(xhr.responseText);
            //角色
            mcEye = info.eye;
            mcBody = info.body;
            mcColor = info.color;
            mcHat = info.hat;
            mcClothes = info.clothes;

            //test write
            ooxxGetRole(matchMaji, {
                animal: mcBody,
                color: mcColor,
                eyes: mcEye,
                hat: mcHat,
                clothes: mcClothes,
            });

            //id
            document.getElementById('mcId').innerText = info.memId;
            document.getElementById('mcName').innerText = info.name;
            document.getElementById('mcMJ').innerText = 'MJ: ' + info.mj;

            //lv
            if (parseInt(info.mj) >= 1000) {
                lv = "LV.3 萬人迷";
            } else if (parseInt(info.mj) >= 500) {
                lv = "LV.2 潛力股";
            } else {
                lv = "LV.1 邊緣人";
            }
            document.getElementById('mcLv').innerText = lv;
            //興趣
            var hobby = info.hobby.split("");
            var hobbys = ['打籃球', '抓寶可夢', '跑步', '看電影', '吃美食', '游泳', '唱歌', '看書', '爬山', '健身'];
            var c = [];
            document.getElementById('mcHobby').innerText = '';
            for (var i = 0; i < hobby.length; i++) {
                var a = hobby[i];
                var b = hobbys[a];
                c.push(b);
            }
            for (var j = 0; j < c.length; j++) {
                var d = c[j] + ' | ';
                document.getElementById('mcHobby').innerText += d;
            }
            //默契值
            totalMatch = 55;
            var userHobby = document.getElementById('userHobby').value.split("");
            for (i = 0; i < userHobby.length; i++) {
                if (hobby.indexOf(userHobby[i]) != -1) {
                    totalMatch += 9;
                }
            }
            //魅力值跑分
            var demo = {
                    score: 0
                },
                scoreDisplay = document.getElementById("scoreDisplay");

            //create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
            var tween = TweenLite.to(demo, 1.5, {
                score: totalMatch,
                onUpdate: showScore
            })

            //each time the tween updates this function will be called.
            function showScore() {
                scoreDisplay.innerHTML = demo.score.toFixed(1);
            }
            //魅力值跑分結束
            //星座
            constellation = info.constellation;
            switch (constellation) {
                case '1':
                    document.getElementById('cons').innerText = "牡羊座";
                    break;
                case '2':
                    document.getElementById('cons').innerText = "金牛座";
                    break;
                case '3':
                    document.getElementById('cons').innerText = "雙子座";
                    break;
                case '4':
                    document.getElementById('cons').innerText = "巨蟹座";
                    break;
                case '5':
                    document.getElementById('cons').innerText = "獅子座";
                    break;
                case '6':
                    document.getElementById('cons').innerText = "處女座";
                    break;
                case '7':
                    document.getElementById('cons').innerText = "天秤座";
                    break;
                case '8':
                    document.getElementById('cons').innerText = "天蠍座";
                    break;
                case '9':
                    document.getElementById('cons').innerText = "射手座";
                    break;
                case '10':
                    document.getElementById('cons').innerText = "摩羯座";
                    break;
                case '11':
                    document.getElementById('cons').innerText = "水瓶座";
                    break;
                case '12':
                    document.getElementById('cons').innerText = "雙魚座";
                    break;
            }
            document.getElementById('mcIntro').innerText = info.intro;

        }
    };
    xhr.open("Post", "matchMem.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));

}


//rank
// 配對篩選
function getRank(profile) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == 0) {
            alert("");
        } else {
            var info = JSON.parse(xhr.responseText);

            //角色
            for (i = 0; i <= 2; i++) {

                rankEye = info[i].eye;
                rankBody = info[i].body;
                rankColor = info[i].color;
                rankHat = info[i].hat;
                rankClothes = info[i].clothes;
                //test write
                ooxxGetRole(ooo[i], {
                    animal: rankBody,
                    color: rankColor,
                    eyes: rankEye,
                    hat: rankHat,
                    clothes: rankClothes,
                });
                //id
                infoTxtH3 = document.querySelectorAll('.rankTxt' + i + ' h3');
                infoTxtH3[0].innerText = info[i].memId;

                //

            }
            console.log(infoTxtH3);




            //     //id
            //     document.getElementById('mcId').innerText = info.memId;
            //     document.getElementById('mcName').innerText = info.name;
            //     document.getElementById('mcMJ').innerText = 'MJ: ' + info.mj;

            //     //lv
            //     if (parseInt(info.mj) >= 1000) {
            //         lv = "LV.3 萬人迷";
            //     } else if (parseInt(info.mj) >= 500) {
            //         lv = "LV.2 潛力股";
            //     } else {
            //         lv = "LV.1 邊緣人";
            //     }
            //     document.getElementById('mcLv').innerText = lv;
            //     //興趣
            //     var hobby = info.hobby.split("");
            //     var hobbys = ['打籃球', '抓寶可夢', '跑步', '看電影', '吃美食', '游泳', '唱歌', '看書', '爬山', '健身'];
            //     var c = [];
            //     document.getElementById('mcHobby').innerText = '';
            //     for (var i = 0; i < hobby.length; i++) {
            //         var a = hobby[i];
            //         var b = hobbys[a];
            //         c.push(b);
            //     }
            //     for (var j = 0; j < c.length; j++) {
            //         var d = c[j] + ' | ';
            //         document.getElementById('mcHobby').innerText += d;
            //     }
            //     //默契值
            //     totalMatch = 55;
            //     var userHobby = document.getElementById('userHobby').value.split("");
            //     for (i = 0; i < userHobby.length; i++) {
            //         if (hobby.indexOf(userHobby[i]) != -1) {
            //             totalMatch += 9;
            //         }
            //     }
            //     //魅力值跑分
            //     var demo = {
            //             score: 0
            //         },
            //         scoreDisplay = document.getElementById("scoreDisplay");

            //     //create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
            //     var tween = TweenLite.to(demo, 1.5, {
            //         score: totalMatch,
            //         onUpdate: showScore
            //     })

            //     //each time the tween updates this function will be called.
            //     function showScore() {
            //         scoreDisplay.innerHTML = demo.score.toFixed(1);
            //     }
            //     //魅力值跑分結束
            //     //星座
            //     constellation = info.constellation;
            //     switch (constellation) {
            //         case '1':
            //             document.getElementById('cons').innerText = "牡羊座";
            //             break;
            //         case '2':
            //             document.getElementById('cons').innerText = "金牛座";
            //             break;
            //         case '3':
            //             document.getElementById('cons').innerText = "雙子座";
            //             break;
            //         case '4':
            //             document.getElementById('cons').innerText = "巨蟹座";
            //             break;
            //         case '5':
            //             document.getElementById('cons').innerText = "獅子座";
            //             break;
            //         case '6':
            //             document.getElementById('cons').innerText = "處女座";
            //             break;
            //         case '7':
            //             document.getElementById('cons').innerText = "天秤座";
            //             break;
            //         case '8':
            //             document.getElementById('cons').innerText = "天蠍座";
            //             break;
            //         case '9':
            //             document.getElementById('cons').innerText = "射手座";
            //             break;
            //         case '10':
            //             document.getElementById('cons').innerText = "摩羯座";
            //             break;
            //         case '11':
            //             document.getElementById('cons').innerText = "水瓶座";
            //             break;
            //         case '12':
            //             document.getElementById('cons').innerText = "雙魚座";
            //             break;
            //     }
            //     document.getElementById('mcIntro').innerText = info.intro;
            // }
        }
    };
    xhr.open("Post", "getRankMem.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));

}