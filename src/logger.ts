import winston from "winston";

const { combine, timestamp, json, errors,printf} = winston.format;
const sensitiveKeys = new Set(["authorization", "cardnumber", "cvv", "password", "token"]);
export function redactForLog(value: unknown): unknown {
   if (Array.isArray(value)) {
      return value.map(redactForLog);
   }

   if (!value || typeof value !== "object") {
      return value;
   }

   return Object.fromEntries(
      Object.entries(value).map(([key, fieldvalue]) => [
         key,
         sensitiveKeys.has(key.toLowerCase()) ? "REDACTED" : redactForLog(fieldvalue),
      ])
   );
}

const redactSensitiveFields = winston.format((info) => {
   for (const [key, value] of Object.entries(info)) {
      if (sensitiveKeys.has(key.toLowerCase())) {
         info[key] = "REDACTED";
      } else {
         info[key] = redactForLog(value);
      }
   }

   return info;
});

export const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printf(({ timestamp, level, message }) =>
      `[${timestamp}] [${level.toUpperCase()}] - ${message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

export type Applogger = typeof logger;
