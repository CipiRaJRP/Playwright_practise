"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopflow = void 0;
const test_1 = require("playwright/test");
const homepage_1 = require("../pages/homepage");
const loginpage_1 = require("../pages/loginpage");
const catalogpage_1 = require("../pages/catalogpage");
const productpage_1 = require("../pages/productpage");
const cartpage_1 = require("../pages/cartpage");
const checkoutpage_1 = require("../pages/checkoutpage");
const orderpage_1 = require("../pages/orderpage");
const Locators_1 = require("../locators/Locators");
class shopflow {
    page;
    homepage;
    loginpage;
    catalogpage;
    cartpage;
    productpage;
    checkoutpage;
    orderpage;
    constructor(page) {
        this.page = page;
        this.homepage = new homepage_1.HomePage(page);
        this.loginpage = new loginpage_1.LoginPage(page);
        this.catalogpage = new catalogpage_1.CatalogPage(page);
        this.cartpage = new cartpage_1.CartPage(page);
        this.productpage = new productpage_1.ProductPage(page);
        this.checkoutpage = new checkoutpage_1.CheckoutPage(page);
        this.orderpage = new orderpage_1.OrderPage(page);
    }
    async openHomePage() {
        await this.homepage.open();
    }
    async makeSignIn() {
        await this.homepage.signIn();
    }
    async enterEmailAndPassword(email, password) {
        await this.loginpage.enterTheEmail(email);
        await this.loginpage.enterThePassword(password);
    }
    async clickOnSignIn() {
        await this.loginpage.clickSignIn();
    }
    async searchProduct(product) {
        await this.catalogpage.searchForAProductInCatalogPage(product);
    }
    theProducts() {
        return this.catalogpage.getproducts();
    }
    async clickTheProduct() {
        await this.catalogpage.selectTheProduct();
    }
    async addTheProductToCart() {
        await this.productpage.addToCart();
    }
    async makeAcheckout() {
        await this.cartpage.checkout();
    }
    async enterTheAddress(address) {
        await this.checkoutpage.enterAddress(address);
    }
    async placeTheOrder() {
        await this.checkoutpage.placeOrder();
    }
    checkTheStatus() {
        return this.orderpage.getOrderStatus();
    }
}
exports.shopflow = shopflow;
//# sourceMappingURL=shopflow.js.map