$(document).ready(function() {

	$(".tweet-compose").on("click", function() {
		$(this).css("height", "5em");
		$("#tweet-controls").css("display", "inline-block");
		$(".button").css("display", "inline-block");
	});


	$(".tweet-compose").blur(function() {
		$(".tweet-compose").css("height", "2.5em");
		$("#tweet-controls").css("display", "none");
		$(".button").css("display", "none");
	});


	$(".tweet-compose").keydown(function() {
		var text = $("#char-count").text();
		var num = parseInt(text);
		if (event.keyCode === 8) {
			if (num !== 140) {
				++num;
			}
		}
		else {
			--num;
		}
		if (num <= 10) {
			$("#char-count").css("color", "red");
		}
		$("#char-count").text(num);
	});




});