<?php
session_start();
$memberObj = json_decode($_REQUEST["memberObj"]);

try {
    require_once("connectBooks.php");
    // if (isset($_SESSION["memId"]) === false) {
        
        $sqlHatCloth =  "UPDATE member SET `wearHat` = :wearHat ,`wearClothes`=:wearClothes  WHERE `memNo`= :memNo";

        $chageHatCloth = $pdo->prepare($sqlHatCloth);
        $chageHatCloth ->bindValue(":memNo", $memberObj -> memNo);
        $chageHatCloth ->bindValue(":wearHat", $memberObj -> memHat);
        $chageHatCloth ->bindValue(":wearClothes", $memberObj -> memCloth);
        
        $chageHatCloth->execute();
        echo 111 ;


    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
 