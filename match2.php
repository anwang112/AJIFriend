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
    <script src="js/package/gsap/src/minified/TweenLite.min.js"></script>
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
    <div class="alertWrap">
        <div class="alert">
            <p id="alertText">今天的愛心已經用完囉！</p>
            <p>
            <button id="alertBtn">確定</button>
            </p>
        </div>
    </div>
    <div class="searchWrap">
        <div id="searData">
            <div class="searchClose"></div>
            <div class="sRole">
                <div id="topMoney05" class="roleBox sRoleBox"></div>
            </div>

            <div class="profileInfo serPro">
                <table>
                <input type="hidden"value=""id="sMemNo">
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
                            魅力等級:
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
                            興趣：
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
                            <span id="sIntro"></span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="btns">
                            <button class="btn_beFriend0 btn">成為麻吉</button>
                            <button id="report">檢舉麻吉</button>
                        </td>
                </table>
            </div>
        </div>
        <div id="reportData">
            <div class="searchClose reportClose"></div>
            <table>
                <tr>
                    <th>檢舉人ID：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>檢舉對象ID：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>檢舉時間：</th>
                    <td></td>
                </tr>
                <tr>
                    <th>檢舉原因：</th>
                    <td class="nop">
                        <textarea  id="fname" cols="25" rows="4"placeholder="請輸入檢舉原因(20字)"onkeydown="this.value=this.value.substr(0,20)"></textarea>
                    </td>
                </tr>
                <tr>
                    <th class="nop"></th>
                    <td class='nop'>
                        <button id="reportSmt">送出</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>
    </div>
    <div class="wrap">
        <div class="searchMaji">
            <input type="text" placeholder="搜尋麻吉ID" class="searchTxt" id="sId" onkeyup="enter();">
            <button class="search">搜尋</button>
        </div>


        <div class="matchContent">
            <div class="carousel">
                <h1>轉轉找麻吉</h1>
                <div class="heart">
                    <span>今日可找麻吉數：</span>
                    <div class="heartItem"></div>
                    <div class="heartItem"></div>
                    <div class="heartItem"></div>
                </div>
                <img src="images/matchBoard.svg" class="board">
                <div class="matchHorse">
                    <img src="images/matchHorse.svg">
                    <img src="images/matchItem01.svg" class="matchItem mi01">
                    <img src="images/matchItem01.svg" class="matchItem mi02">
                    <img src="images/matchItem01.svg" class="matchItem mi03">
                    <img src="images/matchItem01.svg" class="matchItem mi04">
                </div>
                <div class="matchMem">
                <canvas id="drawing_canvas"></canvas>
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
                        <input type="hidden"value=""id="matchMemNo">
                        <tr>
                            <th>
                                ID：
                            </th>
                            <td>
                                <span id="mcId"></span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                默契值：
                            </th>
                            <td>
                                <span class="matchMJ pink" id="scoreDisplay"></span>
                                <span class="pink">/100</span>
                                <div id="MJstatus"></div>
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
                                興趣：
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
                                <button class="btn_beFriend1 btn">成為麻吉</button>
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
                <li class="active" id="topFriend">
                    <a href="#tab-1" class="tabControl ">人氣王</a>
                </li>
                <li id="topMoney">
                    <a href="#tab-2" class="tabControl moneyBtn">大富翁</a>
                </li>
                <li id="topMJ">
                    <a href="#tab-3" class="tabControl mjTopBtn">萬人迷</a>
                </li>
            </ul>
            <div class="tabPanel active" id="tab-1">
                <div class="rankContent">
                    <div class=" rankItem fans">
                        <div id="topFriend0" class="roleBox rankRole"></div>
                        
                        <input type="hidden"value=""class="rankNo0">
                        <div class="rankTxt0 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo0">查看個人頁面</button><br>
                            <button class="rankFriendBtn0 btn">成為麻吉</button>
                        </div>
                        
                    </div>
                    <div class="rankItem fans">
                        <div id="topFriend1" class="roleBox rankRole"></div>
                        
                        <input type="hidden"value=""class="rankNo1">
                        <div class="rankTxt1 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo1">查看個人頁面</button><br>
                            <button class="rankFriendBtn1 btn">成為麻吉</button>
                        </div>
                        
                    </div>
                    <div class="rankItem fans">
                        <div id="topFriend2" class="roleBox rankRole"></div>
                        
                        <input type="hidden"value=""class="rankNo2">
                        <div class="rankTxt2 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo2">查看個人頁面</button><br>
                            <button class="rankFriendBtn2 btn">成為麻吉</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="tabPanel" id="tab-2">
                <div class="rankContent">
                    <div class="rankItem moneyS">
                        <div id="topMoney0" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo0">
                        <div class="rankTxt0 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo0">查看個人頁面</button><br>
                            <button class="rankFriendBtn0 btn">成為麻吉</button>
                        </div>
                    </div>
                    <div class="rankItem moneyS">
                        <div id="topMoney1" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo1">
                        <div class="rankTxt1 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo1">查看個人頁面</button><br>
                            <button class="rankFriendBtn1 btn">成為麻吉</button>
                        </div>
                    </div>
                    <div class="rankItem moneyS">
                        <div id="topMoney2" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo2">
                        <div class="rankTxt2 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo2">查看個人頁面</button><br>
                            <button class="rankFriendBtn2 btn">成為麻吉</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabPanel" id="tab-3">
                <div class="rankContent">
                    <div class="rankItem MJs">
                        <div id="topMJ0" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo0">
                        <div class="rankTxt0 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo0">查看個人頁面</button><br>
                            <button class="rankFriendBtn0 btn">成為麻吉</button>
                        </div>
                    </div>
                    <div class="rankItem MJs">
                        <div id="topMJ1" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo1">
                        <div class="rankTxt1 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo1">查看個人頁面</button><br>
                            <button class="rankFriendBtn1 btn">成為麻吉</button>
                        </div>
                        

                    </div>
                    <div class="rankItem MJs">
                        <div id="topMJ2" class="roleBox rankRole"></div>
                        <input type="hidden"value=""class="rankNo2">
                        <div class="rankTxt2 rankTxtCs">
                            <h3></h3>
                            <h4></h4>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <span></span><br>
                            <button class="rankBtn showInfo2">查看個人頁面</button><br>
                            <button class="rankFriendBtn2 btn">成為麻吉</button>
=======
                            <button class="btn_beFriend10">成為麻吉</button>
>>>>>>> origin/ga
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/match2.js"></script>
    <script type="text/javascript">
        foot_html();
    </script>
    


</body>

</html>