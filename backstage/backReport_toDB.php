<?php
    //跟資料庫要資料
    $reportget = $_REQUEST["reportget"];
    

    try {
        require_once("../connectBooks.php");
        //總檢舉數
        $sqlReport = " SELECT * FROM `report`  ";
        $result = $pdo->prepare($sqlReport); 
        $result -> bindColumn("repoNo", $repoNo); 
        $result -> bindColumn("reason", $reason); 
        $result -> bindColumn("time", $time); 
        $result -> bindColumn("status", $status); 

        $result -> bindColumn("memNo", $memNo); 
        $result -> bindColumn("ta_memNo", $ta_memNo); 
        $result -> execute();
        
        //對應的檢舉人

        //對應的被檢舉人

        if($reportget){
            $statusValue = $_REQUEST["statusValue"];
            $reportNo = $_REQUEST["reportNo"]; 
             

            $sqlupdate = " update `report` SET `status` = :status  WHERE `report`.`repoNo` = :repoNo ";
            // UPDATE `report` SET `status` = '0' WHERE `report`.`repoNo` = 1;
            $rrr = $pdo->prepare($sqlupdate); 
            $rrr -> bindValue(":status",  $statusValue );
            $rrr -> bindValue(":repoNo",  $reportNo );
            $rrr -> execute();
            header('Location:backReport.php');
            
        }

    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
