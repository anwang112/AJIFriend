<?php
session_start();
// session_destroy();
$memNo =rand(1,3) ;
$_SESSION["matchMaji"] = $memNo;
$errMsg = "";
try {
    require_once("connectBooks.php");
    $sql = "select * from member where memNo = :memNo";
    $sta = $pdo->prepare($sql);
    $sta->bindParam(':memNo',$_SESSION["matchMaji"]);
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
    <script src="node_modules/gsap/src/minified/TweenLite.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
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
    <div class="wrap">

        <div class="searchMaji">
            <input type="text" placeholder="搜尋麻吉ID" class="searchTxt">
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
                        <script>
                            matchMaji = document.getElementById('matchMaji'); 
                            ooxxGetRole(matchMaji,{
                            animal:  <?php  echo  $stadRow["animal"];?>,
                            color: '<?php  echo $stadRow["mColor"];?>',
                            eyes: <?php  echo  $stadRow["eye"];?>,
                            hat: 1,
                            clothes: 1,
                            });
                        </script>
                    </div>
                    <div class="memBack">
                        <img src="images/matchBack.svg" class="back">
                    </div>
                </div>
                <div class="profileInfo">
                    <h2>默契值
                        <span class="matchMJ" id="scoreDisplay"></span>
                        <span>/100</span>
                    </h2>
                    <h3>暱稱：
                        <span class="colorG">
                            <?php  echo  $stadRow["mName"];?>
                        </span><br>
                        <span>LV.2 潛力股 / </span><span>MJ:100</span>
                    </h3>
                    <p>
                        <span>興趣：</span>
                        <span class="colorG">
                            <?php  echo  $stadRow["hobby"];?>
                        </span>
                    </p>
                    <p>
                        <span>星座：</span>
                        <span class="colorG">
                            <?php  echo  $stadRow["constellation"];?>
                        </span>
                    </p>
                    <p>
                        <span>自我介紹：</span>
                        <span class="colorG">
                            <?php  echo  $stadRow["self-intro"];?>
                        </span>
                    </p>
                    <div class="proBtn">
                        <button class="matchNext">下一位</button>
                        <button id="btn_beFriend">加為朋友</button>
                    </div>

                </div>
                <div class="selectBtn">
                    <select>
                        <option value="select">挑星座</option>
                        <option value="">牡羊座</option>
                        <option value="">金牛座</option>
                        <option value="">雙子座</option>
                        <option value="">巨蟹座</option>
                        <option value="">雙子座</option>
                        <option value="">獅子座</option>
                        <option value="">處女座</option>
                        <option value="">天秤座</option>
                        <option value="">天蠍座</option>
                        <option value="">射手座</option>
                        <option value="">摩羯座</option>
                        <option value="">水瓶座</option>
                        <option value="">雙魚座</option>
                    </select>
                    <select>
                        <option value="select">挑興趣</option>
                        <option value="">打籃球</option>
                        <option value="">打電動</option>
                        <option value="">游泳</option>
                        <option value="">看電影</option>
                        <option value="">唱歌</option>
                        <option value="">玩音樂</option>
                        <option value="">爬山</option>
                        <option value="">騎單車</option>
                    </select>
                    <input type="button" value="送出">
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
                    <div class="rankItem rank1">
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
                    <div class="rankItem rank3">
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
                                var ddd = 2;
                                topMoney01 = document.getElementById('topMoney01');
                                ooxxGetRole(topMoney01, {
                                    animal: ddd,
                                    color: '6ccc66',
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
                    <div class="rankItem rank1">
                            <div id="topMoney02" class="roleBox rankRole"></div>
                            <script>
                                var ddd = 1;
                                topMoney02 = document.getElementById('topMoney02');
                                ooxxGetRole(topMoney02, {
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
                    <div class="rankItem rank3">
                            <div id="topMoney03" class="roleBox rankRole"></div>
                            <script>
                                var ddd = 1;
                                topMoney03 = document.getElementById('topMoney03');
                                ooxxGetRole(topMoney03, {
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
                    <div class="rankItem rank1">
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
                    <div class="rankItem rank3">
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

        <script type="text/javascript">
            foot_html();
        </script>
        <script src="js/match2.js"></script>
        <script>
						loginphoto = document.getElementById('loginphoto');
						ooxxGetHead(loginphoto, {
							animal:  <?php  echo  $stadRow["animal"];?>,
							color: '<?php  echo $stadRow["mColor"];?>',
							eyes: <?php  echo  $stadRow["eye"];?>,
						})
					</script>

</body>

</html>