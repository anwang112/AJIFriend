<?php  
// 聊天室朋友列表  --by ga
$data = $_REQUEST["me"];  //解碼js傳過來的值
    try{
        require_once("connectBooks.php");
        $sql = "select * from relationship where (memNo=:mem or targetNo=:mem) and relaCate=TRUE";
        $friend = $pdo->prepare( $sql );
        $friend -> bindValue( ":mem",$data);
        $friend ->execute();

        if( $friend->rowCount()==0){ //沒有任何好友
            echo "null";
        }else{ //有好友
            $num=0;
            while($friendRows = $friend ->fetch(PDO::FETCH_ASSOC)){
                if($friendRows["memNo"]==$data){ //如果此筆資料的memNo欄位是我
                    $friendNo = $friendRows["targetNo"]; //則targetNo欄位就是朋友的編號
                }else{ //反之
                    $friendNo = $friendRows["memNo"]; //則memNo欄位就是朋友的編號
                }
                $sql2 = "select memNo , mName , animal , eye , mColor from member 
                           where memNo=:no";
                $friendData = $pdo->prepare( $sql2 );
                $friendData -> bindValue( ":no",$friendNo);
                $friendData ->execute();
                $friendDataRows = $friendData ->fetch(PDO::FETCH_ASSOC);
                $i=0;
                foreach ($friendDataRows as $key => $value) {
                    for($j=0;$j<5;j++){
                        $friendList[$i][$j] = $value;
                    }
                    $i++;
                }
                $num++;
            }
            class data{
                public $friendsInfo;
            }
            $info = new data();
            $info->friendsInfo = $friendList;
            $send = json_encode($info);
            echo $send;
        }



        // echo "sucess";
    }catch(PDOException $e){
        echo $e->getMessage();
    }