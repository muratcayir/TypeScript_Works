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

        constructor(private _location:Point ,private _color?:string)
        {}
      
        travelTo(point: Point):void{
            console.log(`Taxi X:${this._location.x} Y:${this._location.y} dan X:${this._location.x} Y:${this._location.y} konumuna gidiyor.`)
        }

        get location()
        {
            return this._location
        }

        set location(value:Point){
            if(value.x <0 || value.y<0){
                throw new Error('negatif deger olamaz');
            }
            this._location = value;
        }


    }

  

let taxi_1:Taxi = new Taxi({x:12,y:23});
taxi_1.travelTo({x:1,y:2});

let currentLocation = taxi_1.location;
taxi_1.location = {x:12,y:23}

