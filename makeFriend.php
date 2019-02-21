<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    $sql = "INSERT INTO relationship (relaNo, memNo, targetNo, relaCate, relaTime) VALUES (NULL, :memNo, :targetNo, 0, :nowDay)";
    $idSta = $pdo->prepare($sql);
    $idSta->bindParam(':memNo', $profile->memNo);
    $idSta->bindParam(':targetNo', $profile->targetNo);
    $idSta->bindParam(':nowDay', $profile->nowDay);
    $idSta->execute();

    echo '123';
         
} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
?>

