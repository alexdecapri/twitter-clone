$(document).ready(function() {

	$(".tweet-compose").focus("click", function() {
		$(this).addClass("tweet-write");
		$(this).parent().children().css("display", "inline-block"); //tweet-compose doesn't have any children
		$(this).parent().children().children().css("display", "inline-block"); //button is child of tweet-controls
	});

	$(".tweet-compose").blur("click", function() {
		$(this).removeClass("tweet-write");
		$("#tweet-controls").css("display", "none");
		$("#tweet-submit").css("display", "none");
	});


	$(".tweet-compose").keyup(function() {
		var upper_limit = 140;
		var text_length = $(".tweet-compose").val().length;
		var new_count = upper_limit - text_length;
		$("#char-count").text(new_count);

		if (new_count <= 10) {
			$("#char-count").css("color", "red");
			if (new_count < 0) {
				$("#tweet-submit").attr("disabled", "true");
			}
			else if (new_count >= 0) {
				$("#tweet-submit").removeAttr("disabled");
			}
			//works if you don't copy and paste...
		}

		else if (new_count > 10) {
			$("#char-count").css("color", "gray");
			if (new_count === 140) {
				$("#tweet-submit").attr("disabled", "true");
			}
			else if (new_count !== 140) {
				$("#tweet-submit").removeAttr("disabled");
			}
		}
	});

	$("#tweet-submit").on("click", function() {
		alert("hello");
	});




});