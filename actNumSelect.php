<?php
    
    $ActJoinObj = json_decode($_REQUEST["ActJoinObj"]); //把字串轉回物件
    //跟資料庫要資料
    try {
        require_once("php/connect.php");


        $sqlMemHoldNum = "select * from activity a JOIN activity_order o on a.actNo = o.actNo where o.actNo = :actNo ORDER BY `host_memNo`";
        $actsss  = $pdo ->prepare($sqlMemHoldNum);
        // $actsss -> bindValue(":host_memNo", $ActJoinObj -> host_memNoValue);  
        $actsss -> bindValue(":actNo", $ActJoinObj -> actNoValue);  
        $actsss -> execute();
        $actJoinNumsss = $actsss -> rowCount();

        echo $actJoinNumsss ;

    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 