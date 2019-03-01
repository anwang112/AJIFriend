
    tEye = 1;
    tBody = 1;
    tColor = 'aaaaaa';
    tHat = 'hat1.png';
    tClothes = 'clothes1.png';
    totalMatch = 55;
    mem='';
    //init role type
    m1 = document.getElementById('m1');
    m2 = document.getElementById('m2');
    m3 = document.getElementById('m3');
    m4 = document.getElementById('m4');
    m5 = document.getElementById('m5');
    m6 = document.getElementById('m6');
    

function koko(){
    profile={
        memNo: 55,
    }
    getTeam(profile);
};
koko();

function lien(){
    profile={
        memNo: 3,
    }
    getTeam2(profile);
};
lien();
function an(){
    profile={
        memNo: 2,
    }
    getTeam3(profile);
};
an();
function ga(){
    profile={
        memNo: 1,
    }
    getTeam4(profile);
};
ga();
function hacky(){
    profile={
        memNo: 13,
    }
    getTeam5(profile);
};
hacky();
function ron(){
    profile={
        memNo: 22,
    }
    getTeam6(profile);
};
ron();

    function getTeam(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m1, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}

    function getTeam2(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            ooxxGetRole( m2, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}
function getTeam3(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m3, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}
function getTeam4(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m4, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}
function getTeam(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m1, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}
function getTeam5(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m5, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}
function getTeam6(profile) {
    var xhr = new XMLHttpRequest();
    console.log(xhr.responseText);
    xhr.onload = function () {

            var info = JSON.parse(xhr.responseText);

            //角色
            tEye = info.eye;
            tBody = info.body;
            tColor = info.color;
            tHat = info.hat;
            tClothes = info.clothes;
        
            //test write
            
            ooxxGetRole( m6, {
                animal: tBody,
                color: tColor,
                eyes: tEye,
                hat: tHat,
                clothes: tClothes,
            });

        
    };
    xhr.open("Post", "getRole.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("profile=" + JSON.stringify(profile));
}

    $('.memInfo').hide();
    $('.mWrap').mouseover(function(){
        $(this).children(".memRole").css({
            'transform':'translateY(-30px)',
        })

        
    })
    $('.mWrap').mouseout(function(){
        $(this).children(".memRole").css({
            'transform':'translateY(0px)',
        })
    })
    $('.mWrap').click(function(){
        $(this).children(".memInfo").show();
        $('.mWrap').not(this).children(".memInfo").hide();
    })
    $('#showInfo1').click(function(){
        profile = {
            memId: 'KOKO',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })
    $('#showInfo2').click(function(){
        profile = {
            memId: 'lien',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })
    $('#showInfo3').click(function(){
        profile = {
            memId: 'an',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })
    $('#showInfo4').click(function(){
        profile = {
            memId: 'ga',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })
    $('#showInfo5').click(function(){
        profile = {
            memId: 'hacky',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })
    $('#showInfo6').click(function(){
        profile = {
            memId: 'RonRon',
            loginMemNo:storage.getItem("memNo"),
        };
        searchMem(profile);
    })

