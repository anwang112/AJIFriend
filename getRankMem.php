<?php
session_start();
$profile = json_decode($_REQUEST["profile"]);
$errMsg = "";
try {
    require_once("connectBooks.php");
    if ($profile->rank == 'money') {
        $sql = "select * from member ORDER BY mCoin DESC";
        $sta = $pdo->prepare($sql);
        $sta->execute();
        $IdRow = $sta->fetchAll(PDO::FETCH_ASSOC);
        
    }
    else if($profile->rank == 'topMJ'){
        $sql = "select * from member ORDER BY mMJ DESC";
        $sta = $pdo->prepare($sql);
        $sta->execute();
        $IdRow = $sta->fetchAll(PDO::FETCH_ASSOC);

    }
    else if($profile->rank == 'friend'){
        $sql = "select * from member ORDER BY friend DESC";
        $sta = $pdo->prepare($sql);
        $sta->execute();
        $IdRow = $sta->fetchAll(PDO::FETCH_ASSOC);

    }

    if ($sta->rowCount() == 0) {
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
            public $friend;
        }
        $rankArr=[];
        for ($i=0; $i <= 2; $i++) {

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
            $str->coin = $IdRow[$i]["mCoin"];
            $str->friend = $IdRow[$i]["friend"];
            
            array_push ( $rankArr , $str);
        }
        $send = json_encode($rankArr);
        echo $send;
    }
} catch (PDOException $e) {
    echo $e->getMessage();
    $errMsg .= "錯誤 : " . $e->getMessage() . "<br>";
    $errMsg .= "行號 : " . $e->getLine() . "<br>";
}

?>

