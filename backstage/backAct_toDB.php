<?php
    //跟資料庫要資料
    $actObj = json_decode($_REQUEST["actObj"]); 
    $actDele = json_decode($_REQUEST["actDele"]); 
    $actRe = json_decode($_REQUEST["actRe"]); 
    $actObjDelCheck = json_decode($_REQUEST["actObjDelCheck"]); 
    
    try {
        require_once("../connectBooks.php");
        //總筆數
        $sqlactNo = "select * from activity where host_memNo != 1 ";
        $result = $pdo->query($sqlactNo);
        $totalRecord =  $result ->rowCount();
        
            //每頁有幾筆
        $recPerPage = 10;
        //共有幾頁
        $totalPage = ceil($totalRecord/$recPerPage);  //    
        //設定好要開始抓取的位置
        if(isset($_GET["pageNo"])==false){
            $pageNo=1;
        }else{//有提供pageNo
            $pageNo=$_GET["pageNo"];
        }
        $start = ($pageNo-1) * $recPerPage;


        //所有
        $sql = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND `showOrNot` = '1' order by a.actNo limit $start,$recPerPage";
        
        $activityAll = $pdo->query($sql); 
        $activityAll -> bindColumn("actNo", $actNo); 
        $activityAll -> bindColumn("host_memNo", $host_memNo);      
        $activityAll -> bindColumn("actTitle", $actTitle);
        $activityAll -> bindColumn("actLoc", $actLoc);
        $activityAll -> bindColumn("act_begin", $act_begin);
        $activityAll -> bindColumn("act_end", $act_end);
        $activityAll -> bindColumn("actIntro", $actIntro);
        $activityAll -> bindColumn("actImg", $actImg);
        $activityAll -> bindColumn("mName", $mName);



        //搜尋
        class data{
            public $no;
            public $memNo;
            public $title;
            public $loc;
            public $begin;
            public $end;
            public $actIntro;
            public $img;
            public $memName;
        }

        if($_REQUEST["actObj"]){
            // switch($actObj) {
            //     case "1":
            //         // $sqlSearch_actNO = "SELECT * FROM activity where actNo = :actNo";
            //         // $activityPDO = $pdo->query($sql); 
            //         // $activityPDO -> bindValue(":actNo", $actObj -> actValue );
            //         break;
            //     // case "2":
            //     //     $sqlSearch_actTitle = "SELECT * FROM activity where actTitle = :actTitle";
            //     //     $activityPDO = $pdo->query($sql); 
            //     //     $activityPDO -> bindValue(":actTitle", $actObj -> actValue );
            //     //     break;
            //     // case "3":
            //     //     $sqlSearch_mName = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo where mName = :mName";
            //     //     $activityPDO = $pdo->query($sql); 
            //     //     $activityPDO -> bindValue(":mName", $actObj -> actValue );
            //     //     break;
            //     default:
            //         $sendTxt =  "沒有找到" ;
            //         echo $sendTxt;
            //   }
            $sqlSearch_actNO = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND actNo = :actNo";
            $aa = $pdo->prepare($sqlSearch_actNO); 
            $aa -> bindValue(":actNo",  $actObj -> actValue);
            $aa -> bindColumn("actNo", $actNo); 
            $aa -> bindColumn("host_memNo", $host_memNo);      
            $aa -> bindColumn("actTitle", $actTitle);
            $aa -> bindColumn("actLoc", $actLoc);
            $aa -> bindColumn("act_begin", $act_begin);
            $aa -> bindColumn("act_end", $act_end);
            $aa -> bindColumn("actIntro", $actIntro);
            $aa -> bindColumn("actImg", $actImg);
            $aa -> bindColumn("mName", $mName);
            $aa -> execute();
    
              $aaR = $aa ->  fetch(PDO::FETCH_ASSOC);
              $aDB = new data ;
              
              $aDB -> no =  $actNo;
              $aDB -> memNo = $host_memNo;
              $aDB -> title = $actTitle;
              $aDB -> loc = $actLoc;
              $aDB -> begin = $act_begin;
              $aDB -> end =  $act_end;
              $aDB -> actIntro =  $actIntro;
              $aDB -> img = $actImg;
              $aDB -> memName = $mName;
    
    
              $send = json_encode($aDB);
              echo  $send ;
        }

        //活動刪除(欄位showOrNot設為0)
        if($_REQUEST["actDele"]){
            $sqlDelete_actNO = "UPDATE `activity` SET `showOrNot` = '0' WHERE `activity`.`actNo` = :actNo ";
            $bb = $pdo -> prepare($sqlDelete_actNO); 
            $bb -> bindValue(":actNo",  $actDele -> actNo);
            $bb -> execute();

            echo "1"; //成功刪除

        }
        
        if($_REQUEST["actRe"]){
            $sqlre_actNO = "UPDATE `activity` SET `showOrNot` = '1' WHERE `activity`.`actNo` = :actNo ";
            $cc = $pdo -> prepare($sqlre_actNO); 
            $cc -> bindValue(":actNo",  $actRe -> actNo);
            $cc -> execute();

            echo "1"; //成功刪除

        }

        //新增活動
        if($_POST["newAct"]){
            echo 1;
            $actTitle = $_POST["actTitle"];
            $actIntro = $_POST["actIntro"];
            $actLoc = $_POST["actLoc"];
            $act_begin = $_POST["act_begin"];
            $act_end = $_POST["act_end"];
            $actImg = $_FILES["act_holdActFile"]["name"];
            $act_memNo= $_POST["memNo"];


            $sql_newAct = "insert into `activity`(`actNo`, `host_memNo`, `actTitle`, `actLoc`, `actImg`, `act_begin`, `act_end`, `actIntro`) VALUES (null,'1','$actTitle',' $actLoc','$actImg','$act_begin','$act_end','$actIntro')";
            $activity = $pdo ->query($sql_newAct);
    
            //上傳檔案處理
        
            $from = $_FILES["act_holdActFile"]["tmp_name"];
            $to = "../images/" . $_FILES["act_holdActFile"]["name"];
            copy($from,$to);
            header('Location:backAct.php');
    
        }

        if($_REQUEST["actObjDelCheck"]){
            
            $sqlCheck = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND `showOrNot` = '0' ";
            $aa = $pdo->prepare($sqlCheck); 
            $aa -> execute();
            // echo "123456";
            if( $aa->rowCount()==0){ //沒有刪除的活動
                echo "123";
            }else{ //有刪除的活動 塞值進去
                $list=[];
                $i=0;
                while($aaR = $aa -> fetch(PDO::FETCH_ASSOC)){
                    $num = 1;
                    foreach( $aaR as $key => $value ){
                        if($num==1){
                            $list[$i] = $value;
                            $num++;
                        }else{
                            $list[$i] .= ',' . $value;
                        }
                    }
                    $i++;
                }
                // echo 1;
                class data2{
                    public $arr;
                }
                $info = new data2();
                $info -> arr = $list;
                $send = json_encode($info);
                echo $send;
                // echo $send;

            }

        }
    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
