import winstonLogger from "./winston";

class Logger {
    static instance: Logger;

    private constructor() { }

    static getInstance() {
        if (!Logger.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    log(logMessage) {
        winstonLogger.info(logMessage);
    }

    error(error) {
        winstonLogger.error(error);
    }
}

export default Logger.getInstance();