<?php
session_start();
// // session_destroy();
// $errMsg = "";
// try {
// 	require_once("connectBooks.php");
// 	$sql = "select * from product";
//  	$products = $pdo->query($sql); 
// } catch (PDOException $e) {
//     echo $e -> getMessage();
// 	$errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
// 	$errMsg .= "行號 : ".$e -> getLine()."<br>";
// }
 
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BearMJ_Shop</title>
    <link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="slick/slick.css">
  	<link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
    <link rel="stylesheet" href="css/shop-style.css">
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/friendBox.js"></script>
    <script src="js/changeClothes.js"></script>
    <script src="js/commonPart.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <script src="js/shop.js"></script>
</head>
<body>

        <script type="text/javascript">
            head_html();
            getProduct(1);
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
                    <span><?php if(isset($_SESSION["mCoin"])){ echo $_SESSION["mCoin"]; }?></span>
                </div>

                <div id="chooseArea">
                    <!-- 自己穿 -->
                    <div id="choose-me" class="btn_chooseModel"> 
                        <img src="shop-images/gift.png">
                        <p>自己穿</p>
                    </div>
            
                    <!-- 試穿角色暱稱顯示區塊 -->
                    <span id="showName">
                        <?php if(isset($_SESSION["memNo"])){
                            if(isset($_SESSION["gift_ta"])){
                                echo $_SESSION["gift_ta"]["name"];
                            }else{
                                echo $_SESSION["mName"];
                            }
                        }
                        ?>
                    </span>
                    <input type="hidden" id="showId" value="<?php if(isset($_SESSION["memNo"])){
                            if(isset($_SESSION["gift_ta"])){
                                echo $_SESSION["gift_ta"]["id"];
                            }else{
                                echo $_SESSION["memId"];
                            }
                        }
                        ?>">
                        
                    
            
                    <!-- 選朋友來試穿(送禮) -->
                    <div id="choose-friend" class="btn_chooseModel gift" >
                        <img src="shop-images/gift.png" class="gift">
                        <p class="gift">選朋友</p>
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
                <div id="hatTab" class="tab-chooseCloth onclick" onclick="getProduct(1);" >頭飾</div>
                <div id="clothesTab" class="tab-chooseCloth" onclick="getProduct(2);">衣服</div>
                
                <!-- 商品選擇 -->
                <div id="productsArea">
                    <div id="actionPanel">
                        <!-- 選朋友來試穿(送禮) -->
                        <div id="choose-friend" class="gift">
                            <div class="btn_chooseModel gift" >
                                <img src="shop-images/gift.png" class="gift">
                                <p class="gift">麻吉穿搭</p>
                            </div>
                            <!-- 試穿角色暱稱顯示區塊 -->
                            <span id="rwd-showName">
                                <?php 
                                if(isset($_SESSION["memNo"])){
                                    if(isset($_SESSION["gift_ta"])){
                                        echo $_SESSION["gift_ta"]["name"];
                                    }else{
                                        echo $_SESSION["mName"];
                                    }
                                }
                                ?>
                            </span>

                        </div>

                        <!-- 餘額顯示 -->
                        <div id="showCoin">
                            <img src="shop-images/coin.png">
                            <span><?php if(isset($_SESSION["mCoin"])){ echo $_SESSION["mCoin"]; }?></span>
                        </div>
                        <!-- 前往購物車 -->
                        <div id="showCart">
                            <a href="BearMJ_cartShow.php">
                                <img src="shop-images/cart_pink.png">
                                <p>查看</p>
                            </a>
                        </div>

                    </div>

                    <!-- 商品區 -->
                    <div id="productsShow">
                        <section class="regular slider" id="productsSection">
                        </section>
                    </div>
                </div>

            </div> 
        
    </div>
    
    <script type="text/javascript">
		foot_html();
        sendForm();
	</script>
</body>
</html>

<script>
    
    function $id(id){
        return document.getElementById(id);
    }
    window.addEventListener("load",function(){
        
        
        changeModel(); //試穿角色顯示
        
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

        productImg = document.getElementsByClassName("click_wear");
        for (var i = 0 ; i< productImg.length; i++){
            // productImg[i].addEventListener("click",changeClothes);
            if(innerWidth<768){
                productImg[i].addEventListener("click",showInfo); //link:changeClothes.js
            }
        }
        $id("choose-me").addEventListener("click",function(){
            $id("model_animal").src = "shop-images/model_1.png";
            $id("model_hat").src = "shop-images/hat_1.png";
            // $id("model_clothes").src = "";
            TweenMax.fromTo('#showModel', 1.5, {
                y:-45,
                scale: .5,
            }, {
                y:0,
                scale: 1,
                ease: Power2.easeIn
            });
        });

        $id("hatTab").addEventListener("click",function(){

        });

        
        
        TweenMax.fromTo('#showModel', 1.5, {
            y:-45,
            scale: .5,
            }, {
                y:0,
                scale: 1,
                ease: Power2.easeIn
            });
        
        
        // $id('choose-friend').addEventListener('click', () => {
        //     ooxxLightBox($id('a'), $id('b'), $id('btn_friendBoxClose'));
        // });
        
    }

    window.addEventListener("load",init,false);

</script>

<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
<script src="slick/slick.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">

  $(document).on('ready', function() {
      if(innerWidth<768){
          $(".regular").slick({
              dots: false,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 2

          });
      }else if(innerWidth<1200){
          $(".regular").slick({
              dots: true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3

          });
      }else{
          $(".regular").slick({
              dots: true,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 3

          });
      }
      

  });
</script>