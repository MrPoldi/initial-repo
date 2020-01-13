$(document).ready(function(){
  $("#passch-button").click(function(){      
	  
	  var myusername = $("#myusername").val();
	  var password1 = $("#password1").val();
	  var password2 = $("#password2").val();
	  if(password1 == password2 && password1.length > 3 && password2.length > 3){
      	  var dataString = "myusername=" + myusername + "&password1=" + password1 + "&password2=" + password2 + "&update=";
	  }
	  else{
		 alert("Password is wrong. Required minimum 4 signs or same passwords in the brackets");
	  }
      $.ajax({
            type: "POST",
            url: "https://bikolapka.000webhostapp.com/kontophp.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                $("#passch-button").val('Przesyłam...');
            },
            success: function(data) {
                if (data == "success") {
                    alert("hasło zostało poprawnie zmienione");
                    $("#passch-button").val('Zmień hasło');
		    window.location.href = 'https://bikolapka.000webhostapp.com/konto.html';
                } 
                else if (data == "error") {
                    alert("error");
		    window.location.href = 'https://bikolapka.000webhostapp.com/konto.html';
                }
            }
      });
  });
});
