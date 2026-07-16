import { Page } from "playwright/test";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { CatalogPage } from "../pages/catalogpage";
import { ProductPage } from "../pages/productpage";
import { CartPage } from "../pages/cartpage";
import { CheckoutPage } from "../pages/checkoutpage";
import { OrderPage } from "../pages/orderpage";
import { Locators } from "../locators/Locators";
export class shopflow{

    private readonly homepage:HomePage;
    private readonly loginpage:LoginPage;
    private readonly catalogpage:CatalogPage;
    private readonly cartpage:CartPage;
    private readonly productpage:ProductPage;
    private readonly checkoutpage:CheckoutPage;
    private readonly orderpage:OrderPage;

    constructor(private readonly page:Page){
       this.homepage = new HomePage(page);
       this.loginpage = new LoginPage(page);
       this.catalogpage = new CatalogPage(page);
       this.cartpage = new CartPage(page);
       this.productpage = new ProductPage(page);
       this.checkoutpage = new CheckoutPage(page);
       this.orderpage = new OrderPage(page);
    }

    async openHomePage(){
       await this.homepage.open();
    }

    async makeSignIn(){
       await this.homepage.signIn();  
    }

    async enterEmailAndPassword(email:string,password:string){
       await this.loginpage.enterTheEmail(email);
       await this.loginpage.enterThePassword(password);
    }

    async clickOnSignIn(){
       await this.loginpage.clickSignIn();
    }

    async searchProduct(product:string){
        await this.catalogpage.searchForAProductInCatalogPage(product);
    }

    theProducts(){
        return  this.catalogpage.getproducts();
    }

    async clickTheProduct(){
        await this.catalogpage.selectTheProduct();
    }

    async addTheProductToCart(){
        await this.productpage.addToCart();
    }

    async makeAcheckout(){
        await this.cartpage.checkout();
    }

    async enterTheAddress(address:string){
        await this.checkoutpage.enterAddress(address);
    }

    async placeTheOrder(){
        await this.checkoutpage.placeOrder();
    }

    checkTheStatus(){
        return this.orderpage.getOrderStatus();
    }
    
    //this.homepage.enterEmailAndPassword(Secrets.get('ALICE_EMAIL'),Secrets.get('ALICE_PASSWORD'));        
}
