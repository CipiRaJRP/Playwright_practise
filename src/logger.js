"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.redactForLog = redactForLog;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json, errors, printf } = winston_1.default.format;
const sensitiveKeys = new Set(["authorization", "cardnumber", "cvv", "password", "token"]);
const logFormat = printf(({ level, message }) => {
    return `[${level.toUpperCase()}] - ${message}`;
});
function redactForLog(value) {
    if (Array.isArray(value)) {
        return value.map(redactForLog);
    }
    if (!value || typeof value !== "object") {
        return value;
    }
    return Object.fromEntries(Object.entries(value).map(([key, fieldvalue]) => [
        key,
        sensitiveKeys.has(key.toLowerCase()) ? "REDACTED" : redactForLog(fieldvalue),
    ]));
}
const redactSensitiveFields = winston_1.default.format((info) => {
    for (const [key, value] of Object.entries(info)) {
        if (sensitiveKeys.has(key.toLowerCase())) {
            info[key] = "REDACTED";
        }
        else {
            info[key] = redactForLog(value);
        }
    }
    return info;
});
exports.logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL ?? "info",
    format: combine(redactSensitiveFields(), winston_1.default.format.errors({ stack: true }), logFormat),
    transports: [new winston_1.default.transports.Console()],
});
//# sourceMappingURL=logger.js.map