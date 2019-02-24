<?php
session_start();

?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BearMJ_Shop</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/shop-style.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="css/match2.css">
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/friendBox.js"></script>
    <script src="js/changeClothes.js"></script>
    <script src="js/commonPart.js"></script>
    <script src="js/shop.js"></script>
<script src="js/match2.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
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

                <!-- 前往購物車 -->
                <div id="rwd_showCart">
                    <a href="BearMJ_cartShow.php">
                        <img src="shop-images/cart_pink.png">
                        <p>查看</p>
                    </a>
                </div>

                <!-- 餘額顯示 -->
                <div id="rwd_showCoin">
                    <img src="shop-images/coin.png">
                    <span><?php if(isset($_SESSION["memId"])){echo $_SESSION["mCoin"];}?></span>
                </div>

                <div id="chooseArea">
                    <!-- 自己穿 -->
                    <div id="choose-me" class="btn_chooseModel"> 
                        <img src="shop-images/gift.png">
                        <p>自己穿</p>
                    </div>
            
                    <!-- 試穿角色暱稱顯示區塊 -->
                    <span id="showName"class="gift"><?php if(isset($_SESSION["memId"])){echo $_SESSION["mName"];} ?></span>
                    <input type="hidden" id="showId" value="<?php if(isset($_SESSION["memId"])){echo $_SESSION["memId"];}?>">
                        
                    
            
                    <!-- 選朋友來試穿(送禮) -->
                    <div class="choose-friend btn_chooseModel gift" >
                        <img src="shop-images/gift.png">
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
                        <div id="" class="choose-friend gift">
                            <div class="btn_chooseModel" >
                                <img src="shop-images/gift.png">
                                <span class="wearChange">麻吉</span>
                            </div>

                        </div>
                            <!-- 試穿角色暱稱顯示區塊 -->
                            <p id="rwd-showName" class="gift">
                                <?php if(isset($_SESSION["memId"])){echo $_SESSION["mName"];} ?>
                            </p>
                        <!-- 前往購物車 -->
                        <div id="showCart">
                            <a href="BearMJ_cartShow.php">
                                <img src="shop-images/cart_pink.png">
                                <p>查看</p>
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
        
    </div>
 

    <script>
        foot_html();  
        if( storage.getItem("memNo") ){
            getProducts(1,1);
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
        var choose = document.getElementsByClassName("gift");
        for(var i = 0 ; i < choose.length ; i++){
            choose[i].addEventListener("click",showfriendBox);
        }


        $id("choose-me").addEventListener("click",function(){
            $id("model_animal").src = "shop-images/model_1.png";
            $id("model_hat").src = "shop-images/hat_1.png";
            // $id("model_clothes").src = "";

        });
        

        
        
        // $id('choose-friend').addEventListener('click', () => {
        //     ooxxLightBox($id('a'), $id('b'), $id('btn_friendBoxClose'));
        // });
        
    }

    window.addEventListener("load",init,false);

</script>

<script src="js/match2.js"></script>
