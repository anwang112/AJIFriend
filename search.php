<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
 
    $sql = "select * from member where memId = :memId";
    $idSta = $pdo->prepare($sql);
    $idSta->bindValue(':memId', $profile->memId);
    $idSta->execute();
    $IdRow = $idSta->fetch(PDO::FETCH_ASSOC);

    if ($idSta->rowCount() == 0) {//找不到
        echo 0;
    } else{
    
    
    if($profile->loginMemNo == ''){//沒登入
        class info
        {
            public $name;
            public $constellation;
            public $hobby;
            public $mj;
            public $eye;
            public $body;
            public $hat;
            public $clothes;
            public $color;
            public $memId;
            public $intro;
            public $memNo;

        }
        
        $str = new info();
        $str->name = $IdRow["mName"];
        $str->constellation = $IdRow["constellation"];
        $str->hobby = $IdRow["hobby"];
        $str->mj = $IdRow["mMJ"];
        $str->intro = $IdRow["self-intro"];
        $str->eye = $IdRow["eye"];
        $str->body = $IdRow["animal"];
        $str->hat = $IdRow["wearHat"];
        $str->clothes = $IdRow["wearClothes"];
        $str->color = $IdRow["mColor"];
        $str->memId = $IdRow["memId"];
        $str->memNo = $IdRow["memNo"];
        $send = json_encode($str);
        echo $send;

    }else{
    //判斷有無關係
    $Osql = "select count(*) from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
        $OSta = $pdo->prepare($Osql);
        $OSta->bindParam(':targetNo',$IdRow["memNo"]);
        $OSta->bindParam(':memNo', $profile->loginMemNo);
        $OSta->execute();
        $OStaRow = $OSta->fetch(PDO::FETCH_ASSOC);

    if($OStaRow["count(*)"]==0){
        class info
        {
            public $name;
            public $constellation;
            public $hobby;
            public $mj;
            public $eye;
            public $body;
            public $hat;
            public $clothes;
            public $color;
            public $memId;
            public $intro;
            public $memNo;

        }
        
        $str = new info();
        $str->name = $IdRow["mName"];
        $str->constellation = $IdRow["constellation"];
        $str->hobby = $IdRow["hobby"];
        $str->mj = $IdRow["mMJ"];
        $str->intro = $IdRow["self-intro"];
        $str->eye = $IdRow["eye"];
        $str->body = $IdRow["animal"];
        $str->hat = $IdRow["wearHat"];
        $str->clothes = $IdRow["wearClothes"];
        $str->color = $IdRow["mColor"];
        $str->memId = $IdRow["memId"];
        $str->memNo = $IdRow["memNo"];
        $send = json_encode($str);
        echo $send;

    }else{
// 判斷是不是朋友或邀請中
    $Rsql = "select relaCate from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
    $RSta = $pdo->prepare($Rsql);
    $RSta->bindParam(':targetNo',$IdRow["memNo"]);
    $RSta->bindParam(':memNo', $profile->loginMemNo);
    $RSta->execute();
    $RStaRow = $RSta->fetch(PDO::FETCH_ASSOC);

    class info
        {
            public $name;
            public $constellation;
            public $hobby;
            public $mj;
            public $eye;
            public $body;
            public $hat;
            public $clothes;
            public $color;
            public $memId;
            public $intro;
            public $memNo;
            public $friendRe;

        }
        
        $str = new info();
        $str->name = $IdRow["mName"];
        $str->constellation = $IdRow["constellation"];
        $str->hobby = $IdRow["hobby"];
        $str->mj = $IdRow["mMJ"];
        $str->intro = $IdRow["self-intro"];
        $str->eye = $IdRow["eye"];
        $str->body = $IdRow["animal"];
        $str->hat = $IdRow["wearHat"];
        $str->clothes = $IdRow["wearClothes"];
        $str->color = $IdRow["mColor"];
        $str->memId = $IdRow["memId"];
        $str->memNo = $IdRow["memNo"];
        $str->friendRe = $RStaRow["relaCate"];
        $send = json_encode($str);
        echo $send;

    
    }


    
    }
    

    }



    

       
    

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

