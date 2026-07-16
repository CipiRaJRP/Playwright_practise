import { Page } from "playwright";
import { Locators } from "../locators/Locators";
export  class OrderPage{

    constructor(private readonly page:Page){}

   getOrderStatus(){
     return Locators.orderStatus(this.page);
  }
}