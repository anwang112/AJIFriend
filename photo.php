<?php
session_start();
$_SESSION["loginMem"]['Id'] = 'An';
//連線資料庫
$errMsg = "";
try {
	require_once("connectBooks.php");
    $sql = "select * from picture p join member m on p.memNo = m.memNo where p.pic_cateNo=1 order by p.vote desc";
 	$photo = $pdo->query($sql); 
} catch (PDOException $e) {
	$errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
	$errMsg .= "行號 : ".$e -> getLine()."<br>";
}
 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>照片牆</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <script src="js/commonPart.js"></script>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" href="css/match2.css">
    <link rel="stylesheet" href="css/photo.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/drawing-2.js"></script>
    <script src="js/chooseFriend.js"></script>
    <script src="js/photolightbox.js"></script>
    <script src="js/vote.js"></script>
</head>
<body>
    <script type="text/javascript">
		head_html();
	</script>
<!-- 第一屏 上月票選得名 -->
    <div class="bg">
        <div class="wrap1">
            <div class="clouds1">
                <img src="images/clouds-21.png" alt="">
            </div>
            <div class="clouds2">                
                <img src="images/clouds-21.png" alt="">
            </div>   
            <div class="trophy">
                <div><img src="images/trophy-11.png" alt="獎盃"></div>
                <h2>上月票選得名</h2>
            </div>
            <?php
                if( $errMsg != ""){
                    exit("<div><center>$errMsg</center></div>");
                }
            ?>	
           
            <div class="col3">
            <?php	
                // $i=0;
                while($photoRow = $photo->fetch(PDO::FETCH_ASSOC)){     
            ?>
                <div  class="top top1">
                    <img id="top1" class="winnerPhoto" src="<?php echo $photoRow["src"];?>" alt="rank">
                    <div class="topbg">
                        <img src="images/photoclouds-24.png" alt="bg">
                    </div>
                    <div class="headBox member" id="sticker"  ></div>
                    <script>
                     head = document.getElementById('sticker');         
                        ooxxGetHead(head, {
                            animal: <?php echo $photoRow["animal"]; ?>,
                            color: '<?php echo $photoRow["mColor"]; ?>',
                            eyes: <?php echo $photoRow["eye"]; ?>,
                        })
                        
                    </script>
                    <!-- <img class="member" src="images/member4-20.png" alt="doggy"> -->
                    <a href="#"><?php echo $photoRow["memId"];?></a>
                    <img class="topheart" src="images/fullheart-16.png" alt="heart">
                    <span><?php echo $photoRow["vote"];?></span>
                </div>
            <?php
                // $i ++;
            }
            ?>
            </div>
           
            <!-- canvas -->
            <div id="drawingTab">
                <img src="images/camera-17.png" alt="camera">
                <h1>製作合照</h1>    
            </div>

        </div>
    </div>

    <div class="bg">
        <div class="mkPhoto">
            <div id="exit">
                <img src="images/exit.png" alt="exit">
            </div>
            <div class="steps">
                <div class="step" id="step1">
                        <img  src="images/choiceBg-23.png" alt="chooseBg">
                        <h3>Step 1 選擇背景</h3>
                </div>
                <div class="step" id="step2">
                    <img src="images/chooseFriend-24.png" alt="chooseFriend">
                    <h3>Step 2 選擇朋友</h3>
                </div>
                <div class="step" id="step3">
                    <img src="images/colorPen-25.png" alt="colorPen">
                    <h3>Step 3 編輯塗鴉</h3>
                </div>
            </div>
            <div class="bulletin">
                <h3>本月票選主題</h3>
                <p>城市愛情故事</p>
                <h3>得名獎勵</h3>
                <p>1.水行俠套裝</p><img src="images/wmSuit-27.png" alt="wmSuit">
                <p>2.死神頭套</p><img src="images/ghostCap-28.png" alt="ghostCap">
                <p>3.海盜頭套</p><img src="images/pirateCap-29.png" alt="pirateCap">
            </div>

            <div id="friend_LightBox" class="bg_friendBox" style="display:none">
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
            <!-- <div id="friend_LightBox" class="bg_friendBox">
                <img src="images/chooseF-31.png" alt="bg">
                <div id="btn_friendBoxClose">
                    <img src="images/closeX.png">
                </div>
                <div id="content_friendBox">
                    <input type="text" id="searchBox" placeholder="搜尋朋友ID">
                    <div id="chooseBox">
                        <label for="f_001">
                            <img src="images/member1-17.png">
                            <p>煞氣阿吉</p>
                        </label>
                        <label for="f_002">
                            <img src="images/member2-18.png">
                            <p>霹靂嬌媧</p>
                        </label>
                        <label for="f_003">
                            <img src="images/member3-19.png">
                            <p>理科太太</p>
                        </label>
                        <label for="f_004">
                            <img src="images/member4-20.png">
                            <p>蔡小英</p>
                        </label>
            
                    </div>
                </div>
            </div> -->

            <div class="drawing">
                    <!-- 登入會員 先用阿吉代打 -->
                    <div id="chooseId">
                            <!-- 試穿預視 -->
                            <div id="showModel">
                                <img src="shop-images/model_1.png" id="model_animal" >
                                <img src="shop-images/hat_1.png" id="model_hat">
                                <!-- <img src="" id="model_clothes"> -->
                            </div>
                            <div id="chooseArea">
                                <!-- 試穿角色暱稱顯示區塊 -->
                                <span id="showId"></span>

                            </div>
                    </div>
                <!-- 下載照片要get php -->
                <form method="get" accept-charset="utf-8" name="form1">
                    <input name="hidden_data" id='hidden_data' type="hidden"/>
                </form>
                <!-- 選擇顏色 -->
                <div class="controlBar">
                    <div class="colorPack">
                        <div class="color" id="red"></div>
                        <div class="color" id="coral"></div>
                        <div class="color" id="yellow"></div>
                        <div class="color" id="blue"></div>
                        <div class="color" id="green"></div>
                        <div class="color" id="black"></div>
                        <div class="reset color">
                            <img id="reset" src="images/reset-26.svg" alt="reset">
                        </div>

                    </div>
                 </div>
                 
                <!--畫布canvas 與 背景預覽  -->
                <div class="preCanvas">
                        <div class="preview"><img id="imgPreview" src="" alt="">
                        </div>
                        <canvas id="canvas" width="350px" height="350px"></canvas>
                        
                </div>
                
            <!-- 按鈕們 上傳背景 選擇朋友 分享 上一步 下一步 -->
                <div class="btns">
                    <div class="back" >                
                        <span id="back">選擇背景</span>
                    </div>
                    <label> 
                        <div class="upload">
                            <!-- <img id="imgPreview" src="images/member4-20.png" alt="bear"> -->
                            <span id="upBtn">上傳背景</span>
                            <input style="width:'30px'; " type="file" id="upFile" name="upfile" hidden>
                        </div> 
                    </label>
                    <label id="friendBox">
                        <span id="chooseBtn">選擇朋友</span>
                    </label>
                    <label>
                        <span id="sharePhoto" style="display:none">分享至照片牆</span>
                    </label>
                    <div class="next" >                
                        <span id="next">選擇朋友</span>
                    </div>
                    <!-- 下載照片 -->
                 <input type="button" value="下載照片" onclick="saveImage()" />
                    
                    <div id="shareHint" style="display:none">已分享合照至塗鴉牆!
                    <!-- 確定後燈箱消失 -->
                        <div id="sureClose">確定</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- canvas tab -->
    <script>
        function $id(id){
            return document.getElementById(id);
            }	
            function init(){
                $id("drawingTab").onclick = function showCanvas(){
                        var mkPhoto=document.getElementsByClassName("mkPhoto");
                        mkPhoto[0].style.display="block";
                        mkPhoto[0].classList.add("slideL");
                        
                    }
                $id("exit").onclick= function back(){
                    console.log(exit);
                    var mkPhoto=document.getElementsByClassName("mkPhoto");
                    mkPhoto[0].style.display="none";
                }
            }
        window.addEventListener("load", init, false);
    </script>

        <!-- <div id="LB">
                <div id="del"><img src="images/trash-alt.svg" alt="del"></div>
                <div id="left">%%</div>
                <div id="right">>></div>
                <img class="cardPhoto" src="images/rank1-13.png" alt="top1">
                <img class="member" src="images/member4-20.png" alt="doggy">
                <a href="#">AJI</a>
                <img class="heart" src="images/fullheart-16.png" alt="heart">
                <span id="voteNum">105 </span>
                <p>整個城市都是我們的伸展台</p>
            </div> -->
        </div>
    </div>


<?php
    $sql = "select * from picture_category  where pic_cateNo=2 order by time desc";
    $photo = $pdo->query($sql); 
?>
<!-- 第二屏 相片牆 -->
    <div class="bg2">
        <div class="postArea">
            <div class="father">                
                <div class="content">
                    <img class="ajiY" src="images/yellowheart-10.png" alt="y">
                    <img class="aji" src="images/jiFriend.png" alt="og">
                </div>

<?php	
	while($photoRow = $photo->fetch(PDO::FETCH_ASSOC)){
?>	
                <div class="topic">
                    <img src="images/flag.png" alt="flag">
                    <h1><?php echo $photoRow["pic_cateName"];?></h1>
                </div>
<?php
	}
?>   
                <!-- <div id="myPhoto">
                    <a href="#">
                        <img src="images/myPhoto-30.png" alt="photo">
                        <h3>我的相片</h3>
                    </a>
                </div> -->
            </div>
<?php
    $sql = "select * from picture p join member m on p.memNo = m.memNo where p.pic_cateNo=2 order by p.time desc";
    $photo = $pdo->query($sql); 
?>
<?php	
	while($photoRow = $photo->fetch(PDO::FETCH_ASSOC)){
?>	
            <div class="card" id="photo1">
                <img class="cardPhoto" src="<?php echo $photoRow["src"];?>" alt="no1">
                <img class="member" src="images/member4-20.png" alt="doggy">
                <a href="#"><?php echo $photoRow["memId"];?></a>
                <img id="heart<?php echo "|".$photoRow["picNo"]?>" class="heart" src="images/fullheart-16.png" alt="heart">
                <span class="voteNum" id="voteNum"><?php echo $photoRow["vote"];?> </span>
                <div class="bigHeart" id="bigHeart">
                    <img src="images/heart.svg" alt="bigHeart">
                </div>
            </div>
<?php
	}
?>   
            <div class="clear"></div>        
            <!-- <div id="cardLB" class="照片id ex:card-photo7">
                <div id="del"><img src="images/trash-alt.svg" alt="del"></div>
                <div id="left">%%</div>
                <div id="right">>></div>
                <img class="cardPhoto" src="images/rank1-13.png" alt="top1"
                <div class="voteHeart"><img id="heart" src="images/heart.png" alt=""></div>>
                <img class="member" src="images/member4-20.png" alt="doggy">
                <a href="#">AJI</a>
                <img class="heart" src="images/fullheart-16.png" alt="heart">
                <span id="voteNum">105 </span>
                <p>整個城市都是我們的伸展台</p>
            </div> -->
        </div>
    </div>
    <script type="text/javascript">
		foot_html();
	</script>


</body>
</html>