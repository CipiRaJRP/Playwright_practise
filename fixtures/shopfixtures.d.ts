import { shopflow } from '../flows/shopflow';
type PageFixtures = {
    shop: shopflow;
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & {
    correlationId: string;
    log: import("../src/logger").Applogger;
} & PageFixtures, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export { expect } from "@playwright/test";
//# sourceMappingURL=shopfixtures.d.ts.map