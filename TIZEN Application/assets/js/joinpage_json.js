/*
	Written by Lim, JC & Roh, Woori
 */


/* joinpage.html
	회원가입 성공했을 경우 index.html로 이동
		실패했을 경우, error message*/
		
$(function() {
		$("#joinbutton").click(function() {
			var str = $("#joinform").serialize();

			$.ajax({
				type:"POST",
				url:"http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=signup",
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				data: str,
				datatype:"json",
				success: function(data) {
					alert("가입되었습니다.");
					$(location).attr('href',"index.html");
				},
				error: function(e) {
					alert("정보를 다시 확인해주세요.");
				}			
		});
	});
});