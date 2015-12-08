/*
	Written by Roh, Woori
 */

// 가상 data
var article = [
		{
			id : "0",
			writer : "Lucy",
			title : "In his eyes",
			content : "I sit and watch the sky. <br/>"
					+ "And I can hear it breathe a sign. <br/>"
		},
		{
			id : "1",
			writer : "Jekyll",
			title : "Pursue The Truth",
			content : "If it mattered less, I'd treat them with derision. <br/>"
					+ "It's absurd! <br/>"
		},
		{
			id : "2",
			writer : "Emma",
			title : "Once Upon A Dream",
			content : "Once upon a dream, I was lost in love's embrace.<br/>"
					+ "There I found a perfect place, Once upon a dream. <br/>"
		},
		{
			id : "3",
			writer : "Hyde",
			title : "Confrontation",
			content : "Do you really think that I would ever let you go? <br/>"
					+ "Do you think I'd ever set you free? <br/>"
					+ "If you do, I'm sad to say, It simply isn't so. <br/>"
					+ "You will never get away from me! <br/>"
		},
		{
			id : "4",
			writer : "Lucy",
			title : "A New Life",
			content : "What I wouldn't give to have a new life! <br/>"
					+ "One thing I have learned As I go through life: Nothing is for free.<br/>"
					+ "Along the way!"
		}];

/*
 * board.html
 */

for (var i = 0; i < article.length; i++) {
	var first = "<fieldset>";
	var title = "<legend id='title'>"+ article[i]["title"] + "</legend>";
	var writer = "<label for='writer' class='col-lg-2 control-label'>Writer</label>" +
			"<div class='col-lg-10' id='writer' style='padding-left: 30px'>" + article[i]["writer"] + "</div><br>";
	var content = "<label for='content' class='col-lg-2 control-label'>Content</label>" +
	"<div class='col-lg-10' id='content' style='padding-left: 30px'>" + article[i]["content"] + "</div>";
	var last = "<br></fieldset></div><br/><br/>";
	$("#list").append(first, title, writer, content, last);
}