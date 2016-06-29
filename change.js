var CarLot = (function (oldCarLot){


	oldCarLot.activateEvents = function(inventory){

	var text = document.getElementById("input");
	var submit = document.getElementById("submit");
	var selected = document.getElementsByClassName("col-md-3");
	var changes;
	var original;
	// 
	text.addEventListener("keyup", function addText(){
		if (changes && original) {
			changes.innerHTML = `${original + text.value}`;	
		}
	});
		
	console.log("listen", selected);
	for (var i = 0; i < selected.length; i++) {
		selected[i].addEventListener("click", function(event){
			var check = [].slice.call(document.getElementsByClassName("thick"));
			console.log("length", check);
			if (check.length > 0){
				check[0].classList.remove("thick");
				check[0].classList.remove("picked");
				// check[0].lastChild.removeEventListener("keyup", addText)
			}


			console.log("click", event);
			// var current = event.currentTarget;
			
			this.classList.toggle("thick");
			this.classList.toggle("picked");
			changes = this.querySelector("div.desc");
			original = changes.innerText;
			text.focus();
			text.value = "";


		});
	};


		submit.addEventListener("click", function (event){
			console.log("button", event);
			for (var i = 0; i < selected.length; i++) {
			// 	CarLot.norMalize(selected, "white");
			// 	};
				selected[i].classList.remove("thick");
				selected[i].classList.remove("picked");
			};
			text.value = "";

	});


	// oldCarLot.norMalize = function(car, color){
	// 	for (var i = 0; i < selected.length; i++) {
	// 		text.removeEventListener("keyup", function addText(){});
	// 		selected[i].classList.remove("thick");
	// 		selected[i].classList.remove("picked");
			// selected[i].style.backgroundcolor = color;
	// 	};
	};

	return oldCarLot

})(CarLot || {});

// CarLot.activateEvents();
// CarLot.norMalize();
console.log("3rd", CarLot);	
