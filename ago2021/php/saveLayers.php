<?php
  $txt = $_POST['layers']; 
  $filename = 'layers.txt';
  file_put_contents($filename, $txt); 
  
