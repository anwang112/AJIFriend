<?php
//接收json物件包
try {

    $actBoxObj = json_decode($_REQUEST["actBoxObj"]);
    require_once("connectBooks.php");
    
    $sql = "select * from comment where actNo = :actNo ";
    $comment = $pdo -> prepare($sql);
    $comment -> bindValue(":actNo", $actBoxObj -> actNO); 
    $comment -> execute();

    if($comment -> rowCount() == 0){
        $sendNo = json_encode('尚未有留言～');
        echo $sendNo;
    }else{
        // $commentArr["send_comment"][0]="啊啊啊啊";
        $i = 0 ;
        
        while( $commentRow = $comment -> fetch(PDO::FETCH_ASSOC) ){
            $sql2 = "SELECT * FROM `member` WHERE `memNo` = :no";
            $memberData = $pdo->prepare( $sql2 );
            $memberData-> bindValue( ":no",$commentRow["memNo"]);
            $memberData->execute();
            $memberDataRows = $memberData->fetch(PDO::FETCH_ASSOC);
            // mName , animal , eye , mColor
            $arr['mName'][$i] = $memberDataRows["mName"] ;
            $arr['animal'][$i] = $memberDataRows["animal"] ;
            $arr['eye'][$i] = $memberDataRows["eye"] ;
            $arr['mColor'][$i] = $memberDataRows["mColor"] ;
            $arr['content'][$i] = $commentRow["content"];
            $arr['memNo'][$i] = $memberDataRows["memNo"];

            $i++;
            
        }
        // $str = new data();
        // $str -> content = $commentArr["send_comment"];
        class data{
            public $name;
            public $animal;
            public $eye;
            public $color;
            public $comment;
            public $memNo;
        }
        $data = new data();
        $data->name = json_encode($arr['mName']);
        $data->animal = json_encode($arr['animal']);
        $data->eye = json_encode($arr['eye']);
        $data->color = json_encode($arr['mColor']);
        $data->comment = json_encode($arr['content']);
        $data->memNo = json_encode($arr['memNo']);

        $send = json_encode($data);

        echo $send;
    }

} catch (PDOException $e) {
    echo "錯誤 : ", $e -> getMessage(), "<br>";
    echo "行號 : ", $e -> getLine(), "<br>";
}




