"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locators = void 0;
const test_1 = require("@playwright/test");
class Locators {
    static signButton(page) {
        return page.getByRole("button", { name: "Sign in" });
    }
    static emailField(page) {
        return page.getByLabel("email");
    }
    static passwordField(page) {
        return page.getByLabel("password");
    }
    static signInForm(page) {
        return page.getByRole("form", { name: "ShopKart sign in" });
    }
    static signInButton(page) {
        return this.signInForm(page).getByRole("button", { name: "Sign in" });
    }
    static searchBox(page) {
        return page.getByPlaceholder("Search products");
    }
    static products(page) {
        return page.locator(".product-card.product");
    }
    static productImage(page) {
        return page.locator(".product-image");
    }
    static cartButton(page) {
        return page.getByRole("button", { name: "Add to cart" });
    }
    static checkoutButton(page) {
        return page.getByRole("button", { name: "Checkout" });
    }
    static addressBox(page) {
        return page.getByRole("textbox", { name: "address" });
    }
    static placeOrderButton(page) {
        return page.getByRole("button", { name: "Place order" });
    }
    static orderStatus(page) {
        return page.locator('[data-field="order-status"]');
    }
}
exports.Locators = Locators;
//# sourceMappingURL=Locators.js.map