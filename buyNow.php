<?php 
    session_start();
    try{
        require_once("connectBooks.php");
        foreach($_SESSION["proNo"] as $index => $no){
            $sql_order = "INSERT INTO pro_orderitem(ItemNo, proNo, buyerNo , time , gift_memNo, message) 
                    VALUES (NULL , :proNo , :me , '2019-02-18', NULL , :msg)";
            $order = $pdo->prepare( $sql_order );
            $order -> bindValue( ":proNo",$no);
            $order -> bindValue( ":me",$_SESSION["memNo"]);
            $order -> bindValue( ":msg",NULL);
            $order ->execute();
        }

        echo "sucess order";

        //清除session
        unset($_SESSION["proNo"][$no]);
        unset($_SESSION["proName"][$no]);
        unset($_SESSION["price"][$no]);
        unset($_SESSION["img"][$no]);


    }catch(PDOException $e){
        // echo $e->getMessage();
    }

    // header("Location:BearMJ_addcart.php");
?>