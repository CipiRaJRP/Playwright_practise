import { Page } from "playwright";
import { Locators } from "../locators/Locators";

export  class LoginPage{

    constructor(private readonly page:Page){}

    async enterTheEmail(email:string){
       await Locators.emailField(this.page).fill(email);
    }

    async enterThePassword(password:string){
        await Locators.passwordField(this.page).fill(password);
    }

    async clickSignIn(){
        await Locators.signInButton(this.page).click();
    }

}