<?php
session_start();
$data = json_decode($_REQUEST["data"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
        $sql = "update member set mCoin = (mCoin + :money), last_play = :nowDay where memNo=:memNo;";
        $Sta = $pdo->prepare($sql);
        $Sta->bindParam(':money',$data->money);
        $Sta->bindParam(':memNo', $data->memNo);
        $Sta->bindParam(':nowDay', $data->nowDay);
        $Sta->execute();
        
        $_SESSION["mCoin"]  =  $_SESSION["mCoin"] + $data->money;
        

       echo 1;
      
    

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
?>