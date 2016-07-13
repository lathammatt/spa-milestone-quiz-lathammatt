var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
        return inventory;
    },
    loadInventory: function (callback) {
      var carlist = new XMLHttpRequest();
      carlist.open("GET", "inventory.json");
      carlist.send();
      carlist.addEventListener("load", function () {
        inventory = JSON.parse(carlist.responseText);
        callback(inventory);

        });
    }
  };

})();

