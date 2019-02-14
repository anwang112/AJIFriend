<?php  
// 聊天訊息送出  --by ga
  
session_start();
$data = json_decode($_REQUEST["data"]);  //解碼js傳過來的值
    try{
        require_once("connectBooks.php");
        $sql = "INSERT INTO `message` (`msgNo`, `send_memNo`, `to_memNo`, `send_adminNo`, `to_adminNo`, `msg`, `time`)
                  VALUES (NULL, :me, :you, NULL , :toAdminId, :msg, :timeNow );";
        $msg = $pdo->prepare( $sql );
        if($data->taIsWho=='mem'){  //聊天對象是會員
            $msg -> bindValue( ":you",$data->chatTA);
            $msg -> bindValue( ":toAdminId",NULL);

        }else{   //聊天對象是管理員
            $msg -> bindValue( ":toAdminId",$data->chatTA);
            $msg -> bindValue( ":you",NULL);
        }
        $msg -> bindValue( ":me",$data->me);
        $msg -> bindValue( ":msg",$data->msg);
        $msg -> bindValue( ":timeNow",$data->timeNow);
        $msg ->execute();
        echo "sucess";
    }catch(PDOException $e){
        echo $e->getMessage();
    }





?>