$(document).ready(function() {
	
	$("#m-nav").click(function(){
		$("#m-menu").slideToggle("slow");
	});

	$(".menu li").hover(function() {
		var id = $(this).attr('id');
		var left = $(this).position().left;
		if (typeof id !== "undefined") {
			$('#'+id+'-div').css({left: left}).show();
		}
	});

	$(".menu li").on("mouseleave", function() {
		var id = $(this).attr('id');
		if (typeof id !== "undefined") {
			$('#'+id+'-div').hide();
		}
	});

	$(".sub-menu").hover(function() {
		$(this).show();
	});

	$(".sub-menu").on("mouseleave", function() {
		$(this).hide();
	});

});