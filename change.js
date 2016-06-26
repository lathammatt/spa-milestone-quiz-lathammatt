var CarLot = (function (oldCarLot){

	var text = document.getElementById("input");
	var submit = document.getElementById("submit");
	var selected = document.getElementsByClassName("col-md-3");
	var changes;
		
	oldCarLot.activateEvents = function(car, color){

		for (var i = 0; i < selected.length; i++) {
			selected[i].addEventListener("click", function(event){
				var current = event.currentTarget;
				current.classList.toggle("thick");
				current.classList.toggle("picked");
				var changes = this.querySelector("div.desc");
				var original = changes.innerText
				text.focus();
				text.value = "";
				text.addEventListener("keyup", function addText(){
					changes.innerHTML = `${original + text.value}`;
				});

			});
		};


		submit.addEventListener("click", function (event){
			text.value = "";
			for (var i = 0; i < selected.length; i++) {
				CarLot.norMalize(selected, "white");
				};

			});

	};

	oldCarLot.norMalize = function(car, color){
		for (var i = 0; i < selected.length; i++) {
			text.removeEventListener("keyup", function addText(){});
			selected[i].classList.remove("thick");
			selected[i].classList.remove("picked");
			selected[i].style.backgroundcolor = color;
		};
	};

	return oldCarLot

})(CarLot || {});

CarLot.activateEvents();
CarLot.norMalize();
