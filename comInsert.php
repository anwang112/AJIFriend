<?php
    //新增資料    
    $actBoxObj = json_decode($_REQUEST["actBoxObj"]); //把字串轉回物件
    $time = date("Y-m-d H:i:s") ;

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
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

        $sql4 = "select * from comment where actNo = :actNo ORDER BY `time` DESC";
        $comment = $pdo -> prepare($sql4);
        $comment -> bindValue(":actNo", $actBoxObj -> actNO); 
        $comment -> execute();
        $commentRow = $comment -> fetch(PDO::FETCH_ASSOC);
        
        $sql5 = "SELECT * FROM `member` WHERE `memNo` = :no";
        $memberData = $pdo->prepare( $sql5 );
        $memberData-> bindValue( ":no",$commentRow["memNo"]);
        $memberData->execute();
        $memberDataRows = $memberData->fetch(PDO::FETCH_ASSOC);

        $a = [];
        $a[0] = $memberDataRows["mName"] .','.
        $memberDataRows["animal"] .','.
        $memberDataRows["eye"] .','.
        $memberDataRows["mColor"] .','.
        $commentRow["content"];

        class data{
            public $arr;
        }
        $data = new data();
        $data->arr = $a;
        $send = json_encode($data);

        echo $send;


        // $send = json_encode($actBoxObj);//送出一包
        
    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 