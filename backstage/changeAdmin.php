<?php
 // session_start();x    
$changeAdminData = json_decode($_REQUEST["changeAdminData"]);
try {
    //連線
    require_once("../connectBooks.php");
    if ($changeAdminData->statue == "儲存") {
        $sql = "update admin set adminId=:adminId, adminName=:adminName, adminPsw=:adminPsw where adminNo = :adminNo";
        $allAdminData = $pdo->prepare($sql);
        $allAdminData->bindValue(":adminNo", $changeAdminData->adminNo);
        $allAdminData->bindValue(":adminName", $changeAdminData->adminName);
        $allAdminData->bindValue(":adminId", $changeAdminData->adminId);
        $allAdminData->bindValue(":adminPsw", $changeAdminData->adminPsw);
        $allAdminData->execute();
        echo "成功儲存";
    } elseif ($changeAdminData->statue == "刪除") {
        $sql = "delete from admin where adminNo=:adminNo";
        $allAdminData = $pdo->prepare($sql);
        $allAdminData->bindValue(":adminNo", $changeAdminData->adminNo);
        // $allAdminData->bindValue(":adminName", $changeAdminData->adminName);
        // $allAdminData->bindValue(":adminId", $changeAdminData->adminId);
        // $allAdminData->bindValue(":adminPsw", $changeAdminData->adminPsw);
        $allAdminData->execute();
        echo "成功刪除";
    } elseif ($changeAdminData->statue == "建立") {
        $sql = "INSERT INTO `admin` (`adminNo`, `adminName`, `adminId`, `adminPsw`) VALUES (NULL, :adminName, :adminId, :adminPsw);";
        $allAdminData = $pdo->prepare($sql);
        $allAdminData->bindValue(":adminName", $changeAdminData->adminName);
        $allAdminData->bindValue(":adminId", $changeAdminData->adminId);
        $allAdminData->bindValue(":adminPsw", $changeAdminData->adminPsw);
        $allAdminData->execute();
        echo "成功建立";
    }

    //INSERT INTO admin (adminNo, adminName, adminId, adminPsw)values(NULL, "asd", "asd","asd")
} catch (PDOException $e) {
    echo $e->getMessage();
}
