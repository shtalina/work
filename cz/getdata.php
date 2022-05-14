<?php
echo "hello";
$json = file_get_contents('https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa=403');

$data = json_decode($json, true);

var_dump($data);
?>