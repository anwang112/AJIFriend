<?php
    //新增資料    
    $actBoxObj = json_decode($_REQUEST["actBoxObj"]); //把字串轉回物件
    $time = date("Y-m-d H:i:s") ;

    //跟資料庫要資料
    try {
        require_once("php/connect.php");
        // $sql1 = 'select * from comment';
        // $commNos = $pdo -> query($sql1);
        // $commNo =  $commNos ->rowCount();
        // $commNo  =  $commNo  + 1;
        // echo 0;

        $sql3 = "insert into `comment`(`commNo`, `memNo`, `actNo`, `time`, `content`) VALUES (NULL,:memNo,:actNo,:time,:txt)";
        $comment = $pdo -> prepare($sql3);
        // $comment -> bindValue(":commNo", $commNo );
        $comment -> bindValue(":memNo", $actBoxObj -> memNo);
        $comment -> bindValue(":actNo", $actBoxObj -> actNO);
        $comment -> bindValue(":txt", $actBoxObj -> txt);  
        $comment -> bindValue(":time", $time);  
        $comment -> execute();

        // $send = json_encode($actBoxObj);//送出一包
        
    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 