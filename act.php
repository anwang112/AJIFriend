<?php

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
        // 活動巴士
        $sqlBUS = "SELECT * FROM `activity` WHERE `host_memNo` = 1";
        


        $activityBUS = $pdo->query($sqlBUS); 
        $activityBUS -> bindColumn("actNo", $actNo); 
        $activityBUS -> bindColumn("host_memNo", $host_memNo);      
        $activityBUS -> bindColumn("actTitle", $actTitle);
        $activityBUS -> bindColumn("actLoc", $actLoc);
        $activityBUS -> bindColumn("act_begin", $act_begin);
        $activityBUS -> bindColumn("act_end", $act_end);
        $activityBUS -> bindColumn("actIntro", $actIntro);
        $activityBUS -> bindColumn("actImg", $actImg);

        // 所有活動-官方活動
        // $sqlOficial = "select * from activity where host_memNo = 1 ORDER BY actNo DESC ";
        //

        // $activityOficial = $pdo->query($sqlOficial); 
        // $activityOficial -> bindColumn("actNo", $actNo); 
        // $activityOficial -> bindColumn("host_memNo", $host_memNo);      
        // $activityOficial -> bindColumn("actTitle", $actTitle);
        // $activityOficial -> bindColumn("actLoc", $actLoc);
        // $activityOficial -> bindColumn("act_begin", $act_begin);
        // $activityOficial -> bindColumn("act_end", $act_end);
        // $activityOficial -> bindColumn("actIntro", $actIntro);
        // $activityOficial -> bindColumn("actImg", $actImg);


        //所有活動-熊麻吉們主辦
        
        $sqlactNo = "select * from activity where host_memNo != 1 ";
        $result = $pdo->query($sqlactNo);
        $totalRecord =  $result ->rowCount();
        //每頁有幾筆

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
        $sqlMemHold = "select * from activity  where host_memNo != 1 ORDER BY actNo DESC limit $start,$recPerPage";
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



        //parB 已報名活動
        $sqlmemJoin = "select* from activity_order o  JOIN activity a on o.actNo = a.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";
        //


        // $activitmemJoin = $pdo->query($sqlmemJoin); 
        $activitmemJoin = $pdo->prepare($sqlmemJoin); 
        $activitmemJoin -> bindValue(":member",2); 
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

        $activitmemJoin -> execute();

  
        



    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 






