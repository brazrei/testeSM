<?php
  
  function getCurl($url) {
    $ch=curl_init();
    $timeout=45;

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

    $result=curl_exec($ch);
    curl_close($ch);
    return $result;
  }
  include('top-cache.php'); 

  // Your regular PHP code goes here
  //  $testeParam = $_POST['testeParam'];
  //$local = $_GET['local'];
  //$urlF = $url.'?local='.$local.'&msg=metar';
 // echo ($urlF);
  //echo $urlF;
  //$response = getCurl($urlF);
  $response = file_get_contents($urlF);
  echo $response;
  if ($response =="")
    echo "Erro na consulta! Resposta vazia do servidor!";

  include('bottom-cache.php');
?>

