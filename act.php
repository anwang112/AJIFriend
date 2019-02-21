<?php

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
        // 活動巴士
        $sqlBUS = "SELECT * FROM `activity` WHERE `host_memNo` = 1 AND showOrNot = '1' ";
        


        $activityBUS = $pdo->query($sqlBUS); 
        $activityBUS -> bindColumn("actNo", $actNo); 
        $activityBUS -> bindColumn("host_memNo", $host_memNo);      
        $activityBUS -> bindColumn("actTitle", $actTitle);
        $activityBUS -> bindColumn("actLoc", $actLoc);
        $activityBUS -> bindColumn("act_begin", $act_begin);
        $activityBUS -> bindColumn("act_end", $act_end);
        $activityBUS -> bindColumn("actIntro", $actIntro);
        $activityBUS -> bindColumn("actImg", $actImg);



        //所有活動-熊麻吉們主辦
        $sqlactNo = "select * from activity where host_memNo != 1 AND showOrNot = '1' ";
        $result = $pdo->query($sqlactNo);
        $totalRecord =  $result ->rowCount();
        //每頁有幾筆
        // SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND `showOrNot` = '1' order by a.actNo limit $start,$recPerPage 加入邀請會員名字 跟 塞選掉已隱藏的活動
        // if (window.clientWidrh < 476) {
        //     $recPerPage = 3;
        // }else if(window.clientWidrh < 768){
        //     $recPerPage = 6;
        // }else{
        //     $recPerPage = 9;
        // }
        $recPerPage = 9;

        //共有幾頁
        $totalPage = ceil($totalRecord/$recPerPage);  //    
        // $totalPage =2 ;   
        //設定好要開始抓取的位置
        if(isset($_GET["pageNo"])==false){
            $pageNo=1;
        }else{//有提供pageNo
            $pageNo=$_GET["pageNo"];
        }

        $start = ($pageNo-1) * $recPerPage;

        // $sql = "select * from activity ";
        $sqlMemHold = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND a.host_memNo !=1 AND showOrNot = 1 ORDER BY a.actNo DESC limit $start,$recPerPage";
        // SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND showOrNot = 1
        //

        
        $activityMemHold = $pdo->query($sqlMemHold); 
        $activityMemHold -> bindColumn("actNo", $actNo); 
        $activityMemHold -> bindColumn("host_memNo", $host_memNo);      
        $activityMemHold -> bindColumn("actTitle", $actTitle);
        $activityMemHold -> bindColumn("actLoc", $actLoc);
        $activityMemHold -> bindColumn("act_begin", $act_begin);
        $activityMemHold -> bindColumn("act_end", $act_end);
        $activityMemHold -> bindColumn("actIntro", $actIntro);
        $activityMemHold -> bindColumn("actImg", $actImg);
        $activityMemHold -> bindColumn("memId", $memId); 


        //parB 已報名活動
        $sqlmemJoin = "select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";
        //
        //select* from activity_order o JOIN (SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo) n ON o.actNo = n.actNo

        
        // $activitmemJoin = $pdo->query($sqlmemJoin); 
        $activitmemJoin = $pdo->prepare($sqlmemJoin); 
        $activitmemJoin -> bindValue(":member",$_SESSION["memNo"]); 
        //之後要改成bindParam
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

  
        



    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 






