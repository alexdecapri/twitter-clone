$(document).ready(function() {

	$(".tweet-compose").on("click", function() {
		$(this).addClass("tweet-write");
		$(this).parent().children().css("display", "inline-block"); //tweet-compose doesn't have any children
		$(this).parent().children().children().css("display", "inline-block"); //button is child of tweet-controls
	});

	$("#dashboard").mouseleave("click", function() {
		$(".tweet-compose").removeClass("tweet-write");
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
		/*var newTweetData = {
			avatarURL: $("#profile-summary").find("img").attr("src"),
			fullName: $("#profile-summary").find("p").text(),
			handle: "Alex DeCapri",
			text: $("#dashboard").find("textarea.tweet-compose").val()
		};*/


		//clone method???
		var newTweet = $($(".tweet")[0]).clone();
		


		//prepend
	});

	//not anywhere close to right





});