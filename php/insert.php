<?php
include "db.php";
    if(isset($_POST['insert']))
    {
        $phone = $_POST['phone'];
        $nick = $_POST['username'];
        $name = $_POST['firstName'];
        $surname = $_POST['lastName'];
        $password = $_POST['password'];
        $availability = $_POST['availability'];
        
        $q=mysqli_query($con,"INSERT INTO `contacts` ( `number` , `name` , `surname`, `nick`, `password`, `availability` ) VALUES ('$phone','$name','$surname','$nick','$password','$availability')");
        if($q)
            echo "success";
        else
            echo "error";
    }
?>