import { Page } from "playwright/test";
export declare class shopflow {
    private readonly page;
    private readonly homepage;
    private readonly loginpage;
    private readonly catalogpage;
    private readonly cartpage;
    private readonly productpage;
    private readonly checkoutpage;
    private readonly orderpage;
    constructor(page: Page);
    openHomePage(): Promise<void>;
    makeSignIn(): Promise<void>;
    enterEmailAndPassword(email: string, password: string): Promise<void>;
    clickOnSignIn(): Promise<void>;
    searchProduct(product: string): Promise<void>;
    theProducts(): import("playwright/test").Locator;
    clickTheProduct(): Promise<void>;
    addTheProductToCart(): Promise<void>;
    makeAcheckout(): Promise<void>;
    enterTheAddress(address: string): Promise<void>;
    placeTheOrder(): Promise<void>;
    checkTheStatus(): import("playwright/test").Locator;
}
//# sourceMappingURL=shopflow.d.ts.map