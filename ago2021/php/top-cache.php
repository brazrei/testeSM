<?php
  $url = $_SERVER["SCRIPT_NAME"];
  $break = Explode('/', $url);
  $file = $break[count($break) - 1];
  $encrypted_Locs = hash('sha256',$_GET['local']);
  $cachefile = 'cached-'.substr_replace($file ,"",-4).$encrypted_Locs.'.html';
  $cachetime = 55;

  // Serve from the cache if it is younger than $cachetime
  if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
      echo "<!-- Cached copy, generated ".date('H:i', filemtime($cachefile))." -->\n";
      readfile($cachefile);
      exit;
  }
  ob_start(); // Start the output buffer
?>
