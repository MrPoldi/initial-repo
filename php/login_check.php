<?php
    include "db.php";
    
    $myusername = $_POST['username'];
    $mypassword = $_POST['password'];

    //ZMIENIC admin NA contacts!!!!!!!
    $sql = "SELECT nick FROM contacts WHERE nick = '$myusername' and password = '$mypassword'";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);
    
    $count = mysqli_num_rows($result);
      
    // tylko jeden wynik z podzapytania
		
    if($count == 1) {
        echo "success";
    }else {
        echo "error";
    }
   
?>