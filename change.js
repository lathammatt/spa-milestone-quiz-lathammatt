var CarLot = (function (oldCarLot){

	oldCarLot.activateEvents = function(inventory){
		// onclick, border expands, background color changes, text input clears, cursor in text
		// on keyup, immediately add to description of selected car
		
	var text = document.getElementById("input");
	var submit = document.getElementById("submit");
	var selected = document.getElementsByClassName("col-md-4");

	console.log("listen", selected);
	for (var i = 0; i < selected.length; i++) {
		selected[i].addEventListener("click", function(event){
			console.log("click", event);
			if (this){
			this.classList.toggle("thick");
			this.classList.toggle("picked");}
			else {
			};
			var changes = this.getElementsByClassName("desc");
			text.focus();
			text.value = "";
			text.addEventListener("keyup", function(){
				changes.innerHTML += `${text.value}`;
			});

		});
	};

	submit.addEventListener("click", function (event){
		console.log("button", event);
		for (var i = 0; i < selected.length; i++) {
			selected[i].classList.remove("thick");
			selected[i].classList.remove("picked");

		};
		text.value = "";

	});

	};

	return oldCarLot

})(CarLot || {});

CarLot.activateEvents();

console.log("3rd", CarLot);