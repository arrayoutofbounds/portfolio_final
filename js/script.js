$(function(){

// DOM is loaded

	
	$("#portfolio").on('click', 'img', function () {
    	// get path of image clicked
		var source = $(this).attr("src");

		// frame has an empty image.....so set its source to the image clicked on!
		$("#main").attr("src",source);

		// we want the overlay and frame to appear
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});	


	$("#overlay").click(function(){

		$(this).fadeOut();
		$("#frame").fadeOut();

	});

	$("#right").click(function(){

	});

	$("#left").click(function(){

	});


	// when any image is clicked
	/*
	$("#portfolio img").click(function(){

		// get path of image clicked
		var src = $(this).attr("src");

		// frame has an empty image.....so set its source to the image clicked on!
		$("#frame").attr("src",src);

		// we want the overlay and frame to appear
		$("#frame").fadeIn();
		$("#overlay").fadeIn();


	});

	*/

});