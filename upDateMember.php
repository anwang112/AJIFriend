<?php
session_start();
$memberUpDateData = json_decode($_REQUEST["memberUpDateData"]);
 

try {
    require_once("connectBooks.php");
    // if (isset($_SESSION["memId"]) === false) {
    if($memberUpDateData->status == "改個人資料"){
        $sql = "UPDATE member SET `mName` = :mName ,`self-intro`=:selfIntro  WHERE `memId`= :memId;";
        $createRole = $pdo->prepare($sql);
    
        $createRole->bindValue(":memId", $memberUpDateData->memId);
        $createRole->bindValue(":mName", $memberUpDateData->mName);
        $createRole->bindValue(":selfIntro", $memberUpDateData->selfIntro);
        
        $createRole->execute();

        class data
        {
            public $name;
            public $intro;
        }
        $oo = new data();

        $oo->name = $memberUpDateData->mName;
        $oo->intro = $memberUpDateData->selfIntro;
        $send = json_encode($oo);
        echo $send;


        
    }elseif($memberUpDateData->status == "更新錢MJ值"){  //加上更新錢幣
        $sql = "select * from member where `memId`= :memId";
        $createRole = $pdo->prepare($sql);
        $createRole->bindValue(":memId", $memberUpDateData->memId);
        $createRole->execute();
        $memRow = $createRole->fetch(PDO::FETCH_ASSOC);
        //寫入ESSION
        
        class ooInfo
        {
            public $mMJ;
            public $mCoin;
        }
        $oo = new ooInfo();
        $oo->mMJ = $memRow["mMJ"];
        $oo->mCoin = $memRow["mCoin"];

        
      
      //送出登入者的姓名資料
      $send = json_encode($oo);
      echo $send;
        
    }

    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
 