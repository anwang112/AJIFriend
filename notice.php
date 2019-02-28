<?php
session_start();
$data = json_decode($_REQUEST["data"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    
        $Osql = "select count(*) from relationship where targetNo = :targetNo and relaCate = 0 ";
        $OSta = $pdo->prepare($Osql);
        $OSta->bindValue(':targetNo', $data->loginNo);
        $OSta->execute();
        $OStaRow = $OSta->fetch(PDO::FETCH_ASSOC);
        if($OStaRow["count(*)"]==0){
            echo 0;
        }else{
            
            echo $OStaRow["count(*)"];
        }
    

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

