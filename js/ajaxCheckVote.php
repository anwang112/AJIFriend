<?php
ob_start();
session_start();
try{
  require_once("connectBooks.php");
  $sql = "select * from picture_vote where memNo=:memNo and picNo = :picNo";
  $vote = $pdo->query($sql); 
  $vote -> bindValue( ":memNo", $_REQUEST["memNo"]);
  $vote -> bindValue( ":picNo", $_REQUEST["picNo"]);
  $vote -> execute();


  $voteRow = $vote -> fetch(PDO::FETCH_ASSOC);

  if( $vote->rowCount()==0){ //
	echo "投票成功";
  }else{ 
    
    echo "投票成功";


  }
}catch(PDOException $e){
    echo $e->getMessage();
}




?>