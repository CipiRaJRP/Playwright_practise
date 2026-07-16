import { Page } from "playwright";
export declare class CheckoutPage {
    private readonly page;
    constructor(page: Page);
    enterAddress(address: string): Promise<void>;
    placeOrder(): Promise<void>;
}
//# sourceMappingURL=checkoutpage.d.ts.map