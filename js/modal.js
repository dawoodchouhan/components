

$( document ).ready(function() {

	$(".btn").click(() => {
	    $(".modal").css("display","block")
	});

	$(".close").click(() => {
	    $(".modal").css("display","none")

	});

	$(".close1").click(() => {
	    $(".modal").css("display","none")

	});
	

	/*Functions to hide modal on window click*/
	$(window).click((event)  =>  { 
	    if (event.target.id == "myModal") {
	        event.target.style.display = "none";
	    }
	});


});

