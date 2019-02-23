<?php
session_start();
    //跟資料庫要資料
    try {
        require_once("connectBooks.php");
        if(isset($_REQUEST["action"])){

            $userNo = $_SESSION['memNo'];
            //parB 已報名活動
            $sqlmemJoin = "select * from activity_order o  JOIN activity a on o.actNo = a.actNo  where o.order_memNo = :member ORDER BY act_orderNo DESC ";
            $activitmemJoin = $pdo->prepare($sqlmemJoin); 
            $activitmemJoin -> bindValue(":member",$userNo); 
            $activitmemJoin -> execute();
            //
            $i = 0;
            while($data = $activitmemJoin ->fetch(PDO::FETCH_ASSOC)){
                // echo $data["actNo"];
                $act_orderNo[$i] = $data["act_orderNo"];
                $order_memNo[$i] = $data["order_memNo"];
                $actNo[$i] = $data["actNo"];
                $order_time[$i] = $data["order_time"];
                $actImg[$i] = $data["actImg"];
                $actNo[$i] = $data["actNo"];
                if($data["host_memNo"]==NULL){
                    $host_memNo[$i]='0';
                }else{
                    $host_memNo[$i] = $data["host_memNo"];
                }
                $actTitle[$i] = $data["actTitle"];
                $actLoc[$i] = $data["actLoc"];
                $act_begin[$i] = $data["act_begin"];
                $act_end[$i] = $data["act_end"];
                $actIntro[$i] = $data["actIntro"];
                $i++;
            }
            // echo $data["act_orderNo"];
            class act{
                public $orderNo;
                public $memNo;
                public $no;
                public $time;
                public $img;
                public $hostNo;
                public $title;
                public $loc;
                public $begin;
                public $end;
                public $intro;
            };
            $actArr = new act();
            $actArr->orderNo = json_encode($act_orderNo);
            $actArr->memNo = json_encode($order_memNo);
            $actArr->no = json_encode($actNo);
            $actArr->time = json_encode($order_time);
            $actArr->img = json_encode($actImg);
            $actArr->hostNo = json_encode($host_memNo);
            $actArr->title = json_encode($actTitle);
            $actArr->loc = json_encode($actLoc);
            $actArr->begin = json_encode($act_begin);
            $actArr->end = json_encode($act_end);
            $actArr->intro = json_encode($actIntro);

            $send = json_encode($actArr);
            echo $send;

            // $activitmemJoin = $pdo->query($sqlmemJoin); 
            
            
            //之後要改成bindParam
            // $activitmemJoin -> bindColumn("act_orderNo", $act_orderNo); 
            // $activitmemJoin -> bindColumn("order_memNo", $order_memNo);      
            // $activitmemJoin -> bindColumn("actNo", $actNo);
            // $activitmemJoin -> bindColumn("order_time ", $order_time );
            // $activitmemJoin -> bindColumn("actImg", $actImg);
            // $activitmemJoin -> bindColumn("actNo", $actNo); 
            // $activitmemJoin -> bindColumn("host_memNo", $host_memNo);      
            // $activitmemJoin -> bindColumn("actTitle", $actTitle);
            // $activitmemJoin -> bindColumn("actLoc", $actLoc);
            // $activitmemJoin -> bindColumn("act_begin", $act_begin);
            // $activitmemJoin -> bindColumn("act_end", $act_end);
            // $activitmemJoin -> bindColumn("actIntro", $actIntro);

            
        }else{
            // 活動巴士 第一屏 官方活動 主辦者為where條件
            
            
            $sqlBUS = "SELECT * FROM `activity` WHERE `host_memNo` IS NULL";

            $activityBUS = $pdo->query($sqlBUS); 
            $activityBUS -> bindColumn("actNo", $actNo); 
            // $activityBUS -> bindColumn("官方", $host_memNo);      
            $activityBUS -> bindColumn("actTitle", $actTitle);
            $activityBUS -> bindColumn("actLoc", $actLoc);
            $activityBUS -> bindColumn("act_begin", $act_begin);
            $activityBUS -> bindColumn("act_end", $act_end);
            $activityBUS -> bindColumn("actIntro", $actIntro);
            $activityBUS -> bindColumn("actImg", $actImg);
            $host_memNo = "官方";
            
            // 所有活動-官方活動
            // $sqlOficial = "select * from activity where host_memNo = 1 ORDER BY actNo DESC ";
            //



            //所有活動-熊麻吉們主辦
            
            $sqlactNo = "SELECT * FROM `activity` WHERE `host_memNo` is NOT NULL";
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
            $sqlMemHold = "select * from activity  where host_memNo is NOT NULL ORDER BY actNo DESC limit $start,$recPerPage";
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

        }
        
        



        

  
        // echo "成功";



    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 






