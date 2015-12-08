/*
	Written by Lim, JC
 */

/* index.html
	login 성공했을 경우 main.html로 이동
		실패했을 경우, error message. */
				
$(function() {
		$("#call").click(function() {
			var str = $("#form1").serialize();

			$.ajax({
				type:"POST",
				url:"http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=login",
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				data: str,
				datatype:"json",
				success: function() {
					var x = document.getElementById("email").value;
					localStorage.setItem("email", x);
					$(location).attr('href',"main.html");
					//tizen.application.getCurrentApplication().exit();
					//$(window).location.replace("main.html");
					//tau.changePage("main.html");
				},
				error: function() {
					alert("아이디와 비밀번호를 다시 확인해주세요.");
				}
			});
		});
});