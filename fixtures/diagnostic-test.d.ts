import { expect } from '@playwright/test';
import { type Applogger } from '../src/logger';
type DiagnosticFixtures = {
    correlationId: string;
    log: Applogger;
};
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & DiagnosticFixtures, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export { expect };
//# sourceMappingURL=diagnostic-test.d.ts.map