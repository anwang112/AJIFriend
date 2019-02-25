<?php
session_start();
$checkInFoValue = json_decode($_REQUEST["checkInFoValue"]);


try {
    require_once("../connectBooks.php");
    $sql = "select * from admin where adminId=:adminId and adminPsw = :adminPsw";
    $admin = $pdo->prepare($sql);
    $admin->bindValue(":adminId", $checkInFoValue->adminId);
    $admin->bindValue(":adminPsw", $checkInFoValue->adminPsw);
    $admin->execute();

    if ($admin->rowCount() == 0) { //查無此人
        echo "error";
    } else { //登入成功
        //自資料庫中取回資料
        $memRow = $admin->fetch(PDO::FETCH_ASSOC);
        //將登入者資料寫入session
        $_SESSION["adminNo"] = $memRow["adminNo"];
        $_SESSION["adminName"] = $memRow["adminName"];
        $_SESSION["adminId"] = $memRow["adminId"];
        //送出登入者的姓名資料
        echo "成功登入";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
 