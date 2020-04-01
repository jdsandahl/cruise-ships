const { Ship } = require("../src/index");
const { Port } = require("../src/index");
const { Itinerary } = require("../src/index");

let ship;
let port;
let nextPort;
let itinerary;

beforeEach(() => {
  port = new Port("New York");
  nextPort = new Port("London");
  itinerary = new Itinerary([port, nextPort]);
  ship = new Ship(itinerary);
});

describe("Ship", () => {
  it("creates an object instances", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("creates an object instances with a port", () => {
    expect(ship.currentPort).toBe(port);
  });

  it("can set sail, currentPort becomes the new previousPort and then currentPort becomes falsy", () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });

  it("can dock at a new Port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(nextPort);
  });

  it("has a previous port which is null to start", () => {
    expect(ship.previousPort).toBe(null);
  });

  it("can't sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("Last stop on the itinerary reached");
  });
});
