"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "İphone 5s", "phone", 20000), new Product_1.Product(2, "İphone 6", "phone", 30000), new Product_1.Product(3, "İphone 6s", "phone", 40000), new Product_1.Product(4, "İphone 7", "phone", 50000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();
