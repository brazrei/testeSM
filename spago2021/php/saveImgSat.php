<?php
    ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    
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

    //echo file_get_contents($url);    
    
    $url = $_POST['url'];
    $filename = "imgsat/".$_POST['filename'];
    
    echo $filename." - ".$url;
    file_put_contents($filename."z", $url); 
    if (!file_exists ($filename))
    { 
        $datafile = file_get_contents($url);
        echo "Resposta => ".file_put_contents($filename, $datafile); 
    }
?>
