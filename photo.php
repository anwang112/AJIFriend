<?php
session_start();
//連線資料庫
$errMsg = "";
try {
	require_once("connectBooks.php");
    $sql = "select * from picture p join member m on p.po_memNo = m.memNo where p.pic_cateNo=1 order by p.vote desc";
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
	<link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" href="css/match2.css">
    <link rel="stylesheet" href="css/photo.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="js/commonPart.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
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
                $i=1;
                while($photoRow = $photo->fetch(PDO::FETCH_ASSOC)){     
            ?>
                <div  class="top top1">
                    <img id="top1" class="winnerPhoto" src="<?php echo $photoRow["src"];?>" alt="rank"
                     data-role="<?php echo $photoRow["animal"].'|'.$photoRow["mColor"].'|'.$photoRow["eye"]?>">
                    <div class="topbg">
                        <img src="images/photoclouds-24.png" alt="bg">
                    </div>
                    <div class="headBox member" id="sticker<?php echo $i ?>"  ></div>
                    <script>
                        head = document.getElementById('sticker<?php echo $i ?>');         
                        ooxxGetHead(head, {
                            animal: <?php echo $photoRow["animal"]; ?>,
                            color: '<?php echo $photoRow["mColor"]; ?>',
                            eyes: <?php echo $photoRow["eye"]; ?>,
                        })
                        
                    </script>
                    <a href="#" class="showInfo"><?php echo $photoRow["memId"];?></a>
                    <img class="topheart" src="images/fullheart-16.png" alt="heart">
                    <span><?php echo $photoRow["vote"];?></span>
                </div>
            <?php
                    $i ++;
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
                    <img src="images/photograph-18.png" alt="photo">
                    <h3>Step 3 分享合照 </h3>
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
        

            <div class="drawing">

                <!-- 下載照片要get php -->
                <form method="get" accept-charset="utf-8" name="form1">
                    <input name="hidden_data" id='hidden_data' type="hidden"/>
                </form>
                <!-- 選擇顏色 -->
                <!-- <div class="controlBar">
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
                  -->
                <!--畫布canvas 與 背景預覽  -->
                <div id="preCanvas" class="preCanvas">
                        <div class="preview">
                            <img id="imgPreview" src="" alt="">
                            <div id="chooseId">
                                <!-- 自己預視 -->
                                <div id="showMe"></div>
                                <!-- 朋友預視 -->
                                <div id="showModel"></div>
                                <div id="chooseArea">
                                    <!-- 角色暱稱顯示區塊 -->
                                    <span id="showName"class="gift btn friendo"><?php if(isset($_SESSION["memId"])){echo $_SESSION["mName"];} ?></span>
                                    <input type="hidden" id="showId" value="<?php if(isset($_SESSION["memId"])){echo $_SESSION["memId"];}?>">
                            
                                    <!-- 角色暱稱顯示區塊 -->
                                    <span id="showName"class="gift btn mememe">自己</span>
                                    <!-- <input type="hidden" id="showId" value="<?php if(isset($_SESSION["memId"])){echo $_SESSION["memId"];}?>"> -->
                                </div>
                            </div>
                        </div>
                        <canvas id="canvas" width="350px" height="350px"></canvas>       
                </div>
                
                
            <!-- 按鈕們 上傳背景 選擇朋友 分享 上一步 下一步 -->
                <div class="btns ">
                    <div class="back">                
                        <span class="btn" id="back">選擇背景</span>
                    </div>
                    <label> 
                        <div class="upload">
                            <span class="btn" id="upBtn">上傳背景</span>
                            <input style="width:'30px'; " type="file" id="upFile" name="upFile" hidden>
                        </div> 
                    </label>
                    <label id="friendBox">
                        <span id="chooseBtn">選擇朋友</span>
                    </label>
                    
                    <div class="next" >                
                        <span class="btn" id="next">選擇朋友</span>
                    </div>
                    <!-- 下載照片 -->
                    <input class="btn" type="button" value="下載照片" onclick="saveImage()" />
                    <form id="addPic" method="post" enctype="multipart/form-data">
                    <label>
                        <div class="upload">
                            <span id="sharePhoto" class="btn" style="display:block">發佈至投票區</span>
                            <input style="width:'30px'; " type="file" id="picInput"  name="addPic" hidden>
                        </div> 
                    </label>
                    </form>
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
    $sql = "select * from picture p join member m on p.po_memNo = m.memNo where p.pic_cateNo=2 order by p.time desc";
    $photo = $pdo->query($sql); 
?>
<?php	
    $i=2;
	while($photoRow = $photo->fetch(PDO::FETCH_ASSOC)){
?>	
            <div class="card" id="photo<?php echo $i ?>">
                <img class="cardPhoto" src="<?php echo $photoRow["src"];?>"
                 id="<?php echo $photoRow["animal"].'|'.$photoRow["mColor"].'|'.$photoRow["eye"] ?>" alt="no1"
                 data-pic="<?php echo $photoRow["picNo"]?>">
                <div class="headBox member" id="stickerCard<?php echo $i ?>"></div>
                    <script>
                        head = document.getElementById('stickerCard<?php echo $i ?>');         
                        ooxxGetHead(head, {
                            animal: <?php echo $photoRow["animal"]; ?>,
                            color: '<?php echo $photoRow["mColor"]; ?>',
                            eyes: <?php echo $photoRow["eye"]; ?>,
                        })
                    </script>
                <a href="#"><?php echo $photoRow["memId"];?></a>
                <img id="heart<?php echo "|".$photoRow["picNo"]?>" class="heart" src="images/fullheart-16.png" alt="heart">
                <span class="voteNum" id="voteNum"><?php echo $photoRow["vote"];?> </span>
            </div>
<?php
        $i++;
	}
?>   
            <div class="clear"></div>        
        </div>
    </div>
    <script type="text/javascript">
		foot_html();
	</script>


</body>
</html>

<script>
function init(){
    var choose = document.getElementById("next");
    choose.addEventListener("click",photo_showfriendBox);
       
    
}
window.addEventListener("load",init,false);


</script>