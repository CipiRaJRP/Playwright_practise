"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const test_1 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_1.expect; } });
const node_crypto_1 = __importDefault(require("node:crypto"));
const logger_1 = require("../src/logger");
exports.test = test_1.test.extend({
    correlationId: async ({}, use) => {
        await use(node_crypto_1.default.randomUUID());
    },
    log: async ({ page, correlationId }, use, testInfo) => {
        await page.setExtraHTTPHeaders({
            'x-correlation-id': correlationId,
        });
        const baseMeta = {
            correlationId,
            testTitle: testInfo.project.name,
            service: 'sdet-retail-playwright',
            specFile: testInfo.file,
            testId: testInfo.title,
            workerIndex: testInfo.workerIndex,
        };
        const log = logger_1.logger.child(baseMeta);
        const lines = [];
        const diagnosticLog = log;
        for (const level of ['error', 'warn', 'info', 'http', 'debug']) {
            const originalMethod = log[level];
            diagnosticLog[level] = ((message, meta = {}) => {
                if (log.isLevelEnabled(level)) {
                    lines.push(JSON.stringify((0, logger_1.redactForLog)({
                        ...baseMeta,
                        ...meta,
                        level,
                        message,
                        timestamp: new Date().toISOString(),
                    })));
                }
                originalMethod?.(message, meta);
                return diagnosticLog;
            });
        }
        diagnosticLog.info('test started');
        await use(diagnosticLog);
        diagnosticLog.info('test finished', { status: testInfo.status ?? 'unknown' });
        if (testInfo.status !== testInfo.expectedStatus && lines.length > 0) {
            await testInfo.attach('log.ndjson', {
                body: lines.join('\n'),
                contentType: 'application/json',
            });
        }
    },
});
//# sourceMappingURL=diagnostic-test.js.map