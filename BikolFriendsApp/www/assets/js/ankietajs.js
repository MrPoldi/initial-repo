$(document).ready(function(){
  $("#passch-button").click(function(){      
	  
	  var availability = $("#availability").val();

		 var dataString = availability;

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