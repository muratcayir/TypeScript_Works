import {Point} from './Point'
import {Vehicle} from './Vehicle'

export class Taxi implements Vehicle {

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
