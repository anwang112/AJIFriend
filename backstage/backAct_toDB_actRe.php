<?php
    //跟資料庫要資料
   
    try {
        require_once("../connectBooks.php");
        //總筆數

        if(isset($_REQUEST["actRe"]) ){
            $actRe = json_decode($_REQUEST["actRe"]);
            $sqlre_actNO = "UPDATE `activity` SET `showOrNot` = '1' WHERE `activity`.`actNo` = :actNo ";
            $cc = $pdo -> prepare($sqlre_actNO); 
            $cc -> bindValue(":actNo",  $actRe -> actNo);
            $cc -> execute();

            echo "1"; //成功刪除

        }
        //新增活動 ok
        
    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
