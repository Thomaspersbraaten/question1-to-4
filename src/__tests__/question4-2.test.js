import { bread, cheese } from "../../js/question4/items.js";
import { ShoppingCart } from "../../js/question4/question4.js";

const cart = new ShoppingCart();
cart.addToCart(cheese);
cart.addToCart(bread);

test("get cost total", () => {
  expect(cart.getCostTotal()).toBe(15.2);
});

test("get number of items in cart", () => {
  expect(cart.getNumberOfItems()).toBe(2);
});

test("get all values from cart", () => {
  expect(cart.getCart()).toEqual([
    { id: 52, name: "Cheese", price: 5.95 },
    { id: 24, name: "Bread", price: 9.25 },
  ]);
});
