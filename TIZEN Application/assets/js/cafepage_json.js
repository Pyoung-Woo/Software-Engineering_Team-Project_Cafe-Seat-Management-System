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
						$("#cafename").append(cafe[0]["c_name"]);
						$("#address").append(cafe[0]["c_address"]);
						$("#event").append(cafe[0]["c_event"]);
						$("#intro").append(cafe[0]["c_intro"]);
						
						
					/*	좌석보기 버튼 클릭 시 */
					$("#seatpage").click( function() {
						var seatstr = "여석: "+cafe[0]["c_seats"]+" 전체좌석: "+cafe[0]["c_total"];
						alert(seatstr);
						//window.open(temp, "popup", "width=80, height=50, left=center, top=center, toolbar=0, location=no, directories=no, status=no, resizable=no, scrollbars=no, copy=no, story=no");
					});


					
					var email = localStorage.getItem("email");
					var temp = str+"&email="+email;
					
					/* 즐겨찾기 버튼 눌렀을 경우 */
					$("#add").click(
						function() {
						
							$.ajax({
								type : "POST",
								url : "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=addfavorlist",
								contentType : "application/x-www-form-urlencoded; charset=utf-8",
								data : temp,
								datatype : "json",
								success : function() {
									/* 예외처리 비구현 */
									alert("추가되었습니다");
								},
								error : function(e) {
									alert("add error");
								}
							});
		
					});
						
					},
					error : function(e) {
						alert("load error");
					}
				});
};