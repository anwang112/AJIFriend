<?php
session_start();

?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>造型商城</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/shop-style.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="css/match2.css">
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/friendBox.js"></script>
    <script src="js/changeClothes.js"></script>
    <script src="js/commonPart.js"></script>
    <script src="js/shop.js"></script>
    <link rel="stylesheet" href="css/chatStyle_final.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
</head>
<body>	
    <script>
    
    head_html();
    // sendForm();

    </script>
    

    <div id="shop_background" class="background">

        <script>
            if(innerWidth<768){
                $id("shop_background").style.height =window.screen.height +"px";
            }else{ 
                $id("shop_background").style.height =window.innerHeight +"px";
            }
        
        </script>
                        
        
            <div id="chooseId">
                
                <!-- 試穿預視 -->
                <div id="showModel" class="roleBox">
                    
                </div>
                <?php
                    echo '<script>
                    ooxxGetRole($id("showModel"), {
                        animal: 1,
                        color:"24A4C0",
                        eyes:1,
                        hat:0,
                        clothes:0,
                        });
                        
                    </script>'
                ?>
                <!-- 前往購物車 -->
                <div id="rwd_showCart" class="btn">
                    <a >
                        <img src="shop-images/cart.png">
                    </a>
                </div>

                <!-- 餘額顯示 -->
                <div id="rwd_showCoin">
                    <img src="shop-images/coin.png">
                    <span><?php if(isset($_SESSION["memId"])){echo $_SESSION["mCoin"];}?></span>
                </div>

                <div id="chooseArea">
                    <!-- 自己穿 -->
                    <!-- <div id="choose-me" class="btn_chooseModel"> 
                        <img src="shop-images/gift.png">
                        <p>自己穿</p>
                    </div> -->
            
                    <!-- 試穿角色暱稱顯示區塊 -->
                    <span id="showName"class="gift"><?php if(isset($_SESSION["memId"])){echo $_SESSION["mName"];}else{echo '請先登入';} ?></span>
                    <input type="hidden" id="showId" value="<?php if(isset($_SESSION["memId"])){echo $_SESSION["memId"];}?>">
                        
                    
            
                    <!-- 選朋友來試穿(送禮) -->
                    <div class="pc_choose-friend btn gift" >
                        <p class="wearChange">麻吉</p>
                    </div>



                </div>
                

                <!-- 選擇送禮對象燈箱 -->
                <div id="friend_LightBox" class="bg_friendBox">
                    <img src="shop-images/friendBox.png">
                    <div id="btn_friendBoxClose">
                        <img src="shop-images/close.png">
                    </div>
                    <div id="content_friendBox">
                        <input type="text" id="searchBox" placeholder="搜尋朋友ID">
                        <div id="chooseBox">

                        </div>
                    </div>
                </div>
        
            </div>  
        
        
            <div id="productBlock">
                <!-- 種類選擇Tab -->
                <div class="tab-chooseCloth" id="hatTab" onclick="getProducts(1,1)">頭飾</div>
                <div class="tab-chooseCloth" id="clothesTab" onclick="getProducts(2,1)">衣服</div>
                
                <!-- 商品選擇 -->
                <div id="productsArea">
                    <div id="actionPanel">
                        <!-- 選朋友來試穿(送禮) -->
                        <div class="choose-friend gift btn">
                            <div class="btn_chooseModel" >
                                <span class="wearChange">麻吉</span>
                            </div>

                        </div>
                            <!-- 試穿角色暱稱顯示區塊 -->
                            <p id="rwd-showName" class="gift btn">
                                <?php if(isset($_SESSION["memId"])){echo $_SESSION["mName"];}else{echo '請先登入';} ?>
                            </p>
                        <!-- 前往購物車 -->
                        <div id="showCart" class="btn">
                            <a>
                                <img src="shop-images/cart.png">
                                <p>購物車</p>
                            </a>
                        </div>

                        <!-- 餘額顯示 -->
                        <div id="showCoin">
                            <img src="shop-images/coin.png">
                            <span><?php if(isset($_SESSION["memId"])){ echo $_SESSION["mCoin"];}?></span>
                        </div>

                    </div>

                    <!-- 商品區 -->
                    <div id="productsShow">
                        <section class="regular slider" id="prductsSection">
                        </section>
                        <div id="pages"></div>
                    </div>
                </div>

            </div> 
            <div id="btn_openGame">
                <img src="images/wallet2.png" alt="">
                <span></span>
            </div>
            <!-- 搖獎遊戲 -->
            <div class="gameMask"></div>
            <div class="game">
            <div class="gameClose"></div>
            <table>
                <tr>
                    <td id="column" class="c_1">
                        <img src="images/g1.svg" alt="">
                    </td>
                    <td id="column" class="c_2">
                        <img src="images/g2.svg" alt="">
                    </td>
                    <td id="column" class="c_3">
                        <img src="images/g3.svg" alt="">
                    </td>
                    <td id="column" class="c_4">
                        <img src="images/g4.svg" alt="">
                    </td>
                </tr>
                <tr>
                    <td id="column" class="c_12">
                        <img src="images/g4.svg" alt="">
                    </td>
                    <td colspan="2" rowspan="2" class="gameBtnWrap">
                        <button id="btnloto"class="btn">領金幣</button>
                    </td>
                    <td id="column" class="c_5">
                        <img src="images/g3.svg" alt="">
                    </td>
                </tr>
                <tr>
                    <td id="column" class="c_11">
                        <img src="images/g2.svg" alt="">
                    </td>
                    <td id="column" class="c_6">
                        <img src="images/g1.svg" alt="">
                    </td>
                </tr>
                <tr>
                    <td id="column" class="c_10">
                        <img src="images/g3.svg" alt="">
                    </td>
                    <td id="column" class="c_9">
                        <img src="images/g2.svg" alt="">
                    </td>
                    <td id="column" class="c_8">
                        <img src="images/g1.svg" alt="">
                    </td>
                    <td id="column" class="c_7">
                        <img src="images/g4.svg" alt="">
                    </td>
                </tr>
            </table>
            </div>
        
    </div>
 

    <script>
        foot_html();  
        getProducts(1,1);
        if( storage.getItem("memNo") ){
            changeModel(storage.getItem("memNo"));
        }
     //試穿角色顯示	
	</script>
</body>
</html>
<script>
 
    function $id(id){
        return document.getElementById(id);
    }
    window.addEventListener("load",function(){
        
    
        
        
        $(window).resize(function() {
            if(innerWidth<768){
                $id("shop_background").style.height =window.screen.height +"px";
            }else{ 
                $id("shop_background").style.height =window.innerHeight +"px";
            }
            // $id("productBlock").style.width = window.innerWidth +"px";

    });

    });
    
    console.log(document.body.clientHeight);
    console.log(window.screen.availWidth);

    function init(){
        $id("rwd_showCart").addEventListener("click",function(){
            if(storage.getItem("memNo")){
                document.location.href="BearMJ_cartShow.php";
            }else{
                $('#alertText').text('請先登入!');
                $('.alertWrap').show();
            }
        },false);


        $id("showCart").addEventListener("click",function(){
            if(storage.getItem("memNo")){
                document.location.href="BearMJ_cartShow.php";
            }else{
                $('#alertText').text('請先登入!');
                $('.alertWrap').show();
            }
        },false);

        
        var choose = document.getElementsByClassName("gift");
        for(var i = 0 ; i < choose.length ; i++){
            if(storage.getItem("memNo")){
                choose[i].addEventListener("click",showfriendBox);
            }else{
                choose[i].addEventListener("click",function(){
                    $('#alertText').text('請先登入!');
                    $('.alertWrap').show();

                },false);
            }
        }


        // $id("choose-me").addEventListener("click",function(){
        //     $id("model_animal").src = "shop-images/model_1.png";
        //     $id("model_hat").src = "shop-images/hat_1.png";
        //     // $id("model_clothes").src = "";

        // });
        
        $id("btn_openGame").addEventListener("click",function(){
        var gameBox = document.getElementsByClassName("game")[0];
        var gameMask = document.getElementsByClassName("gameMask")[0];
            gameBox.style.display = 'block';
            gameMask.style.display = 'block';


        },false);
        
        
        // $id('choose-friend').addEventListener('click', () => {
        //     ooxxLightBox($id('a'), $id('b'), $id('btn_friendBoxClose'));
        // });
        $('.gameClose').click(function(){
            $('.game').hide();
            $('.gameMask').hide();
            window.location.reload();
        });

        $id("btnloto").onclick = function(){
            if(!storage.getItem("last_play")){
                money = rand(10, 50) * 10;
                loto(money);
            }else if(storage.getItem("last_play") == 'null'){
                 money = rand(10, 50) * 10;
                loto(money);
            }else if( nowDay > storage.getItem("last_play")){
                money = rand(10, 50) * 10;
                loto(money);
            }else{
                $('#alertText').text('今天領過囉');
                        $('.alertWrap').show();
            }
            
        };
        
    }

    window.addEventListener("load",init,false);

</script>

<script src="js/match2.js"></script>
