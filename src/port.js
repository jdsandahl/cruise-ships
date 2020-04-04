class Port {
  constructor(portName = "Dead Island") {
    this.name = portName;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip(ship) {
    const index = this.ships.indexOf(ship);

    if (index > -1) {
      this.ships.splice(index, 1);
    }
  }
}

module.exports = Port;
