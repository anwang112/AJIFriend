<?php
    //跟資料庫要資料

    try {
        require_once("../connectBooks.php");
        //總檢舉數
        $sqlPro = "SELECT * FROM `product` order by proNo desc";
        $result = $pdo->prepare($sqlPro); 
        $result -> bindColumn("proNo", $proNo);
        $result -> bindColumn("category", $category); 
        $result -> bindColumn("proName", $proName); 
        $result -> bindColumn("price", $price);
        $result -> bindColumn("proMJ", $proMJ);   
        $result -> bindColumn("img", $img);  
        $result -> bindColumn("seen", $seen);  

        $result -> execute();
        
        if($_REQUEST["seen"]!= null  && $_REQUEST["proMJ"]!= null  && $_REQUEST["proNo"]!= null  && $_REQUEST["proName"] != null  ){
            //修改商品
            $seen_get = $_REQUEST["seen"];
            $price_get = $_REQUEST["price"];
            $proMJ_get = $_REQUEST["proMJ"];
            $proNo_get = $_REQUEST["proNo"];
            $proName_get = $_REQUEST["proName"];
            // $img_get = $_FILES["act_holdActFile"]["name"];

            //圖片
            // $from = $_FILES["act_holdActFile"]["tmp_name"];
            // $to = "images/" . $_FILES["act_holdActFile"]["name"];
            // copy($from,$to);
             

            $sqlupdate = " update `product` SET `proName` = :proName ,`price` = :price , `proMJ` = :proMJ , `seen` = :seen  WHERE `product`.`proNo` = :proNo ";
            // UPDATE `report` SET `status` = '0' WHERE `report`.`repoNo` = 1;
            $rrr = $pdo->prepare($sqlupdate); 
            $rrr -> bindValue(":price",  $price_get );
            $rrr -> bindValue(":proMJ",  $proMJ_get );
            $rrr -> bindValue(":proName",  $proName_get );
            $rrr -> bindValue(":seen", $seen_get );
            $rrr -> bindValue(":proNo",  $proNo_get );
            $rrr -> execute();
            header('Location:backItem.php');
        }

        if($_REQUEST["newPro"]){
        
            $_REQUEST["proNo_ins"];
            $_REQUEST["category_ins"];
            $_REQUEST["proName_ins"];
            $_REQUEST["price_ins"];
            $_REQUEST["proMJ_ins"];
            $_REQUEST["seen_ins"];
            $_FILES["act_holdActFile"]["name"];

            //商品總數  
            $sqlNum = "select * from product ";
            $result = $pdo->query($sqlNum);
            $totalRecord =  $result ->rowCount();
            $totalRecord = $totalRecord + 1;

            //上傳檔案處理

            $from = $_FILES["act_holdActFile"]["tmp_name"];
            $to = "../images/".$_FILES["act_holdActFile"]["name"];
            copy($from,$to);

            $sqlIns = "INSERT INTO `product`(`proNo`, `category`, `proName`, `price`, `proMJ`, `img`, `seen`) VALUES (:proNo,:category,:proName,:price,:proMJ,:img,:seen)";
            $proInstoDB = $pdo->prepare($sqlIns ); 
            $proInstoDB -> bindValue(":proNo",  $totalRecord );
            $proInstoDB -> bindValue(":category", $_REQUEST["category_ins"]);
            $proInstoDB -> bindValue(":proName", $_REQUEST["proName_ins"]);
            $proInstoDB -> bindValue(":price", $_REQUEST["price_ins"]);
            $proInstoDB -> bindValue(":proMJ", $_REQUEST["proMJ_ins"]);
            $proInstoDB -> bindValue(":img", $_FILES["act_holdActFile"]["name"]);
            $proInstoDB -> bindValue(":seen", $_REQUEST["seen_ins"]);
            $proInstoDB -> execute();


            header('Location:backItem.php');

        }


    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 
