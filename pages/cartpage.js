"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class CartPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async checkout() {
        await Locators_1.Locators.checkoutButton(this.page).click();
    }
}
exports.CartPage = CartPage;
//# sourceMappingURL=cartpage.js.map