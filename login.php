<?php
   include("php/db.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // dane wyslane z formularza
      
      $myusername = mysqli_real_escape_string($con,$_POST['username']);
      $mypassword = mysqli_real_escape_string($con,$_POST['password']);
      
      //ZMIENIC admin NA contacts!!!!!!!
      $sql = "SELECT username FROM admin WHERE username = '$myusername' and passcode = '$mypassword'";
      $result = mysqli_query($con,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      
      $count = mysqli_num_rows($result);
      
      // tylko jeden wynik z podzapytania
		
      if($count == 1) {
        $_SESSION['login_user'] = $myusername;
        header("location: contacts.php");
      }else {
        $error = "Your Login Name or Password is invalid";
      }
   }
?>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Untitled</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700">
    <link rel="stylesheet" href="assets/css/styles.css">
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container" id="login">
        <div class="login-img-container top"><img class="login-img" src="assets/img/emotka_kot_gora.png"></div>
        <form id="login-form" action = "" method="post">
            <label>Login:</label><input class="form-control login-input" type="text" name = "username">
            <label>Hasło:</label><input class="form-control login-input" type="password" name = "password">
            <ul>
                <li><input type = "submit" value = " Zaloguj "/></li>
                <li><a class="no-account-button" href="#">Nie posiadam konta</a></li>
            </ul>
        </form>
        <div class="login-img-container bottom"><img class="login-img" src="assets/img/emotka_kot_dol.png"></div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>