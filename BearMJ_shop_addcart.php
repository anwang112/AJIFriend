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
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/friendBox.js"></script>
    <script src="js/changeClothes.js"></script>
    <script src="js/commonPart.js"></script>
    <script src="js/shop.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
</head>
<body>	
    <!-- Header開始 -->
        <div id="head" class="head mnone">
        <div class="headWrap">
            <a href="index.html"><img id="logo" src="images/logo.svg" alt="logo"></a>
            <ul class="menu">
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.html">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
                <li><a href="photo.html">照片牆</a></li>
                <li><a href="myRoom.html">我的窩</a></li>
            </ul>
			<div class="loginBox">
				<input type="hidden" id="userNo" value="">
				<input type="hidden" id="userId" value="">
				<input type="hidden" id="userCoin" value="">
				<input type="hidden" id="userAnimal" value="">
				<input type="hidden" id="userEye" value="">
				<input type="hidden" id="userColor" value="">
				<input type="hidden" id="userStar" value="">
				<input type="hidden" id="userHobby" value="">
				<input type="hidden" id="userSelf" value="">
				<input type="hidden" id="userHat" value="">
				<input type="hidden" id="userClothes" value="">
				<input type="hidden" id="userPlay" value="">
				<input type="hidden" id="userLove" value=""> 
                <div class="loginImg">
                    
                </div>
                <div class="loginTxtWrap">
                    <div class="loginContent">
                        <div class="loginTitle">
                            <span id="memName"></span><span id="mLv"></span>
                        </div>
						<div class="loginMj">
							<span></span>
							
							<span id="memMJ"></span>
						</div>
						<div class="Mjbar"></div>
                    </div>
                    <div class="loginNot">
                        <span id="loginNot">登入</span> 
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="head_phone  dnone ">
        <a href="#">
            <img id="btn_menu_menu" src="pic/phone_icon_menu.svg" alt="">
        </a>
        <a href="index.html" class="logo_phone">
            <img src="pic/logo_phone03.png" alt="">
        </a>
        <input type="checkbox" id="control_checkbox">
        <!-- 手機聊天室開合控制 -->
        <label for="control_checkbox" id="control_rwdChat">
            <img id="btn_chatroom_phone" src="pic/phone_icon_chat.svg" alt="">
        </label>
        

    </div>        
    <div id="menu_phone" class="menu_phone">
            <ul>
                <li><a href="match2.php">找麻吉</a></li>
                <li><a href="activity_v2.html">活動巴士</a></li>
                <li><a href="BearMJ_shop_addcart.php">造型商城</a></li>
                <li><a href="photo.html">照片牆</a></li>
                <li><a href="#">登入</a></li>
                <li><a href="#">魅力值</a></li>
                <li><a id="head_member_icon" href="myRoom.html">會員中心</a></li>
            </ul>
        </div>
    <!--  -->
    <div id="loginBox" class="LightBoxMask"></div>
    <div id="lightBoxInner" class="middleLightBox login_box">
        <h2>登入/註冊</h2>
        <form id="login_form" action="">
            <input type="e-mail" placeholder="hi@gmail.com">
            <input type="psw" placeholder="6位數密碼">
            <input type="submit" value="送出" class="input_R">
        </form>
        <!-- 關掉按鈕 -->
        <div id="loginBoxClose" class="lightBoxXX"></div>
    </div>

<!-- Header結束 -->

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
                    <span><?php echo $_SESSION["mCoin"]?></span>
                </div>

                <div id="chooseArea">
                    <!-- 自己穿 -->
                    <div id="choose-me" class="btn_chooseModel"> 
                        <img src="shop-images/gift.png">
                        <p>自己穿</p>
                    </div>
            
                    <!-- 試穿角色暱稱顯示區塊 -->
                    <span id="showName"class="gift"><?php echo $_SESSION["mName"]; ?></span>
                    <input type="hidden" id="showId" value="<?php echo $_SESSION["memId"];?>">
                        
                    
            
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
                                <?php echo $_SESSION["mName"]; ?>
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
                            <span><?php echo $_SESSION["mCoin"]?></span>
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
    <!-- 桌機聊天室 -->
    <div id="chatRoom" class="chatRoom">
	    <!-- 聊天室右側主要顯示區  -->
	    <h2 id="chatRoom_control">麻吉聊天室</h2>
	    <div class="chatRoom_info">
	        <div id="friendPic" class="headBox chatTaHead" alt="朋友大頭照"></div>
			<span id="mem-2" class="2"></span>
	        <a href="#"><img src="pic/chatroom_btn_gift.svg" alt="送禮物按鍵"></a>
	        <a href="#"><img src="pic/chatroom_btn_profile.svg" alt="查看個人檔案按鍵"></a>
	    </div> 
	    <div class="chatboxRight">
	        <div class="chatbox_show">
	        </div>
	        <div class="chatbox_faces">
	            <img src="pic/chatroom_face_01.svg" alt="喜">
	            <img src="pic/chatroom_face_02.svg" alt="怒">
	            <img src="pic/chatroom_face_03.svg" alt="哀">
	            <img src="pic/chatroom_face_04.svg" alt="樂">
	        </div>
	        <div class="chatbox_input">
	            <input id="chatTxt_input" type="text">
	            <input id="chatTxt_send" type="button" value="送出">
	        </div>      
	    </div> 
	    <!-- 聊天室收合左側欄  -->
	    <label for=""><img id="chatroom_btn_open" src="pic/chatroom_btn_open1.svg" alt="收合左側欄按鍵"></label>
	    <div id="chatboxLeft" class="chatboxLeft">
	        <input id="search_input" type="text" placeholder="搜尋好友">
	        <div class="friendbox">
				<label class="friendClick">
					<div id="admin">
						<img src="shop-images/gift.png" class="friendClick">
					</div>
					<p class="friendClick">管理員</p>
				</label>
	        </div>
			<div id="replybox">
				<p id="replyboxTitle">回覆好友邀請</p>
	        </div>
	    </div>
	</div>
	    <!-- 手機聊天室 -->
	    <div class="rwd_chatRoom" id="chatRoom_phone_part1">
	            <input id="search_input_phone" type="text" placeholder="搜尋好友">
                <!-- 聊天列表 -->
                <div id="rwd_chatList"> 
                    <label for="" class="rwd_chatList">
                        <!-- 頭貼 -->
                        <div id="rwd_chatListHead"></div>
                        <!-- 暱稱 -->
                        <p>寂寞阿吉</p>
                        <!-- 最近一則訊息 -->
                        <p>最近一則訊息</p>
                        <!-- 會員編號 -->
                        <input type="hidden" id="rwd_chatMem1" value="">
                    </label> 
                    <label for="" class="rwd_chatList">
                        <!-- 頭貼 -->
                        <div id="rwd_chatListHead"></div>
                        <!-- 暱稱 -->
                        <p>寂寞阿吉</p>
                        <!-- 最近一則訊息 -->
                        <p>最近一則訊息</p>
                        <!-- 會員編號 -->
                        <input type="hidden" id="rwd_chatMem1" value="">
                    </label>

                </div>
	            <!-- <div id="friendbox_phone">
	                friendbox//之後寫入
	            </div> -->
	            <div id="replybox_phone">
	                <h4>待回覆好友邀請</h4>
	            </div>
	    </div>
	    <!-- <div class="chatRoom_phone_part2" id="chatRoom_phone_part2">
	        <div class="info_bar">
	            <img id="btn_chat_prev" src="pic/btn_chat_prev.svg" alt="搜尋朋友">
	            <span id="friend_id_show">傻眼貓咪</span>
	        </div>
	        <div class="info_chatbox">
	            <span>hi~~</span>
	        </div>
	        <div class="info_controlbox">
	            <img id="" src="pic/btn_chat_gift.svg" alt="">
	            <img src="pic/btn_chat_profile.svg" alt="">
	            <img src="pic/btn_chat_send.svg" alt="">
	            <input id="info_input_phone" type="text">
	        </div>
	    </div> -->
	    <!-- 手機聊天室結束 -->
	    
	</div>
    <script>
        sendForm();
        getProducts(1,1);
        
	</script>
</body>
</html>
<script>
    
    function $id(id){
        return document.getElementById(id);
    }
    window.addEventListener("load",function(){
        
        changeModel(1); //試穿角色顯示
        
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