<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=cd105g1;charset=utf8";
	$user = "root";
	$password = "hacky22110";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION );
	$pdo = new PDO($dsn, $user, $password, $options);
?>