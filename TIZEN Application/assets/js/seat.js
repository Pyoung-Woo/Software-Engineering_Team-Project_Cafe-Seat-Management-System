/*
	Seat by Roh, Woori
*/

	var ctx;
	function init() {
		ctx = document.getElementById('canvas').getContext('2d');
		ctx.lineWidth = 1;
		ctx.strokeStyle = "rgb(0, 0, 0)";
		
		
		/* table 1 */ ctx.strokeRect(30, 60, 50, 50);		
		/* table 2 */ ctx.strokeRect(100, 60, 50, 50);		
		/* table 3 */ ctx.strokeRect(170, 60, 50, 50);		
		/* table 4 */ ctx.strokeRect(30, 200, 110, 50);
		/* table 5 */ ctx.strokeRect(160, 200, 110, 50);
		/* table 6 */ ctx.strokeRect(30, 340, 110, 50);
		/* table 7 */ ctx.strokeRect(160, 340, 110, 50);
		
		
		/* seats occupied */
		ctx.beginPath();
		ctx.fillStyle = "rgb(255, 0, 0)"; /* red */
		/* table 1 */
		ctx.arc(40,40,10,0,Math.PI*2,true);
		ctx.moveTo(80,40); ctx.arc(70,40,10,0,Math.PI*2,true);
		ctx.moveTo(50,130); ctx.arc(40,130,10,0,Math.PI*2,true);
		ctx.moveTo(80,130); ctx.arc(70,130,10,0,Math.PI*2,true);	
		ctx.fill();
		/* table 2 */
		ctx.moveTo(120,40); ctx.arc(110,40,10,0,Math.PI*2,true);
		ctx.moveTo(150,40); ctx.arc(140,40,10,0,Math.PI*2,true);
		ctx.moveTo(120,130); ctx.arc(110,130,10,0,Math.PI*2,true);
		ctx.moveTo(150,130); ctx.arc(140,130,10,0,Math.PI*2,true);
		/* table 3 */
		ctx.moveTo(190,40); ctx.arc(180,40,10,0,Math.PI*2,true);
		ctx.moveTo(220,40); ctx.arc(210,40,10,0,Math.PI*2,true);
		ctx.moveTo(190,130); ctx.arc(180,130,10,0,Math.PI*2,true);
		ctx.moveTo(220,130); ctx.arc(210,130,10,0,Math.PI*2,true);
		/* table 4 */
		ctx.moveTo(50,180); ctx.arc(40,180,10,0,Math.PI*2,true);
		ctx.moveTo(80,180); ctx.arc(70,180,10,0,Math.PI*2,true);
		ctx.moveTo(110,180); ctx.arc(100,180,10,0,Math.PI*2,true);
		ctx.moveTo(140,180); ctx.arc(130,180,10,0,Math.PI*2,true);
		ctx.moveTo(50,270); ctx.arc(40,270,10,0,Math.PI*2,true);
		ctx.moveTo(80,270); ctx.arc(70,270,10,0,Math.PI*2,true);
		ctx.moveTo(110,270); ctx.arc(100,270,10,0,Math.PI*2,true);
		ctx.moveTo(140,270); ctx.arc(130,270,10,0,Math.PI*2,true);
		/* table 5 */
		ctx.moveTo(180,180); ctx.arc(170,180,10,0,Math.PI*2,true);
		ctx.moveTo(210,180); ctx.arc(200,180,10,0,Math.PI*2,true);
		ctx.moveTo(240,180); ctx.arc(230,180,10,0,Math.PI*2,true);
		ctx.moveTo(270,180); ctx.arc(260,180,10,0,Math.PI*2,true);
		ctx.moveTo(180,270); ctx.arc(170,270,10,0,Math.PI*2,true);
		ctx.moveTo(210,270); ctx.arc(200,270,10,0,Math.PI*2,true);
		ctx.moveTo(240,270); ctx.arc(230,270,10,0,Math.PI*2,true);
		ctx.moveTo(270,270); ctx.arc(260,270,10,0,Math.PI*2,true);
		/* table 6 */
		ctx.moveTo(50,320); ctx.arc(40,320,10,0,Math.PI*2,true);
		ctx.moveTo(80,320); ctx.arc(70,320,10,0,Math.PI*2,true);
		ctx.moveTo(110,320); ctx.arc(100,320,10,0,Math.PI*2,true);
		ctx.moveTo(140,320); ctx.arc(130,320,10,0,Math.PI*2,true);
		ctx.moveTo(50,410); ctx.arc(40,410,10,0,Math.PI*2,true);
		ctx.moveTo(80,410); ctx.arc(70,410,10,0,Math.PI*2,true);
		ctx.moveTo(110,410); ctx.arc(100,410,10,0,Math.PI*2,true);
		ctx.moveTo(140,410); ctx.arc(130,410,10,0,Math.PI*2,true);
		/* table 7 */
		ctx.moveTo(180,320); ctx.arc(170,320,10,0,Math.PI*2,true);
		ctx.moveTo(210,320); ctx.arc(200,320,10,0,Math.PI*2,true);
		ctx.moveTo(240,320); ctx.arc(230,320,10,0,Math.PI*2,true);
		ctx.moveTo(270,320); ctx.arc(260,320,10,0,Math.PI*2,true);
		ctx.moveTo(180,410); ctx.arc(170,410,10,0,Math.PI*2,true);
		ctx.moveTo(210,410); ctx.arc(200,410,10,0,Math.PI*2,true);
		ctx.moveTo(240,410); ctx.arc(230,410,10,0,Math.PI*2,true);
		ctx.moveTo(270,410); ctx.arc(260,410,10,0,Math.PI*2,true);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		
		/* seats empty */
		ctx.beginPath();
		ctx.fillStyle = "rgb(0, 0, 255)"; /* blue */
		
		ctx.moveTo(210,180); ctx.arc(200,180,10,0,Math.PI*2,true);
		ctx.moveTo(240,180); ctx.arc(230,180,10,0,Math.PI*2,true);
		ctx.moveTo(220,130); ctx.arc(210,130,10,0,Math.PI*2,true);
		ctx.moveTo(80,40); ctx.arc(70,40,10,0,Math.PI*2,true);
		ctx.moveTo(50,130); ctx.arc(40,130,10,0,Math.PI*2,true);
		ctx.moveTo(80,130); ctx.arc(70,130,10,0,Math.PI*2,true);
		ctx.moveTo(110,180); ctx.arc(100,180,10,0,Math.PI*2,true);
		ctx.moveTo(140,180); ctx.arc(130,180,10,0,Math.PI*2,true);		
		ctx.moveTo(180,270); ctx.arc(170,270,10,0,Math.PI*2,true);
		ctx.moveTo(80,320); ctx.arc(70,320,10,0,Math.PI*2,true);
		ctx.moveTo(110,320); ctx.arc(100,320,10,0,Math.PI*2,true);
		ctx.moveTo(140,320); ctx.arc(130,320,10,0,Math.PI*2,true);
		ctx.moveTo(50,410); ctx.arc(40,410,10,0,Math.PI*2,true);
		ctx.moveTo(80,410); ctx.arc(70,410,10,0,Math.PI*2,true);
		ctx.moveTo(110,410); ctx.arc(100,410,10,0,Math.PI*2,true);
		ctx.moveTo(180,320); ctx.arc(170,320,10,0,Math.PI*2,true);
		ctx.moveTo(210,320); ctx.arc(200,320,10,0,Math.PI*2,true);
		ctx.moveTo(270,320); ctx.arc(260,320,10,0,Math.PI*2,true);
		ctx.moveTo(210,410); ctx.arc(200,410,10,0,Math.PI*2,true);
		ctx.moveTo(270,410); ctx.arc(260,410,10,0,Math.PI*2,true);
		
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		
	}