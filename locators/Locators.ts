
import { Page,Locator } from "@playwright/test";

export class Locators{
  static signButton(page:Page):Locator{
     return  page.getByRole("button",{name:"Sign in"});   
  } 

  static emailField(page:Page):Locator{
    return page.getByLabel("email");
  }

  static passwordField(page:Page):Locator{
    return page.getByLabel("password");
  }

  static signInForm(page:Page):Locator{
     return page.getByRole("form",{name:"ShopKart sign in"});
  }

  static signInButton(page:Page):Locator{
    return this.signInForm(page).getByRole("button",{name:"Sign in"});
  }

  static searchBox(page:Page):Locator{
    return page.getByPlaceholder("Search products");
  }

  static products(page: Page): Locator {
    return page.locator(".product-card.product")
}

   static productImage(page:Page):Locator{
       return page.locator(".product-image");
   }

   static cartButton(page:Page){
       return page.getByRole("button",{name:"Add to cart"});
   }

   static checkoutButton(page:Page){
    return page.getByRole("button",{name:"Checkout"});
   }

   static addressBox(page:Page){
    return page.getByRole("textbox",{name:"address"});
   }

   static placeOrderButton(page:Page){
      return page.getByRole("button",{name:"Place order"})
   }

   static orderStatus(page:Page){
      return page.locator('[data-field="order-status"]');
   }

   
}



