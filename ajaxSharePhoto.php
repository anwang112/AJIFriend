<?php
ob_start();
session_start();
try{
    require_once("connectBooks.php");
    switch( $_FILES["addPic"]["error"] ){
      case UPLOAD_ERR_OK:
        $from = $_FILES['addPic']['tmp_name'];
        $to = "images/{$_FILES['addPic']['name']}";
        copy($from, $to);
        break;
      case UPLOAD_ERR_INI_SIZE:
        echo "上傳檔案太大,不得超過: ", ini_get("upload_max_filesize"), "<br>";
        break;
      case UPLOAD_ERR_FORM_SIZE:
        echo "上傳檔案太大 <br>";
        break;
      case UPLOAD_ERR_PARTIAL:
        echo "上傳資料有問題，請重送<br>";
        break;
      case UPLOAD_ERR_NO_FILE:
        echo "未選檔案<br>";
        break;
      default : 
        echo "['error']: " , $_FILES['addPic']['error'] , "<br>";
    }
    $sql = "insert into picture (memNo, pic_cateNo, vote, time, src, text) values({$_SESSION['memNo']}, 2,0,:time, :src, :text )";
    $pic = $pdo -> prepare($sql);
    $pic -> bindValue(":time", date("Y-m-d H:i:s"));
    $pic -> bindValue(":src", $to);
    $pic -> bindValue(":text", "abc");
    $pic -> execute();
    $picNo = $pdo -> lastInsertId();
    $sql = "select * from picture p join member m on p.memNo = m.memNo where p.picNo = {$picNo}";
    $pictures = $pdo -> query($sql);
    $photoRow = $pictures -> fetch();

    $html = "<img class='cardPhoto' src='{$photoRow['src']}' alt='no1'>
        <img class='member' src='images/member4-20.png' alt='doggy'>
        <a href='#'>{$photoRow['memId']}</a>
        <img id='heart|{$photoRow['picNo']}' class='heart' src='images/fullheart-16.png' alt='heart'>
        <span class='voteNum' id='voteNum'>{$photoRow['vote']}</span>
        <div class='bigHeart' id='bigHeart'>
            <img src='images/heart.svg' alt='bigHeart'>
        </div>";

    echo $html;
}catch(PDOException $e){
    echo $e->getMessage();
}

?>