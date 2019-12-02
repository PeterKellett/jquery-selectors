$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").mouseenter(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").mouseenter(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	$("p").click(function() {
		$("p").css("color", "red");
	});
	
	$("h2").hover(function() {
		$("h2").css("background-color", "lightblue");
		$(this).css("font-size", "46px");
	}, function() {
		$(this).css("color", "red");
	});
	
	$(".stream1 .bottom_button").click(function() {
		$(".stream1 p").slideToggle('1000');
       
    });
    $(".stream2 .bottom_button").click(function(){
        $('.stream2 p').toggle('slow');
    });
    $(".stream3 .bottom_button").mouseenter(function(){
        $('.stream3 p').fadeTo(0, 0.5);
    });
    $(".stream3 .bottom_button").mouseleave(function(){
        $('.stream3 p').fadeTo(0, 1);
    });
    $(".stream4 .bottom_button").click(function(){
        $('.stream4 p').toggle('fast');
    });
    $(".stream5 .bottom_button").click(function(){
        $('.stream5 p').toggle();
    });
    $(".stream6 .bottom_button").click(function(){
        $('.stream6 p').toggle();
    });

}); 
