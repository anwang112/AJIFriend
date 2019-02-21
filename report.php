<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
        $sql = "select count(*) from report where memNo = :memNo and ta_memNo = :ta_memNo";
        $Sta = $pdo->prepare($sql);
        $Sta->bindParam(':ta_memNo',$profile->ta_memNo);
        $Sta->bindParam(':memNo', $profile->memNo);
        $Sta->execute();
        $StaRow = $Sta->fetch(PDO::FETCH_ASSOC);

        if ($StaRow["count(*)"] != 0) {
            echo 1;
            
        } else {
            $sql2 = "INSERT INTO report (repoNo, memNo, ta_memNo, reason, time, status) VALUES (NULL, :memNo, :ta_memNo, :reason, CURRENT_TIMESTAMP, '0');";
            $RSta = $pdo->prepare($sql2);
            $RSta->bindParam(':ta_memNo',$profile->ta_memNo);
            $RSta->bindParam(':memNo', $profile->memNo);
            $RSta->bindParam(':reason', $profile->reason);
            $RSta->execute();
            echo 0;
        }
    

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}
?>

