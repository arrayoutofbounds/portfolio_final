$(function(){

	$("#filter li").click(function(){

		// fetch category clicked. 
		// this refers to link clicked and html gets the text it contains
		var category = $(this).html();

		// to only have underline under active category.
		$("#filter li").removeClass("active");

		$(this).addClass("active");

		// hide all pics
		$("#portfolio li").fadeOut();

		$("#portfolio li").each(function(){

			// does the image have the category selected
			if(($(this)).hasClass(category)){

				// fade in pics that have that categoru
				$(this).fadeIn();
			}

		});


	});




});