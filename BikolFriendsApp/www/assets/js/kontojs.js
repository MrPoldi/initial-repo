$(document).ready(function(){
  $("#passch-button").click(function(){      
	  
	  var password1 = $("#password1").val();
	  var password2 = $("#password2").val();
	  if(password1 == password2 && password1.length > 3 && password2.length > 3){
		 var dataString = password1;
	  }
	  else{
		 alert("Password is wrong. Required minimum 4 signs or same passwords in the brackets");
	  }
      $.ajax({
            type: "POST",
            url: "http://localhost/bikol/kontophp.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                $("#passch-button").val('Przesyłam...');
            },
            success: function(data) {
                if (data == "success") {
                    alert("inserted");
                    $("#passch-button").val('Zmień hasło');
                } 
                else if (data == "error") {
                       alert("error");
                }
            }
      });
  });
});