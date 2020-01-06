<?php
    ini_set('display_errors',1);
    error_reporting(E_ALL);
    header("Access-Control-Allow-Origin: *");
    $con = mysqli_connect("localhost:3306","test","test","bikol") or die ("Error: could not connect to database " . $con -> connect_error);
?>