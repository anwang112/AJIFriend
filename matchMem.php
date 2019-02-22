<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    //未登入
    if ($profile->memNo == '') {
        if ($profile->con != '' && $profile->hob == '') {
            $sql = "select * from member where constellation = :constellation order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindValue(':constellation', $profile->con);
            $idSta->execute();
        } else if ($profile->con == '' && $profile->hob != '') {
            $sql = "select * from member where hobby like CONCAT('%', :hobby, '%') order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindValue(':hobby', $profile->hob);
            $idSta->execute();
        } else if ($profile->con != '' && $profile->hob != '') {
            $sql = "select * from member where (constellation = :constellation) and (hobby like CONCAT('%', :hobby, '%')) order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindParam(':constellation', $profile->con);
            $idSta->bindParam(':hobby', intval($profile->hob));
            $idSta->execute();
        } else {
            $sql = "select * from member order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->execute();
        }

        $IdRow = $idSta->fetch(PDO::FETCH_ASSOC);
 
        if ($idSta->rowCount() == 0) {
            echo 0;
        } else {
            class info{
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
        }
    } else {//已登入


        if ($profile->con != '' && $profile->hob == '') {
            $sql = "select * from member where  constellation = :constellation  and memNo != :memNo order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindParam(':constellation', $profile->con);
            $idSta->bindParam(':memNo', $profile->memNo);
            $idSta->execute();
            // echo "0";
        } else if ($profile->con == '' && $profile->hob != '') {
            $sql = "select * from member where hobby like CONCAT('%', :hobby, '%') and memNo != :memNo order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindParam(':hobby', $profile->hob);
            $idSta->bindParam(':memNo', $profile->memNo);
            $idSta->execute();
        } else if ($profile->con != '' && $profile->hob != '') {
            $sql = "select * from member where (constellation = :constellation) and (hobby like CONCAT('%', :hobby, '%')) and memNo != :memNo  order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindParam(':constellation', $profile->con);
            $idSta->bindParam(':hobby', intval($profile->hob));
            $idSta->bindParam(':memNo', $profile->memNo);
            $idSta->execute();
        } else {
            $sql = "select * from member where memNo != :memNo order by rand()";
            $idSta = $pdo->prepare($sql);
            $idSta->bindValue(':memNo', $profile->memNo);
            $idSta->execute();
        }
            
        
        if ($idSta->rowCount() == 0) {
            echo 0;
        }else {
        $IdRow = $idSta->fetchAll(PDO::FETCH_ASSOC);
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
        $f=[];
        for($i=0;$i< count($IdRow);$i++){
            $Rsql = "select count(*) from relationship where (memNo = :memNo and targetNo = :targetNo) or (memNo = :targetNo and targetNo = :memNo)";
            $RSta = $pdo->prepare($Rsql);
            $RSta->bindParam(':targetNo', $IdRow[$i]["memNo"]);
            $RSta->bindParam(':memNo', $profile->memNo);
            $RSta->execute();
            $RStaRow=$RSta ->fetch(PDO::FETCH_ASSOC);
            
            if ($RStaRow["count(*)"] == 0) {
                 
                    $str = new info();
                    $str->name = $IdRow[$i]["mName"];
                    $str->constellation = $IdRow[$i]["constellation"];
                    $str->hobby = $IdRow[$i]["hobby"];
                    $str->mj = $IdRow[$i]["mMJ"];
                    $str->intro = $IdRow[$i]["self-intro"];
                    $str->eye = $IdRow[$i]["eye"];
                    $str->body = $IdRow[$i]["animal"];
                    $str->hat = $IdRow[$i]["wearHat"];
                    $str->clothes = $IdRow[$i]["wearClothes"];
                    $str->color = $IdRow[$i]["mColor"];
                    $str->memId = $IdRow[$i]["memId"];
                    $str->memNo = $IdRow[$i]["memNo"];
                    array_push ( $f , $str);

                    
                    }
                   
        }
        if($f){
            $send = json_encode($f[0]);
                    echo $send;
        }else{
            echo 0;
        }
        
        
        }
    }

   
} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

