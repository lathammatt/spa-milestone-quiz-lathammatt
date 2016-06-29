var CarLot = (function (oldCarLot){

	var text = document.getElementById("input");
	var submit = document.getElementById("submit");
	var selected = document.getElementsByClassName("col-md-3");
	var changes;
	var original;

	oldCarLot.clearClass = function(){
		var check = [].slice.call(document.getElementsByClassName("thick"));
		if (check.length > 0){
			check[0].classList.remove("thick");
			check[0].classList.remove("picked");
		}
		text.value = "";
	};

	oldCarLot.selectIon = function (event){
		var current = event.currentTarget;
		current.classList.add("thick");
		current.classList.add("picked");
		changes = current.lastChild;
		original = changes.innerText;
		text.focus();
		text.value = "";		
	};

	oldCarLot.addText = function(event){
		if (changes && original) {
			changes.innerHTML = `${original + text.value}`;	
		}
	};

	oldCarLot.clearButton = function(){
		changes = null;
		original = null;
		for (var i = 0; i < selected.length; i++) {
			selected[i].classList.remove("thick");
			selected[i].classList.remove("picked");
		};	
	};

	return oldCarLot

})(CarLot || {});

