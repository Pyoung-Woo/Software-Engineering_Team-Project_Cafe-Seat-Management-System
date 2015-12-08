/*
	Written by Lim, JC & Roh, Woori
 */

/* boardpost.html 글 쓰기 */


/* 글쓴이 이름을 가져온다 => string으로???!?!?!? */
window.onload = function() {
	var writer = localStorage.getItem("email");
	$("#writer").append(writer);
};
	

$(function() {
		$("#boardbutton").click(function() {
			
			var email = localStorage.getItem("email");
			var temp = $("#boardform").serialize();
			var str = temp+"&email="+email;

			$.ajax({
				type:"POST",
				url:"http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=addboard",
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				data: str,
				datatype:"json",
				success: function(data) {
					alert("글을 작성했습니다.");
					$(location).attr('href',"board.html");	
				},
				error: function(e) {
					alert("내용을 다시 확인해주세요.");
				}			
		});
	});
});