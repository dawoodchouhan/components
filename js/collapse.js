$(document).ready(()=>{
  	$('#collapse1').hide();
	$('#collapse2').hide();
	$('#collapse3').hide();

	

	  $('#button1').click(()=>{

	      $('#collapse1').slideToggle({height: "120px"});

	  });
    $('#button2').click(()=>{

      $('#collapse2').slideToggle({height: "120px"});

  });
      $('#button3').click(()=>{

      $('#collapse3').slideToggle({height: "120px"});

  });
});
