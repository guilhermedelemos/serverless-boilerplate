import winston from 'winston';

let customFormat;
if (process.env.NODE_ENV === 'production') {
    customFormat = winston.format.json();
} else {
    customFormat = winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    );
}

let logLevel = 'error';
if (process.env.LOG_LEVEL === 'debug') {
    logLevel = 'debug';
} else if (process.env.LOG_LEVEL === 'verbose') {
    logLevel = 'verbose';
} else if (process.env.LOG_LEVEL === 'info') {
    logLevel = 'info';
} else if (process.env.LOG_LEVEL === 'warn') {
    logLevel = 'warn';
} else if (process.env.LOG_LEVEL === 'error') {
    logLevel = 'error';
} else {
    logLevel = 'error';
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { component: 'lex-audio' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({
            level: logLevel,
            format: customFormat,
        }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
/* if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
} */

export default logger;
