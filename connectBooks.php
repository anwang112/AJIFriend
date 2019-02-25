<?php
	$dsn = "mysql:host=127.0.0.1;port=3306;dbname=cd105g1;charset=utf8";
	$user = "cd105g1";
	$password = "cd105g1";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION );
	$pdo = new PDO($dsn, $user, $password, $options);
?>