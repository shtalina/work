<?php

ini_set('display_errors', 1);
define('ROOT', dirname(__FILE__));
require_once ($_SERVER['DOCUMENT_ROOT'] . '/application/core/Router.php');
Router::run();
?>