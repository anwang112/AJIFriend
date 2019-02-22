<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <link rel="stylesheet" type="text/css" href="css/index.css">
    <!-- 共通 -->
    <script src="js/commonPart.js"></script>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <!-- snap 函式庫 -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script> -->
    <title>熊麻吉</title>
</head>

<body>

    <script type="text/javascript">
        head_html();
    </script>

    <!-- 第一部分城市 -->
    <div class="firstScreen">
        <!-- 背景 -->
        <div class="firstScreenBg">
            <img alt="city" class="city" src="images/indexImages/indexCity.svg">
            <img alt="fwOO" class="fwOO" src="images/indexImages/indexFW.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud.png">
            <img alt="cloud" class="cloud" src="images/indexImages/indexCloud.png">
        </div>
        <!-- 主要內容 -->
        <section class="firstScreenInfo">
            <!-- indexCupidnew.svg -->
            <embed id="indexCupid" src="images/indexImages/indexCupidNew.svg" style="display:block;" />
            <!-- <div class="indexSlogan">
                <h2>
                    <span>找到對的人</span>
                    <span>聊到變麻吉</span>
                </h2>
            </div> -->
            <svg id="firstScreenLove" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 50 100">
                <path id="loveBtn" class="path-2" fill="#ECDED9" stroke="#EF5C79" stroke-width="1"
                    stroke-miterlimit="10"
                    d="M27 0c-2.476 0-4.856 0.921-6.704 2.595-0.702 0.635-1.303 1.357-1.796 2.154-0.493-0.797-1.094-1.519-1.796-2.155-1.848-1.673-4.228-2.594-6.704-2.594-5.514 0-10 4.486-10 10 0 3.722 1.158 6.66 3.871 9.825 3.942 4.6 13.919 11.62 14.342 11.917 0.086 0.061 0.187 0.091 0.287 0.091s0.201-0.030 0.287-0.091c0.423-0.297 10.4-7.317 14.343-11.917 2.712-3.165 3.87-6.103 3.87-9.825 0-5.514-4.486-10-10-10z" />
                <text id="loveText" x="5" y="17" fill="#EF5C79" style="font-size:7px;">創建角色</text>
            </svg>
            <embed id="indexAjiSpring" src="images/indexImages/indexAjiSpring.svg" style="display:block;" />
        </section>
        <!-- 地板 -->
        <div class="firstScreenFloor">
            <!-- <img class="ooStone" src="images/indexImages/indexStoneOne.png"> -->
        </div>
    </div>


    <!-- 走道 -->
    <!-- 舊版 -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" id="road" viewBox="0 0 2362.31 5394.47">
        <defs>
        </defs>
        <title>資產 5</title>
        <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
                <path class="cls-1"
                    d="M1472.88,0S333.54,166.61,133.54,402.61s144,324,244,324c83.1,0,1262.83,52.49,1739.53,244.68,96.94,39.09,141.41,251.56-.3,293.12C1602,1415.38,237.09,1446.8,86.54,1643.61-56.85,1831.06,1311.77,1958.84,2116.46,2134c272.8,59.38,378.09,387.15,1.19,473.14C1397.24,2771.5,27.64,2852.26,2.54,3166.61c-69,864,1285.2,599.55,2083,772,12,2.59,33.17,8.44,33.17,8.44l-2.17,284.56s-279.26,140.28-363,180c-399.42,189.47-1554,453-1554,453l-3.28,529.86,1920.28-4.86s412.22-1509.1,2-1644c-665.34-218.79-954-223-919-503,30.23-241.82,916.68-500,916.68-500l1.21-915.62s-215.61-73.27-189.89-124.38c20.36-40.47,92.69-89.6,189.08-143.85,272.77-153.51-.08-1068.15-.08-1068.15s-1083-24-1164-111C747.67,159.57,1472.88,0,1472.88,0Z" />
            </g>
        </g>
    </svg> -->


    <!-- 新版 -->
    <svg xmlns="http://www.w3.org/2000/svg" id="textRoad" viewBox="0 0 1739 5392.61364">
        <defs>
            <style>
                .cls-1 {
                    fill: url(#ooo);
                    transition: 3s;
                }
            </style>
        </defs>
        <linearGradient id="ooo" y1="0%" x2="0%" y2="100%" x1="0%" gradientUnits="objectBoundingBox">
            <stop offset="2%" id="sssss01" stop-color="#f3b9b4" />
            <!-- <stop offset="1" stop-color="#f3a6a8" /> -->
            <stop offset="7%" id="sssss02" stop-color="#ecded9" />
        </linearGradient>
        <title>資產 2</title>
        <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
                <path class="cls-1"
                    d="M1127.9861,0S210.50267,166.61364,49.44775,402.61364s115.95954,324,196.487,324c66.91892,0,1152.7333-105.2096,1400.80129,244.67926,49.85676,70.32074-97.59692,275.76205-211.7104,317.32074-414.52261,150.9639-1302.18839,158.18185-1423.42579,355-115.467,187.45037,761.56075,275.85807,1409.5548,451,219.68366,59.37681-79.93125,356.00445-383.43368,442-580.13234,164.37694-1010.19989,297.64517-1030.41609,612-55.56395,864,795.05151,400.77059,1345.48563,777,156.544,107,74.30885,433,1.202,486-302.47536,219.28456-461.91693,294-1012.79323,499-216.06192,80.40407-333.89444,478-333.89444,478l1722.9746,4s83.22591-1497-264.53952-1671c-689.09245-344.77862-586.05413-199-557.86952-479,24.34172-241.82282,594.90663-328.51739,738.17832-500.00532,146.201-174.99409,93.89219-646.3872-31.69109-836.99468-27.18729-41.26426-189.09413-127.0005-184.286-182,8.91706-102,49.19587-141.752,126.82044-196,219.65675-153.5072,243.36179-586.07019,37.64982-754-183.44881-149.75562-820.34711-307-885.57435-394C543.99354,159.57145,1127.9861,0,1127.9861,0Z" />
            </g>
        </g>
    </svg>


    <!-- 第二部分 找麻吉 -->
    <div class="secondScreen">
        <!-- 主要內容 -->
        <section class="secondScreenSlider">
            <div class="sliderTitle indexTitle">
                <h2>旋轉找麻吉</h2>
                <a href="match.html" title="找麻吉" class="btn_R">找麻吉</a>
            </div>
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

            <!-- 默契值 -->
            <div class="donut">
                <svg id="circleProcess" xmlns="http://www.w3.org/2000/svg">
                    <circle id="circle" cx="50%" cy="50%" r="40%" stroke-width="10%" stroke-dashoffset="110%"></circle>
                </svg>

                <div class="donut-copy">
                    <span class="donut-title" id="showCircle">66</span><span class="donut-spic">%</span>
                </div>
            </div>

            <div class="indexBtn">
                <a href="match.html" title="找麻吉" class="btn_R">找麻吉</a>
            </div>
        </section>
    </div>

    <!-- 第三部分 商城 -->
    <div class="thirdScreen">
        <!-- 主要內容 -->
        <section class="thirdScreenShop">
            <div class="shopTitle indexTitle">
                <h2>打造魅力形象</h2>
                <a href="BearMJ_shop.html" title="造型商城" class="btn_R">造型商城</a>
            </div>
            <div class="showShop">
                <!-- <img alt="shop" class="shop" src="images/indexImages/indexShop.svg"> -->
                <embed id="shop" class="shop" src="images/indexImages/indexShop.svg" style="display:block;" />
                <!-- <img alt="model" class="model" src="images/indexImages/indexModel01.png"> -->
                <div class="model">
                    <div id="indexModel" class="roleBox"></div>
                    <div id="modelLight"></div>
                </div>
            </div>
            <div class="indexBtn">
                <a href="BearMJ_shop.html" title="造型商城" class="btn_R">造型商城</a>
            </div>
        </section>
    </div>

    <!-- 第四部分 塗鴉合照 -->
    <div class="fourthScreen" id="fourthScreen">
        <!-- 主要內容 -->
        <section class="fourthScreenPhoto">
            <div class="photoTitle indexTitle">
                <h2>塗鴉編輯麻吉合照</h2>
                <a href="photo.html" title="照片牆" class="btn_R">照片牆</a>
            </div>
            <div class="camera">
                <img alt="photo" class="photo" src="images/indexImages/indexCamera.svg">
                <svg id="lineStory" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 -30 900 500" preserveAspectRatio="xMinYMin meet">
                    <defs>
                        <linearGradient id="loveGradient" y1="214.28912" x2="831.87264" y2="214.28912"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#e8436f" />
                            <stop offset="1" stop-color="#f3a6a8" />
                        </linearGradient>
                    </defs>
                    <path class="cls-1" id="indexLine"
                        d="M.42274,428.31125s60-95,88-94v61s90-106,107-96c8.5,32.5.5,56.5.5,56.5s51-59,81-71c7,18,17,50,17,50s111-118,112-165,2.2113,167.7395,0,170c-1.08759,1.11182,165-164,165-252s108-151,105,23c8,73-32,89-32,89s143-252,181-134-103,213-134,210" />
                </svg>
                <!-- 小相片 -->
                <svg xmlns="http://www.w3.org/2000/svg" id="indexPhotoPaper" viewBox="0 0 397.85249 292.04484">
                    <defs>
                        <linearGradient id="photoPaperGradientWhite" y1="0%" x2="0%" y2="100%" x1="0%"
                            gradientUnits="objectBoundingBox" gradientTransform="rotate(-30)">
                            <stop offset="0%" id="photoPaperGradient01" stop-color="#fdfdfd" />
                            <stop offset="1%" id="photoPaperGradient02" stop-color="transparent" />
                        </linearGradient>
                        <linearGradient id="photoPaperGradientRed" y1="0%" x2="0%" y2="100%" x1="0%"
                            gradientUnits="objectBoundingBox" gradientTransform="rotate(-30)">
                            <stop offset="0%" id="photoPaperGradient03" stop-color="#ef5c79" />
                            <stop offset="1%" id="photoPaperGradient04" stop-color="transparent" />
                        </linearGradient>
                    </defs>
                    <path class="cls-1"
                        d="M0,84.09751s114.03052,81.24675,139.68739,206.68032c0,0,2.85076,2.85076,11.40305,0s156.792-76.9706,239.4641-96.92594c0,0,11.40305,0,5.70153-11.40305S353.49462,65.56755,290.77783,25.65687c0,0-39.91068-25.65687-51.31374-25.65687S0,84.09751,0,84.09751Z" />
                    <path class="cls-2" id="PhotoInfoRed"
                        d="M25.95534,97.37365S82.9706,111.62747,154.23968,251.31486c0,0,196.70265-74.11984,222.35952-76.9706,0,0,5.70153,0,0-11.40305S319.58394,40.35839,245.4641,14.70153Z" />
                </svg>
                <embed id="PhotoInfo" src="images/indexImages/indexPhotoInfo.svg" style="display:block;" />
            </div>
            <div class="indexBtn">
                <a href="photo.html" title="照片牆" class="btn_R">照片牆</a>
            </div>
            <div id="flash"></div>


        </section>
    </div>

    <!--第五部分 聯誼揪團活動-->
    <div class="fifthScreen">
        <section class="fifthScreenActivity">
            <div class="activityTitle indexTitle">
                <h2>聯誼揪團活動</h2>
                <a href="activity.html" title="活動巴士" class="btn_R">活動巴士</a>
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
                <!-- <li class="signItem">
                    <img src="images/indexImages/indexSign.svg" alt="activitySign" class="activitySign">
                    <img src="images/indexImages/indexPhoto01.png" alt="activityphoto" class="activityphoto">
                </li> -->
            </ul>
            <embed id="indexActivityCart" class="indexActivityCart" src="images/indexImages/indexActivityCar.svg"
                style="display:block;" />
            <div class="indexBtn">
                <a href="activity.html" title="活動巴士" class="btn_R">活動巴士</a>
            </div>
        </section>
    </div>







    <!-- 創建角色 -->
    <div id="indexRoleMask"></div>
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
                        <il>
                            <input type="range" min="0" max="255" value="255" step="1" id="rRang">
                        </il>
                        <il>
                            <input type="range" min="0" max="255" value="255" step="1" id="gRang">
                        </il>
                        <il>
                            <input type="range" min="0" max="255" value="255" step="1" id="bRang">
                        </il>
                    </ul>
                </div>
            </div>
        </div>

        <button id="saveRoleBtn">製作完成</button>

        <div id="indexCreateCloseBtn" class="lightBoxXX"></div>
    </div>


    <!-- 註冊帳號 -->
    <div id="createMemberScreen">
        <h2>註冊會員</h2>
        <div class="createMemberBox">
            <div class="createLeftFrom">

            </div>
            <div class="createRightForm">

            </div>
            <label>
                <span>會員帳號 :</span>
                <input type="text" required name="memId" id="memId">
                <span id="getCheckmemId"></span>
            </label>

            <label>
                <span>會員密碼 :</span>
                <input type="password" required name="memPsw" id="memPsw">
            </label>

            <label>
                <span>會員暱稱 :</span>
                <input type="text" required name="mName" id="mName">
                <span id="getCheckmName"></span>
            </label>

            <label>選擇星座</label>
            <select name="constellation" id="constellation">
                <option value="0">選擇星座</option>
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



            <span>興趣</span>
            <label>
                <span>打籃球</span>
                <input type="checkbox" name="hobby" value="0" class="hobbyItem">
            </label>
            <label>
                <span>抓寶可夢</span>
                <input type="checkbox" name="hobby" value="1" class="hobbyItem">
            </label>
            <label>
                <span>跑步</span>
                <input type="checkbox" name="hobby" value="2" class="hobbyItem">
            </label>
            <label>
                <span>看電影</span>
                <input type="checkbox" name="hobby" value="3" class="hobbyItem">
            </label>
            <label>
                <span>吃美食</span>
                <input type="checkbox" name="hobby" value="4" class="hobbyItem">
            </label>
            <label>
                <span>游泳</span>
                <input type="checkbox" name="hobby" value="5" class="hobbyItem">
            </label>
            <label>
                <span>唱歌</span>
                <input type="checkbox" name="hobby" value="6" class="hobbyItem">
            </label>
            <label>
                <span>看書</span>
                <input type="checkbox" name="hobby" value="7" class="hobbyItem">
            </label>
            <label>
                <span>爬山</span>
                <input type="checkbox" name="hobby" value="8" class="hobbyItem">
            </label>
            <label>
                <span>健身</span>
                <input type="checkbox" name="hobby" value="9" class="hobbyItem">
            </label>

            <span>自我介紹</span>
            <textarea name="self-intro" id="selfIntro" maxlength="50">

                </textarea>

            <button id="createMemberBtn">送出</button>

        </div>
    </div>





    <script type="text/javascript">
        foot_html();
    </script>
    <script src="js/index.js"></script>
</body>

</html>