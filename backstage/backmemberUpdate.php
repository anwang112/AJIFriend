<?php
session_start();
$memberData = json_decode($_REQUEST["memberData"]);
try {
    //連線
    require_once("../connectBooks.php");
    if($memberData->power == 'xx'){
        $sql = "select * from member where memNo = :memNo";
        $allmember = $pdo->prepare($sql);
        $allmember->bindValue(":memNo", $memberData->memNo);
        $allmember->execute();
        
        if ($allmember->rowCount() == 0) {
            echo "找不到喔";
        } else {
            class info
            {
                public $memNo;
                public $memId;
                public $mName;
                public $mMJ;
                public $mCoin;
                public $power;
            }

            $IdRow = $allmember->fetch(PDO::FETCH_ASSOC);
            $str = new info();

            $str->memNo = $IdRow["memNo"];
            $str->memId = $IdRow["memId"];
            $str->mName = $IdRow["mName"];
            $str->mMJ = $IdRow["mMJ"];
            $str->mCoin = $IdRow["mCoin"];
            $str->power = $IdRow["power"];
            $send = json_encode($str);


            echo $send;
        }




    }else if (($memberData->power == '1')||($memberData->power == '0')){
        $sql = "update member set power = :power where memNo= :memNo";
        $allmember = $pdo->prepare($sql);
        $allmember->bindValue(":memNo", $memberData->memNo);
        if($memberData->power == '1'){
            $allmember->bindValue(":power", 1); 
        }elseif($memberData->power == '0'){
            $allmember->bindValue(":power", 0); 
        }
        
        $allmember->execute();
        
        echo "更改成功";
    }
    // $sql = "select * from member";



    
} catch (PDOException $e) {
    echo $e->getMessage();
}
 