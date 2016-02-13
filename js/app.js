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

		$('#tweet-submit').click(function() {
	        var tweetWords = $('.tweet-compose').val();
	        var newTweet = $('.tweet').clone().eq(0);
	        //learn more about eq
	        var myName = $('#myName').html();
	        var picture = $('#twitterpic').attr('src');

	        newTweet.find('.tweet-text').html(tweetWords);
	        newTweet.find('.fullname').html("Alex DeCapri");
	        newTweet.find('.username').html("@alexdecapri");
	        newTweet.find('.avatar').attr('src', "img/alagoon.jpg");

	        newTweet.prependTo('#stream');
	        //$('#stream').prepend($(newTweet));
	        $('textarea').val('');
	        $('#char-count').text("140");
	    });

	});
   	    


	//not anywhere close to right



