<?php
    //跟資料庫要資料

try {
    require_once("../connectBooks.php");
    //總筆數


    if (isset($_REQUEST["actObj"])) {
        $actObj = $memberData = json_decode($_REQUEST["actObj"]);
        $sqlSearch_actNO = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND actTitle = :actTitle";
        $aa = $pdo->prepare($sqlSearch_actNO);

        $aa->bindValue(":actTitle",  $actObj->actValue);

        $aa->bindColumn("actNo", $actNo);
        $aa->bindColumn("host_memNo", $host_memNo);
        $aa->bindColumn("actTitle", $actTitle);
        $aa->bindColumn("actLoc", $actLoc);
        $aa->bindColumn("act_begin", $act_begin);
        $aa->bindColumn("act_end", $act_end);
        $aa->bindColumn("actIntro", $actIntro);
        $aa->bindColumn("actImg", $actImg);
        $aa->bindColumn("mName", $mName);
        $aa->execute();

        class data
        {
            public $no;
            public $memNo;
            public $title;
            public $loc;
            public $begin;
            public $end;
            public $actIntro;
            public $img;
            public $memName;
        }

        $aaR = $aa->fetch(PDO::FETCH_ASSOC);
        $aDB = new data();

        $aDB->no =  $actNo;
        $aDB->memNo = $host_memNo;
        $aDB->title = $actTitle;
        $aDB->loc = $actLoc;
        $aDB->begin = $act_begin;
        $aDB->end =  $act_end;
        $aDB->actIntro =  $actIntro;
        $aDB->img = $actImg;
        $aDB->memName = $mName;


        $send = json_encode($aDB);
        echo  $send;
    }

    //活動刪除(欄位showOrNot設為0)
} catch (PDOException $e) {
    echo "錯誤 : ", $e->getMessage(), "<br>";
    echo "行號 : ", $e->getLine(), "<br>";
}
 