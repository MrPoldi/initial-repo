$(document).ready(function(){
  $("#login-button").click(function(){      
      var phoneNumber = $("#phonenumber").val();
      phoneNumber.replace(/\s+/g, '');
      phoneNumber.replace('+','');
      
      var fullName = $("#userfullname").val();
      var spl = fullName.split(" ");
      var firstName = spl[0];
      var lastName = spl[1];
      
      var username = $("#username").val();
      var password = $("#password").val();
      var passwordConfirm = $("#password_confirm").val();
      if(password != passwordConfirm){
          alert("Hasła się nie zgadzają!")
          return false;
      }
      var availability = $("#availability").val();
      
      var dataString = "phone=" + phoneNumber + "&firstName=" + firstName + "&lastName=" + lastName + "&username=" + username + "&password=" + password + "&availability=" + availability + "&insert=";
      
      //alert(dataString);
      
      $.ajax({
            type: "POST",
            url: "https://bikolapka.000webhostapp.com/insert.php",
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
                    window.open("index.html","_self")

                } 
                else if (data == "error") {
                       alert("error");
                }
            }
      });
  });
});