<?php 
session_start();
$no = $_REQUEST["proNo"];
$_SESSION["proNo"][$no]= $no;
$_SESSION["proName"][$no] = $_REQUEST["proName"];
$_SESSION["price"][$no] = $_REQUEST["price"];
$_SESSION["img"][$no] = $_REQUEST["img"];
$_SESSION["mj"][$no] = $_REQUEST["mj"];
// header("Location:BearMJ_shop_addcart.php");
?>