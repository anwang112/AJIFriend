<?php
session_start();
$checkInFoValue = json_decode($_REQUEST["checkInFoValue"]);
if ($checkInFoValue->status == "掰掰") {
    session_destroy();
    echo "回到登入頁";
}
 ?>