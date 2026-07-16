"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class OrderPage {
    page;
    constructor(page) {
        this.page = page;
    }
    getOrderStatus() {
        return Locators_1.Locators.orderStatus(this.page);
    }
}
exports.OrderPage = OrderPage;
//# sourceMappingURL=orderpage.js.map