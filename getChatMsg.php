


<?php

$chatMems = json_decode($_REQUEST["chatMems"]);
    try{
        require_once("connectBooks.php");
        $sql = "select * from message where (send_memNo=:sendMemId && to_memNo=:toMemId) or (send_memNo=:toMemId && to_memNo=:sendMemId)";
        $msg = $pdo->prepare( $sql );
        $msg -> bindValue( ":sendMemId",$chatMems->sendMemId);
        $msg -> bindValue( ":toMemId",$chatMems->toMemId);
        $msg ->execute();

        if( $msg->rowCount()==0){ //沒有任何聊天紀錄
            echo "null";
        }else{ //有聊天紀錄
            //從資料庫取回聊天紀錄
            $num = 1;
            while($msgRows = $msg ->fetch(PDO::FETCH_ASSOC)){
                if($num==1){
                    $str = $msgRows["msg"];
                    
                }else{
                    $str .= "||". $msgRows["msg"];
                }
                $num++;
            
                
                
            }
                
            

            echo $str;
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }




?>