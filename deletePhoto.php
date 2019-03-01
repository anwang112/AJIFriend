<?php
ob_start();
session_start();
try{
  require_once("connectBooks.php");
  $sql = "select * from picture where po_memNo=:memNo and picNo = :picNo";
  $check = $pdo->prepare($sql); 
  $check -> bindValue( ":memNo", $_SESSION["memNo"]);
  $check -> bindValue( ":picNo", $_REQUEST["picNo"]);
  $check -> execute();


  if( $check->rowCount() == 0){ 
    echo "false";
  }else{ 
    $sql = "delete from picture where po_memNo =:memNo and picNo = :picNo";
    $delete = $pdo -> prepare($sql);
    $delete -> bindValue(":memNo",  $_SESSION["memNo"]);
    $delete -> bindValue(":picNo", $_REQUEST["picNo"]);
    $delete -> execute();

    echo "true";
  }
}catch(PDOException $e){
    echo $e->getMessage();
}

?>