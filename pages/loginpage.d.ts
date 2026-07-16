import { Page } from "playwright";
export declare class LoginPage {
    private readonly page;
    constructor(page: Page);
    enterTheEmail(email: string): Promise<void>;
    enterThePassword(password: string): Promise<void>;
    clickSignIn(): Promise<void>;
}
//# sourceMappingURL=loginpage.d.ts.map