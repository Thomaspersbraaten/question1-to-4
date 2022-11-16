// import { bread, cheese, lettuce, milk, tomato } from "../question4/items.js";
import { bread, cheese } from "../../js/question4/items.js";
// import { ShoppingCart } from "./question4";
import { ShoppingCart } from "../../js/question4/question4.js";

const cart = new ShoppingCart();
cart.addToCart(cheese);

// Test that you can add an item to the cart:
// Use the addToCart method to add a single item,
// then check that methods getCostTotal, getNumberOfItems and getCart are all returning the correct values.
test("get cost total", () => {
  expect(cart.getCostTotal()).toBe(5.95);
});

test("get number of items in cart", () => {
  expect(cart.getNumberOfItems()).toBe(1);
});

test("get all values from cart", () => {
  expect(cart.getCart()).toEqual([{ id: 52, name: "Cheese", price: 5.95 }]);
});
