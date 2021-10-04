<?php
  function getCurl($url) {
   $curl = curl_init();

   error_reporting(E_ALL);
   $response = curl_exec($curl);
   $err = curl_error($curl);

   curl_close($curl);
   return $response;
  }
  include('top-cache.php'); 

  // Your regular PHP code goes here
  $url = $_POST['url'];
  //$local = $_GET['local'];
  //$urlF = $url.'?local='.$local.'&msg=metar';
 // echo ($urlF);
  $urlF = $url;
  echo (file_get_contents($url));
  include('bottom-cache.php');
?>

