"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
//---------Get Product
var _productService = new ProductService_1.ProductService;
var result;
result = _productService.getProducts();
result = _productService.getById(2);
//-----------Save Product
var m = new Product_1.Product();
m.id = 2;
m.name = "iphone 8";
m.category = "phone",
    m.price = 5000;
_productService.saveProduct(m);
// result = _productService.getProducts();
//--------Delete Product
//_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
