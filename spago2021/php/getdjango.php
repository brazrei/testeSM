<?php
include "deleteOldFiles.php";
deleteOldFiles("json",12);
$data = $_GET['data'];
$rodada = $_GET['rodada'];
$offset = $_GET['offset'];
$level = $_GET['level'];
$url = "http://localhost:8000/getjson/?data={$data}&rodada={$rodada}&offset={$offset}&level={$level}";
$filename = "json/saida_{$data}_{$rodada}Z_f{$offset}_{$level}_wind.json";
$tempfilename = "baixando.temp";
if (!file_exists("json"))
    makeDir("json");

//se o arquivo já estiver sento baixado
if (file_exists($tempfilename)) {
    $waittime = 60;
    $t1 = time();

    while ((time() - $t1) < $waittime && file_exists($tempfilename)) {
        sleep(1);
    }
    if (file_exists($tempfilename))
        exit(1);
}

if (!file_exists(($filename))) {
    file_put_contents($tempfilename, "baixando");
    $content = file_get_contents($url);
    file_put_contents($filename, $content);
    if (filesize($filename) < 50000)
        unlink($filename);
    if (file_exists($tempfilename))
        unlink($tempfilename);
} else
    $content = file_get_contents($filename);

echo $content;
//file_put_contents($filename, $url); 
