<?php
    //跟資料庫要資料
    $actObj = json_decode($_REQUEST["actObj"]); 
    try {
        require_once("../connectBooks.php");

        //所有
        $sql = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo order by a.actNo ";
        
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
              $sqlSearch_actNO = "SELECT * FROM activity where actNo = :actNo";
              $activityPDO = $pdo->prepare($sqlSearch_actNO); 
              $activityPDO -> bindValue(":actNo", 1);
              $aa -> execute();

                $aaR = $activityPDO -> fetch(PDO::FETCH_ASSOC);
                $aDB = new data ;
    
                for($i=0;$i<$aaR.length;$i++){
                    $aDB -> no = $aaR["actNo"];
                    $aDB -> memNo = $aaR["host_memNo"];
                    $aDB -> title = $aaR["actTitle"];
                    $aDB -> loc = $aaR["actLoc"];
                    $aDB -> begin = $aaR["act_begin"];
                    $aDB -> end = $aaR["act_end"];
                    $aDB -> actIntro = $aaR["actIntro"];
                    $aDB -> img = $aaR["actImg"];
                }
                $send = json_encode($aDB);
                echo  $send ;
        }
  



    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
