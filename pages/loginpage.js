"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const playwright_1 = require("playwright");
const Locators_1 = require("../locators/Locators");
class LoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async enterTheEmail(email) {
        await Locators_1.Locators.emailField(this.page).fill(email);
    }
    async enterThePassword(password) {
        await Locators_1.Locators.passwordField(this.page).fill(password);
    }
    async clickSignIn() {
        await Locators_1.Locators.signInButton(this.page).click();
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=loginpage.js.map