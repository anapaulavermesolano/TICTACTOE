$(document).ready(function(){
	var a = 0;
	$(".box").click(function() {
		a++;
		if (a%2===0) {
			$(this).text("O");
			$(this).css("background-color", "rgb(113, 66, 120)");
			$(this).css("color", "blank");
			$("#turno p").text('1° jugador');
		}else {
			$(this).text("X");
			$(this).css("background-color", "black");
			$(this).css("color", "rgb(113, 66, 120)");
			$("#turno p").text("2° jugador");
		}
		$(this).off();
		game();
	});
});
var theEnd = 0;
function game() {
	
	theEnd++;

  	if ($("#1").text() != "" || $("#2").text() != "" || $("#3").text() != ""){
  		if ($("#1").text() === $("#2").text() && $("#1").text() === $("#3").text() && $("#2").text() === $("#3").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}
  	if ($("#4").text() != "" || $("#5").text() != "" || $("#6").text() != ""){
  		if ($("#4").text() === $("#5").text() && $("#4").text() === $("#6").text() && $("#6").text() === $("#5").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}
  	if ($("#7").text() != "" || $("#8").text() != "" || $("#9").text() != ""){
  		if ($("#7").text() === $("#8").text() && $("#7").text() === $("#9").text() && $("#8").text() === $("#9").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}
  	if ($("#1").text() != "" || $("#5").text() != "" || $("#9").text() != ""){
  		if ($("#1").text() === $("#5").text() && $("#1").text() === $("#9").text() && $("#5").text() === $("#9").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}
  	if ($("#3").text() != "" || $("#5").text() != "" || $("#7").text() != ""){
  		if ($("#3").text() === $("#5").text() && $("#3").text() === $("#7").text() && $("#5").text() === $("#7").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}if ($("#1").text() != "" || $("#4").text() != "" || $("#7").text() != ""){
  		if ($("#1").text() === $("#4").text() && $("#1").text() === $("#7").text() && $("#7").text() === $("#4").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}if ($("#2").text() != "" || $("#5").text() != "" || $("#8").text() != ""){
  		if ($("#2").text() === $("#5").text() && $("#2").text() === $("#8").text() && $("#5").text() === $("#8").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}if ($("#3").text() != "" || $("#6").text() != "" || $("#9").text() != ""){
  		if ($("#3").text() === $("#6").text() && $("#3").text() === $("#6").text() && $("#6").text() === $("#9").text()) {
  			alert($("#turno p").text() + " Gano!!!");
  		}
  	}
  	fin()
}
function fin () {
	if(theEnd===9) {
  		alert("empate")
  	}   
}


$("#button").click(function() {
	location.reload();
	// $('.box').text('');
	// $('.box').html('');
});