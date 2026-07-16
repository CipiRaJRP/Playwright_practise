"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class ProductPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async addToCart() {
        await Locators_1.Locators.cartButton(this.page).click();
    }
}
exports.ProductPage = ProductPage;
//# sourceMappingURL=productpage.js.map