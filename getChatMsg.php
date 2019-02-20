<?php
session_start();
$chatMems = json_decode($_REQUEST["chatMems"]);
    try{
        require_once("connectBooks.php");
        $sql = "select * from message where (send_memNo=:sendMemId && to_memNo=:taMemId) or (send_memNo=:taMemId && to_memNo=:sendMemId) ORDER by msgNo";
        $msg = $pdo->prepare( $sql );
        $msg -> bindValue( ":sendMemId",$chatMems->sendMemId);
        $msg -> bindValue( ":taMemId",$chatMems->taMemId);
        $msg ->execute();

        class data{
            public $time;
            public $content;
            public $sendMem;

        }  

        if( $msg->rowCount()==0){ //沒有任何聊天紀錄
            echo "null";
        }else{ //有聊天紀錄
            //從資料庫取回聊天紀錄
            // $num = 1;
            $i=0;
            while($msgRows = $msg ->fetch(PDO::FETCH_ASSOC)){
                $arr["time"][$i] = $msgRows["time"];
                $arr["send_memNo"][$i] = $msgRows["send_memNo"];
                $arr["msg"][$i] = $msgRows["msg"];
                $i++;
            }
            $str = new data();
            $str->time = $arr["time"];
            $str->content = $arr["msg"];
            $str->sendMem =$arr["send_memNo"];
            $send = json_encode($str);

            echo $send;
        }

    }catch(PDOException $e){
        echo $e->getMessage();
    }




?>