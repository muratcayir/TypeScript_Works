import { Product } from "./Product";
import { ProductService } from "./ProductService";

//---------Get Product
let _productService = new ProductService
let result ;

result = _productService.getProducts();
result = _productService.getById(2);

//-----------Save Product
let m = new Product();

m.id=2
m.name="iphone 8";
m.category ="phone",
m.price=5000

_productService.saveProduct(m)
// result = _productService.getProducts();

//--------Delete Product
//_productService.deleteProduct(result);
result = _productService.getProducts()
console.log(result)