<?php
require_once("connectBooks.php");
try {
    if(isset($_REQUEST["JoinActObj"])){// 報名活動 --新增資料   
        //跟資料庫要資料
        $JoinActObj = json_decode($_REQUEST["JoinActObj"]); //把字串轉回物件
        // $sqlActJoinCheck ="select * FROM `activity_order` WHERE order_memNo = 2 AND actNo = 8 ";
        $sqlActJoinCheck ="select * FROM `activity_order` WHERE order_memNo = :order_memNo AND actNo = :actNo";
        // $checkResult = $pdo -> query($sqlActJoinCheck);
        $checkResult = $pdo -> prepare($sqlActJoinCheck);
        $checkResult -> bindValue(":actNo", $JoinActObj -> actNo);
        $checkResult -> bindValue(":order_memNo", $JoinActObj -> member);
        $checkResult -> execute();
        $num = $checkResult -> rowCount();

        class data{
            public $DBmsg;
        }

        if( $num == 0 ){//沒查到 可新增
            $sqlActJoin = "insert INTO `activity_order` (`act_orderNo`, `order_memNo`, `actNo`, `order_time`) VALUES (NULL, :order_memNo, :actNo, :order_time);";
    
            $JoinAct = $pdo -> prepare($sqlActJoin);
            $JoinAct -> bindValue(":order_memNo", $JoinActObj -> member);
            $JoinAct -> bindValue(":actNo", $JoinActObj -> actNo);
            $JoinAct -> bindValue(":order_time", '2019-02-06');  
            $JoinAct -> execute();
            


            $JoinActBackToJs = new data;
            $JoinActBackToJs -> DBmsg = '1111' ;//可新增
            
            $send = json_encode($JoinActBackToJs);
            echo$send;

        }else{//有查到已參加該活動

            $JoinActBackToJs = new data;
            $JoinActBackToJs -> DBmsg = '2222' ;//不可新增 會員已該報名

            $send = json_encode($JoinActBackToJs);
            echo$send;
        }

            
    }else{//取消活動報名  -- 刪除資料   
        $CancelActObj = json_decode($_REQUEST["CancelActObj"]);
        //跟資料庫要資料
        
        class data{
            public $DBmsg;
        }

        $sqlDelJoin = "DELETE FROM `activity_order` WHERE `order_memNo` = :order_memNo AND `actNo` = :actNo ";

        $CancelAct = $pdo -> prepare($sqlDelJoin);
        $CancelAct -> bindValue(":order_memNo", $CancelActObj -> member);
        $CancelAct -> bindValue(":actNo", $CancelActObj -> actNo); 
        $CancelAct -> execute();
        
        echo '11111' ;
            


    }
} catch (PDOException $e) {
    echo "錯誤 : ", $e -> getMessage(), "<br>";
    echo "行號 : ", $e -> getLine(), "<br>";
}


?> 