<?php
    //跟資料庫要資料
   
    try {
        require_once("../connectBooks.php");
        //總筆數


        //活動刪除(欄位showOrNot設為0)
        
        $actDele = $memberData = json_decode($_REQUEST["actDele"]);
        $sqlDelete_actNO = "UPDATE `activity` SET `showOrNot` = '0' WHERE `activity`.`actNo` = :actNo ";
        $bb = $pdo -> prepare($sqlDelete_actNO); 
        $bb -> bindValue(":actNo",  $actDele -> actNo);
        $bb -> execute();

        echo "成功刪除"; //成功刪除
        
   
    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
