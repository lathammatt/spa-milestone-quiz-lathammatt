var CarLot = (function (oldCarLot){


	oldCarLot.activateEvents = function(inventory){

	var text = document.getElementById("input");
	var submit = document.getElementById("submit");
	var selected = document.getElementsByClassName("col-md-3");

	text.addEventListener("keyup", CarLot.addText);

	for (var i = 0; i < selected.length; i++) {
		selected[i].addEventListener("click", function (){
			CarLot.clearClass(event),
			CarLot.selectIon(event);
			});
	};

	submit.addEventListener("click", function (){
		CarLot.clearButton(event),
		CarLot.addText(event),
		text.value = "";

		});
	};

	return oldCarLot

})(CarLot || {});


