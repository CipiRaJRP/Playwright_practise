"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class CatalogPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async searchForAProductInCatalogPage(product) {
        await Locators_1.Locators.searchBox(this.page).fill(product);
        await this.page.keyboard.press("Enter");
    }
    getproducts() {
        return Locators_1.Locators.products(this.page);
    }
    async selectTheProduct() {
        return Locators_1.Locators.productImage(this.page).click();
    }
    async addtoCart() {
    }
}
exports.CatalogPage = CatalogPage;
//# sourceMappingURL=catalogpage.js.map