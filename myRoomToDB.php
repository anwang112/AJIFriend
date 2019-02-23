<?php
    //要抓到會員值 $_SESSION["memNo"]
    
    try {
        //跟資料庫要資料
        require_once("connectBooks.php");
        // 已報名活動
        $sqlmemJoin = "select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";
        //
        //select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo

        
        // $activitmemJoin = $pdo->query($sqlmemJoin); 
        $activitmemJoin = $pdo->prepare($sqlmemJoin); 
        $activitmemJoin -> bindValue(":member",$_SESSION["memNo"]); 

        $activitmemJoin -> bindColumn("act_orderNo", $act_orderNo); 
        $activitmemJoin -> bindColumn("order_memNo", $order_memNo);      
        $activitmemJoin -> bindColumn("actNo", $actNo);
        $activitmemJoin -> bindColumn("order_time ", $order_time );
        $activitmemJoin -> bindColumn("actImg", $actImg);
        $activitmemJoin -> bindColumn("actNo", $actNo); 
        $activitmemJoin -> bindColumn("host_memNo", $host_memNo);      
        $activitmemJoin -> bindColumn("actTitle", $actTitle);
        $activitmemJoin -> bindColumn("actLoc", $actLoc);
        $activitmemJoin -> bindColumn("act_begin", $act_begin);
        $activitmemJoin -> bindColumn("act_end", $act_end);
        $activitmemJoin -> bindColumn("actIntro", $actIntro);
        $activitmemJoin -> bindColumn("memId", $memId); 

        $activitmemJoin -> execute();

        //載入會員買的帽子
        // if($_SESSION["memNo"]){
            $sqlaa = "select * FROM pro_orderitem p JOIN product a on (p.proNo  =  a.proNo)  WHERE p.buyerNo = :buyerNo  AND a.category = 1 limit 10 ";
            $aaa = $pdo->prepare($sqlaa); 
            $aaa -> bindValue(':buyerNo',2);//$_SESSION["memNo"] 
            $aaa -> bindColumn('img', $imgHat);
            $aaa -> execute();
    
            //載入會員買的衣服
            $sqlbb = "select * FROM pro_orderitem p JOIN product a on (p.proNo = a.proNo) WHERE p.buyerNo = :buyerNo AND a.category = 2 limit 10";
            $bbb = $pdo->prepare($sqlbb); 
            $bbb -> bindValue(':buyerNo',2);//$_SESSION["memNo"] 
            $bbb -> bindColumn('img', $clothbb);
            $bbb -> execute();
        // }




        //寫入穿好的

    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 






