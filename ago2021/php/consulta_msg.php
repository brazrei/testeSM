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
  //  $testeParam = $_POST['testeParam'];
  //$local = $_GET['local'];
  //$urlF = $url.'?local='.$local.'&msg=metar';
 // echo ($urlF);
  //echo $urlF;
  $response = file_get_contents($urlF);
  echo $response;
  if ($response =="")
    echo "Erro na consulta! Resposta vazia do servidor!";

  include('bottom-cache.php');
?>

