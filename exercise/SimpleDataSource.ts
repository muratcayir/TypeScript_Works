import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
         new Product(1,"İphone 5s","phone",20000),
         new Product(2,"İphone 6","phone",30000),
         new Product(3,"İphone 6s","phone",40000),
         new Product(4,"İphone 7","phone",50000)
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}

let p = new SimpleDataSource();