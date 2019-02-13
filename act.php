<?php

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
        // $sql = "select * from activity ";
        $sql = "select * from activity ORDER BY actNo DESC ";
        $activity = $pdo->query($sql); 
        $activity -> bindColumn("actNo", $actNo); 
        $activity -> bindColumn("host_memNo", $host_memNo);      
        $activity -> bindColumn("actTitle", $actTitle);
        $activity -> bindColumn("actLoc", $actLoc);
        $activity -> bindColumn("act_begin", $act_begin);
        $activity -> bindColumn("act_end", $act_end);
        $activity -> bindColumn("actIntro", $actIntro);


    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 




