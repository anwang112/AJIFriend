<?php
    //新增資料    
    $JoinActObj = json_decode($_REQUEST["JoinActObj"]); //把字串轉回物件
    $time = date("Y-m-d H:i:s") ;

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
                //parB 已報名活動
        $sqlmemJoin = "select* from activity_order o  JOIN activity a on o.actNo = a.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";

        // $activitmemJoin = $pdo->query($sqlmemJoin); 
        $activitmemJoin = $pdo->prepare($sqlmemJoin); 
        $activitmemJoin -> bindValue(":member",$JoinActObj -> member ); 
        //之後要改成bindParam
        $activitmemJoin -> bindColumn("act_orderNo", $act_orderNo); 
        $activitmemJoin -> bindColumn("order_memNo", $order_memNo);      
        $activitmemJoin -> bindColumn("actNo", $actNo);
        $activitmemJoin -> bindColumn("order_time ", $order_time );
        $activitmemJoin -> bindColumn("actImg", $actImg);
        $activitmemJoin -> bindColumn("host_memNo", $host_memNo);      
        $activitmemJoin -> bindColumn("actTitle", $actTitle);
        $activitmemJoin -> bindColumn("actLoc", $actLoc);
        $activitmemJoin -> bindColumn("act_begin", $act_begin);
        $activitmemJoin -> bindColumn("act_end", $act_end);
        $activitmemJoin -> bindColumn("actIntro", $actIntro);

        $activitmemJoin -> execute();

        $activitmemJoinRow = $activitmemJoin ->fetch(PDO::FETCH_ASSOC);

        $send_str = "$order_memNo".",".
                    "$actNo".",".
                    "$order_time".",".
                    "$actImg".",".
                    "$host_memNo".",".
                    "$actTitle".",".
                    "$act_begin".",".//6
                    "$act_end".",".
                    "$actIntro".",".
                    "$actLoc".",";

        echo $send_str;
        
    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }


?>