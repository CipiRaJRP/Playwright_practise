"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = (0, test_1.defineConfig)({
    testDir: "./tests",
    timeout: 30_000,
    fullyParallel: true,
    workers: process.env.CI ? 4 : undefined,
    retries: process.env.CI ? 2 : 0,
    reporter: [["html"], ["list"], ["blob"]],
    use: {
        baseURL: process.env.BASE_URL,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        {
            name: "chromium",
            use: { ...test_1.devices["Desktop Chrome"] }
        }
    ]
});
//# sourceMappingURL=playwright.config.js.map