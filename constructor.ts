interface Point {
    x:number,
    y:number
    }
    
    interface Passanger {
       name:string;
       phone:string; 
    }
    
    interface Vehicle{
        travelTo(point: Point):void;
    }
    
    class Taxi implements Vehicle {

        constructor(private location:Point ,private color?:string)
        {}
      
        travelTo(point: Point):void{
            console.log(`Taxi X:${this.location.x} Y:${this.location.y} dan X:${this.location.x} Y:${this.location.y} konumuna gidiyor.`)
        }
    }

   

let taxi_1:Taxi = new Taxi({x:12,y:23});
taxi_1.travelTo({x:1,y:2});




