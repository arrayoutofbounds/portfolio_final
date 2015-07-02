$(function(){

// DOM is loaded
	
	// has parent li of the image that is clicked on
	var current_li;

	// stop fires after the image has stopped being dragged. The ajax sends the state of the portfolio so that the 
	// next time the user comes on.....the order of the images is same as last time.
	$("#portfolio").sortable();

	// used for async text beneath image. CONTAINS AJAX feature
	function setImg(src,id){
		
		// frame has an empty image.....so set its source to the image clicked on!
		$("#main").attr("src",src);

		var path = "text/" + id + ".txt";

		// FIRST LINE OF AJAX CODE
		// get accesses the file following the path. The data parameter is what is returned from the servers....servesrs response.
		// in this case, we want contents of the file that are stored under the path.
		// get functions asks the server to get the file with the given path. The data in the function is the contents of the file....i.e the servers
		// response
		$.get(path,function(data){
			$("#description p").html(data);
		});
	}
	
	$("#portfolio").on('click', 'img', function () {
    	// get path of image clicked
		var source = $(this).attr("src");
		var id = $(this).attr("id");
		// parent li of the source image
		current_li = $(this).parent();

		
		setImg(source,id);


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
		var id = next_li.children("img").attr("id");

		setImg(next_src,id);

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
		var id = prev_li.children("img").attr("id");

		setImg(prev_src,id);

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