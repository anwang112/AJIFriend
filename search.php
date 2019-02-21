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
<<<<<<< HEAD
=======
            public $memNo;
>>>>>>> da79c88c697e968491b7611dfcd5024eee3c9058

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
<<<<<<< HEAD
=======
        $str->memNo = $IdRow["memNo"];
>>>>>>> da79c88c697e968491b7611dfcd5024eee3c9058
        $send = json_encode($str);
        echo $send;
    }

} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}


?>

