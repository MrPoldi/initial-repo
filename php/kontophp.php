<?php
include "db.php";
    if(isset($_POST['update']))
    {	
		$password1 = $_POST['password1'];
        $password2 = $_POST['password2'];
		$myusername = $_POST['username'];
        
        $q=mysqli_query($con,"UPDATE `contacts` ( `password` ) SET 'password' = '$password1' WHERE username = '$myusername'");
        if($q)
            echo "success";
        else
            echo "error";
    }
?>