<?php
    ini_set('display_errors',1);
    error_reporting(E_ALL);
    header("Access-Control-Allow-Origin: *");
    $con = mysqli_connect("remotemysql.com","SF4j7jn2Aj","gsszmwolkM","SF4j7jn2Aj") or die ("Error: could not connect to database " . $con -> connect_error);
?>
