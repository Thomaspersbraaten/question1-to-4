import { bread, cheese } from "../../js/question4/items.js";
import { ShoppingCart } from "../../js/question4/question4.js";

const cart = new ShoppingCart();
cart.addToCart(cheese);
cart.addToCart(bread);
cart.removeFromCart(bread);
test("get cost total", () => {
  expect(cart.getCostTotal()).toBe(5.95);
});

test("get number of items in cart", () => {
  expect(cart.getNumberOfItems()).toBe(1);
});

test("get all values from cart", () => {
  expect(cart.getCart()).toEqual([{ id: 52, name: "Cheese", price: 5.95 }]);
});
