function $id(id) {
    return document.getElementById(id);
}
var Today = new Date();
nowDay = Today.getFullYear() + "-0" + (Today.getMonth() + 1) + "-" + Today.getDate();
var productsInfoArr = new Array();
productsInfoArr = []; //產品資料陣列
function getProducts(cate, pageNumber = 1) { //撈出產品Ajax
    var xhr = new XMLHttpRequest(); // 建立xhr
    if (cate == 1) {
        cateName = "hatImages";
    } else {
        cateName = "clothesImages";
    }

    console.log(pageNumber);
    xhr.onload = function () {
        if (xhr.responseText == "null") { //失敗狀態
            console.log("沒有資料");

        } else {
            var productsArr = JSON.parse(xhr.responseText);
            productsInfo = productsArr.productssInfo;
            //[proNo||類別||名稱||價格||MJ||圖檔名||上價值||買過了嗎 , ..... , ..... ]

            var str = "";
            var page_a = "";
            pageTotal = Math.ceil(productsInfo.length / 5);
            console.log(pageTotal + "頁");
            if (innerWidth < 768) {
                start_i = 0;
                end_i = productsInfo.length;
            } else {
                start_i = pageNumber * 5 - 5;
                end_i = (pageNumber == pageTotal) ? productsInfo.length : (pageNumber) * 5;

            }
            console.log(end_i);
            for (var i = start_i; i < end_i; i++) { // i:產品數量
                for (var j = 0; j < 8; j++) { // j:撈回的資料欄位數量
                    productsInfoArr[i] = productsInfo[i].split("||", 8);
                    //productsInfoArr[i]:產品資料陣列;
                    //productsInfoArr[i][0]:產品編號; productsInfoArr[i][1]:產品類別 ; productsInfoArr[i][2]:產品名稱 ;
                }
                // 前端生成產品

                havingBtn_1 = `<input type="button" value="已擁有" class="btn_buy_having">`;
                havingBtn_2 = `<input type="button" value="已擁有" class="having">`;

                NohavingBtn_1 = `<input type="submit" value="買" class="btn_buy">`;
                NohavingBtn_2 = `<input type="submit" value="" class="btn_addToCart">`;

                str1 =
                    `<form action="cartAdd.php" target="nm_iframe" class="pro_form">    
                            
                        <input type="hidden" name="proNo" value="${productsInfoArr[i][0]}">
                        <input type="hidden" name="proCate" value="${productsInfoArr[i][1]}">
                        <input type="hidden" name="proName" value="${productsInfoArr[i][2]}">
                        <input type="hidden" name="price" value="${productsInfoArr[i][3]}">
                        <input type="hidden" name="img" value="${productsInfoArr[i][5]}">
                        <input type="hidden" name="mj" value="${productsInfoArr[i][4]}">
                        <!-- 商品項 -->
                        <div class="productItem">
                            <!-- 商品圖 -->
                            <div class="productImg">
                                <img class="click_wear" src="images/${cateName}/${productsInfoArr[i][5]}" id="hat_${productsInfoArr[i][0]}" 
                                     onclick="changeClothes('${productsInfoArr[i][5]}',${productsInfoArr[i][1]})">
                                <div class="rwd-proInfo">
                                    <h3>${productsInfoArr[i][2]}</h3>
                                    <!-- 魅力值 -->
                                    <div class="MJ">
                                        <span>MJ+</span>
                                        <span>${productsInfoArr[i][4]}</span>
                                    </div>
                                    <!-- 價格 -->
                                    <div class="cost">
                                        <img src="shop-images/coin.png">
                                        <span>${productsInfoArr[i][3]}</span>
                                    </div>`;
                // <input type="submit" value="買" class="btn_buy">

                str2 = `</div>
                            </div>
                            <div class="productInfo">
                                <!-- 商品名稱 -->
                                <h3>${productsInfoArr[i][2]}</h3>
                                <!-- 魅力值 -->
                                <div class="MJ">
                                    <span>MJ值+</span>
                                    <span>${productsInfoArr[i][4]}</span>
                                </div>
                                <!-- 價格 -->
                                <div class="cost">
                                    <img src="shop-images/coin.png"><span>${productsInfoArr[i][3]}</span>
                                </div>`;
                // <!-- 加入購物車 -->
                // <input type="submit" class="btn_addToCart" value="">
                str3 = `</div>
                        </div>
                        <iframe class="id_iframe" name="nm_iframe"></iframe>
                    </form>`;

                if (productsInfoArr[i][7] == "NEVER") { //沒買過
                    str += str1 + NohavingBtn_1 + str2 + NohavingBtn_2 + str3;
                } else { //已買過
                    str += str1 + havingBtn_1 + str2 + havingBtn_2 + str3;
                }


            }

            for (var i = 1; i <= pageTotal; i++) {
                if (i == pageNumber) {
                    page_a += `<span onclick="getProducts(${productsInfoArr[i][1]},${i})" style="color:white;background:rgba(200,78,106,1)" class="page_span">${i}</span>`;
                } else {
                    page_a += `<span onclick="getProducts(${productsInfoArr[i][1]},${i})" class="page_span">${i}</span>`;
                }

            }
            $id("prductsSection").innerHTML = str;
            $id("pages").innerHTML = page_a;

        }

        if (cate == '1') {
            $id("hatTab").classList.add("onclick");
            $id("clothesTab").classList.remove("onclick");
        } else {
            $id("clothesTab").classList.add("onclick");
            $id("hatTab").classList.remove("onclick");
        }
        productImg = document.getElementsByClassName("click_wear");
        for (var i = 0; i < productImg.length; i++) {
            if (innerWidth < 768) {
                productImg[i].addEventListener("click", showInfo); //link:changeClothes.js
            }
        }
    };
    var showId = document.getElementById("showId");
    url = `getProducts.php?cate=${cate}&mem=${showId.value}`;
    xhr.open("get", url, true);
    xhr.send(null);


}
//game
btnG = document.getElementById('btnloto');

var timeId;
var speed = 50;
var steps = rand(13, 25);
var stepNum = 0;
var restep;



function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getCoin(data) {
    var btnG = document.getElementById('btnloto');
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 1) {
            btnG.innerText = '已領取$' + money;
            storage.setItem("last_play", nowDay);

        }

    };
    xhr.open("Post", "getCoin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("data=" + JSON.stringify(data));

}

function ooxx() {

    document.querySelector('.c_' + restep).innerText = '$' + money;
    data = {
        money: money,
        nowDay: nowDay,
        memNo: storage.getItem("memNo"),
    }
    getCoin(data);
}

function loto() {
    var btnG = document.getElementById('btnloto');
    btnG.disabled = true;
    btnG.style.backgroundColor = '#aaa';
    btnG.style.boxShadow = '0px 4px 0px #555';
    btnG.innerText = '本日已領';
    stepNum++;
    speed += 15;
    if (stepNum > 12) {
        if (stepNum % 12 == 0) {
            restep = 12;
        } else if (stepNum % 12 == 1) {
            restep = 1;
            document.querySelector('.c_12').classList.toggle('highlight');
        } else {
            restep = stepNum % 12;
        }
    } else {
        restep = stepNum;
    }

    if (stepNum == steps) {
        // console.log('1');

        ooxx();

    } else {
        timerId = setTimeout(loto, speed);
        // console.log('2');
    }
    document.querySelector('.c_' + restep).classList.toggle('highlight');

    if (restep > 1) {
        var b = restep - 1;
        document.querySelector('.c_' + b).classList.toggle('highlight');
        // console.log('3');
    }



}
// function restart(){
//     if( btnG.innerText == '搖獎'){
//         btnG.innerText='重新抽獎';
//     }else{
//         for(i=1;i<=12;i++){
//             document.querySelector('.c_'+i).classList.remove('highlight');
//             document.querySelector('.c_'+i).innerText='';
//         }
//         speed = 50;
//         money = rand(10, 10000) * 100;
//         steps = rand(13,35);
//         stepNum = 0;
//     }
// }


