<?php
ob_start();
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cart</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/shop-style.css">
    <script src="js/commonPart.js"></script>
	<link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="node_modules/gsap/src/minified/TweenMax.min.js"></script>
    
    
</head>
<body>
        <script type="text/javascript">
            head_html();
            sendForm();
        </script>
    <div id="cart_background" class="background">
        <div class="title">
            <img src="shop-images/cart_pink.png">
            <h2>麻吉購物車</h2>
        </div>
        <div id="cart-content">
            
                <ul id="tableTitle">
                    <li class="flexGrow">商品名稱</li>
                    <li class="li_img">圖片</li>
                    <li>代幣</li>
                    <li>送禮</li>
                    <li>異動</li>
                </ul>
                
                <div id="cartTable">
                
                    <?php 
                        if( isset($_SESSION["proName"]) === false or count($_SESSION["proName"])===0){
                            echo "尚無購物資料";
                        }else{ 
                            // foreach($_SESSION["proName"] as $no => $proName){
                                for($i=0;$i<100;$i++){
                                    if( isset($_SESSION["proName"][$i])=== true){ //修改
                                        
                                   
                    ?>	
                    <form class="cartContent" action="BearMJ_cartUpdate.php">
                        <ul>
                            <input type="hidden" name="proNo" value="<?php echo $i;?>">
                            <li class="flexGrow"><?php echo $_SESSION["proName"][$i];?></li>
                            <li class="li_img"><img src="shop-images/<?php echo $_SESSION["img"][$i];?>"></li>
                            <li><img src="shop-images/coin.png"><span><?php echo $_SESSION["price"][$i];?></span></li>
                            <li><input type="button" value="送禮" class="btn_given"></li>
                            <li><input type="submit" value="刪除" class="btn_delete"></li>
                        </ul>
                    </form>

                    <?php
                        
                                
                            } 
                        }
                    } 
                    ?>
                </div>
                <hr>
            <form id="cartForm">
                <div id="totalCost">
                    <span>總數量:
                        <?php if(isset($_SESSION["img"])){echo count($_SESSION["img"]);}else{
                            echo 0;}?>
                    </span>
                    <img src="shop-images/coin.png">
                    <span>支付代幣金額:
                        <?php if(isset($_SESSION["img"])){echo array_sum($_SESSION["price"]);} ?>
                    </span>
                </div>
                <div id="actionBtns">
                    <a href="BearMJ_shop_addcart.php"><input type="button" value="繼續購物" class="btn-buy"></a>
                    
                        <?php
                            if(isset($_SESSION["img"]) && array_sum($_SESSION["price"])<=$_SESSION["mCoin"]){
                                $str = '<a href="buyNow.php"><input type="button" value="確認購買" class="btn-buy"></a>';
                                
                            }else if(isset($_SESSION["img"]) && array_sum($_SESSION["price"])>$_SESSION["mCoin"]){
                                $str = '<a><input type="button" value="餘額不足" class="notEnough"></a>';
                            }else{
                                $str = '';
                            }
                        echo $str;
                        ?>
                    
                    
                    
                </div>
                
            </form>

        </div>
        <div id="giftBox">
            <div id="btn_giftBoxClose">
                <img src="shop-images/close.png">
            </div>
            <div id="friendBox">
                <div id="tipBox">
                    <div class="giftToImg">
                        <img src="shop-images/gift.png">
                    </div>
                    <div class="gift-info">
                    </div>
                    
                    <div class="gift-ta">
                        <div class="idImg">
                            <img src="shop-images/id.png">
                        </div>
                        <p>煞氣阿吉</p>
                    </div>
                </div>
                <input type="text" id="searchBox" placeholder="搜尋朋友ID">
                <div id="chooseBox">
                    <form>
                        <label for="f_001">
                            <img src="shop-images/gift.png">
                            <p>煞氣阿吉</p>
                            <input type="submit" id="f_1" value="001">
                        </label>
                        <label for="f_002">
                            <img src="shop-images/gift.png">
                            <p>霹靂嬌媧</p>
                            <input type="submit" id="f_2" value="002">
                        </label>
                        <label for="f_003">
                            <img src="shop-images/gift.png">
                            <p>理科太太</p>
                            <input type="submit" id="f_3" value="003">
                        </label>
                        <label for="f_004">
                            <img src="shop-images/gift.png">
                            <p>蔡小英</p>
                            <input type="submit" id="f_4" value="004">
                        </label>
                    </form>
                </div>

            </div>
            <div id="msgBox">
                <p>想寫些悄悄話給朋友嗎....</p> 
                <input type="text" id="giftMsg">
                <input type="button" id="choose_ok" value="確定">
                <input type="button" id="choose_delete"value="全部清除">
            </div>
        </div>

    </div>
    <script type="text/javascript">
		foot_html();
	</script>
</body>
</html>
<script>
    
    function $id(id){
        return document.getElementById(id);
    }
    if(innerWidth<768){
        $id("cart_background").style.height =window.screen.height +"px";
    }else{
        $id("cart_background").style.height =window.innerHeight +"px";
    }

    console.log(window.screen.height);
    console.log(document.body.clientWidth );

    $id("btn_giftBoxClose").addEventListener("click",function(){
        $id("giftBox").style.display = "none";
    });

    function init(){
        var btn_delete = document.getElementsByClassName("btn_delete");
        var btn_given = document.getElementsByClassName("btn_given");
        for( var i = 0; i < btn_delete.length; i++){
            // btn_delete[i].addEventListener("click",function(e){
            //     $id("cartTable").removeChild(e.target.parentNode.parentNode);

            // });
            btn_given[i].addEventListener("click",function(e){
                $id("giftBox").style.display="block";

            });
        }
        btn_goingOn = document.getElementsByClassName("btn-buy"); 
    }

    window.addEventListener("load",init,false);

</script>
<script src="js/cart.js"></script>