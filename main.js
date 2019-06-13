
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});