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