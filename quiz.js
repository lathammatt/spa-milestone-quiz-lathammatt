/*callback function to load to DOM*/

var CarLot = (function (oldCarLot){

	oldCarLot.populatePage = function (inventory) {
	console.log("check", inventory);
	for (var i = 0; i < inventory.cars.length; i++) {
		var first = inventory.cars[i];
		var carMain = document.createElement('div');
		console.log("callback", first);
		carMain.className = "col-md-4"
		carMain.classList.add(`${first.color}`);
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
		price.appendChild(document.createTextNode("Price: " + first.price));
		
		var color = document.createElement('div');
		carMain.appendChild(color);
		color.appendChild(document.createTextNode("Color: " + first.color));
		
		var description = document.createElement('div');
		carMain.appendChild(description);
		description.appendChild(document.createTextNode("Description: " + first.description));
	}

	return inventory;

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
	return oldCarLot;

})(CarLot);

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);
console.log("2nd", CarLot);


