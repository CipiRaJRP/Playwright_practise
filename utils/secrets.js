"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secrets = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Secrets {
    static get(key) {
        const value = process.env[key.toUpperCase()] ??
            process.env[key];
        if (!value) {
            throw new Error(`Missing secret: ${key}`);
        }
        return value;
    }
}
exports.Secrets = Secrets;
//# sourceMappingURL=secrets.js.map