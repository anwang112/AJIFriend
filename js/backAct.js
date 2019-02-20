function $id(id) {
    return document.getElementById(id);
}
function clearAll(){
    var clearTarget = $id('clearTarget');
    if( clearTarget.hasChildNodes){
        divs = document.getElementsByClassName('dddd');
        console.log(divs )
        for(var i=0;i<document.getElementsByClassName('dddd').length;i++){
            divs[i].remove();
            console.log('dddd')
        }
    }
}

function writeInTo(actObj){
    // public $no;
    // public $memNo;
    // public $title;
    // public $loc;
    // public $begin;
    // public $end;
    // public $actIntro;
    // public $img;
    // public $memName;
    var maintable = $id('maintable');
    var txt = `
    <thead>
    <tr>
        <td colspan="2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            活動類型
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">頭飾</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                </td>
                <td colspan="2">
                    <button id="holdAct01" type="button" class="btn btn-secondary">新增活動</button>
                </td>
                <td colspan="3">
                    <div  class="input-group mb-3">
                        <input id="act_search_txt" type="text" class="form-control" placeholder="" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button id="act_search_btn" class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>

                </td>
            </tr>
            <tr>
                <th scope="col">活動編號</th>
                <th scope="col">發起人</th>
                <th scope="col">活動名稱</th>
                <th scope="col">活動地點</th>
                <th scope="col">活動圖片</th>
                <th scope="col">活動時間</th>
            </tr>
        </thead>
        <tbody id="clearTarget" class="dddd">
        <tr>
            <th scope="row">
                ${actObj.no}<br> 
                <button id="act_delet_btn${actObj.no}" type="button" class="btn btn-danger btn-sm">刪除</button>
            </th>
            <td>發起人${actObj.no}</td> 
            <td>活動名稱//${actObj.title}</td>
            <td>地點${actObj.loc}</td>
            <td>
                <img src="../images/${actObj.img}" style="width:100px;" alt="活動圖片">
            </td>
            <td>
                ${actObj.begin.substr(0,10)}至${actObj.end.substr(0,10)}
            </td>
        </tr>
        </tbody>
        <a href="backAct.php">重新搜尋</a>
    `;
    maintable.innerHTML = txt ;

}

function searchAct(actValue) {
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
         if( xhr.responseText == "null" ){
            alert ('xhr有錯誤喔');
         }else{
            var actObjback = JSON.parse(xhr.responseText);
            alert (actObjback);
            clearAll();
            writeInTo(actObjback);
            //清空原本的欄位 
         }
    }


    xhr.open("post", "../backstage/backAct_toDB.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var actObj = {
        actValue : actValue ,
    };

    xhr.send( "actObj=" + JSON.stringify(actObj));
}

window.addEventListener('load',function(){

    var act_search_txt = $id('act_search_txt');
    var act_search_btn = $id('act_search_btn');

    act_search_btn.addEventListener('click',function(){
        value = act_search_txt.value;
        alert('value:'+ value);
        searchAct(value);
    },false);

},false);