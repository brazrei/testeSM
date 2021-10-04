<?php
// Cache the contents to a cache file
  $dirName = "cache";
  if (!file_exists($dirName)) {
     mkdir($dirName, 0777);
  }
  $cachefile = $dirName . "/" . $cachefile;
  $cached = fopen($cachefile, 'w');
  fwrite($cached, ob_get_contents());
  fclose($cached);
  ob_end_flush(); // Send the output to the browser
?>
