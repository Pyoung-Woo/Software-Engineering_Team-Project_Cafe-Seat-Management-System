/*
	Written by Roh, Woori
 */

/*
 * settings.html
 */

var user;
window.onload = function() {
	
	var email = localStorage.getItem("email");
	$("#useremail").append("email: "+email);
	
		$.ajax({
					type : "POST",
					url : "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=cafelist",
					contentType : "application/x-www-form-urlencoded; charset=utf-8",
					data : user,
					datatype : "json",
					success : function(data) {
						user = data;
						$("#username").append(user[0]["name"]);
						//$("#useremail").append(user[0]["email"]);
					},
					error : function(e) {
						alert("str: ");
					}
				});
}