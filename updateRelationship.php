<?php 
// 更新關係表   // 0:拒絕 ,  1:加為好友 , 2:刪除好友 

$data = json_decode($_REQUEST["upMem"]);  //解碼js傳過來的值
// $data->action=0;
try{
    require_once("connectBooks.php");
    if($data->action==0){ //拒絕加好友
        $sql = "delete from relationship where memNo=:sendMemId and targetNo=:taMemId and relaCate=0";
        $friend = $pdo->prepare( $sql );
        $friend -> bindValue( ":sendMemId",$data->taMemId);
        $friend -> bindValue( ":taMemId",$data->sendMemId);
        $friend ->execute();
        echo "reject require~";
    }else if($data->action==1){ //加為好友
        $sql = "update relationship set relaCate=1 where memNo=:sendMemId and targetNo=:taMemId and relaCate=0";
        $friend = $pdo->prepare( $sql );
        $friend -> bindValue( ":sendMemId",$data->taMemId);
        $friend -> bindValue( ":taMemId",$data->sendMemId);
        $friend ->execute();
        echo "get friend~";
    }else if($data->action==2){ //刪除好友
        $sql = "delete from relationship where (memNo = :sendMemId and targetNo = :taMemId ) or (memNo = :taMemId and targetNo= :sendMemId) and relaCate=1";
        $friend = $pdo->prepare( $sql );
        $friend -> bindValue( ":sendMemId",$data->sendMemId);
        $friend -> bindValue( ":taMemId",$data->taMemId);
        $friend ->execute();
        echo "delete friend~";
    }
}catch(PDOException $e){
    echo $e->getMessage();
}
?>