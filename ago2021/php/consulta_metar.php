<?php
  function getCurl($url) {
   $curl = curl_init();

   curl_setopt_array($curl, array(
     CURLOPT_URL => $url,
     CURLOPT_RETURNTRANSFER => true,
     CURLOPT_TIMEOUT => 30,
     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
     CURLOPT_CUSTOMREQUEST => "GET",
     CURLOPT_HTTPHEADER => array(
       "cache-control: no-cache"
     ),
   ));
   error_reporting(E_ALL);
   $response = curl_exec($curl);
   $err = curl_error($curl);

   curl_close($curl);
   return $response;
  }
  include('top-cache.php'); 

  // Your regular PHP code goes here
  $url = $_GET['url'];
  $local = $_GET['local'];
  $urlF = $url.'?local='.$local.'&msg=metar';
 // echo ($urlF);
  echo (file_get_contents($urlF));
  include('bottom-cache.php');
?>

