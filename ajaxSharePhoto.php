<?php
ob_start();
session_start();
try{
  require_once("connectBooks.php");
  $sql = "select * from picturewhere memNo=:memNo and picNo = :picNo";
  $vote = $pdo->prepare($sql); 
  $vote -> bindValue( ":memNo", $_SESSION["memNo"]);
  $vote -> bindValue( ":picNo", $_REQUEST["picNo"]);
  $vote -> execute();

  $voteRow = $vote -> fetch(PDO::FETCH_ASSOC);

  if( $vote->rowCount()==0){ //
    //insert into pic 
    $sql = "insert into picture_vote (memNo, picNo) values ( {$_SESSION['memNo']}, {$_REQUEST['picNo']})";
    $pdo->exec($sql);
    //update picture
    $sql="update picture set vote=vote+1 where picNo = :picNo ";
    $vote = $pdo->prepare($sql); 
    $vote -> bindValue( ":picNo", $_REQUEST["picNo"]);
    $vote -> execute();
    echo "true";
  }else{ 
    echo "false";
  }
}catch(PDOException $e){
    echo $e->getMessage();
}

?>