<?php
$json_string = 'https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa=403';
$jsondata = file_get_contents($json_string);
$obj = json_decode($jsondata, true);

print_r($obj);
?>