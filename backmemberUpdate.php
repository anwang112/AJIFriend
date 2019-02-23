<?php
session_start();
$memberData = json_decode($_REQUEST["memberData"]);
try {
    //連線
    require_once("connectBooks.php");
    if($memberData->power == 'xx'){
        $sql = "select * from member where memNo = :memNo";
        $allmember = $pdo->prepare($sql);
        $allmember->bindValue(":memNo", $memberData->memNo);
        $allmember->execute();
        // $allmember -> bindColumn("memNo", $memNo);
	    // $allmember -> bindColumn("memId", $memId);
    	// $allmember -> bindColumn("mName", $mName);
        // $allmember -> bindColumn("mMJ", $mMJ);
        // $allmember -> bindColumn("mCoin", $mCoin);
        // $allmember -> bindColumn("power", $power);
        $allmemberRow = $allmember -> fetch(PDO::FETCH_ASSOC);

        // $allmemberRow["memNo"];
        // $allmemberRow["memId"];
        // $allmemberRow["mName"];
        // $allmemberRow["mMJ"];
        // $allmemberRow["mCoin"];
        // $allmemberRow["power"];

        echo $allmemberRow["memNo"];

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
        
        echo "成功ㄌ";
    }
    // $sql = "select * from member";



    
} catch (PDOException $e) {
    echo $e->getMessage();
}
 