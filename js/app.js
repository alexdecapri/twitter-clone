$(document).ready(function() {

	$(".tweet-compose:first-child").on("click", function() {
		$(this).css("height", "5em");
		$("#tweet-controls").css("display", "inline-block");
		$(".button").css("display", "inline-block");
	});


	$(".tweet-compose:first-child").blur(function() {
		$(this).css("height", "2.5em");
		$("#tweet-controls").css("display", "none");
		$(".button").css("display", "none");
	});


	$(".tweet-compose:first-child").keydown(function() {
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
		if (num > 10) {
			$("#char-count").css("color", "#999");
		}

		if (num < 0) {
			$(".button").css("display", "none");
		}
		else {
			$(".button").css("display", "inline-block");
		}
		$("#char-count").text(num);
	});

	$(".button").on("click", function() {
		alert("hello");
	});




});