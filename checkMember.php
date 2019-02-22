<?php
// session_start();
$checkInfo = json_decode($_REQUEST["checkInfo"]);
// $createRoleData = json_decode($_REQUEST["createRoleData"]);
$checkStatus = "可以使用";

try {
    require_once("connectBooks.php");

    class ooInfo
    {
        public $memId;
        public $checkmemId;
        public $mName;
        public $checkmName;
    }
    $oo = new ooInfo();
    $oo->memId = 'memId';
    $oo->mName = 'mName';

    if ($checkInfo->check == 'memId') {
        $sql = "select * from member where BINARY memId=:memId";
        $member = $pdo->prepare($sql);
        $member->bindValue(":memId", $checkInfo->memId);
        $member->execute();


        if ($member->rowCount() == 0) { //查無此人
            $oo->checkmemId = '可以使用';
        } else { //有找到人
            $oo->checkmemId = '不能使用';
        }
    } elseif ($checkInfo->check == 'mName') {
        $sql = "select * from member where BINARY mName=:mName";
        $member = $pdo->prepare($sql);
        $member->bindValue(":mName", $checkInfo->mName);
        $member->execute();

        if ($member->rowCount() == 0) { //查無此人
            $oo->checkmName = '可以使用';

        } else { //有找到人
            $oo->checkmName = '不能使用';
        }
    }
    echo json_encode($oo);

    // if (isset($_SESSION["memId"]) === false) {
    //     $createsql = "INSERT INTO member(memId,memPsw,mName,constellaton,hobby,'self-intro',mColor,eye,animal
    //     values(:memId,:memPsw,:mName,:constellaton,:hobby,:selfIntro,:mColor,:eye,:animal)";
    //     $createRole = $pdo->prepare($createsql);

    //     $createRole->bindValue(":memId", $createRoleData->memId);
    //     $createRole->bindValue(":memPsw", $createRoleData->memPsw);
    //     $createRole->bindValue(":mName", $createRoleData->mName);
    //     $createRole->bindValue(":constellaton", $createRoleData->constellation);
    //     $createRole->bindValue(":hobby", $createRoleData->hobby);
    //     $createRole->bindValue(":selfIntro", $createRoleData->selfIntro);
    //     $createRole->bindValue(":mColor", $createRoleData->mColor);
    //     $createRole->bindValue(":eye", $createRoleData->eye);
    //     $createRole->bindValue(":animal", $createRoleData->animal);
    //     $createRole->execute();
    // }




} catch (PDOException $e) {
    echo $e->getMessage();
}
?>