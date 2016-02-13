$(document).ready(function() {

	$(".tweet-compose").on("click", function() {
		$(this).addClass("tweet-write");
		$(this).parent().children().css("display", "inline-block"); //tweet-compose doesn't have any children
		$(this).parent().children().children().css("display", "inline-block"); //button is child of tweet-controls
	});

	$("#dashboard").mouseleave(function() {
		$(this).find(".tweet-compose").removeClass("tweet-write");
		$(this).find("#tweet-controls").css("display", "none");
		$(this).find("#tweet-submit").css("display", "none");
	});

	$("#main").mouseleave(function() {
		$(this).find(".tweet-compose").removeClass("tweet-write");

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
        var newTweet = $('.tweet:first-child').clone(); //have to use first-child or clones existing three tweets and makes my tweet go 3 times
        // var myName = $('#myName').html();  ID doesn't exist
        // var picture = $('#twitterpic').attr('src');   ID doesn't exist

        newTweet.find('.tweet-text').html(tweetWords);
        newTweet.find('.fullname').html("Alex DeCapri");
        newTweet.find('.username').html("@alexdecapri");
        newTweet.find('.avatar').attr('src', "img/alagoon.jpg");

   
        $('#stream').prepend($(newTweet));
        $('textarea').val(''); //returns blank tweet compose to start new tweet
        $('#char-count').text("140"); //resets 140 counter after tweet submitted

    });

    $("li").hide();
    $("div.stats .retweets").hide();
    $("div.stats .favorites").hide();
	$("div.stats .users-interact").hide();
	$("div.stats .time").hide();



    $(".tweet").hover(function() {
    	$(this).find("li").css("display", "inline-block");
    });

    $(".tweet").mouseleave(function() {
    	$(this).find("li").css("display", "none");
    	$(this).find(".retweets").css("display", "none");
	    $(this).find(".favorites").css("display", "none");
		$(this).find(".users-interact").css("display", "none");
		$(this).find(".time").css("display", "none");
    });

    $(".tweet").click(function() {
    	$(this).find(".retweets").css("display", "inline-block");
	    $(this).find(".favorites").css("display", "inline-block");
		$(this).find(".users-interact").css("display", "inline-block");
		$(this).find(".time").css("display", "block");
    });

});