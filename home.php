<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <link rel="stylesheet" href="css/match2.css">
    <!-- 共通 -->

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/commonPart.js"></script>
    <script src="js/package/gsap/src/minified/TweenLite.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">

    <title>熊麻吉</title>
</head>

<body>

    <script type="text/javascript">
        head_html();
    </script>
    <div class="load">
        <div class="loadBox">
            <div class="ani">
                <img src="images/bearmask.png" alt="">
                <div class="bear"></div>
            </div>
            <div class="ani">
                <img src="images/rabimask.png" alt="">
                <div class="rabi"></div>
            </div>
            <div class="ani">
                <img src="images/catmask.png" alt="">
                <div class="cat"></div>
            </div>
            <div class="ani ">
                <img src="images/dogmask.png" alt="">
                <div class="dog"></div>
            </div>
        </div>
        <div id="scoreDisplay1"></div>
    
    </div>
    
    
    <!-- 第一部分城市 -->
    <div class="firstScreen">
        <!-- 背景 -->
        <div class="firstScreenBg">
            <img alt="city" class="city" src="images/indexImages/indexCity.svg">
            <img alt="fwOO" class="fwOO" src="images/indexImages/indexFW.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud1.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud2.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud3.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud4.png">
        </div>
        <!-- 主要內容 -->
        <section class="firstScreenInfo">
            <!-- indexCupidnew.svg -->
            <div class="indexGod">
                <embed id="indexCupid" src="images/indexImages/indexCupid.svg" style="display:block;" />
                <svg xmlns="http://www.w3.org/2000/svg" id="cupidLight" viewBox="0 0 519 868.02883">
                    <defs>
                        <linearGradient id="cupidLightGradient" y1="0%" x2="0%" y2="100%" x1="0%" gradientUnits="objectBoundingBox">
                            <stop offset="0%" id="cupidLight02" stop-color="#f092a6" />
                            <stop offset="0%" id="cupidLight01" stop-color="rgba(255,255,255,0.6)" />
                        </linearGradient>
                    </defs>
                    <title>資產 15</title>
                    <g id="圖層_2" data-name="圖層 2">
                        <g id="圖層_1-2" data-name="圖層 1">
                            <path class="cls-1" d="M140.30211,0,0,803.55949s173,123.0168,519,29.19043L394.10458,9.75679Z" />
                        </g>
                    </g>
                </svg>
                <button class="btn" id="createBtn">立即創角</button>
            </div>

            <div class="indexSlogan">
                <h2>
                    <span>找到對的人</span>
                    <span>聊到變麻吉</span>
                </h2>
            </div>
            <embed id="AjiSpring" src="images/indexImages/AjiSpring.svg" style="display:block; opacity:0;" />
        </section>
        <!-- 地板 -->
        <div class="firstScreenFloor">
            <!-- <img class="ooStone" src="images/indexImages/indexStoneOne.png"> -->
        </div>
    </div>


    <!-- 走道 1739 5392.61364 -->
    <!-- 石頭 -->
    <!-- 舊版走到 -->
    <svg xmlns="http://www.w3.org/2000/svg" id="indexRoad" viewBox="0 0 1739 5220.61364">
        <defs>
        </defs>
        <title>資產 5</title>
        <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
                <path class="cls-1" d="M1127.9861,0S210.50267,166.61364,49.44775,402.61364s115.95954,324,196.487,324c66.91892,0,1152.7333-105.2096,1400.80129,244.67926,49.85676,70.32074-97.59692,275.76205-211.7104,317.32074-414.52261,150.9639-1302.18839,158.18185-1423.42579,355-115.467,187.45037,761.56075,275.85807,1409.5548,451,219.68366,59.37681-79.93125,356.00445-383.43368,442-580.13234,164.37694-1010.19989,297.64517-1030.41609,612-55.56395,864,795.05151,400.77059,1345.48563,777,156.544,107,74.30885,433,1.202,486-302.47536,219.28456-461.91693,294-1012.79323,499-216.06192,80.40407-333.89444,478-333.89444,478l1722.9746,4s83.22591-1497-264.53952-1671c-689.09245-344.77862-586.05413-199-557.86952-479,24.34172-241.82282,594.90663-328.51739,738.17832-500.00532,146.201-174.99409,93.89219-646.3872-31.69109-836.99468-27.18729-41.26426-189.09413-127.0005-184.286-182,8.91706-102,49.19587-141.752,126.82044-196,219.65675-153.5072,243.36179-586.07019,37.64982-754-183.44881-149.75562-820.34711-307-885.57435-394C543.99354,159.57145,1127.9861,0,1127.9861,0Z" />
            </g>
        </g>
    </svg>
    <div class="stoneWrap">
        <img src="images/indexImages/indexStoneArray.svg" id="StoneArray">
    </div>



    <!-- 第二部分 找麻吉 -->
    <div class="secondScreen">
        <!-- 主要內容 -->
        <section class="secondScreenSlider">
            <h2 class="secondPhoneIndexA">
                <!-- 旋轉找麻吉手機板 -->
                <a href="match2.php" title="旋轉找麻吉" class="indexA">轉轉找麻吉</a>
            </h2>
            <div id="trojanList">
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole01" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole02" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole03" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole04" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <img alt="carousel" class="carousel" src="images/indexImages/indexCarousel.svg">
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole05" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole06" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
                <div class="trojanItem">
                    <div class="trojanItemRolebox">
                        <div id="trojanItemRole07" class="roleBox"></div>
                    </div>
                    <img alt="trojan" class="trojan" src="images/indexImages/indexTrojan.svg">
                </div>
            </div>

            <div class="sliderTitle indexTitle" id="ChairPerspective">
                <div class="secondTitle indexTitle">
                    <h2>
                        <!-- 旋轉找麻吉 -->
                        <a href="match2.php" title="旋轉找麻吉" class="indexA">轉轉找麻吉</a>
                    </h2>
                    <!-- <div class="indexTitle">
                    <a href="match2.php" title="找麻吉" class="btn">找麻吉</a>
                </div> -->
                </div>
                <!-- 默契值 -->
                <div class="donut">
                    <svg id="circleProcess" xmlns="http://www.w3.org/2000/svg">
                        <circle id="circle" cx="50%" cy="50%" r="40%" stroke-width="10%" stroke-dashoffset="110%">
                        </circle>
                    </svg>
                    <div class="donut-copy">
                        <span class="donut-title" id="showCircle">66</span>
                        <span class="donut-spic">%</span>
                        <p>默契值</p>
                    </div>
                </div>
                <ul class="chairInfoList">
                    <li>暱稱 : <span id="chairName">挖底加</span></li>
                    <li>星座 : <span id="chairstar">金牛座</span></li>
                    <li>興趣 : <span id="chairHobby">看書</span></li>
                </ul>
                <!-- 坐椅子 -->
                <embed id="chair" src="images/indexImages/indexChair.svg" style="display:block;" />
            </div>

        </section>
    </div>



    <!-- 第三部分 商城 -->
    <div class="thirdScreen">
        <h2 class="thirdPhoneIndexA">
            <a href="BearMJ_shop_addcart.php" title="造型商城" class="indexA">造型商城</a>
        </h2>
        <!-- 主要內容 -->
        <section class="thirdScreenShop">
            <div class="AjiShopSpring">
                <div class="shopTitle indexTitle ">
                    <h2>
                        <a href="BearMJ_shop_addcart.php" title="造型商城" class="indexA">造型商城</a>
                    </h2>
                </div>
                <div class="shopEnergy">
                    <h2>魅力值</h2>
                    <embed id="energy" src="images/indexImages/indexEnergy.svg" style="display:block;" />
                    <p>
                        購買新造型服裝
                        增加個人魅力值
                        吸引更多新朋友
                        成為萬人迷!!
                    </p>
                </div>
                <embed id="ajiThree" src="images/indexImages/indexAJIThree.svg" style="display:block;" />
                <embed id="springThree" src="images/indexImages/indexspringThree.svg" style=" display:block;" />
                <embed id="springThreeLeft" src="images/indexImages/indexspringThreeLeft.svg" style="display:block;" />
                <embed id="springThreeRight" src="images/indexImages/indexspringThreeRight.svg" style="display:block;" />
            </div>
            <div class="showShop">
                <embed id="shop" class="shop" src="images/indexImages/indexShop.svg" style="display:block;" />
                <div class="model">
                    <div id="indexModel" class="roleBox"></div>
                    <div id="modelLight"></div>
                </div>
            </div>
        </section>
    </div>

    <!-- <div class="thirdTitle">
        <h2>
            <a href="BearMJ_shop_addcart.php" title="旋轉找麻吉" class="indexA">旋轉找麻吉</a>
        </h2>
    </div> -->

    <!-- 第四部分 塗鴉合照 -->
    <div class="fourthScreen" id="fourthScreen">
        <!-- 主要內容 -->
        <section class="fourthScreenPhoto">
        <div class="pic">
                <img src="images/picpic.png" alt="">
            </div>
            <div class="photoTitle indexTitle picTitle">
                <h2>
                    <a href="photo.php" title="照片牆" class="indexA">塗鴉麻吉合照</a>
                </h2>
            </div>
           
            <div class="camera">
                <img alt="photo" class="photo" src="images/indexImages/indexCamera.svg">
                <svg id="lineStory" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -30 900 500" preserveAspectRatio="xMinYMin meet">
                    <defs>
                        <linearGradient id="loveGradient" y1="214.28912" x2="831.87264" y2="214.28912" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#e8436f" />
                            <stop offset="1" stop-color="#f3a6a8" />
                        </linearGradient>
                    </defs>
                    <path class="cls-1" id="indexLine" d="M.42274,428.31125s60-95,88-94v61s90-106,107-96c8.5,32.5.5,56.5.5,56.5s51-59,81-71c7,18,17,50,17,50s111-118,112-165,2.2113,167.7395,0,170c-1.08759,1.11182,165-164,165-252s108-151,105,23c8,73-32,89-32,89s143-252,181-134-103,213-134,210" />
                </svg>
                <!-- 小相片 -->
                <svg xmlns="http://www.w3.org/2000/svg" id="indexPhotoPaper" viewBox="0 0 397.85249 292.04484">
                    <defs>
                        <linearGradient id="photoPaperGradientWhite" y1="0%" x2="0%" y2="100%" x1="0%" gradientUnits="objectBoundingBox" gradientTransform="rotate(-30)">
                            <stop offset="0%" id="photoPaperGradient01" stop-color="#fdfdfd" />
                            <stop offset="1%" id="photoPaperGradient02" stop-color="transparent" />
                        </linearGradient>
                        <linearGradient id="photoPaperGradientRed" y1="0%" x2="0%" y2="100%" x1="0%" gradientUnits="objectBoundingBox" gradientTransform="rotate(-30)">
                            <stop offset="0%" id="photoPaperGradient03" stop-color="#ef5c79" />
                            <stop offset="1%" id="photoPaperGradient04" stop-color="transparent" />
                        </linearGradient>
                    </defs>
                    <path class="cls-1" d="M0,84.09751s114.03052,81.24675,139.68739,206.68032c0,0,2.85076,2.85076,11.40305,0s156.792-76.9706,239.4641-96.92594c0,0,11.40305,0,5.70153-11.40305S353.49462,65.56755,290.77783,25.65687c0,0-39.91068-25.65687-51.31374-25.65687S0,84.09751,0,84.09751Z" />
                    <path class="cls-2" id="PhotoInfoRed" d="M25.95534,97.37365S82.9706,111.62747,154.23968,251.31486c0,0,196.70265-74.11984,222.35952-76.9706,0,0,5.70153,0,0-11.40305S319.58394,40.35839,245.4641,14.70153Z" />
                </svg>
                <embed id="PhotoInfo" src="images/indexImages/indexPhotoInfo.svg" style="display:block;" />
            </div>
            <div id="flash"></div>


        </section>
    </div>

    <!--第五部分 聯誼揪團活動-->
    <div class="fifthScreen">
        <section class="fifthScreenActivity">
            <div class="activityTitle indexTitle">
                <h2>
                    <a href="activity_v2.php" title="活動巴士" class="indexA">聯誼揪團活動</a>
                </h2>
            </div>
            <ul class="signList">
                <li class="signItem">
                    <img src="images/indexImages/indexSign.svg" alt="activitySign" class="activitySign">
                    <img src="images/indexImages/indexPhoto01.png" alt="activityphoto" class="activityphoto">
                </li>
                <li class="signItem">
                    <img src="images/indexImages/indexSign.svg" alt="activitySign" class="activitySign">
                    <img src="images/indexImages/indexPhoto02.png" alt="activityphoto" class="notphoto">
                </li>
            </ul>
            <embed id="indexActivityCart" class="indexActivityCart" src="images/indexImages/indexActivityCar.svg" style="display:block;" />
        </section>
    </div>

    <!-- 創建角色 -->
    <div id="indexCreateRoleBox" class="indexCreateRoleBox">
        <h2>創建專屬角色</h2>
        <div class="createRoleScreen">
            <div class="showMyRole">
                <div id="myRole" class="roleBox myRole"></div>
            </div>
            <div class="createNavList">
                <ul id="createKindList">
                    <li value="0">種族</li>
                    <li value="1">眼睛</li>
                    <li value="2">毛色</li>
                </ul>
                <div class="createKindAll">
                    <ul id="animalKindList">
                        <li value="1">
                            <!-- <img src="images/indexImages/indexBearIcon.svg" alt="bear"> -->
                        </li>
                        <li value="2">
                            <!-- <img src="images/indexImages/indexRabbitIcon.svg" alt="rabbit"> -->
                        </li>
                        <li value="3">
                            <!-- <img src="images/indexImages/indexCatIcon.svg" alt="cat"> -->
                        </li>
                        <li value="4">
                            <!-- <img src="images/indexImages/indexDogIcon.svg" alt="dog"> -->
                        </li>
                    </ul>
                    <ul id="eyesKindList">
                        <li value="1"></li>
                        <li value="2"></li>
                        <li value="3"></li>
                        <li value="4"></li>
                        <li value="5"></li>
                        <li value="6"></li>
                    </ul>
                    <ul id="colorKindList">
                        <li>
                            <input type="range" min="0" max="255" value="255" step="1" id="rRang">
                        </li>
                        <li>
                            <input type="range" min="0" max="255" value="255" step="1" id="gRang">
                        </li>
                        <li>
                            <input type="range" min="0" max="255" value="255" step="1" id="bRang">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <button id="saveRoleBtn" class="btn">製作完成</button>

        <div id="indexCreateCloseBtn" class="lightBoxXX"></div>
    </div>

    <!-- 註冊帳號 -->
    <div id="createMemberScreen">
        <h2>註冊會員</h2>
        <div class="createMemberBox">
            <ul class="createLeftForm">
                <li>
                    <label>會員帳號</label>
                </li>
                <li>
                    <label>會員密碼</label>
                </li>
                <li>
                    <label>確認密碼</label>
                </li>
                <li>
                    <label>會員暱稱</label>
                </li>
                <li>
                    <label>星座選擇</label>
                </li>
                <li>
                    <span>興趣勾選</span>
                </li>
                <li>
                    <span>自我介紹</span>
                </li>
            </ul>
            <ul class="createRightForm">
                <li>
                    <input type="text" required name="memId" id="memId">
                    <span id="getCheckmemId"></span>
                </li>
                <li>
                    <input type="password" required name="memPsw" id="memPsw">
                </li>
                <li>
                    <input type="password" required name="memPsw_check" id="memPswDBC">
                </li>
                <li>
                    <input type="text" required name="mName" id="mName"><span id="getCheckmName" style="display:none;"></span>
                </li>
                <li>
                    <select name="constellation" id="constellation">
                        <option value="0"></option>
                        <option value="1">牡羊座</option>
                        <option value="2">金牛座</option>
                        <option value="3">雙子座</option>
                        <option value="4">巨蟹座</option>
                        <option value="5">獅子座</option>
                        <option value="6">處女座</option>
                        <option value="7">天秤座</option>
                        <option value="8">天蠍座</option>
                        <option value="9">射手座</option>
                        <option value="10">摩羯座</option>
                        <option value="11">水瓶座</option>
                        <option value="12">雙魚座</option>
                    </select>
                </li>
                <li id="checkbox_home">
                    <label>
                        <input type="checkbox" name="hobby" value="0" class="hobbyItem">
                        <span>打籃球</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="1" class="hobbyItem">
                        <span>抓寶可夢</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="2" class="hobbyItem">
                        <span>跑步</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="3" class="hobbyItem">
                        <span>看電影</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="4" class="hobbyItem">
                        <span>吃美食</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="5" class="hobbyItem">
                        <span>游泳</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="6" class="hobbyItem">
                        <span>唱歌</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="7" class="hobbyItem">
                        <span>看書</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="8" class="hobbyItem">
                        <span>爬山</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="9" class="hobbyItem">
                        <span>健身</span>
                    </label>
                </li>
                <li>
                    <textarea name="self-intro" id="selfIntro" maxlength="50"></textarea>
                </li>
            </ul>
            <div id="createMemberScreenCloseBtn" class="lightBoxXX"></div>
        </div>
        <button id="createMemberBtn" class="btn">送出</button>
    </div>



    <script type="text/javascript">
        foot_html();
    </script>
    <script src="js/index.js"></script>
    <!-- <script src="js/match2.js"></script> -->
</body>

</html> 