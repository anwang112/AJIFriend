<?php
    //新增資料    
    $actTitle = $_POST["actTitle"];
    $actIntro = $_POST["actIntro"];
    $actLoc = $_POST["actLoc"];
    $act_begin = $_POST["act_begin"];
    $act_end = $_POST["act_end"];
    $actImg = $_FILES["act_holdActFile"]["name"];


    //跟資料庫要資料
    try {
        require_once("connect.php");
        $sql1 = 'select * from activity	';
        $actnum = $pdo -> query($sql1);
        $num =  $actnum ->rowCount();
        $num =  $num + 1;

        $sql = "insert into `activity`(`actNo`, `host_memNo`, `actTitle`, `actLoc`, `actImg`, `act_begin`, `act_end`, `actIntro`) VALUES (null,'2','$actTitle',' $actLoc','$actImg','$act_begin','$act_end','$actIntro')";
        $activity = $pdo ->query($sql);

        //上傳檔案處理
    
        $from = $_FILES["act_holdActFile"]["tmp_name"];
        $to = "images/" . $_FILES["act_holdActFile"]["name"];
        copy($from,$to);
        header('Location:activity_v2.php');

    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 