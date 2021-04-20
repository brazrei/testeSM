<?php
    $url = $_POST['url'];
    $filename = "imgsat/".$_POST['filename'];


    file_put_contents($filename, file_get_contents($url)); 
?>

//    $filename = "../imgsat/".$_POST['filename'];
//unlink($filename);
