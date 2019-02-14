<?php  
// 聊天訊息送出  --by ga
  
session_start();
$chatMems = json_decode($_REQUEST["chatMems"]);
    try{
        require_once("connectBooks.php");
        $sql = "select * from message where (send_memNo=:sendMemId && to_memNo=:taMemId) or (send_memNo=:taMemId && to_memNo=:sendMemId) ORDER by msgNo";
        $msg = $pdo->prepare( $sql );
        $msg -> bindValue( ":sendMemId",$chatMems->sendMemId);
        $msg -> bindValue( ":taMemId",$chatMems->taMemId);
        $msg ->execute();


        if( $msg->rowCount()==0){ 
        }else{

        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }





?>