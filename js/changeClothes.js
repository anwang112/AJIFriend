function changeClothes(no,cate){
    // var clothes = e.target.id;
    // var wearNo = clothes.substring(4,clothes.length);
    // console.log(wearNo);

    var hat_div = document.getElementsByClassName("roleHat")[0];
    var clothes_div = document.getElementsByClassName("roleClothes")[0];
    
    if(cate==1){
        hat_div.style.backgroundImage = `url("images/hatImages/hat${no}.png")`;

    }else{
        clothes_div.style.backgroundImage = `url("images/hatImages/clothes${no}.png")`;

    }

    // 更衣動畫



    
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
