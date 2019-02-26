<?php
session_start();
$memberUpDateData = json_decode($_REQUEST["memberUpDateData"]);
 

try {
    require_once("connectBooks.php");
    // if (isset($_SESSION["memId"]) === false) {
    if($memberUpDateData ){
        $sql = "UPDATE member SET `mName` = :mName ,`self-intro`=:selfIntro  WHERE `memId`= :memId;";
        $createRole = $pdo->prepare($sql);
    
        $createRole->bindValue(":memId", $memberUpDateData->memId);
        $createRole->bindValue(":mName", $memberUpDateData->mName);
        $createRole->bindValue(":selfIntro", $memberUpDateData->selfIntro);
    
        $createRole->execute();
            echo "已更改摟";
    }

    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
 