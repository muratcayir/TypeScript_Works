// let number=23
// number="b"

let a: number = 5;
let b: string = 'm';
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'m',true] 
let h: [string,number,boolean] = ["m",23,true]


const krediPayment =0;
const havalePayment =1;
const eftPayment=2;

enum Payment {kredi=0,havale=1,kapidaodeme=2,eft=3}

let kredi= Payment.kredi;//0
let havale = Payment.havale;//1
let kapidaodeme=Payment.kapidaodeme;//2
let eft = Payment.eft;//3