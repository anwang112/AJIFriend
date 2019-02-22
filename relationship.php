<?php
session_start();
$data = json_decode($_REQUEST["rela"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    if($data->loginNo == ''){
        echo 'login';
    }else{
        $Osql = "select count(*) from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
        $OSta = $pdo->prepare($Osql);
        $OSta->bindParam(':targetNo',$data->tarMemNo);
        $OSta->bindParam(':memNo', $data->loginNo);
        $OSta->execute();
        $OStaRow = $OSta->fetch(PDO::FETCH_ASSOC);
        if($OStaRow["count(*)"]==0){
            echo 'not friend';
        }else{
            $Rsql = "select relaCate from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
            $RSta = $pdo->prepare($Rsql);
            $RSta->bindParam(':targetNo',$data->tarMemNo);
            $RSta->bindParam(':memNo', $data->loginNo);
            $RSta->execute();
            $RStaRow = $RSta->fetch(PDO::FETCH_ASSOC);

            echo $RStaRow["relaCate"];
        }
    }


    

       
    

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

