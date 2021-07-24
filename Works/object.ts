interface Point {
    x:number,
    y:number
    }
    
    interface Passanger {
       name:string;
       phone:string; 
    }
    
    interface Vehicle{
        currentLocation: Point;
        travelTo(point: Point):void;
        
    }
    
    class Taxi implements Vehicle {
        currentLocation: Point;
        travelTo(point: Point):void{
            console.log(`Taxi X:${point.x} Y:${point.y} konumuna gidiyor.`)
        }
    }

    class Bus implements Vehicle {
        currentLocation: Point;
        travelTo(point: Point):void{
        console.log(`Bus X:${point.x} Y:${point.y} konumuna gidiyor.`)
        }
    }

let taxi_1:Taxi = new Taxi();
taxi_1.travelTo({x:1,y:2});
taxi_1.currentLocation = {x:12,y:23}
console.log(taxi_1.currentLocation.x)
console.log(taxi_1.currentLocation.y)

let taxi_2:Taxi = new Taxi();
taxi_2.travelTo({x:1,y:2});
taxi_2.currentLocation = {x:1,y:5}
console.log(taxi_2.currentLocation.x)
console.log(taxi_2.currentLocation.y)

let bus_1:Bus = new Bus();
bus_1.travelTo({x:30,y:60})
console.log(bus_1.currentLocation.x)
console.log(bus_1.currentLocation.y)

