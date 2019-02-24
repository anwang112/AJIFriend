var Today = new Date();
nowDay = Today.getFullYear() + "-0" + (Today.getMonth() + 1) + "-" + Today.getDate();
topFriend();
var loginNo;
var tarNo;
//alert
$('.alertWrap').hide();
$('#alertBtn').click(function () {
    $('.alertWrap').hide();
})

//report
td = document.querySelectorAll('#reportData table tr td');
$('#report').click(function () {
    document.getElementById('fname').value = '';
    if (!storage.getItem("memNo")) {
        $('#alertText').text('請先登入!');
        $('.alertWrap').show();

    }else{
        var R = 0;
        $('#searData').css({
            'transform': 'rotateY(' + (R + 180) + 'deg)',
        });
        $('#reportData').css({
            'transform': 'rotateY(' + R + 'deg)',
        });
        td[0].innerText = storage.getItem("memId");
        td[2].innerText = nowDay;
    }
    
})
$('#reportSmt').click(function(){
    if( td[0].innerText== td[1].innerText){
        $('#alertText').text('不能檢舉自己唷！');
        $('.alertWrap').show();
    }else if(document.getElementById('fname').value == ''){
        $('#alertText').text('請輸入檢舉原因');
        $('.alertWrap').show();
    }else{
        profile = {
            memNo: storage.getItem("memNo"),
            ta_memNo: document.getElementById('sMemNo').value,
            reason: document.getElementById('fname').value,
        };
        report(profile);
    }
})

//placeholder
$(function () {
    $('textarea').on('change', function () {
        var textarea = $(this);
        if (textarea.val().length) {
            textarea.addClass('populated');
        } else {
            textarea.removeClass('populated');
        }
    });

    setTimeout(function () {
        $('#fname').trigger('focus');
    }, 500);
});
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
    btn = $('.btn_beFriend0');
    changeBtnNomal(btn);

    profile = {
        memId: document.getElementById('sId').value,
        loginMemNo:storage.getItem("memNo"),
    };
    searchMem(profile);
});


//搜尋好友結束

//配對
profile = {
    con: document.getElementById('con').value,
    hob: document.getElementById('hob').value,
    memNo: storage.getItem("memNo"),
    targetNo: document.getElementById('matchMemNo').value,
};
getMem(profile);
//翻牌
var Y = 0;
turn = true;

$('.matchNext').click(function () {
    btn = $('.btn_beFriend1');
    changeBtnNomal(btn);
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
                hob: document.getElementById('hob').value,
                memNo: storage.getItem("memNo"),
                targetNo: document.getElementById('matchMemNo').value,
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

//名人榜切換結束

//送出好友邀請
//改好友BTN
function changeBtn(btn){
    btn.addClass('disable');
    btn.removeClass('btn');
    btn.text('邀請中').attr("disabled",true);
};
function changeBtnNomal(btn){
    btn.removeClass('disable');
    btn.addClass('btn');
    btn.text('成為麻吉').attr("disabled",false);
};
function changeBtnUnf(btn){
    btn.removeClass('disable');
    btn.addClass('btn');
    btn.text('解除麻吉關係').attr("disabled",false);
};
//搜尋-送出好友邀請
function beFriend (tarNo,loginNo,btn) {
    
    if(btn.text() == '成為麻吉'){
        if (!storage.getItem("memNo")) {
            $('#alertText').text('請先登入!');
            $('.alertWrap').show();
        }else if(loginNo == tarNo){
            $('#alertText').text('不能選擇自己唷!');
            $('.alertWrap').show();
        }else{
            if (storage.getItem("loveGiven") <= 0) {
                $('#alertText').text('今天的愛心已經用完囉！');
                $('.alertWrap').show();
            } else {
                profile = {
                    memNo: loginNo,
                    targetNo: tarNo,
                    nowDay: nowDay,
                    action: 3,
                };
                makeFriend(profile);
            }
        }
    }else if(btn.text() == '解除麻吉關係'){
        data= {
            sendMemId: storage.getItem("memNo"),
            taMemId: tarNo,
            action: 2,
            btn: btn,
        };
        unFriend(data);
        
    }
    
}
$('.btn_beFriend0').click(function(){
    alert(0);
    tarNo = document.getElementById('sMemNo').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
//配對-送出好友邀請
$('.btn_beFriend1').click(function () {
    tarNo = document.getElementById('matchMemNo').value;
    loginNo = storage.getItem("memNo");
    btn = $('.btn_beFriend1');
    beFriend(tarNo,loginNo,btn);
});
//Rank送出好友邀請
$('.fans .rankFriendBtn0').click(function () {
    tarNo = document.querySelector('.fans .rankNo0').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.fans .rankFriendBtn1').click(function () {
    tarNo = document.querySelector('.fans .rankNo1').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.fans .rankFriendBtn2').click(function () {
    tarNo = document.querySelector('.fans .rankNo2').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.moneyS.rankFriendBtn0').click(function () {
    tarNo = document.querySelector('.moneyS .rankNo0').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.moneyS .rankFriendBtn1').click(function () {
    tarNo = document.querySelector('.moneyS .rankNo1').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.moneyS .rankFriendBtn2').click(function () {
    tarNo = document.querySelector('.moneyS .rankNo2').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.MJs .rankFriendBtn0').click(function () {
    tarNo = document.querySelector('.MJs .rankNo0').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.MJs .rankFriendBtn1').click(function () {
    tarNo = document.querySelector('.MJs .rankNo1').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});
$('.MJs .rankFriendBtn2').click(function () {
    tarNo = document.querySelector('.MJs .rankNo2').value;
    loginNo = storage.getItem("memNo");
    btn = $(this);
    beFriend(tarNo,loginNo,btn);
});




//ajax
// function searchMem(profile) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.responseText == 0) {
//             $('#alertText').text('找不到這個ID的麻吉唷!');
//             $('.alertWrap').show();

//         } else {
//             var R = 0;
//             $('#searData').css({
//                 'transform': 'rotateY(' + R + 'deg)',
//             });
//             $('#reportData').css({
//                 'transform': 'rotateY(' + (R + 180) + 'deg)',
//             });
//             $('.searchWrap').show();
//             var hobbyinfo = document.getElementById('hobby');
//             var sNameinfo = document.getElementById('sName');
//             var sMJinfo = document.getElementById('sMJ');
//             var conste = document.getElementById('sConstellation');
//             var sMemId = document.getElementById('sMemId');
//             var info = JSON.parse(xhr.responseText);
//             //no
//             document.getElementById('sMemNo').value = info.memNo;

//             //興趣
//             hobbyinfo.innerText = '';
//             var hobby = info.hobby.split("");
//             var hobbys = ['打籃球', '抓寶可夢', '跑步', '看電影', '吃美食', '游泳', '唱歌', '看書', '爬山', '健身'];
//             var c = [];
//             for (var i = 0; i < hobby.length; i++) {
//                 var a = hobby[i];
//                 var b = hobbys[a];
//                 c.push(b);
//             }
//             for (var j = 0; j < c.length; j++) {
//                 var d = c[j] + '&nbsp' + '|' + '&nbsp';
//                 if (j == c.length - 1) {
//                     d = c[j];
//                 }
//                 hobbyinfo.innerHTML += d;
//             }
//             //暱稱
//             sNameinfo.innerText = info.name;
//             //MJ
//             sMJinfo.innerText = 'MJ: ' + info.mj;
//             //星座
//             constellation = info.constellation;
//             switch (constellation) {
//                 case '1':
//                     conste.innerText = "牡羊座";
//                     break;
//                 case '2':
//                     conste.innerText = "金牛座";
//                     break;
//                 case '3':
//                     conste.innerText = "雙子座";
//                     break;
//                 case '4':
//                     conste.innerText = "巨蟹座";
//                     break;
//                 case '5':
//                     conste.innerText = "獅子座";
//                     break;
//                 case '6':
//                     conste.innerText = "處女座";
//                     break;
//                 case '7':
//                     conste.innerText = "天秤座";
//                     break;
//                 case '8':
//                     conste.innerText = "天蠍座";
//                     break;
//                 case '9':
//                     conste.innerText = "射手座";
//                     break;
//                 case '10':
//                     conste.innerText = "摩羯座";
//                     break;
//                 case '11':
//                     conste.innerText = "水瓶座";
//                     break;
//                 case '12':
//                     conste.innerText = "雙魚座";
//                     break;
//             }
//             //角色
//             sEye = info.eye;
//             sBody = info.body;
//             sColor = info.color;
//             sHat = info.hat;
//             sClothes = info.clothes;

//             //test write
//             ooxxGetRole(topMoney05, {
//                 animal: sBody,
//                 color: sColor,
//                 eyes: sEye,
//                 hat: sHat,
//                 clothes: sClothes,
//             });
//             //id
//             sMemId.innerText = info.memId;
//             td[1].innerText = info.memId;
//             if (parseInt(info.mj) >= 1000) {
//                 lv = "LV.3 萬人迷 ";
//             } else if (parseInt(info.mj) >= 500) {
//                 lv = "LV.2 潛力股 ";
//             } else {
//                 lv = "LV.1 邊緣人 ";
//             }
//             document.getElementById('sLv').innerText = lv;
//             document.getElementById('sIntro').innerText = info.intro;

//             if(info.friendRe == 0){
//                 btn = $('.btn_beFriend0');
//                 changeBtn(btn);
//             }else if (info.friendRe == 1){
//                 btn = $('.btn_beFriend0');
//                 changeBtnUnf(btn);
//             }


//         }



//     };
//     xhr.open("Post", "search.php", true);
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//     xhr.send("profile=" + JSON.stringify(profile));

// }

// 配對篩選
function getMem(profile) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {

        if (xhr.responseText == 0) {
            $('#alertText').text('沒有符合條件的麻吉唷!');
            $('.alertWrap').show();


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
            document.getElementById('matchMemNo').value = info.memNo;
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
                var d = c[j] + '&nbsp' + '|' + '&nbsp';
                if (j == c.length - 1) {
                    d = c[j];
                }
                document.getElementById('mcHobby').innerHTML += d;
            }
            //默契值
            totalMatch = 55;
            var userHobby = storage.getItem("hobby").split("");
            for (i = 0; i < userHobby.length; i++) {
                if (hobby.indexOf(userHobby[i]) != -1) {
                    totalMatch += 9;
                }
            }
            if (totalMatch == 100) {
                document.getElementById('MJstatus').innerText = '令人驚艷的完美麻吉!';
                document.getElementById('MJstatus').style.color = '#f56a38'
            } else if (totalMatch > 90) {
                document.getElementById('MJstatus').innerText = '默契超群的麻吉!';
                document.getElementById('MJstatus').style.color = '#a02cb5'
            } else if (totalMatch > 80) {
                document.getElementById('MJstatus').innerText = '很聊得來的麻吉!';
                document.getElementById('MJstatus').style.color = '#2258af'
            } else if (totalMatch > 55) {
                document.getElementById('MJstatus').innerText = '有共同興趣的麻吉!';
                document.getElementById('MJstatus').style.color = '#5f892f'
            } else {
                document.getElementById('MJstatus').innerText = '好好聊天培養默契吧!';
                document.getElementById('MJstatus').style.color = '#555450'
            }
            //默契值跑分
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

id = [];
//rank
function getRank(profile) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == 0) {
            alert("");
        } else {
            id = [];

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

                //no
                document.querySelector(txtBox + ' .rankNo' + i ).value = info[i].memNo;

                //暱稱
                infoTxtH3 = document.querySelectorAll(txtBox + ' .rankTxt' + i + ' h3');
                infoTxtH3[0].innerText = info[i].name;
                //id
                infoTxtH4 = document.querySelectorAll(txtBox + ' .rankTxt' + i + ' h4');
                infoTxtH4[0].innerText = 'ID: ' + info[i].memId;

                //lv
                infoTxtHSpan = document.querySelectorAll(txtBox + ' .rankTxt' + i + ' span');
                if (parseInt(info[i].mj) >= 1000) {
                    lv = "LV.3 萬人迷";
                } else if (parseInt(info[i].mj) >= 500) {
                    lv = "LV.2 潛力股";
                } else {
                    lv = "LV.1 邊緣人";
                }
                infoTxtHSpan[0].innerText = lv;

                //MJ
                infoTxtHSpan[1].innerText = 'MJ: ' + info[i].mj;


                //money
                infoTxtHSpan[2].innerText = '金幣數: ' + info[i].coin;

                //好友數
                infoTxtHSpan[3].innerText = '麻吉數: ' + info[i].friend;
                id.push(info[i].memId);

                data = {
                    loginNo: storage.getItem("memNo"),
                    tarMemNo: info[i].memNo,
                }
                btn= $(txtBox+' .rankFriendBtn'+i);
                relationBtn(data,btn);

            }
        }
    };
    xhr.open("Post", "getRankMem.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));

}

//showInfo
$('.showInfo0').click(function () {
    btn = $('.btn_beFriend0');
    changeBtnNomal(btn);
    profile = {
        memId: id[0],
        loginMemNo:storage.getItem("memNo"),
    };
    searchMem(profile);
});
$('.showInfo1').click(function () {
    btn = $('.btn_beFriend0');
    changeBtnNomal(btn);
    profile = {
        memId: id[1],
        loginMemNo:storage.getItem("memNo"),
    };
    searchMem(profile);
});
$('.showInfo2').click(function () {
    btn = $('.btn_beFriend0');
    changeBtnNomal(btn);
    profile = {
        memId: id[2],
        loginMemNo:storage.getItem("memNo"),
    };
    searchMem(profile);
});
//heart
heart =  storage.getItem("loveGiven");
heartItem = document.querySelectorAll('.heart div');
function loadHeart(heart){
    console.log(111);
    switch (parseInt(heart)) {
        case 2:
            heartItem[2].style.backgroundImage = 'url(../images/heartdark.svg)';
            break;
        case 1:
            heartItem[2].style.backgroundImage = 'url(../images/heartdark.svg)';
            heartItem[1].style.backgroundImage = 'url(../images/heartdark.svg)';
            break;
        case 0:
            heartItem[0].style.backgroundImage = 'url(../images/heartdark.svg)';
            heartItem[1].style.backgroundImage = 'url(../images/heartdark.svg)';
            heartItem[2].style.backgroundImage = 'url(../images/heartdark.svg)';
            break;

    }
}
loadHeart(heart);
//送出好友邀請ajax
function makeFriend(profile) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (parseInt(xhr.responseText) >= 0) {
            heart = xhr.responseText;
            storage.setItem("loveGiven",heart);
            changeBtn(btn);
            loadHeart(heart)
            $('#alertText').text('已送出邀請');
            $('.alertWrap').show();
        } else {
            $('#alertText').text('請勿重複邀請唷!');
            $('.alertWrap').show();
        }

    };
    xhr.open("Post", "makeFriend.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}

// //檢舉
// function report(profile) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (parseInt(xhr.responseText) == 1) {
//             $('#alertText').text('已經檢舉過囉!');
//             $('.alertWrap').show();
//         } else if(parseInt(xhr.responseText) == 0){ 
//             $('#alertText').text('已收到您的檢舉!');
//             $('.alertWrap').show();
//             $('.searchWrap').hide();
//         }

//     };
//     xhr.open("Post", "report.php", true);
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//     xhr.send("profile=" + JSON.stringify(profile));

// }
//unfriend
function unFriend(data){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == "delete friend~") {
            $('#alertText').text('已解除麻吉關係!');
            $('.alertWrap').show();
            changeBtnNomal(btn);

        }

    };
    xhr.open("Post", "updateRelationship.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("upMem=" + JSON.stringify(data));


}

//判斷好友按鈕
function topFriend() {
    txtBox = '.fans';
    ooo = [];
    for (i = 0; i <= 2; i++) {
        rankEye = 1;
        rankBody = 1;
        rankColor = 'aaaaaa';
        rankHat = 1;
        rankClothes = 1;

        topFan = document.getElementById('topFriend' + i);
        ooo.push(topFan);

        ooxxGetRole(ooo[i], {
            animal: rankBody,
            color: rankColor,
            eyes: rankEye,
            hat: rankHat,
            clothes: rankClothes,
        });
    }
    profile = {
        rank: 'friend',
    };
    getRank(profile);
}

$('#topFriend').click(function () {
    topFriend();
});
$('#topMoney').click(function () {
    txtBox = '.moneyS';
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
    profile = {
        rank: 'money',
    };
    getRank(profile);
});
$('#topMJ').click(function () {
    txtBox = '.MJs';
    ooo = [];
    for (i = 0; i <= 2; i++) {
        rankEye = 1;
        rankBody = 1;
        rankColor = 'aaaaaa';
        rankHat = 1;
        rankClothes = 1;

        topMJ = document.getElementById('topMJ' + i);
        ooo.push(topMJ);

        ooxxGetRole(ooo[i], {
            animal: rankBody,
            color: rankColor,
            eyes: rankEye,
            hat: rankHat,
            clothes: rankClothes,
        });
    }
    profile = {
        rank: 'topMJ',
    };
    getRank(profile);
    
});
function relationBtn(data,btn){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == 'login') {
            changeBtnNomal(btn);
            
        }else if(xhr.responseText == 'not friend'){
            changeBtnNomal(btn);
        }else if(xhr.responseText == 0){
            changeBtn(btn);

        }else if(xhr.responseText == 1){
            changeBtnUnf(btn)
        }

    };
    xhr.open("Post", "relationship.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("rela=" + JSON.stringify(data));

}
//撒花
const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI * 0.5;

// canvas settings
var viewWidth = 512,
    viewHeight = 350,
    drawingCanvas = document.getElementById("drawing_canvas"),
    ctx,
    timeStep = (1 / 60);

Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Particle = function (p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.time = 0;
    this.duration = 3 + Math.random() * 2;
    this.color = '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

    this.w = 8;
    this.h = 6;

    this.complete = false;
};

Particle.prototype = {
    update: function () {
        this.time = Math.min(this.duration, this.time + timeStep);

        var f = Ease.outCubic(this.time, 0, 1, this.duration);
        var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

        var dx = p.x - this.x;
        var dy = p.y - this.y;

        this.r = Math.atan2(dy, dx) + HALF_PI;
        this.sy = Math.sin(Math.PI * f * 10);
        this.x = p.x;
        this.y = p.y;

        this.complete = this.time === this.duration;
    },
    draw: function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.r);
        ctx.scale(1, this.sy);

        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

        ctx.restore();
    }
};

Loader = function (x, y) {
    this.x = x;
    this.y = y;

    this.r = 24;
    this._progress = 0;

    this.complete = false;
};

Loader.prototype = {
    reset: function () {
        this._progress = 0;
        this.complete = false;
    },
    set progress(p) {
        this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

        this.complete = this._progress === 1;
    },
    get progress() {
        return this._progress;
    },
    draw: function () {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        ctx.fill();
    }
};

// pun intended
Exploader = function (x, y) {
    this.x = x;
    this.y = y;

    this.startRadius = 24;

    this.time = 0;
    this.duration = 0.4;
    this.progress = 0;

    this.complete = false;
};

Exploader.prototype = {
    reset: function () {
        this.time = 0;
        this.progress = 0;
        this.complete = false;
    },
    update: function () {
        this.time = Math.min(this.duration, this.time + timeStep);
        this.progress = Ease.inBack(this.time, 0, 1, this.duration);

        this.complete = this.time === this.duration;
    },
    draw: function () {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
        ctx.fill();
    }
};

var particles = [],
    loader,
    exploader,
    phase = 0;

function initDrawingCanvas() {
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');

    createLoader();
    createExploader();
    createParticles();
}

function createLoader() {
    loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
}

function createExploader() {
    exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
}

function createParticles() {
    for (var i = 0; i < 128; i++) {
        var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
        var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

        particles.push(new Particle(p0, p1, p2, p3));
    }
}

function update() {

    switch (phase) {
        case 0:
            loader.progress += (1 / 45);
            break;
        case 1:
            exploader.update();
            break;
        case 2:
            particles.forEach(function (p) {
                p.update();
            });
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    switch (phase) {
        case 0:
            loader.draw();
            break;
        case 1:
            exploader.draw();
            break;
        case 2:
            particles.forEach(function (p) {
                p.draw();
            });
            break;
    }
}

window.onload = function () {
    initDrawingCanvas();
    requestAnimationFrame(loop);
};

function loop() {
    update();
    draw();

    if (phase === 0 && loader.complete) {
        phase = 1;
    } else if (phase === 1 && exploader.complete) {
        phase = 2;
    } else if (phase === 2 && checkParticlesComplete()) {
        // reset
        phase = 0;

        exploader.reset();
        particles.length = 0;
        createParticles();
    }

    requestAnimationFrame(loop);
}

function checkParticlesComplete() {
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].complete === false) return false;
    }
    return true;
}

// math and stuff

/**
 * easing equations from http://gizma.com/easing/
 * t = current time
 * b = start value
 * c = delta value
 * d = duration
 */
var Ease = {
    inCubic: function (t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
    },
    outCubic: function (t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    },
    inOutCubic: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    },
    inBack: function (t, b, c, d, s) {
        s = s || 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
};

function cubeBezier(p0, c0, c1, p1, t) {
    var p = new Point();
    var nt = (1 - t);

    p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
    p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

    return p;
}