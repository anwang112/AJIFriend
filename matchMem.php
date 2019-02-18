<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
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
    if ($idSta->rowCount() == 0) {
        echo 0;
    } else {
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


        }
        $IdRow = $idSta->fetch(PDO::FETCH_ASSOC);
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
        $send = json_encode($str);
        echo $send;
    }
} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

