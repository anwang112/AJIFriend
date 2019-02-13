<?php
session_start();
// session_destroy();
$errMsg = "";
try {
	require_once("connectBooks.php");
	$sql = "select * from product";
 	$products = $pdo->query($sql); 
} catch (PDOException $e) {
    echo $e -> getMessage();
	$errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
	$errMsg .= "行號 : ".$e -> getLine()."<br>";
}
 
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BearMJ_Shop</title>
    <link rel="stylesheet" href="css/reset.css">
    <script src="js/lightbox.js"></script>
	<link rel="stylesheet" type="text/css" href="slick/slick.css">
  	<link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
    <link rel="stylesheet" href="css/shop-style.css">
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/friendBox.js"></script>
    <script src="js/changeClothes.js"></script>
    <script src="js/commonPart.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
</head>
<body>
<?php
  if( $errMsg != ""){
  	exit("<div><center>$errMsg</center></div>");
  }
?>	
        <script type="text/javascript">
            head_html();
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
                <div id="showModel">
                    <img src="shop-images/model_1.png" id="model_animal">
                    <img src="shop-images/hat_1.png" id="model_hat">
                    <!-- <img src="" id="model_clothes"> -->
                    
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
                    <span>30</span>
                </div>

                <div id="chooseArea">
                    <!-- 自己穿 -->
                    <div id="choose-me" class="btn_chooseModel"> 
                        <img src="shop-images/gift.png">
                        <p>自己穿</p>
                    </div>
            
                    <!-- 試穿角色暱稱顯示區塊 -->
                    <span id="showId">寂寞阿吉</span>
            
                    <!-- 選朋友來試穿(送禮) -->
                    <div id="choose-friend" class="btn_chooseModel gift" >
                        <img src="shop-images/gift.png" class="gift">
                        <p class="gift">選朋友</p>
                    </div>



                </div>
                

                <!-- 選擇送禮對象燈箱 -->
                <!-- <div id="a" class="LightBoxMask"></div>
                <div id="b" class="middleLightBox">
                    <div id="friend_LightBox" class="bg_friendBox">
                        <img src="shop-images/friendBox.png">
                        <div id="content_friendBox">
                            <input type="text" id="searchBox" placeholder="搜尋朋友ID">
                            <div id="chooseBox">
                                    <label for="f_001">
                                        <img src="shop-images/gift.png">
                                        <p>煞氣阿吉</p>
                                    </label>
                                    <label for="f_002">
                                        <img src="shop-images/gift.png">
                                        <p>霹靂嬌媧</p>
                                    </label>
                                    <label for="f_003">
                                        <img src="shop-images/gift.png">
                                        <p>理科太太</p>
                                    </label>
                                    <label for="f_004">
                                        <img src="shop-images/gift.png">
                                        <p>蔡小英</p>
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div id="btn_friendBoxClose">
                        <img src="shop-images/close.png">
                    </div>
                </div>
                <button id="aaa">點我</button> -->
        
            </div>  
        
        
            <div id="productBlock">
                <!-- 種類選擇Tab -->
                <div class="tab-chooseCloth">頭飾</div>
                <div class="tab-chooseCloth">衣服</div>
                
                <!-- 商品選擇 -->
                <div id="productsArea">
                    <div id="actionPanel">
                        <!-- 選朋友來試穿(送禮) -->
                        <div id="choose-friend" class="gift">
                            <div class="btn_chooseModel gift" >
                                <img src="shop-images/gift.png" class="gift">
                                <p class="gift">選朋友</p>
                            </div>
                            <!-- 試穿角色暱稱顯示區塊 -->
                            <span id="rwd-showId">寂寞阿吉</span>

                        </div>

                        <!-- 餘額顯示 -->
                        <div id="showCoin">
                            <img src="shop-images/coin.png">
                            <span>30</span>
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
                        <section class="regular slider">
                        <?php	
                            while($prodRow = $products->fetch(PDO::FETCH_ASSOC)){
                        ?>		
                            <form action="cartAdd.php" target="nm_iframe">    
                            
                                <input type="hidden" name="proNo" value="<?php echo $prodRow["proNo"];?>">
                                <input type="hidden" name="proName" value="<?php echo $prodRow["proName"];?>">
                                <input type="hidden" name="price" value="<?php echo $prodRow["price"];?>">
                                <input type="hidden" name="img" value="<?php echo $prodRow["img"];?>">
                                <!-- 商品項 -->
                                <div class="productItem">
                                    <!-- 商品圖 -->
                                    <div class="productImg">
                                        <img class="click_wear" src="shop-images/<?php echo $prodRow["img"];?>" id="hat_1">
                                        <div class="rwd-proInfo">
                                            <h3><?php echo $prodRow["proName"];?></h3>
                                            <!-- 魅力值 -->
                                            <div class="MJ">
                                                <span>MJ+</span>
                                                <span><?php echo $prodRow["proMJ"];?></span>
                                            </div>
                                            <!-- 價格 -->
                                            <div class="cost">
                                                <img src="shop-images/coin.png">
                                                <span><?php echo $prodRow["price"];?></span>
                                            </div>
                                            <input type="submit" value="買" class="btn_buy">

                                        </div>
                                    </div>
                                    <div class="productInfo">
                                        <!-- 商品名稱 -->
                                        <h3><?php echo $prodRow["proName"];?></h3>
                                        <!-- 魅力值 -->
                                        <div class="MJ">
                                            <span>MJ值+</span>
                                            <span><?php echo $prodRow["proMJ"];?></span>
                                        </div>
                                        <!-- 價格 -->
                                        <div class="cost">
                                            <img src="shop-images/coin.png"><span><?php echo $prodRow["price"];?></span>
                                        </div>
                                        <!-- 加入購物車 -->
                                        <input type="submit" class="btn_addToCart" value="">
                                            
                                            <!-- <img src="shop-images/cart.png"> -->
                                        
                                    </div>
                                    
                                    
                                </div>
                                <iframe class="id_iframe" name="nm_iframe"></iframe>
                            </form>
                        <?php
                            }
                        ?>
                        </section>
                    </div>
                </div>

            </div> 
        
    </div>
    
    <script type="text/javascript">
		foot_html();
	</script>
</body>
</html>
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
<script>
    
    function $id(id){
        return document.getElementById(id);
    }
    window.addEventListener("load",function(){

        
        // $id("productBlock").style.width = window.innerWidth +"px";
        // $id("productBlock").style.display = "";
        
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
        if(innerWidth<768){
            productItem = document.getElementsByClassName("productItem");
            for (var i = 0; i<productItem.length; i++) {
                //productItem[i].addEventListener("click",showLightBox);
            }
        }

        productImg = document.getElementsByClassName("click_wear");
        for (var i = 0 ; i< productImg.length; i++){
            productImg[i].addEventListener("click",changeClothes);
            if(innerWidth<768){
                productImg[i].addEventListener("click",showInfo); //link:changeClothes.js
            }
        }
        $id("choose-me").addEventListener("click",function(){
            $id("model_animal").src = "shop-images/model_1.png";
            $id("model_hat").src = "shop-images/hat_1.png";
            // $id("model_clothes").src = "";
            $id("showId").innerText = "寂寞阿吉";
            TweenMax.fromTo('#showModel', 1.5, {
                y:-45,
                scale: .5,
            }, {
                y:0,
                scale: 1,
                ease: Power2.easeIn
            });
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