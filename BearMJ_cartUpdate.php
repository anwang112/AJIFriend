<?php 
session_start();
$no = $_REQUEST["proNo"];
unset($_SESSION["proNo"][$no]);
unset($_SESSION["proName"][$no]);
unset($_SESSION["price"][$no]);
unset($_SESSION["img"][$no]);

header("Location:BearMJ_cartShow.php");
?>