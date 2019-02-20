function $id(id) {
    return document.getElementById(id);
}

function searchAct(actValue) {
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
         if( xhr.responseText == "null" ){
            alert ('xhr有錯誤喔');
         }else{
            //寫入
            // var comments= JSON.parse(xhr.responseText);
            alert (xhr.responseText);

         }
    }


    xhr.open("post", "back_toDB.php", true);
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