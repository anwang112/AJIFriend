<?php 
ob_start();
session_start();
require_once('myRoomToDB.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>我的窩</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />

    <script src="js/commonPart.js"></script>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" href="css/match2.css">
    <link rel="stylesheet" type="text/css" href="css/myRoom.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <link rel="stylesheet" href="css/myRoom_final.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="js/myRoom2_v2.js"></script>
    <script src="js/myRoom2.js"></script>
</head>

<body>
    <script>
        head_html();  
</script>
    <!-- 桌機版 -->
    <section id="myRoom">
        <h1 style="display:none">我的窩</h1>
        <div class="windowbackground"></div>
        <img src="images/ferrisWheel.png" class="wheel">
        <!-- ↓第二層房間背景↓ -->
        <div class="room">
            <img src="images/roomBackground.png" class="roomBG">
            <!-- 手機背景 -->
            <img src="images/RWDroomBackground.png" class="RWDroomBG">
        </div>
        <!-- ↓衣櫃區↓ -->
        <div id="wrapWardrobe">
            <h2 class="wardrobeTitle">我的衣櫃</h2>
            <div id="wardrobe">
                <img src="images/wardrobeClose.png" class="Close">
                <img src="images/wardrobeOpen.png" class="Open">
            </div>
            <!-- 燈箱：衣櫃 -->
            <div id="wardrobeLightBox" style="display:none">
                <div id="closet">
                    <!-- 右半邊更衣室 -->
                    <div class="fittingBox">
                        <div id="fittingRoom">
                            <!-- 我的角色人物myRole -->
                            <div id="myRole" class="roleBox">
                                <!-- <img src="images/EarsXColor/E1AJI.png" id="mybody">
                                <img src="images/face/F2.png" id="myface">
                                <div id="myHat">
                                    <img class="" id="wearhat" src="images/head/head_beanieBlack.png">
                                </div>
                                <div id="myCloth">
                                    <img class="" id="putonCloth" src="images/body/body_coatofKOKO.png">
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <!-- 左半邊衣櫃 -->
                    <div class="clothCloset">
                        <div id="hatsSelf" class="self">
                            <div id="hatselfSlide">
                                <!-- 橫向的帽子格櫃 -->
                                <ul class="myhats">
                                    <!-- 最多10件帽子 -->
                                    <?php while ($aaa->fetch(PDO::FETCH_ASSOC)) { ?>
                                    <li><img src="images/hatImages/<?php echo $imgHat; ?>" class="hat"></li>
                                    <?php 
                                  } ?>
                                    <!-- <li><img src="images/hat/hat_nikeCapBlack.png" class="hat"></li>
                    <li><img src="images/hat/hat_beanieOrange.png" class="hat"></li>
                    <li><img src="images/hat/hat_nikeCapBlue.png" class="hat"></li>
                    <li><img src="images/hat/hat_beanieBlack.png" class="hat"></li>
                    <li><img src="images/hat/hat_beanieMustard.png" class="hat"></li> -->
                                </ul>
                            </div>
                        </div>
                        <div id="clothesSelf" class="self">
                            <div id="selfSlide">
                                <!-- 橫向的衣服格櫃 -->
                                <ul class="myClothes">
                                    <!-- 最多10件衣服 -->
                                    <?php while ($bbb->fetch(PDO::FETCH_ASSOC)) { ?>
                                    <li>
                                        <!-- <img class="hanger" src="images/hanger.png"> -->
                                        <img src="images/clothesImages/<?php echo $clothbb; ?>" class="cloth">
                                    </li>
                                    <?php 
                                  } ?>
                                    <!-- <li>
                      <img class="hanger" src="images/cloth/hanger.png">
                      <img src="images/cloth/cloth_coatofKOKO.png" class="cloth">
                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="decoDrawer">
                            <div class="drawer"></div>
                            <div class="drawer"></div>
                            <div class="drawer"></div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <!-- 保存按鈕 -->
                    <div id="btnSaveChageCloth">
                        <button id="btnSave" class="btnSave">保存設定</button>
                    </div>
                    <!-- 保存造型成功 燈箱 -->
                    <div id="keepSaveClothes" style="display:none">保存造型成功!
                        <!-- 確定後燈箱消失 -->
                        <div id="btnkeepSaveClose">確定</div>
                    </div>
                    <!-- X關閉衣櫃的按鈕btnClosetCancel -->
                    <div id="btnClosetCancel">
                        <img src="images/2closeX.png">
                    </div>
                </div>
            </div>
        </div>
        <!-- ↓自己現在長什麼樣區↓ -->
        <div id="meNow">


            <!-- <img src="images/meNow.png"> -->
            <!-- <div id="meNow" class="roleBox"></div> -->
        </div>
        
        <?php 

        // $memRole = ;
        if(isset($_SESSION["memNo"])){
            $ccc->fetch(PDO::FETCH_ASSOC) ;
            echo '<script>
                    if(storage.getItem("memNo")){
                    
                        ooxxGetRole($id("meNow"), {
                            animal: ' .$myAnimal . ',
                            color:"' . $myColor . '",
                            eyes:' . $myEye . ',
                            hat:"' . $myHat . '",
                            clothes:"' . $myClothes . '",
                            });
                    }
                </script>' ;
        }else{
            echo '<script>
                ooxxGetRole($id("meNow"), {
                    animal: 1,
                    color:"24A4C0",
                    eyes:1,
                    hat:0,
                    clothes:0,
                    });
                    
                </script>' ;
        }
        

            $memData = $ddd->fetch(PDO::FETCH_ASSOC) ;
            // 衣櫃裡的角色
            echo '
            <script> 
            ooxxGetRole($id("myRole"), {
                    animal:'. $memData["animal"] .',
                    color: "' .$memData["mColor"] .'",
                    eyes:' . $memData["eye"] . ',
                    hat:"'. $memData["wearHat"].'" ,
                    clothes: "'. $memData["wearClothes"].'" ,
                });
                </script>
            
            
            ';
            ?>

        <script>



            //換衣衣
ooxxChangeClothes = (...changeClothesArray) => {
    let object = changeClothesArray[0];
    let clothes = changeClothesArray[1];
    object.getElementsByClassName('roleClothes')[0].style.backgroundImage = `url(${clothes})`;
    let scaleValue = 0;
    object.getElementsByClassName('roleClothes')[0].style.transition = `.4s`;
    clothesGo = () => {
        if (scaleValue <= 1) {
            scaleValue += 0.06;
            object.getElementsByClassName('roleClothes')[0].style.transform = `scale(${scaleValue})`;
            clothesId = requestAnimationFrame(clothesGo);
        } else if (scaleValue >= 1.5) {
            scaleValue = 1;
            object.getElementsByClassName('roleClothes')[0].style.transform = `scale(${scaleValue})`;
            cancelAnimationFrame(clothesId)
        }
    }
    clothesId = requestAnimationFrame(clothesGo);
}





//換帽帽
ooxxChangeHat = (...changeHatArray) => {
    let object = changeHatArray[0];
    let hat = changeHatArray[1];
    object.getElementsByClassName('roleHat')[0].style.backgroundImage = `url(${hat})`;
    let scaleValue = 0;
    object.getElementsByClassName('roleHat')[0].style.transition = `.4s`;
    hatGo = () => {
        if (scaleValue <= 1) {
            scaleValue += 0.06;
            object.getElementsByClassName('roleHat')[0].style.transform = `scale(${scaleValue})`;
            hatId = requestAnimationFrame(hatGo);
        } else if (scaleValue >= 1.5) {
            scaleValue = 1;
            object.getElementsByClassName('roleHat')[0].style.transform = `scale(${scaleValue})`;
            cancelAnimationFrame(hatId)
        }
    }
    hatId = requestAnimationFrame(hatGo);
}

//函士區



    



    
        myhats = document.getElementsByClassName('myhats')[0];
        myhatsItem = myhats.getElementsByTagName('li');

        for(let i=0;i<myhatsItem.length;i++){
          myhatsItem[i].addEventListener("click",(e)=>{
              // changeHat = e.target.src.split('/')[6];
              console.log(e.target.src);
              ooxxChangeHat(myRole, e.target.src);      
          })
        }

        myClothes = document.getElementsByClassName('myClothes')[0];
        myClothesItem = myClothes.getElementsByTagName('li');

        for(let i=0;i<myClothesItem.length;i++){
          myClothesItem[i].addEventListener("click",(e)=>{
              // console.log(e.target.src.split('/')[6]);
              ooxxChangeClothes(myRole, e.target.src);      
          })
        }


        
        </script>
        <!-- ↓電腦個人資訊區↓ -->
        <div id="wrapComputer">
            <h2 class="computerTitle">我的資訊</h2>
            <div id="computer">
                <img src="images/deskOff.png" class="deskOff">
                <img src="images/deskOn.png" class="deskOn">
            </div>
            <!-- 燈箱：我的個人資訊 -->
            <div id="profileLightBox" style="display:none">
                <div id="profile">
                    <!-- 左半邊個人資訊 -->
                    <div class="proLeft">
                        <h3>我的個人資料</h3>
                        <div class="leftcontent">
                        
                            <div id="inputbefore">
                                <span>帳號</span>
                                <p id="xhrAcctBack"><?php echo $memData["memId"]; ?></p>
                            </div>
                            <div>
                                <span>暱稱</span>
                                <input type="" name="" value="" id="mName">
                                <p id="mNameText"><?php echo $memData["mName"]; ?></p>
                            </div>
                            <div>
                                <span>星座</span>
                                <input type="hidden" name="" value="<?php echo $memData["constellation"]; ?>" id="constellation">
                                <p id="constellationText"></p>
                            </div>

<script>
    function $id(id) {
	return document.getElementById(id);
}
    switch ($id("constellation").value) {
        case '1':
            $id("constellationText").innerText = "牡羊座";
            break;
        case '2':
            $id("constellationText").innerText = "金牛座";
            break;
        case '3':
            $id("constellationText").innerText = "雙子座";
            break;
        case '4':
            $id("constellationText").innerText = "巨蟹座";
            break;
        case '5':
            $id("constellationText").innerText = "獅子座";
            break;
        case '6':
            $id("constellationText").innerText = "處女座";
            break;
        case '7':
            $id("constellationText").innerText = "天秤座";
            break;
        case '8':
            $id("constellationText").innerText = "天蠍座";
            break;
        case '9':
            $id("constellationText").innerText = "射手座";
            break;
        case '10':
            $id("constellationText").innerText = "摩羯座";
            break;
        case '11':
            $id("constellationText").innerText = "水瓶座";
            break;
        case '12':
            $id("constellationText").innerText = "雙魚座";
            break;
    }




</script>


                                
                                
                            <div>
                                <span>興趣</span>
                                <p id="hobbyText">運動、桌遊</p>
                            </div>
                            <div>
                                <span>自介</span>
                                <input type="" name="" value="" id="selfIntro">
                                <p id="selfIntroText"><?php echo $memData["self-intro"]; ?></p>
                            </div>

                            <div id="change_and_reset">
                                <button id="change">編輯</button>
                                <button id="dataReset">復原</button>
                            </div>

                        </div>
                    </div>

                    <!-- 右半邊活動紀錄 -->
                    <div class="proRight">
                        <h3>活動歷史紀錄</h3>
                        <div class="rightcontent">
                            <?php $i = 0 ?>
                            <?php while ($activitmemJoin->fetch(PDO::FETCH_ASSOC)) { ?>
                            <div class="activity">

                                <?php if ($actImg == null) { ?>
                                <div id="act_Img<?php echo $i ?>" class="act_Img" style="background-image: url('images/activity/act_number02.svg');">
                                    <?php 
                                  } else { ?>
                                    <div id="act_Img<?php echo $i ?>" class="act_Img" style="background-image: url('images/<?php echo $actImg; ?>');">
                                        <?php 
                                      } ?>
                                    </div>

                                    <img class="act_Img" src="images/<?php echo $actImg; ?>">
                                    <div class="act_hoverBox">
                                        <div class="spanbox">
                                            <span>活動名稱
                                                <?php echo $actTitle; ?></span>
                                            <span>發起人
                                                <?php echo $memId; ?></span>
                                            <span>地點
                                                <?php echo $actLoc; ?></span>
                                            <span>時間
                                                <?php echo substr($act_end, 0, 10); ?></span>
                                        </div>
                                        <div class="act_btn">
                                            <a href="activity_v2.php"><button class="act_readmore">查看</button></a>
                                        </div>
                                    </div>
                                </div>
                                <?php $i++ ?>
                                <?php 
                              } ?>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div id="closeProfile">
                            <img src="images/2closeX.png">
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <script type="text/javascript">
        foot_html();

    </script>
</body>

</html> 