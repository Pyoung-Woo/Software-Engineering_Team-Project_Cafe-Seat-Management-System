/*
	Written by Roh, Woori
 */

var checker = location.href.substr(location.href.lastIndexOf('=') + 1);
var str = "&c_num="+checker;
var cafe;
window.onload = function() {
		$.ajax({
					type : "POST",
					url : "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=cafeinfo",
					contentType : "application/x-www-form-urlencoded; charset=utf-8",
					data : str,
					datatype : "json",
					success : function(data) {
						cafe = data;
						$("#empty").append(cafe[0]["c_seats"]);
						$("#whole").append(cafe[0]["c_total"]);
						
					},
					error : function(e) {
						alert("str: ");
					}
				});
}