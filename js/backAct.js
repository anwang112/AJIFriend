function $id(id) {
    return document.getElementById(id);
}
function clearAll() {
    var clearTarget = $id('clearTarget');
    if (clearTarget.hasChildNodes) {
        divs = document.getElementsByClassName('dddd');
        console.log(divs)
        for (var i = 0; i < document.getElementsByClassName('dddd').length; i++) {
            divs[i].remove();
            console.log('dddd')
        }
    }
}

function writeInTo(actObj) {
    // public $no;
    // public $memNo;
    // public $title;
    // public $loc;
    // public $begin;
    // public $end;
    // public $actIntro;
    // public $img;
    // public $memName;
    // alert(actObj.img);
    var maintable = $id('maintable');
    var txt = `
    <thead>
        <tr>
            <th scope="col">活動編號</th>
            <th scope="col">發起人</th>
            <th scope="col">活動名稱</th>
            <th scope="col">活動地點</th>
            <th scope="col">活動圖片</th>
            <th scope="col">活動時間</th>
        </tr>
    </thead>
    </thead>
    <tbody id="clearTarget" class="dddd">
        <tr>
            <th scope="row">
                ${actObj.no}<br> 
                <input type="hidden" value="${actObj.no}">
            </th>
            <td>${actObj.memName}</td> 
            <td>${actObj.title}</td>
            <td>${actObj.loc}</td>
            <td>
                <img src="../images/${actObj.img}" style="width:100px;" alt="活動圖片">
            </td>
            <td>
                ${actObj.begin.substr(0, 10)}<br>至<br>${actObj.end.substr(0, 10)}
            </td>
            <td>
                <button id="act_delet_btn${actObj.no}" type="button" class="btn btn-danger btn-sm act_delet_btn">刪除</button>
            </td>
        </tr>
    </tbody>
        <a href="backAct.php">重新搜尋</a>
    `;
    maintable.innerHTML = txt;
    var act_delet_btn = document.getElementsByClassName('act_delet_btn');
    for (var i = 0; i < act_delet_btn.length; i++) {
        act_delet_btn[i].addEventListener('click', function () {
            var actNo = this.nextSibling.nextSibling.value;
            var target = this.parentNode.parentNode;
            // alert('actNo:'+actNo);
            deletAct(actNo, target);
        }, false);
    }
}

function writeInTo2(txt_arr) {
    // 0: "29"
    // 1: "1"
    // 2: "AAA"
    // 3: " AAA"
    // 4: "act_number02.svg"
    // 5: "2019-02-21 00:00:00.000000"
    // 6: "2019-02-20 00:00:00.000000"
    // 7: "AAA"
    // 8: "0"
    // 9: "1"
    // 10: "agi01"
    // 11: "111111"
    // 12: "agi01"
    // 13: "1"
    // 14: "135"
    txt = '';
    txt += `
    <thead>
        <tr>
            <th scope="col">活動編號</th>
            <th scope="col">發起人</th>
            <th scope="col">活動名稱</th>
            <th scope="col">活動地點</th>
            <th scope="col">活動圖片</th>
            <th scope="col">活動時間</th>
        </tr>
    </thead>
    `;
    for (var i = 0; i < txt_arr.length; i++) {
        //拿掉按鈕                   
        //<button id="act_delet_btn ${txt_arr[i][0]}" type="button" class="btn btn-danger btn-sm act_delet_btn2">復原</button>
        txt += `
        <tbody id="clearTarget" class="dddd">
            <tr>
                <th scope="row">
                    <span>${txt_arr[i][0]}</span>
                    <button id="act_delet_btn ${txt_arr[i][0]}" type="button" class="btn btn-danger btn-sm act_rebtn ml-4">復原</button> 

                    <input type="hidden" value=" ${txt_arr[i][0]}">
                </th>
                <td>${txt_arr[i][12]}</td> 
                <td>${txt_arr[i][2]}</td>
                <td>${txt_arr[i][3]}</td>
                <td>
                    <img src="../images/${txt_arr[i][4]}" style="width:100px;" alt="活動圖片">
                </td>
                <td>
                    ${txt_arr[i][5].substr(0, 10)}<br>至<br>${txt_arr[i][5].substr(0, 10)}
                </td>
            </tr>
        </tbody>
        `;
    }
    txt += `
        <a href="backAct.php">返回</a>
    `;
    var maintable = $id('maintable');
    maintable.innerHTML = txt;

    var act_rebtn = document.getElementsByClassName('act_rebtn');
    // alert(act_rebtn );    
    for (var i = 0; i < act_rebtn.length; i++) {
        act_rebtn[i].addEventListener('click', function () {
            var actNo = this.nextSibling.nextSibling.value;
            var target = this.parentNode.parentNode;
            // alert('actNo:'+actNo);
            reAct(actNo, target);
        }, false);
    }
}


function searchAct(actValue) { // 搜尋

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == "null") {
            alert('xhr有錯誤喔');
        } else {
            var actObjback = JSON.parse(xhr.responseText);
            // alert (actObjback);
            console.log(actObjback);
            if (actObjback.no != null) {
                // alert("有");
                clearAll();
                writeInTo(actObjback);
            } else {
                alert("查無此資料");
            }
        }
    }

    xhr.open("post", "../backstage/backAct_toDB_search.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var actObj = {
        actValue: actValue,
    };
    console.log(actObj)
    xhr.send("actObj=" + JSON.stringify(actObj));
}

function deletAct(actNo, target) { //刪除
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == "null") {
            alert('xhr有錯誤喔');
        } else{
            // var actObjback = JSON.parse(xhr.responseText);
            //  alert (xhr.responseText);
            target.style.display = "none";
            // alert("成功刪除");
            location.reload();
        }
    }

    xhr.open("post", "../backstage/backAct_toDB_delet.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var actDele = {
        actNo: actNo,
    };

    xhr.send("actDele=" + JSON.stringify(actDele));
}

function reAct(actNo, target) { //復原刪除
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == "null") {
            alert('xhr有錯誤喔');
        } else {
            // var actObjback = JSON.parse(xhr.responseText);
            //  alert (xhr.responseText);
            target.style.display = "none";
        }
    }

    xhr.open("post", "../backstage/backAct_toDB_actRe.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var actRe = {
        actNo: actNo,
    };

    xhr.send("actRe=" + JSON.stringify(actRe));
}

function checkDeleAct() { //查看刪除
    // alert('111');
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.responseText == "null") {
            alert('xhr有錯誤喔');
        } else {
            // alert(xhr.responseText);// OK

            if (xhr.responseText == '') {
                txt = `
                <a href="backAct.php">返回</a>
                `;
                var maintable = $id('maintable');
                maintable.innerHTML = txt;
            } else {
                console.log(xhr.responseText);
                // alert(xhr.responseText);
                var aaR_Obj = JSON.parse(xhr.responseText);
                console.log(aaR_Obj.arr);
                console.log(aaR_Obj);
                var txt_arr = [];
                for (var i = 0; i < aaR_Obj.arr.length; i++) {
                    for (var j = 0; j < 15; j++) { // j:撈回的資料欄位數量
                        txt_arr[i] = aaR_Obj.arr[i].split(",", 15);
                    }
                }
                // alert(txt_arr);
                console.log(txt_arr);
                // alert('xhr.responseText:'+xhr.responseText);
                writeInTo2(txt_arr);
            }
        }
    }

    xhr.open("post", "../backstage/backAct_toDB_chechDelet.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var actObjDelCheck = {
        actAll: 1,
    };

    xhr.send("actObjDelCheck=" + JSON.stringify(actObjDelCheck));


}


window.addEventListener('load', function () {

    var act_search_txt = $id('act_search_txt');
    var act_search_btn = $id('act_search_btn');

    act_search_btn.addEventListener('click', function () {
        value = act_search_txt.value;
        // alert('value:'+ value);
        searchAct(value);
    }, false);

    act_search_txt.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {//enter代碼
            value = act_search_txt.value;
            // alert('value:'+ value);
            searchAct(value);
        }
    }, false);

    var act_delet_btn = document.getElementsByClassName('act_delet_btn');
    for (var i = 0; i < act_delet_btn.length; i++) {

        act_delet_btn[i].addEventListener('click', function () {
            var actNo = this.nextSibling.nextSibling.value;
            var target = this.parentNode.parentNode;
            // alert('actNo:' + actNo);
            // alert('target :' + target);
            deletAct(actNo, target);
        }, false);
    }

    var holdAct01 = $id('holdAct01');
    holdAct01.addEventListener('click', function () {
        lightbox_holdact.style.cssText = "display:flex;z-index:10;opacity:1";
        lightbox_holdact_info.style.cssText = "display:block;z-index:10;opacity:1";

        lightbox_holdact_info.addEventListener('click', function (e) {
            e.stopPropagation();
        }, false);
        lightbox_holdact.addEventListener('click', function () {
            lightbox_holdact.style.cssText = "display:none;z-index:-1;opacity:0";
            lightbox_holdact_info.style.cssText = "display:none;z-index:-1;opacity:0";
        }, false);
    }, false);

    var holdAct02 = $id('holdAct02');
    holdAct02.addEventListener('click', function () {
        // alert('1');
        //1.清空內容
        clearAll();
        //2.呼叫ajax -> 撈內容 塞內容
        // var tt = 100;
        checkDeleAct();
    }, false);

}, false);
