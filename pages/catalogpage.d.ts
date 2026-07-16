import { Page } from "playwright";
export declare class CatalogPage {
    private readonly page;
    constructor(page: Page);
    searchForAProductInCatalogPage(product: string): Promise<void>;
    getproducts(): import("playwright").Locator;
    selectTheProduct(): Promise<void>;
    addtoCart(): Promise<void>;
}
//# sourceMappingURL=catalogpage.d.ts.map