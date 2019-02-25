<?php
$upload_dir = "images//";
if( ! file_exists($upload_dir ))
  mkdir($upload_dir);
$img = $_POST['hidden_data'];
$img = str_replace('data:image/png;base64,', '', $img);
// $img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$fileName = date("Ymd");
$file = $upload_dir . $fileName . ".png";
$success = file_put_contents($file, $data);
echo $success ? $file : 'Unable to save the file.';
?>