var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X:" + point.x + " Y:" + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus X:" + point.x + " Y:" + point.y + " konumuna gidiyor.");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 12, y: 23 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 1, y: 2 });
taxi_2.currentLocation = { x: 1, y: 5 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus();
bus_1.travelTo({ x: 30, y: 60 });
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);
