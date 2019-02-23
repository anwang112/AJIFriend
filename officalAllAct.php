<?php
    //新增資料    
    $officalAllObj = json_decode($_REQUEST["officalAllObj"]); //把字串轉回物件

    //跟資料庫要資料
    try {
        require_once("connectBooks.php");

        // 活動巴士
        // if( $officalAllObj -> actNo > 10){ //顆顆完蛋
        //     $sqlBUS = "select * from activity where host_memNo = 1 AND actNo != :actNo ORDER BY `actNo` DESC";
        // }else{
        //     $sqlBUS = "select * from activity where host_memNo = 1 AND actNo != :actNo ";
        // }
<<<<<<< .merge_file_a18340
        $sqlBUS = "select * from activity where host_memNo IS NULL";
=======
        $sqlBUS = "select * from activity where host_memNo = 1";
>>>>>>> .merge_file_a27144
        
        //
        // $officalAll = $pdo -> prepare($sqlBUS);
        // $officalAll -> bindValue(":actNo",  $officalAllObj -> actNo);
        // $officalAll -> execute();
        // $offical = $officalAll -> fetchObject();
        // echo '0';
        $aa = $pdo->prepare($sqlBUS); 
<<<<<<< .merge_file_a18340
        // $aa -> bindValue(":actNo",  $officalAllObj -> actNo);
=======
        $aa -> bindValue(":actNo",  $officalAllObj -> actNo);
>>>>>>> .merge_file_a27144
        

        // $aa -> bindColumn("actNo", $actNo); 
        // $aa -> bindColumn("host_memNo", $host_memNo);      
        // $aa -> bindColumn("actTitle", $actTitle);
        // $aa -> bindColumn("actLoc", $actLoc);
        // $aa -> bindColumn("act_begin", $act_begin);
        // $aa -> bindColumn("act_end", $act_end);
        // $aa -> bindColumn("actIntro", $actIntro);
        // $aa -> bindColumn("actImg", $actImg);
        $aa -> execute();
        

        $key = $officalAllObj -> key ;

        
        class data{
            public $no;
            public $memNo;
            public $title;
            public $loc;
            public $begin;
            public $end;
            public $actIntro;
            public $img;
            public $total;
        }


        $aaR = $aa -> fetchAll(PDO::FETCH_ASSOC);
        $aDB = new data ;

        $aDB -> no = $aaR[$key]["actNo"];
        $aDB -> memNo = $aaR[$key]["host_memNo"];
        $aDB -> title = $aaR[$key]["actTitle"];
        $aDB -> loc = $aaR[$key]["actLoc"];
        $aDB -> begin = $aaR[$key]["act_begin"];
        $aDB -> end = $aaR[$key]["act_end"];
        $aDB -> actIntro = $aaR[$key]["actIntro"];
        $aDB -> img = $aaR[$key]["actImg"];
        $aDB -> total =  $aa -> rowCount();

        $send = json_encode($aDB);
        echo  $send ;



        
    } catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 