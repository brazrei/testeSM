<?php
  $url = $_SERVER["SCRIPT_NAME"];
  $break = Explode('/', $url);
  $file = $break[count($break) - 1];
  $encrypted_url = hash('sha256',$_POST['urlConsulta']);

  $dirName = "cache";
  if (!file_exists($dirName)) {
     mkdir($dirName, 0777);
  }
  $cachefile = $dirName . "/" . 'cached-'.substr_replace($file ,"",-4).$encrypted_url.'.html';
  $cachetime = 55;

  // Serve from the cache if it is younger than $cachetime
  if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
      echo "<!-- Cached copy, generated ".date('H:i', filemtime($cachefile))." -->\n";
      readfile($cachefile);
      exit;
  }
  ob_start(); // Start the output buffer
?>
