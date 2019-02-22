<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    if ($profile->action == 3) {
        $Rsql = "select count(*) from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
        $RSta = $pdo->prepare($Rsql);
        $RSta->bindParam(':targetNo',$profile->targetNo);
        $RSta->bindParam(':memNo', $profile->memNo);
        $RSta->execute();
        $RStaRow = $RSta->fetch(PDO::FETCH_ASSOC);

        if ($RStaRow["count(*)"] == 0) {

            $sql = "INSERT INTO relationship (relaNo, memNo, targetNo, relaCate, relaTime) VALUES (NULL, :memNo, :targetNo, 0, :nowDay)";
            $idSta = $pdo->prepare($sql);
            $idSta->bindParam(':memNo', $profile->memNo);
            $idSta->bindParam(':targetNo', $profile->targetNo);
            $idSta->bindParam(':nowDay', $profile->nowDay);
            $idSta->execute();

    // 更新愛心
            $sql2 = "update member set loveGiven = (loveGiven -1) where memNo = :memNo";
            $idSta2 = $pdo->prepare($sql2);
            $idSta2->bindValue(':memNo', $profile->memNo);
            $idSta2->execute();

            $sql3 = "select * from member where memNo = :memNo";
            $idSta3 = $pdo->prepare($sql3);
            $idSta3->bindValue(':memNo', $profile->memNo);
            $idSta3->execute();

            $IdRow3 = $idSta3->fetch(PDO::FETCH_ASSOC);
            $heart = $IdRow3["loveGiven"];
            echo $heart;
        } else {
            echo -1;
        }
    }

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
?>

