$(function(){

// DOM is loaded
	
	// has parent li of the image that is clicked on
	var current_li;
	
	$("#portfolio").on('click', 'img', function () {
    	// get path of image clicked
		var source = $(this).attr("src");

		// parent li of the source image
		current_li = $(this).parent();

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

	// when the right arrow is clicked
	$("#right").click(function(){

		if(current_li.is(":last-child")){
			var next_li = $("#portfolio li").first();
		}else{
			var next_li = current_li.next();
		}

		var next_src = next_li.children("img").attr("src");
		$("#main").attr("src",next_src);

		current_li = next_li;
	});


	// when the left arrow is clicked
	$("#left").click(function(){

		if(current_li.is(":first-child")){
			var prev_li = $("#portfolio li").last();
		}else{
			var prev_li = current_li.prev();
		}

		
		var prev_src = prev_li.children("img").attr("src");
		$("#main").attr("src",prev_src);

		current_li = prev_li;
	});


	$("#right, #left").mouseover(function(){
		$(this).css("opacity","0.75");
	});

	$("#right, #left").mouseleave(function(){
		$(this).css("opacity","0.5");
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