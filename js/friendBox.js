function $id(id){
    return document.getElementById(id);
}
function closeFriendBox(e){
    // console.log(e.target.parentNode.parentNode);
    shop_background = document.getElementById("shop_background");
    $id("chooseArea").removeChild(e.target.parentNode.parentNode);
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].addEventListener("click",showfriendBox);
    }
}

function showfriendBox(e){
    console.log(e.target);
    //創建div_friendBox
    var div_friendBox = document.createElement("div");
    div_friendBox.id = "friend_LightBox";
    div_friendBox.className = "bg_friendBox";

        //創建img_bg(燈箱背景)
        var img_bg = document.createElement("img");
        img_bg.src = "images/friendBox.png";
        
        //創建div_close
        var div_close = document.createElement("div");
        div_close.id = "btn_friendBoxClose";    
            //創建img_close(關燈箱按鈕)
            var img_close = document.createElement("img");
            img_close.src = "images/close.png";
        
        //img_close塞進div_close    
        div_close.appendChild(img_close);

        //創建div_content
        var div_content = document.createElement("div");
        div_content.id = "content_friendBox";
            //創建input_search
            var input_search = document.createElement("input");
            input_search.type = "text";
            input_search.id = "searchBox";
            input_search.placeholder = "搜尋朋友ID";
            //創建div_chooseBox
            var div_chooseBox = document.createElement("div");
            div_chooseBox.id = "chooseBox";

                //創建form
                var form = document.createElement("form");

                    //進資料庫撈朋友名單，產生朋友列表<label>*N

                    // [暫代]創建label
                    var friendList = ["煞氣阿吉","霹靂嬌媧","理科太太","蔡小英"];
                    for(var i = 1;i<=4;i++){
                        var label = document.createElement("label");
                        label.for = "f_"+i;
                            //創建img_friend頭像
                            var img_friend = document.createElement("img");
                            img_friend.src = "images/gift.png";
                            //創建p_memName朋友暱稱
                            var p_memName = document.createElement("p");
                            p_memName.innerText = friendList[i-1];
                            //創建input_submit
                            var input_submit = document.createElement("input");
                            input_submit.type = "submit";
                            input_submit.id = "f_" +i;

                        //將img_friend、p_memNam、input_submit塞進label
                        label.appendChild(img_friend);
                        label.appendChild(p_memName);
                        label.appendChild(input_submit);

                        //將label塞進form
                        form.appendChild(label);
                    }
            //將form塞進div_chooseBox
            div_chooseBox.appendChild(form);

        //將input_search、div_chooseBox塞進div_content
        div_content.appendChild(input_search);
        div_content.appendChild(div_chooseBox);

    //將img_bg、div_close、div_content塞進div_friendBox
    div_friendBox.appendChild(img_bg);
    div_friendBox.appendChild(div_close);
    div_friendBox.appendChild(div_content);

    //將div_friendBox塞進chooseArea
    $id("chooseArea").appendChild(div_friendBox);

    $id("btn_friendBoxClose").onclick = closeFriendBox;
    // 暫時關閉送禮給朋友按鈕功能
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].removeEventListener("click",showfriendBox);
    }
}

function init(){
    var choose = document.getElementsByClassName("gift");
    for(var i = 0 ; i < choose.length ; i++){
        choose[i].addEventListener("click",showfriendBox);
    }
    
    
}

window.addEventListener("load",init,false);