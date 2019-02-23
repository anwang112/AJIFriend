<?php
session_start();
try{
  require_once("connectBooks.php");
  $sql = "select * from member where memId=:memId and memPsw =:memPsw";
  $member = $pdo->prepare( $sql );
  $member -> bindValue( ":memId", $_REQUEST["memId"]);
  $member -> bindValue( ":memPsw", $_REQUEST["memPsw"]);
  $member -> execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "error";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member -> fetch(PDO::FETCH_ASSOC);

  	//將登入者資料寫入session
  	$_SESSION["memNo"] = $memRow["memNo"];
  	$_SESSION["memId"] = $memRow["memId"];
  	$_SESSION["mName"] = $memRow["mName"];
  	$_SESSION["constellation"] = $memRow["constellation"];
  	$_SESSION["hobby"] = $memRow["hobby"];
  	$_SESSION["self-intro"] = $memRow["self-intro"];
  	$_SESSION["mMJ"] = $memRow["mMJ"];
  	$_SESSION["loveGiven"] = $memRow["loveGiven"];
  	$_SESSION["mCoin"] = $memRow["mCoin"];
  	$_SESSION["mColor"] = $memRow["mColor"];
  	$_SESSION["eye"] = $memRow["eye"];
  	$_SESSION["animal"] = $memRow["animal"];
  	$_SESSION["wearHat"] = $memRow["wearHat"];
  	$_SESSION["wearClothes"] = $memRow["wearClothes"];
  	$_SESSION["last_play"] = $memRow["last_play"];
    $_SESSION["power"] = $memRow["power"];

<<<<<<< HEAD
    // echo "登入成功";
    
=======
>>>>>>> ooxx

    class data{
      public $arr;
    }
    $user = new data();
    $user->arr = $_SESSION;

    //送出登入者的姓名資料
    $send = json_encode($user);
    echo $send;

  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>