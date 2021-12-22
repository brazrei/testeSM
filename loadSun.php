<?php
  function setProxy() {
    $PROXY_HOST = "proxy.decea.intraer"; // Proxy server address
    $PROXY_PORT = "8080";    // Proxy server port
    $PROXY_USER = "brazrab";    // Username
    $PROXY_PASS = "12345678";   // Password
    // Username and Password are required only if your proxy server needs basic authentication
    
    $auth = base64_encode("$PROXY_USER:$PROXY_PASS");
    stream_context_set_default(
     array(
      'http' => array(
       'proxy' => "tcp://$PROXY_HOST:$PROXY_PORT",
       'request_fulluri' => true,
       'header' => "Proxy-Authorization: Basic $auth"
       // Remove the 'header' option if proxy authentication is not required
      )
     )
    );
  }    

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  setProxy();
  $fileName = "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0171.mp4";
  $file = file_get_contents($fileName);
  file_put_contents("video1.mp4",$file);

  $mime = 'application/octet-stream';

  header('Content-Type: '.$mime);
  header('Content-Description: File Transfer');
  header('Content-Disposition: attachment; filename='.$fileName);
  header('Content-Transfer-Encoding: binary');
  header('Expires: 0');
  header('Cache-Control: must-revalidate');
  header('Pragma: public');
  header('Content-Length: ' . filesize($fileName));
  ob_clean();
  flush();
  readfile($fileName);
  exit;

  
?>
