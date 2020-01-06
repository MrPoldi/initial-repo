$(document).ready(function(){
  $("#login-button").click(function(){      
      var phoneNumber = $("#phonenumber").val();
      var fullName = $("#userfullname").val();
      var spl = fullName.split(" ");
      var firstName = spl[0];
      var lastName = spl[1];
      var username = $("#username").val();
      var password = $("#password").val();
      var passwordConfirm = $("#password_confirm").val();
      var availability = $("#availability").val();
      
      var dataString = "phone=" + phoneNumber + "&firstName=" + firstName + "&lastName=" + lastName + "&username=" + username + "&password=" + password + "&availability=" + availability + "&insert=";
      
      //alert(dataString);
      
      $.ajax({
            type: "POST",
            url: "http://localhost/bikol/insert.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                $("#login-button").val('Przesyłam...');
            },
            success: function(data) {
                if (data == "success") {
                    alert("inserted");
                    $("#login-button").val('Zatwierdź');
                } 
                else if (data == "error") {
                       alert("error");
                }
            }
      });
  });
});