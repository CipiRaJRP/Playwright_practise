"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class HomePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async open() {
        await this.page.goto('');
    }
    async signIn() {
        await Locators_1.Locators.signButton(this.page).click();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=homepage.js.map