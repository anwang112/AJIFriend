<?php
    //新增資料    
    $actTitle = $_POST["actTitle"];
    $actIntro = $_POST["actIntro"];
    $actLoc = $_POST["actLoc"];
    $act_begin = $_POST["act_begin"];
    $act_end = $_POST["act_end"];
    $actImg = $_FILES["act_holdActFile"]["name"];
    //上傳檔案處理
    
    echo $actImg;
    echo $_FILES["act_holdActFile"]["tmp_name"];


    $from = $_FILES["act_holdActFile"]["tmp_name"];
    $to = "images/" . $_FILES["act_holdActFile"]["name"];
    copy($from,$to);
    if(copy($from,$to)){
        echo'ok~';
    }else{
        echo'no!!';
    }

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
        $sql1 = 'select * from activity	';
        $actnum = $pdo -> query($sql1);
        $num =  $actnum ->rowCount();
        $num =  $num + 1;

        $sql = "insert into `activity`(`actNo`, `host_memNo`, `actTitle`, `actLoc`, `actImg`, `act_begin`, `act_end`, `actIntro`) VALUES ('$num','1','$actTitle',' $actLoc','$actImg','$act_begin','$act_end','$actIntro')";
        $activity = $pdo ->query($sql);

        echo '<a src="activity_v2.php">新增成功~~~ </a><br>';
        echo $_FILES["act_holdActFile"]["error"];
        echo $actImg;
        echo $_FILES["act_holdActFile"]["tmp_name"];

    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 