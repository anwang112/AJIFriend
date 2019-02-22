<?php

    
    try {
        //跟資料庫要資料
        require_once("connectBooks.php");
        //已報名活動
        $sqlmemJoin = "select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";
        //
        //select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo

        
        // $activitmemJoin = $pdo->query($sqlmemJoin); 
        $activitmemJoin = $pdo->prepare($sqlmemJoin); 
        $activitmemJoin -> bindValue(":member",$_SESSION["memNo"]); 
        //之後要改成bindParam
        $activitmemJoin -> bindColumn("act_orderNo", $act_orderNo); 
        $activitmemJoin -> bindColumn("order_memNo", $order_memNo);      
        $activitmemJoin -> bindColumn("actNo", $actNo);
        $activitmemJoin -> bindColumn("order_time ", $order_time );
        $activitmemJoin -> bindColumn("actImg", $actImg);
        $activitmemJoin -> bindColumn("actNo", $actNo); 
        $activitmemJoin -> bindColumn("host_memNo", $host_memNo);      
        $activitmemJoin -> bindColumn("actTitle", $actTitle);
        $activitmemJoin -> bindColumn("actLoc", $actLoc);
        $activitmemJoin -> bindColumn("act_begin", $act_begin);
        $activitmemJoin -> bindColumn("act_end", $act_end);
        $activitmemJoin -> bindColumn("actIntro", $actIntro);
        $activitmemJoin -> bindColumn("memId", $memId); 

        $activitmemJoin -> execute();

    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 






