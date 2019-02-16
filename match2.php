<?php
session_start();
// session_destroy();
$_SESSION["loginMem"]['Id'] = 'An';
$errMsg = "";
try {
    require_once("connectBooks.php");
    $sql = "select * from member where memId = :memId";
    $sta = $pdo->prepare($sql);
    $sta->bindValue(':memId', $_SESSION["loginMem"]['Id']);
    $sta->execute();
    $stadRow = $sta->fetch(PDO::FETCH_ASSOC);

    //撈大富翁
    $moneySql = "select * from member ORDER BY mCoin DESC";
    $money = $pdo->prepare($moneySql);
    $money->execute();
    $moneyRow = $money->fetchAll(PDO::FETCH_ASSOC);

    //等級判斷式
    $lvArr = [];
    for ($i = 0; $i < 3; $i++) {
        $mj = $moneyRow[$i]["mMJ"];
        if ($mj >= 1000) {
            $lv = "LV.3 萬人迷";;
        } else if ($mj >= 500) {
            $lv = "LV.2 潛力股";
        } else {
            $lv = "LV.1 邊緣人";
        }
        array_push($lvArr, $lv);
    };

   
    //等級判斷式結束

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>找麻吉</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/match2.css">
    <script src="js/commonPart.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="node_modules/gsap/src/minified/TweenLite.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
</head>

<body>

    <?php
    if ($errMsg != "") {
        exit("<div><center>$errMsg</center></div>");
    }
    ?>

    <script type="text/javascript">
        head_html();
    </script>
    <div class="searchWrap">
        <div id="searData">
            <div class="searchClose"></div>
            <div class="sRole">
                <div id="topMoney05" class="roleBox sRoleBox"></div>
            </div>

            <div class="profileInfo serPro">
                <table>
                    <tr>
                        <th>
                            ID:
                        </th>
                        <td>
                            <span id="sMemId"></span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            魅力等級
                        </th>
                        <td>
                            <span id="sLv"></span>
                            <span id="sMJ"></span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            暱稱：
                        </th>
                        <td>
                            <span id="sName"></span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            興趣:
                        </th>
                        <td>
                            <div id="hobby"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            星座：
                        </th>
                        <td>
                            <span id="sConstellation"></span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            自我介紹：
                        </th>
                        <td>
                            <?php echo $stadRow["self-intro"]; ?>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button id="btn_beFriend">加為朋友</button>
                        </td>
                </table>
            </div>
        </div>
    </div>
    </div>
    <div class="wrap">
        <div  class="searchMaji">
            <input type="text" placeholder="搜尋麻吉ID" class="searchTxt" id="sId"onkeyup="enter();">
            <input type="button" value="搜尋" class="search">
        </div>


        <div class="matchContent">
            <div class="carousel">
                <h1>轉轉找麻吉</h1>
                <img src="images/matchBoard.svg" class="board">
                <div class="matchHorse">
                    <img src="images/matchHorse.svg">
                    <img src="images/matchItem01.svg" class="matchItem mi01">
                    <img src="images/matchItem01.svg" class="matchItem mi02">
                    <img src="images/matchItem01.svg" class="matchItem mi03">
                    <img src="images/matchItem01.svg" class="matchItem mi04">
                </div>
                <div class="matchMem">
                    <div class="memFront">
                        <img src="images/match01.svg">
                        <div id="matchMaji" class="roleBox"></div>
                    </div>
                    <div class="memBack">
                        <img src="images/matchBack.svg" class="back">
                    </div>
                </div>
                <div class="profileInfo proAb">
                    <table>
                        <tr>
                            <th>
                                ID:
                            </th>
                            <td>
                                <span id="mcId"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                默契值:
                            </th>
                            <td>
                                <span class="matchMJ" id="scoreDisplay"></span>
                                <span>/100</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                暱稱：
                            </th>
                            <td>
                                <span id="mcName"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                等級：
                            </th>
                            <td>
                                <span id="mcLv"></span><br>
                                (<span id="mcMJ"></span>)
                            </td>
                          
                        </tr>
                        <tr>
                            <th>
                                興趣:
                            </th>
                            <td>
                                <span id="mcHobby"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                星座：
                            </th>
                            <td>
                                <span id="cons"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                自我介紹：
                            </th>
                            <td>
                                <span id="mcIntro"></span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="btnCol">
                                <button id="btn_beFriend">加為朋友</button>
                            </td>
                    </table>

                </div>
                <div class="selectBtn">
                    <select name="con" id="con">
                        <option value="">隨機星座</option>
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
                    <select name="hob" id="hob">
                        <option value="">隨機興趣</option>
                        <option value="0">打籃球</option>
                        <option value="1">抓寶可夢</option>
                        <option value="2">跑步</option>
                        <option value="3">看電影</option>
                        <option value="4">吃美食</option>
                        <option value="5">游泳</option>
                        <option value="6">唱歌</option>
                        <option value="7">看書</option>
                        <option value="8">爬山</option>
                        <option value="9">健身</option>
                    </select>
                    <button class="matchNext">找麻吉</button>
                </div>
            </div>

        </div>
        <div class="majiRank">
            <div class="rankTitle">
                <h2>麻吉名人榜</h2>
            </div>
            <ul class="rankNav">
                <li class="active">
                    <a href="#tab-1" class="tabControl ">人氣王</a>
                </li>
                <li>
                    <a href="#tab-2" class="tabControl moneyBtn">大富翁</a>
                </li>
                <li>
                    <a href="#tab-3" class="tabControl mjTopBtn">萬人迷</a>
                </li>
            </ul>
            <div class="tabPanel active" id="tab-1">
                <div class="rankContent">
                    <div class=" rankItem rank2">
                        <div id="topFriend02" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 2;
                            topFriend02 = document.getElementById('topFriend02');
                            ooxxGetRole(topFriend02, {
                                animal: ddd,
                                color: '005450',
                                eyes: 3,
                                hat: 1,
                                clothes: 0,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>LV.3 XXX</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                    <div class="rankItem rank2">
                        <div id="topFriend01" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 2;
                            topFriend01 = document.getElementById('topFriend01');
                            ooxxGetRole(topFriend01, {
                                animal: ddd,
                                color: '666666',
                                eyes: 1,
                                hat: 2,
                                clothes: 2,
                            });
                        </script>
                        <div class="rankProfile rank2">
                            <div class="rankTxt">
                                <h3>LV.3 XXX</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                    <div class="rankItem rank2">
                        <div id="topFriend03" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 2;
                            topFriend03 = document.getElementById('topFriend03');
                            ooxxGetRole(topFriend03, {
                                animal: ddd,
                                color: 'ac4937',
                                eyes: 6,
                                hat: 0,
                                clothes: 1,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>LV.3 XXX</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabPanel" id="tab-2">
                <div class="rankContent">
                    <div class="rankItem rank2">
                        <div id="topMoney01" class="roleBox rankRole"></div>
                        <script>
                            topMoney01 = document.getElementById('topMoney01');
                            ooxxGetRole(topMoney01, {
                                animal: <?php echo $moneyRow[0]["animal"]; ?>,
                                color: <?php echo $moneyRow[0]["mColor"]; ?>,
                                eyes: <?php echo $moneyRow[0]["eye"]; ?>,
                                hat: <?php 
                                    if ($moneyRow[0]["wearHat"] == '') {
                                        $moneyRow[0]["wearHat"] = 0;
                                    }
                                    echo $moneyRow[0]["wearHat"]; ?>,
                                clothes: <?php 
                                        if ($moneyRow[0]["wearClothes"] == '') {
                                            $moneyRow[0]["wearClothes"] = 0;
                                        }
                                        echo $moneyRow[0]["wearClothes"]; ?>,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>
                                    <?php echo $moneyRow[0]["mName"]; ?>
                                </h3>
                                <span>
                                    <?php echo $lvArr[0]; ?>
                                </span><br>
                                <span>
                                    <?php echo "MJ(魅力)：" . $moneyRow[0]["mMJ"]; ?>
                                </span><br>
                                <span>
                                    <?php echo "金幣：" . $moneyRow[0]["mCoin"]; ?>
                                </span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                    <div class="rankItem rank2">
                        <div id="topMoney02" class="roleBox rankRole"></div>
                        <script>
                            topMoney02 = document.getElementById('topMoney02');
                            ooxxGetRole(topMoney02, {
                                animal: <?php echo $moneyRow[1]["animal"]; ?>,
                                color: <?php echo $moneyRow[1]["mColor"]; ?>,
                                eyes: <?php echo $moneyRow[1]["eye"]; ?>,
                                hat: <?php 
                                    if ($moneyRow[1]["wearHat"] == '') {
                                        $moneyRow[1]["wearHat"] = 0;
                                    }
                                    echo $moneyRow[1]["wearHat"]; ?>,
                                clothes: <?php 
                                        if ($moneyRow[1]["wearClothes"] == '') {
                                            $moneyRow[1]["wearClothes"] = 0;
                                        }
                                        echo $moneyRow[1]["wearClothes"]; ?>,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>
                                    <?php echo $moneyRow[1]["mName"]; ?>
                                </h3>
                                <span>
                                    <?php echo $lvArr[1]; ?>
                                </span><br>
                                <span>
                                    <?php echo "MJ(魅力)：" . $moneyRow[1]["mMJ"]; ?>
                                </span><br>
                                <span>
                                    <?php echo "金幣：" . $moneyRow[1]["mCoin"]; ?>
                                </span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                    <div class="rankItem rank2">
                        <div id="topMoney03" class="roleBox rankRole"></div>
                        <script>
                            topMoney03 = document.getElementById('topMoney03');
                            ooxxGetRole(topMoney03, {
                                animal: <?php echo $moneyRow[2]["animal"]; ?>,
                                color: <?php echo "'" . $moneyRow[2]["mColor"] . "'"; ?>,
                                eyes: <?php echo $moneyRow[2]["eye"]; ?>,
                                hat: <?php 
                                    if ($moneyRow[2]["wearHat"] == '') {
                                        $moneyRow[2]["wearHat"] = 0;
                                    }
                                    echo $moneyRow[2]["wearHat"]; ?>,
                                clothes: <?php 
                                        if ($moneyRow[2]["wearClothes"] == '') {
                                            $moneyRow[2]["wearClothes"] = 0;
                                        }
                                        echo $moneyRow[2]["wearClothes"]; ?>,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>
                                    <?php echo $moneyRow[2]["mName"]; ?>
                                </h3>
                                <span>
                                    <?php echo $lvArr[2]; ?>
                                </span><br>
                                <span>
                                    <?php echo "MJ(魅力)：" . $moneyRow[2]["mMJ"]; ?>
                                </span><br>
                                <span>
                                    <?php echo "金幣：" . $moneyRow[2]["mCoin"]; ?>
                                </span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabPanel" id="tab-3">
                <div class="rankContent">
                    <div class="rankItem rank2">
                        <div id="topMJ01" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 1;
                            topMJ01 = document.getElementById('topMJ01');
                            ooxxGetRole(topMJ01, {
                                animal: ddd,
                                color: 'fa0',
                                eyes: 1,
                                hat: 2,
                                clothes: 2,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>LV.3 OOO</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                    <div class="rankItem rank2">
                        <div id="topMJ02" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 1;
                            topMJ02 = document.getElementById('topMJ02');
                            ooxxGetRole(topMJ02, {
                                animal: ddd,
                                color: 'fa0',
                                eyes: 1,
                                hat: 2,
                                clothes: 2,
                            });
                        </script>
                        <div class="rankProfile rank1pro">
                            <div class="rankTxt">
                                <h3>LV.3 XXX</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>

                    </div>
                    <div class="rankItem rank2">
                        <div id="topMJ03" class="roleBox rankRole"></div>
                        <script>
                            var ddd = 1;
                            topMJ03 = document.getElementById('topMJ03');
                            ooxxGetRole(topMJ03, {
                                animal: ddd,
                                color: 'fa0',
                                eyes: 1,
                                hat: 2,
                                clothes: 2,
                            });
                        </script>
                        <div class="rankProfile">
                            <div class="rankTxt">
                                <h3>LV.3 XXX</h3>
                                <span>魅力值：300</span><br>
                                <span>金幣：1400</span><br>
                                <span>好友數：207</span><br>
                                <button class="rankBtn">查看個人頁面</button><br>
                                <button class="rankBtn">加為朋友</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        foot_html();
    </script>
    <script src="js/match2.js"></script>
    <script>
        loginphoto = document.getElementById('loginphoto');
        ooxxGetHead(loginphoto, {
            animal: <?php echo $stadRow["animal"]; ?>,
            color: '<?php echo $stadRow["mColor"]; ?>',
            eyes: <?php echo $stadRow["eye"]; ?>,
        })
    </script>

</body>

</html>