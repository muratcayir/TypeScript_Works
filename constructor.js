var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X:" + this.location.x + " Y:" + this.location.y + " dan X:" + this.location.x + " Y:" + this.location.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 12, y: 23 });
taxi_1.travelTo({ x: 1, y: 2 });
