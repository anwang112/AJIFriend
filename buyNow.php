<?php 
    session_start();
    try{
        require_once("connectBooks.php");
<<<<<<< HEAD
        foreach($_SESSION["proNo"] as $index => $no){
=======

        foreach($_SESSION["proNo"] as $index => $no){ //寫入訂單明細資料庫
           
>>>>>>> master
            $sql_order = "INSERT INTO pro_orderitem(ItemNo, proNo, buyerNo , time , gift_memNo, message) 
                    VALUES (NULL , :proNo , :me , '2019-02-18', NULL , :msg)";
            $order = $pdo->prepare( $sql_order );
            $order -> bindValue( ":proNo",$no);
            $order -> bindValue( ":me",$_SESSION["memNo"]);
            $order -> bindValue( ":msg",NULL);
            $order ->execute();
        }
<<<<<<< HEAD

        echo "sucess order";

        //清除session
        unset($_SESSION["proNo"][$no]);
        unset($_SESSION["proName"][$no]);
        unset($_SESSION["price"][$no]);
        unset($_SESSION["img"][$no]);
=======
        
        foreach($_SESSION["mj"] as $index => $mj){ // 增加魅力值(更新會員資料表)
            $sql_mj = "update member set mMJ = mMJ + :mj where memNo = :me";
            $memMJ = $pdo->prepare( $sql_mj );
            $memMJ -> bindValue( ":mj" , $mj );
            $memMJ -> bindValue( ":me",$_SESSION["memNo"]);
            $memMJ ->execute();

            $_SESSION["mMJ"] = $_SESSION["mMJ"]-$mj;//同步更新會員session
        }

        foreach($_SESSION["price"] as $index => $price){ // 減錢錢(更新會員資料表)
            $sql_coin = "update member set mCoin = mCoin - :price where memNo = :me";
            $memCoin = $pdo->prepare( $sql_coin );
            $memCoin -> bindValue( ":price" , $price );
            $memCoin -> bindValue( ":me",$_SESSION["memNo"]);
            $memCoin ->execute();

            $_SESSION["mCoin"] = $_SESSION["mCoin"]-$price;//同步更新會員session
        }

        // echo "sucess order";

        //清除session
        unset($_SESSION["proNo"]);
        unset($_SESSION["proName"]);
        unset($_SESSION["price"]);
        unset($_SESSION["img"]);
        unset($_SESSION["mj"]);
>>>>>>> master


    }catch(PDOException $e){
        // echo $e->getMessage();
    }
<<<<<<< HEAD

    // header("Location:BearMJ_addcart.php");
=======
    
    header("Location:BearMJ_shop_addcart.php");
>>>>>>> master
?>