<?php 

    ob_start();
    // session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" href="css/match2.css">
    <link rel="stylesheet" href="css/activity2.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/chatStyle.css">
    <link rel="stylesheet" href="css/activity_final.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/package/gsap/src/minified/TweenMax.min.js"></script>
    <script src="js/package/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>
    <script src="js/package/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
    <script src="js/package/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script> 
    <script src="js/package/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>
    <script src="js/commonPart.js"></script>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    
    <!-- <script src="js/commonPart.js"></script> -->
    <style>
    .commentHead{
        max-width: 8%;
    }
    .commentItem{
    display: flex;
    align-items: center;
    padding: 5px 0;
    }
    .commentName{    
        margin-bottom: 10px;
        color: brown;
    }


    </style>
    <title>活動巴士</title>
    
</head>
<body>
    <script type="text/javascript">
        head_html();
        
    </script>
    <!-- 呼叫php撈資料 -->
    <?php  require_once('act.php'); ?>

        <!-- 阿吉 -->
        <div id="Agee">
            <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;" xml:space="preserve">
            <style type="text/css">
            .st0{fill:#7E665C;stroke:#040000;stroke-miterlimit:10;}
            .st1{fill:#7F675C;stroke:#040000;stroke-miterlimit:10;}
            .st2{fill:#DCD1BC;}
            .st3{fill:#FFFFFF;}
            .st4{fill:#2B102E;}
            </style>
            <path id="handR" class="st1" d="M405.5,373.7c-2.4,2-2.6,4.3-1.7,6s1.5,3,1.6,3.9c0.1,0.9-1.2,2.4-2.9,3.3c-1.1,0.6-5.3,3.2-8.2,4.6
            c-8.8,6-18.9,13.8-27.1,20.6c-12.4,10.3-30.4,35-29.4,47.8c0.2,1.9,2,6.8,2,6.8s8.7-5.5,29.7-19.1c25.5-16.5,44.4-28.5,56-42.4
            c11.7-13.9,11.9-17.6,11.5-20.7c-0.4-3.2-2.8-10.7-6.1-12.5c-3.3-1.7-8.4,0.4-11,2.3c-2.6,1.9-6.9,4.7-6.9,4.7
            c0.5-0.9-0.5-4.1-1.5-4.7C410.6,373.6,407.9,371.6,405.5,373.7z"/>
            <path class="st1" d="M350.9,585.3c0,0-0.5-1.1-0.4-4c0.1-2.9-1.8-52.2-1.8-52.2S348,525,344,524c-9.2-2.3-10.9-2-17.5,0.4
            c-10.7,3.9-20.3,11.7-21.5,23.6c0,0,0.7,5,0.7,5c0.1,1.2,3.5,45.3,3.9,46.8s3,8.3,11.4,11s36.5,1.2,36.5,1.2s8.8-2.4,8.9-7.1
            s-0.4-6.6-3.2-9.9C360.4,591.6,350.9,585.3,350.9,585.3z"/>
            <path class="st1" d="M235.6,531.7c7.7-14.2,22.9-11.7,29-11.5c13,0.4,12.8,17,13.6,26.1c0,0.2-0.1,0.4-0.1,0.7
            c-0.1,1.7,1.4,46.9,0.8,51.3c-0.6,4.4,0.8,3.2,2.8,4.1c2,1,9.2,5.6,13,15.1c3.8,9.5-9.4,10.2-10.4,10.5c-1,0.3-29.2,0.3-33-1
            c-3.8-1.3-12.7-4.6-13.8-11.9c-1-7.3-3.2-46.7-3.2-46.7S231.9,538.6,235.6,531.7z"/>
            <path class="st1" d="M349.2,541.6c10.6-14.7,12.3-28.1,15.3-70.1c0.5-7.4,0.3-7.5-1-13c-1.2-4.9-7.3-14.5-9-18
            c-4.7-9.9-6.8-15-6.8-15H238.9c0,0-2.4,4-5.4,9c-4.1,6.8-5,8.7-7,12c-0.9,1.6-3.6,5.2-4,8c-2,13-0.7,25.1-1,35c-1,39,12,52.9,13,54
            c0.1,0.1,15.9,13.4,24.1,17c6.3,2.8,19,3.6,21.1,3.7c2.1,0.1,25.2-0.2,25.2-0.2s19-2.1,26.7-6.3C338,554.1,343.5,549.5,349.2,541.6z
            "/>
            <path class="st1" d="M221.1,544.5c1.1-2.9,0.2-5-1.4-6c-1.6-1.1-2.7-1.9-3.2-2.7c-0.5-0.8-0.1-2.7,1-4.3c0.7-1.1,3.1-5.4,5-8
            c4.9-9.5,10-21.1,14-31c6-15,10-45.3,3-56c-1.1-1.6-5-5-5-5s-5,9-17,31c-14.6,26.7-25.4,46.2-29,64c-3.6,17.8-2.1,21.1-0.2,23.7
            c1.9,2.6,7.6,8.1,11.3,8c3.7-0.1,7.2-4.4,8.6-7.3s2.8-6.3,2.8-6.3s3.4,2.2,4.5,2.3C216.7,547,220,547.5,221.1,544.5z"/>
            <path class="st2" d="M289,514.4c0,0,8.6,10.8,21.6,12.8c12.9,2,27.9-2.7,32.5-12.8c4.6-10.2,8.3-40.1-9.5-51.8
            c-17.8-11.8-35.1-3.5-38.2,0c-3.2,3.5-11.2,12.7-10.9,25.6C284.7,501,286.1,508.4,289,514.4z"/>
            <g>
            <path class="st1" d="M393.1,272.2c-5-9-11-16.9-17.8-23.6c4.1-2.4,8.7-7.9,5-14.1c-5.5-9.2-14-10.2-20.8-6.2
            c-2.5,1.5-3.7,3.2-4.1,4.8c-12.9-7.9-26.7-12.7-39.4-14.5c-27-4-63.7,0.7-91.3,11.3c-1.6,0.6-3.2,1.3-4.7,2.1
            c-0.6-1.3-1.7-2.5-3.7-3.7c-6.8-4-15.2-3-20.8,6.2c-3.3,5.6,0.1,10.5,3.7,13.2c-16.4,16.6-28.6,39.5-29.2,52.8
            c-1,19.7-13.3,73,33.5,112c0,0,13.5,14,32.5,18.7c19,4.7,90.7,8.7,115.3-5.3c24.7-14,41-27.3,48.3-54.3S411.1,304.9,393.1,272.2z"
            />
            <g>
            <path class="st3" d="M272.9,355.5c0,0-7.2,7.5-3.2,13.9c4.1,6.4,11.8,10.3,22.3,11.7c10.5,1.4,46.6,3.1,57.9-2
                c11.3-5,17.8-16.2,13-23.7s-28.8-16.7-44.6-15.9S281,346.5,272.9,355.5z"/>
            <path class="st4" d="M308.9,337.7c0,0,0,6.4,4.1,9.8s10.7,3.1,13.5,0c2.8-3.1,4.8-11.2,3-13.7C327.8,331.3,308.1,329,308.9,337.7z
                "/>
            <g>
                <circle class="st3" cx="279.4" cy="318.5" r="25.2"/>
                <circle class="st3" cx="356" cy="317.5" r="25.2"/>
                <circle id="eyeL" class="st4" cx="286.5" cy="318.3" r="13.4"/>
                <circle id="eyeR" class="st4" cx="349.8" cy="319.3" r="13.4"/>
                <path class="st4" d="M361,275.6c0,0-32.9,14-33.9,22s65.9-11,63.9-17S361,275.6,361,275.6z"/>
                <path class="st4" d="M272.2,275.6c0,0,32.9,14,33.9,22s-65.9-11-63.9-17S272.2,275.6,272.2,275.6z"/>
            </g>
            </g>
            </g>
            </svg>
        </div>

        <!-- 活動頁第一屏 巴士動畫 -->
        <div id="wrap1" class="wrap1">
            <div class="act_section01">
                <h1 >聯聯誼揪揪團<br><span>官方活動區</span></h1>
                <?php $activityBUS -> fetch(PDO::FETCH_ASSOC)?>
                <input id="totalbus" type="hidden" value = "<?php echo $totalbus ?>">
                <div class="act_mainbox">
                    <div class="imgBox" >
                        <img id="imgBoxImg" src="images/<?php echo $actImg ;?>" alt="這個換掉"> 
                    </div>
                    <div class="btnbox">
                        <span id="btn_actL"><input id="box_actNoA" type="hidden" value="<?php echo $actNo ;?>"></span>
                        <span id="btn_actR"><input id="box_actNoB" type="hidden" value="<?php echo $actNo ;?>"></span>
                    </div>
                </div>
                <div class="act_bg_moving01"></div>
                <img  id="act_bus" class="act_bus" src="images/activity/act_bus.svg" alt="bus">

                <div id="lightbox_act" class="lightbox_act">
                    <div id="lightbox_act_info" class="lightbox_act_info">
                    <div id="indexActCloseBtn03" class="lightBoxXX"></div>
                        <?php if($actImg == null){?>
                            <img id="imgBoxImg_B" src="images/act_number02B.svg" alt="資料庫預設圖">
                        <?php }else{ ?>
                            <img id="imgBoxImg_B" src="images/activity/<?php echo $actImg ;?>" alt="資料庫拿圖">
                        <?php }?>
                        <!-- <img id="imgBoxImg_B" src="" alt=""> -->

                        <div class="spanbox">                       
                            <p id="box_title"> <?php echo $actTitle ?> </p>
                            <p id="box_Intro">活動說明: <?php echo $actIntro ?></p>
                            <!-- <span>人數：</span> -->
                            <span>時間：<?php echo  substr($act_begin,0,10) ; ?></span>
                            <span id="box_Loc">地點：<?php echo $actLoc ?></span>  
                            <!-- <span>獎勵：100MJ</span>  -->
                        </div>
                        <button id="btn_Actjoin" class="btn btn_Actjoin">立即參加</button> 
                        <input id="box_actNo" type="hidden" value="<?php echo $actNo ;?>">
                        <input id="userInput01" type="hidden" value="<?php if(isset($_SESSION["memNo"])){echo $_SESSION["memNo"];}?>" > 
                        <!-- 之後把會員存在這個value -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 活動頁第二屏 活動瀏覽(tab A)與個人活動區(tab B) -->
        <div class="wrap2">
            <div class="act_section02">
                <div class="act_tabBar">
                    <span id="tab_allAct">所有活動</span>  <!-- 活動瀏覽(tab A) -->
                    <span id="tab_myAct">我的活動</span>  <!-- 個人活動區(tab B) -->
                    <button id="btn_holdAct" class="btn">舉辦活動</button>
                </div>
                <div id="partA" class="partA">
                    <h2 id="posH2">熊麻吉們的主辦活動</h2>
                    <div id="act_memberHold" class="act_memberHold"><?php $i = 1;?>
                        <?php while($activityMemHold ->fetch(PDO::FETCH_ASSOC)){?>
                        <div id="Hold_box" class="act_memberHold_box act_memberHold_box<?php echo $i?>">
                            <?php if($actImg == null){?>
                               <div class="Hold_box_img" style="background-image: url('images/act_number02B.svg');"></div>
                            <?php }else{ ?>
                                <div class="Hold_box_img" style="background-image: url('images/<?php echo $actImg ;?>');"></div>
                            <?php }?>
                            <div class="act_memberHold_join">
                                <button class="btn_ActJoin btn" value="<?php echo $actNo ;?>" onclick="allAct_more(<?php echo $actNo ;?>);"> 查看更多 </button>
                                <input type="hidden" id="act_actTitleV<?php echo $actNo?>" value="<?php echo $actTitle ;?>">
                                <input type="hidden" id="act_actNoV<?php echo $actNo?>" value="<?php echo $actNo ;?>">
                                <input type="hidden" id="act_host_memIdV<?php echo $actNo?>" value="<?php echo $hostId ;?>">
                                <input type="hidden" id="act_actLocV<?php echo $actNo?>" value="<?php echo $actLoc ;?>">
                                <input type="hidden" id="act_act_beginV<?php echo $actNo?>" value="<?php echo $act_begin ;?>">
                                <input type="hidden" id="act_act_endV<?php echo $actNo?>" value="<?php echo $act_end ;?>">
                                <input type="hidden" id="act_actIntroV<?php echo $actNo?>" value="<?php echo $actIntro ;?>">
                                <input type="hidden" id="act_actImgV<?php echo $actNo?>" value="<?php echo $actImg ;?>">
                            </div>
                            <h3><?php echo $actTitle ; ?></h3>
                            <div class="spanbox">
                                <span>發起人：<?php echo $hostId ;?></span>
                                <span>地點：<?php echo $actLoc ; ?></span>
                                <span>時間：<?php echo  substr($act_begin,0,10) ; ?>至<?php echo substr($act_end,0,10);?></span>
                            </div>
                        </div><?php $i++;?>
                        <?php } ?>

                        <div id="act_tab_pages" class="act_tab_pages"> <!-- 要改成動態新增 -->
                            <?php
                            //印可連結的頁數資料
                            // echo "<span><a href='?pageNo=1'>first page</a></span>";
                            for($i=1; $i <= $totalPage;$i++){
                                echo "<span><a href='?pageNo=$i#posH2'>",$i,"</a></span>";
                            }
                            // echo "<span><a href='?pageNo=$totalPage'>last page</a></span>";
                            ?>
                        </div>                  
                    </div>
                </div>


                <div id="partB" class="partB">
                    <h2>已報名活動</h2>
                    <div id="partB_top" class="partB_top">
                    <!-- 呼叫php撈資料 -->
                    
                    </div>
  
                </div>
            </div>

            <div id="lightbox_holdact" class="lightbox_holdact">
                <div id="lightbox_holdact_info" class="lightbox_holdact_info">
                <div id="indexActCloseBtn02" class="lightBoxXX"></div>
                    <h2>舉辦活動</h2>
                    <form action="actInser.php" method="post" enctype="multipart/form-data">
                        <div class="holderPic">
                            <label class="label1" for="">Step1_上傳圖片<br>
                                <input type="file" id="act_holdActFile"  name="act_holdActFile">
                            </label>
                            <div class="act_holdActFileBox">
                                
                                <img id="act_holdActFileBox" src="" alt="">
                            </div>
                        </div>
                        
                        <label class="label2" for="">Step2_填寫活動介紹<br>
                            <input type="text" class="input_R" name="actTitle" placeholder="活動名稱" required="required">
                            <input id="actIntro" type="text" class="input_R" name="actIntro" placeholder="活動介紹" required="required">
                            <input type="text" class="input_R" name="actLoc" placeholder="地點" required="required">
                            <input type="date" class="input_R" name="act_begin" placeholder="開始時間" required="required">
                            <input type="date" class="input_R" name="act_end" placeholder="結束時間" required="required">
                            <input type="submit" class="btn" placeholder="確定">
                        </label>
                    </form>
                    
                    <!-- <div class="act_holdActFileBox"><div id="act_holdActFileBox" style="" >--活動圖片--</div></div> -->
                    <script type="text/javascript">
                        function $id(id){
                            return document.getElementById(id);
                        }	
                        function initss(){
                            $id("act_holdActFile").onchange = function(e){
                                var file = e.target.files[0];
                                var reader = new FileReader();
                                reader.onload = function(){
                                    // alert(reader.result);
                                    // var act_holdActFileBox = $id('act_holdActFileBox');
                                    $id("act_holdActFileBox").src = reader.result;
                                    // act_holdActFileBox.style.cssText = `
                                    // background-image: url('images/activity/${reader.result});
                                    // `;
                                    // "background-image: url('images/activity/" + reader.result + "');" ";
                                }
                                reader.readAsDataURL(file);
                            }
                        }	
                        window.addEventListener("load", initss, false);	
                    </script>

                </div>
            </div>

            <!-- 活動的 動態燈箱 -->
            <div id="lightbox_actsCheckout_outside" class="lightbox_actsCheckout_outside">

                <div id="lightbox_actsCheckout" class="lightbox_actsCheckout">
                <div id="indexActCloseBtn" class="lightBoxXX"></div>
                    <div class="acts_lightbox_top">
                        <div id="acts_lightbox_topImg" class="acts_lightbox_topImg" style="background-image: url('');"></div>
                        <!-- <img id="acts_lightbox_top_img" src="images/activity/act_number01B.svg" alt="活動圖 要寫成動態寫入">     -->
                        <div id="acts_lightbox_top_right" class="acts_lightbox_top_right">
                            <h3>攀岩聯聯看</h3>
                            <span class="spanbox_title">發起人</span><span class="spanbox_content"></span>
                            <span class="spanbox_title">地點</span><span class="spanbox_content"></span>
                            <span class="spanbox_title">時間</span><span class="spanbox_content"></span>
                            <span class="spanbox_title" >活動介紹</span><span class="spanbox_content" id="spanbox_title_context"></span>
                            <!-- <span id="actJoinCount">人數:{{}}</span> -->
                            <!-- <span class="spanbox_title">獎勵</span> -->
                        </div>
                    </div>
                    <div class="acts_lightbox_down">
                         <button id="btn_ActJoinToDB" class="btn">報名</button>
                            <input  type="hidden" id ="lightBox_actNo"value="">
                            <input id="userInput03" type="hidden" value="<?php if(isset($_SESSION["memNo"])){ echo $_SESSION["memNo"];}?>"> <!-- 之後把會員存在這個value -->
                        <!-- <span id="msgtitle">留言區</span> -->
                        <div id="myMessagebox" class="messagebox">

                        </div>
                        <div class="headBoxFather">
                            <div class="headBox" id="theUser"></div>
                        </div>
                        <input id="myMessagebox_input" class="input_R" type="text" placeholder="<?php if(isset($_SESSION["memNo"])){ echo $_SESSION["mName"];}?>  回覆留言">
                        <input id="myMessagebox_inputNone" class="input_R" type="hidden" placeholder="回覆留言" value="">
                        <input type="button" class="btn btn_myMessagebox" value="送出留言">
                        <input id="userInput04" type="hidden" value="<?php if(isset($_SESSION["memNo"])){echo $_SESSION["memNo"];}?>">
                    </div>
                </div>
            </div>

        </div>
    <script type="text/javascript">
        foot_html();
    </script>
    <script src="js/activity2.js"></script>
</body>
</html>