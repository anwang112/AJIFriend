function $id(id){
    return document.getElementById(id);
}
function closeLightBox(e){
    // console.log(e.target.parentNode.parentNode);
    $id("shop_background");
    shop_background.removeChild(e.target.parentNode.parentNode);
    for (var i = 0; i<productItem.length; i++) {
        productItem[i].addEventListener("click",showLightBox);
    }
}
//產品燈箱
function showLightBox(){
    // alert(0);

    // 創建父層#proLightBox
    var div = document.createElement("div");
    div.id = "proLightBox";

        // 創建div_close
        var div_close = document.createElement("div");
        div_close.id = "btn_close";
            // 創建img
            var img_close = document.createElement("img");
            img_close.src = "shop-images/close.png";
        // .productImg & img 塞進畫面
        div_close.appendChild(img_close);
        div.appendChild(div_close);

        // 創建.productImg
        var div_img = document.createElement("div");
        div_img.className = "productImg";
            // 創建img
            var img = document.createElement("img");
            img.src = "shop-images/products_01.png";
        // .productImg & img 塞進畫面
        div_img.appendChild(img);
        div.appendChild(div_img);

    // #proLightBox塞進畫面
    var wrap = document.getElementById("shop_background");
    var chooseId = document.getElementById("chooseId");
    wrap.insertBefore(div,chooseId);
    

    // 商品資訊
    var div_proInfo = document.createElement("div");
    div_proInfo.className = "productInfo";
        // 創建h3
        var h3 = document.createElement("h3");
        h3.innerText = "鐮刀死神";
        // 創建div_MJ
        var div_MJ = document.createElement("div");
        div_MJ.className = "MJ";
            // 創建span*2
            var span_MJtitle = document.createElement("span");
            span_MJtitle.innerText = "MJ值+";
            var span_MJ = document.createElement("span");
            span_MJ.innerText = "50";
        // span*2塞進div_MJ
        div_MJ.appendChild(span_MJtitle);
        div_MJ.appendChild(span_MJ);

        // 創建div_cost
        var div_cost = document.createElement("div");
        div_cost.className = "cost";
            // 創建img
            var img_cost = document.createElement("img");
            img_cost.src = "shop-images/coin.png";
            // 創建p
            var p_cost = document.createElement("p");
            p_cost.innerText = "30";
        // span*2塞進div_MJ
        div_cost.appendChild(img_cost);
        div_cost.appendChild(p_cost);

        // 創建div_btns
        var div_btns = document.createElement("div");
        div_btns.className = "lightBox_btns";
            // 創建div_addToCart
            var div_addToCart = document.createElement("div");
            div_addToCart.className = "btn_addToCart";
                // 創建img
                var img_addToCart = document.createElement("img");
                img_addToCart.src = "shop-images/cart.png";
            // img塞進div_addToCart
            div_addToCart.appendChild(img_addToCart);

            // 創建div_wear
            var div_wear = document.createElement("div");
            div_wear.className = "btn_wear";
                // 創建img
                var img_wear = document.createElement("img");
                img_wear.src = "shop-images/cart.png";
            // img塞進div_wear
            div_wear.appendChild(img_wear);

        // div*2塞進div_btns
        div_btns.appendChild(div_addToCart);
        div_btns.appendChild(div_wear);    

    // h3、div_MJ、div_cost、div_btns
    div_proInfo.appendChild(h3);
    div_proInfo.appendChild(div_MJ);
    div_proInfo.appendChild(div_cost);
    div_proInfo.appendChild(div_btns);

    div.appendChild(div_proInfo);

    document.getElementById("btn_close").onclick = closeLightBox;
    for (var i = 0; i<productItem.length; i++) {
        productItem[i].removeEventListener("click",showLightBox);
        console.log(9);
    }
}
