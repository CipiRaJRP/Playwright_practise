import { Page } from "playwright";
import { Locators } from "../locators/Locators";

export  class CheckoutPage{

    constructor(private readonly page:Page){}

    async enterAddress(address:string){
        await Locators.addressBox(this.page).fill(address);
    }

    async placeOrder(){
        await Locators.placeOrderButton(this.page).click();
    }
}