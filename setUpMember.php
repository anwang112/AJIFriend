<?php
session_start();
$createRoleData = json_decode($_REQUEST["createRoleData"]);
try {
    require_once("connectBooks.php");
    // if (isset($_SESSION["memId"]) === false) {
    $sql = "INSERT INTO `member` (`memNo`, `memId`, `memPsw`, `mName`, `constellation`, `hobby`, `self-intro` ,`loveGiven`,`mColor`, `eye`, `animal`)
        values(NULL, :memId, :memPsw, :mName, :constellaton, :hobby, :selfIntro,3 ,:mColor, :eye, :animal);";
    $createRole = $pdo->prepare($sql);

    $createRole->bindValue(":memId", $createRoleData->memId);
    $createRole->bindValue(":memPsw", $createRoleData->memPsw);
    $createRole->bindValue(":mName", $createRoleData->mName);
    $createRole->bindValue(":constellaton", $createRoleData->constellation);
    $createRole->bindValue(":hobby", $createRoleData->hobby);
    $createRole->bindValue(":selfIntro", $createRoleData->selfIntro);
    $createRole->bindValue(":mColor", $createRoleData->mColor);
    $createRole->bindValue(":eye", $createRoleData->eye);
    $createRole->bindValue(":animal", $createRoleData->animal);
    $createRole->execute();
    echo "成功加入";
    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
