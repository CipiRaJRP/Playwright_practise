"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const diagnostic_test_1 = require("../fixtures/diagnostic-test");
const shopflow_1 = require("../flows/shopflow");
exports.test = diagnostic_test_1.test.extend({
    shop: async ({ page }, use) => {
        await use(new shopflow_1.shopflow(page));
    }
});
var test_1 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_1.expect; } });
//# sourceMappingURL=shopfixtures.js.map