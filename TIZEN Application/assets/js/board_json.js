/*
	Written by Roh, Woori
 */


var article;
window.onload = function() {
		$.ajax({
					type : "POST",
					url : "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=boardlist",
					contentType : "application/x-www-form-urlencoded; charset=utf-8",
					data : article,
					datatype : "json",
					success : function(data) {
						article = data;
						for (var i = 0; i < article.length; i++) {
							var first = "<fieldset>";
							var title = "<legend id='title' name='title'>"+ article[i]["title"] + "</legend>";
							var writer = "<label for='email' class='col-lg-2 control-label'>Writer</label>" +
								"<div class='col-lg-10' id='email' name='email' style='padding-left: 30px'>" + article[i]["email"] + "</div><br>";
							var content = "<label for='content' class='col-lg-2 control-label'>Content</label>" +
								"<div class='col-lg-10' id='content' name='content' style='padding-left: 30px'>" + article[i]["content"] + "</div>";
							var last = "<br></fieldset></div><br/><br/>";
							$("#list").append(first, title, writer, content, last);
						}
						
					},
					error : function(e) {
						alert("str: ");
					}
				});
	}

