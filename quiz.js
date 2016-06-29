
var CarLot = (function (oldCarLot){

	oldCarLot.populatePage = function (inventory) {
	for (var i = 0; i < inventory.cars.length; i++) {
		var first = inventory.cars[i];
		var carMain = document.createElement('car');
		carMain.className = "col-md-3"
		carMain.classList.add(`${first.color}`);
		carMain.style.overflow = "auto"
		document.getElementById("output").appendChild(carMain);

		var make = document.createElement('div');
		carMain.appendChild(make);
		make.appendChild(document.createTextNode("Make: " + first.make));
		
		var model = document.createElement('div');
		carMain.appendChild(model);
		model.appendChild(document.createTextNode("Model: " + first.model));
		
		var year = document.createElement('div');
		carMain.appendChild(year);
		year.appendChild(document.createTextNode("Year: " + first.year));
		
		var price = document.createElement('div');
		carMain.appendChild(price);
		price.appendChild(document.createTextNode("Price: $" + first.price));
		
		var color = document.createElement('div');
		carMain.appendChild(color);
		color.appendChild(document.createTextNode("Color: " + first.color));
		
		var sold = document.createElement('div');
		carMain.appendChild(sold);
		if (first.purchased === true){
			sold.className = "sold"
			sold.appendChild(document.createTextNode("This vehicle is sold"));}
		else {
			sold.className = "open"
			sold.appendChild(document.createTextNode("This vehicle is available for sale"));}

		var description = document.createElement('div');
		description.className = "desc"
		carMain.appendChild(description);
		description.appendChild(document.createTextNode("Description: " + first.description));

	}

	return inventory;

};
	return oldCarLot;

})(CarLot);

CarLot.loadInventory(CarLot.populatePage);


