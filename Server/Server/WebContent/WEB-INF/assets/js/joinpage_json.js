/*
	Written by Lim, JC & Roh, Woori
 */


/* joinpage.html
	회원가입 성공했을 경우 index.html로 이동
		실패했을 경우, error message*/
		
$(function() {
	$("#joinbutton")
			.click(
					function() {
						var str = $("#joinform").serialize();
						alert(str);

						$
								.ajax({
									type : "POST",
									url : "http://192.168.0.84:8080/Team3Server/team3?cmd=login",
									contentType : "application/x-www-form-urlencoded; charset=utf-8",
									data : str,
									datatype : "json",
									success : function(data) {
										window.location.href("index.html")
									},
									error : function(e) {
										alert("정보를 다시 확인해주세요.");
									}
								});
					});
});