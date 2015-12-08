/*
	Written by Lim, JC & Roh, Woori
 */

/* boardpost.html 글 쓰기 
 						성공 시 board.html로 이동
 						실패시 error message => 빈칸이 있다.
 						추가할 것: writer의 경우 로그인 한 사람의 정보를 가져와야 함*/
 						
$("#writer").append("글쓴이");

$(function() {
	$("#call3")
			.click(
					function() {
						var str = $("#form3").serialize();
						alert(str);

						$
								.ajax({
									type : "POST",
									url : "http://192.168.0.84:8080/Team3Server/team3?cmd=login",
									contentType : "application/x-www-form-urlencoded; charset=utf-8",
									data : str,
									datatype : "json",
									success : function(data) {
										window.location.href("board.html")
									},
									error : function(e) {
										alert("내용을 다시 확인해주세요.");
									}
								});
					});
});