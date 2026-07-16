"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class CheckoutPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async enterAddress(address) {
        await Locators_1.Locators.addressBox(this.page).fill(address);
    }
    async placeOrder() {
        await Locators_1.Locators.placeOrderButton(this.page).click();
    }
}
exports.CheckoutPage = CheckoutPage;
//# sourceMappingURL=checkoutpage.js.map