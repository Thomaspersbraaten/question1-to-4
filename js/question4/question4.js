"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const items_js_1 = require("./items.js");
// Create an interface called "Item" with the following variables and types:
// id: number
// name: string
// price: number
class ShoppingCart {
    constructor() {
        // Add the correct array type to cart
        this.cart = [];
    }
    // Add the correct return type
    getCostTotal() {
        const costTotal = this.cart.reduce((total, currentItem) => {
            total += currentItem.price;
            return total;
        }, 0);
        return costTotal;
    }
    // Add the correct return type
    getNumberOfItems() {
        return this.cart.length;
    }
    // Add the correct return type
    getCart() {
        return [...this.cart];
    }
    // Set the parameter to be of the Item type and set the return
    //    type to be of the correct type
    addToCart(item) {
        const itemExists = this.cart.find((currentItem) => {
            if (currentItem.id === item.id) {
                return true;
            }
        });
        if (!itemExists) {
            this.cart.push(item);
        }
    }
    // Set the parameter to be of the Item type and set the return
    //    type to be of the correct type
    removeFromCart(item) {
        const newCart = this.cart.filter((currentItem) => {
            if (currentItem.id !== item.id) {
                return true;
            }
        });
        this.cart = [...newCart];
    }
}
exports.ShoppingCart = ShoppingCart;
// Examples, feel free to delete
const myCart = new ShoppingCart();
myCart.addToCart(items_js_1.bread);
myCart.removeFromCart(items_js_1.bread);
