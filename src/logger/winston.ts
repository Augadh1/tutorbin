const { format } = require("winston");
const winston = require("winston");

const winstonLogger = winston.createLogger({
    format: format.combine(
        format.errors({
            stack: true
        }),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.simple(),
    ),
    transports: [
        new (winston.transports.Console)({
            level: "debug",
            colorize: true
        }),
        new winston.transports.File({
            filename: './logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: './logs/combined.log'
        }),
    ],
})

export default winstonLogger