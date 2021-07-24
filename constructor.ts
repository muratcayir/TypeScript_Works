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
        color:string
        constructor(location:Point ,color?:string)
        {
        this.currentLocation = location;
        this.color=color
        }
        currentLocation: Point;
        travelTo(point: Point):void{
            console.log(`Taxi X:${point.x} Y:${point.y} konumuna gidiyor.`)
        }
    }

   

let taxi_1:Taxi = new Taxi({x:12,y:23},'red');
taxi_1.travelTo({x:1,y:2});
console.log(taxi_1.currentLocation)



