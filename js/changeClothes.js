function changeClothes(e){
    var clothes = e.target.id;
    console.log("changeClothes:"+clothes);
    $id("model_hat").src = "shop-images/" + clothes +".png";

    // 更衣動畫

    var  tl =  new TimelineMax({
        repeat: 0,
        // yoyo: true
    });
    
    
     tl.add(TweenMax.fromTo('#model_hat', 1.5, {
        scale: .6,
    }, {
        scale: 1,
        ease: Elastic.easeOut,
    }))
    tl.add(TweenMax.fromTo('#showModel', 1.5, {
        y:-45,
        scale: .5,
    }, {
        y:0,
        scale: 1,
        ease: Power2.easeIn
    }))

    
}

function removeInfo(e){  //移除產品訊息
    // e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    //商品圖透明度恢復
    // console.log(e.target.parentNode.parentNode.childNodes[1]);
    e.target.parentNode.style.display = "none";
    e.target.parentNode.style.zIndex = "-10";

    var taImg = e.target.parentNode.parentNode.childNodes[1];
    taImg.removeEventListener("click",showInfo);
    



    var imgs = document.getElementsByClassName("click_wear");
    for(var i=0;i<imgs.length;i++){
        // imgs[i].style.opacity = 1;
        imgs[i].parentNode.style.borderColor = "transparent";
        
        // console.log(img[i].parentNode);
    }
    e.target.parentNode.parentNode.childNodes[1].style.opacity = ".2";
    check=false;

}
var check=false;
// function showInfo(e){

//     console.log(e.target);

//     // [重置]若有其他格產生資訊，先把其他格的資訊關掉
//     if(check==true){
//         var proInfo =  document.getElementsByClassName("rwd-proInfo")[0]; 
//         proInfo.parentNode.removeChild(proInfo);
//     }

//     // [重置]先將外框全部拿掉
//     var img = document.getElementsByClassName("click_wear");
//     for(var i=0;i<img.length;i++){
//         img[i].parentNode.style.borderColor = "transparent";
//     }



// //動態新增產品資訊//
//     // 創建rwd-proInfo父層
//     var div_proInfo = document.createElement("div");
//     div_proInfo.className = "rwd-proInfo";
//         // 創建h3
//         var h3 = document.createElement("h3");
//         // h3.innerText = "武士帽";
//         // 創建div_MJ
//         var div_MJ = document.createElement("div");
//         div_MJ.className = "MJ";
//             // 創建span*2
//             var span_MJtitle = document.createElement("span");
//             span_MJtitle.innerText = "MJ值+";
//             var span_MJ = document.createElement("span");
//             // span_MJ.innerText = "150";
//         // span*2塞進div_MJ
//         div_MJ.appendChild(span_MJtitle);
//         div_MJ.appendChild(span_MJ);

//         // 創建div_cost
//         var div_cost = document.createElement("div");
//         div_cost.className = "cost";
//             // 創建img
//             var img_cost = document.createElement("img");
//             img_cost.src = "shop-images/coin.png";
//             // 創建span
//             var span_cost = document.createElement("span");
//             // span_cost.innerText = "90";
//         // 將img、span塞進div_cost
//         div_cost.appendChild(img_cost);
//         div_cost.appendChild(span_cost);

//         //創建input
//         var input_buy = document.createElement("input");
//         input_buy.type = "submit";
//         input_buy.value = "買";
//         input_buy.id = "btn_buy";
        

//     //將h3、div_MJ、div_cost、input塞進div_proInfo
//     div_proInfo.appendChild(h3);
//     div_proInfo.appendChild(div_MJ);
//     div_proInfo.appendChild(div_cost);
//     div_proInfo.appendChild(input_buy);

//     //將div_proInfo塞進#productImg
//     e.target.parentNode.appendChild(div_proInfo);


//     //new XML
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange=function (){
//         if( xhr.readyState == 4){
//         if( xhr.status == 200 ){
//             //動作
//             h3.innerText = "武士帽";
//             span_MJ.innerText = "150";
//             span_cost.innerText = "90";


//         }else{
//             alert( xhr.status );
//         }
//         }
//     }
//     //結束 XML

//     var url = "BearMJ_shop_addcart.php?memId=" + document.getElementById("memId").value;
//     xhr.open("Get", url, true);
//     xhr.send( null );


    
//     //商品圖透明度恢復
//     var img = document.getElementsByClassName("click_wear");
//     for(var i=0;i<img.length;i++){
//         img[i].style.opacity = 1;
//     }

// //點圖視覺呈現
//     //商品圖半透明
//     e.target.style.opacity = 0.2;
//     //商品加框
//     e.target.parentNode.style.borderColor = "rgba(240,92,121,1)";


//     //判斷目前是否已有proInfo
//     check = true;

//     //註冊事件聆聽:購買按鈕按了要關掉產品資訊
//     $id("btn_buy").addEventListener("click",removeInfo);
// }

function showInfo(e){


    // [重置]先將外框全部拿掉
    var img = document.getElementsByClassName("click_wear");
    for(var i=0;i<img.length;i++){
        img[i].parentNode.style.borderColor = "transparent";
    }
    // [重置]若有其他格產生資訊，先把其他格的資訊關掉
    if(check==true){
        var proInfo =  document.getElementsByClassName("rwd-proInfo"); 
        var click_wear = document.getElementsByClassName("click_wear");
        for(var i=0;i<proInfo.length;i++){
            proInfo[i].style.display = "none";
            click_wear[i].style.opacity = "1";
            
        }
    }
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.style.display = "block";
    e.target.nextElementSibling.style.zIndex = "1";
    e.target.style.opacity = ".2";
    //商品加框
    e.target.parentNode.style.borderColor = "rgba(240,92,121,1)";

    //判斷目前是否已有proInfo
    check = true;

    //註冊事件聆聽:購買按鈕按了要關掉產品資訊
    var btn_buy = document.getElementsByClassName("btn_buy");
    for(var i=0; i<btn_buy.length;i++){
        btn_buy[i].addEventListener("click",removeInfo);
    }
    
}
