function changeClothes(e){
    var clothes = e.target.id;
    console.log(clothes);
    $id("model_hat").src = "shop-images/" + clothes +".png";

    // 更衣動畫
    TweenMax.fromTo('#model_hat', 1.5, {
        scale: .6,
    }, {
        scale: 1,
        ease: Elastic.easeOut,
        });
}

function removeInfo(e){  //移除產品訊息
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    //商品圖透明度恢復
    var img = document.getElementsByClassName("click_wear");
    for(var i=0;i<img.length;i++){
        img[i].style.opacity = 1;
        img[i].parentNode.style.borderColor = "transparent";
        // console.log(img[i].parentNode);
    }
    check=false;
}
var check=false;
function showInfo(e){

    // [重置]若有其他格產生資訊，先把其他格的資訊關掉
    if(check==true){
        var proInfo =  document.getElementsByClassName("rwd-proInfo")[0]; 
        proInfo.parentNode.removeChild(proInfo);
    }

    // [重置]先將外框全部拿掉
    var img = document.getElementsByClassName("click_wear");
    for(var i=0;i<img.length;i++){
        img[i].parentNode.style.borderColor = "transparent";
    }



//動態新增產品資訊//
    // 創建rwd-proInfo父層
    var div_proInfo = document.createElement("div");
    div_proInfo.className = "rwd-proInfo";
        // 創建h3
        var h3 = document.createElement("h3");
        h3.innerText = "武士帽";
        // 創建div_MJ
        var div_MJ = document.createElement("div");
        div_MJ.className = "MJ";
            // 創建span*2
            var span_MJtitle = document.createElement("span");
            span_MJtitle.innerText = "MaJi值+";
            var span_MJ = document.createElement("span");
            span_MJ.innerText = "150";
        // span*2塞進div_MJ
        div_MJ.appendChild(span_MJtitle);
        div_MJ.appendChild(span_MJ);

        // 創建div_cost
        var div_cost = document.createElement("div");
        div_cost.className = "cost";
            // 創建img
            var img_cost = document.createElement("img");
            img_cost.src = "shop-images/coin.png";
            // 創建span
            var span_cost = document.createElement("span");
            span_cost.innerText = "90";
        // 將img、span塞進div_cost
        div_cost.appendChild(img_cost);
        div_cost.appendChild(span_cost);

        //創建input
        var input_buy = document.createElement("input");
        input_buy.type = "button";
        input_buy.value = "買";
        input_buy.id = "btn_buy";
        

    //將h3、div_MJ、div_cost、input塞進div_proInfo
    div_proInfo.appendChild(h3);
    div_proInfo.appendChild(div_MJ);
    div_proInfo.appendChild(div_cost);
    div_proInfo.appendChild(input_buy);

    //將div_proInfo塞進#productImg
    e.target.parentNode.appendChild(div_proInfo);
    
    //商品圖透明度恢復
    var img = document.getElementsByClassName("click_wear");
    for(var i=0;i<img.length;i++){
        img[i].style.opacity = 1;
    }

//點圖視覺呈現
    //商品圖半透明
    e.target.style.opacity = 0.2;
    //商品加框
    e.target.parentNode.style.borderColor = "rgba(240,92,121,1)";


    //判斷目前是否已有proInfo
    check = true;

    //註冊事件聆聽:購買按鈕按了要關掉產品資訊
    $id("btn_buy").addEventListener("click",removeInfo);
}