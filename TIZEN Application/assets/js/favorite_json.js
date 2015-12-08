/*
	Written by Roh, Woori
 */


var cafe;
/* 사용자가 좋아하는 리스트 c_num, c_name 만 받아오면 됨. */
window.onload = function() {
		$.ajax({
					type : "POST",
					url : "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=favorlist",
					contentType : "application/x-www-form-urlencoded; charset=utf-8",
					data : cafe,
					datatype : "json",
					success : function(data) {
						cafe = data;
						
						var list = $("<ul class='list-group'>").attr("id", "favorite");
						$("#favoritelist").append(list);
						for (var i = 0; i < cafe.length; i++) {
							var tempid = cafe[i]["c_num"];
							var first = "<li id='cafe" + tempid
								+ "' class='list-group-item'>" + cafe[i]["c_name"] + "</li>";
							$("#favorite").append(first);
						}
						$("#favorite").append("</ul>");
						
						
						/* 해당하는 리스트를 클릭하면 그 값이 index로 함께 cafepage.html로 넘어간다. */
						var ul = document.getElementById("favorite");
						ul.addEventListener("click", function (e) {
							var target = e.target;
							while (target && target.parentNode !== ul) {
								target = target.parentNode;
								if(!target) {return;}
							}
							if (target.tagName === "LI") {
								$("#"+target.id).click(
									function() {
										var str = target.id;
										var index = str.substr(4, str.length);
										window.location.href="cafepage.html?index="+index;}
									)
							}
						});
					},
					error : function(e) {
						alert("str: ");
					}
				});
}