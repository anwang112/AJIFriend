<?php
session_start();
$createRoleData = json_decode($_REQUEST["createRoleData"]);
echo $createRoleData->memId;
try {
    require_once("connectBooks.php");
    // if (isset($_SESSION["memId"]) === false) {
    $sql = "INSERT INTO `member` (`memNo`, `memId`, `memPsw`, `mName`, `constellation`, `hobby`, `self-intro` ,`loveGiven`,`mColor`, `eye`, `animal`)
        values(NULL, 'a', 'a', 'a', '1', '1', '111' ,3 ,'aaaaaa', '1', '1');";
    $createRole = $pdo->prepare($sql);

    // $createRole->bindValue(":memId", $createRoleData->memId);
    // $createRole->bindValue(":memPsw", $createRoleData->memPsw);
    // $createRole->bindValue(":mName", $createRoleData->mName);
    // $createRole->bindValue(":constellaton", $createRoleData->constellation);
    // $createRole->bindValue(":hobby", $createRoleData->hobby);
    // $createRole->bindValue(":selfIntro", $createRoleData->selfIntro);
    // $createRole->bindValue(":mColor", $createRoleData->mColor);
    // $createRole->bindValue(":eye", $createRoleData->eye);
    // $createRole->bindValue(":animal", $createRoleData->animal);
    $createRole->execute();
    echo '成功';

        

    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
