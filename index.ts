import * as Express from "express";
import logger from "./src/logger/Logger";
import config from "./src/config/Config";
import { middleware } from "./src/config/middleware";

class App {
    options: any;
    application: Express.Application;

    constructor() {
        this.application = Express();
    }

    private async configureDependencies() {
        middleware(this.application);
        // configureRoutes();
    }

    public async init() {
        try {
            await this.configureDependencies();
            logger.log("All the dependencies loaded successfully!");
        } catch (e) {
            logger.error("Unable to load the configuration dependencies, Exception :" + e);
        }
    }

    private onServerListening() {
        logger.log("Server listening on port: " + config.getPort());
    }

    private onException() {
        process.on("uncaughtException", function (err) {
            console.log(err);
            logger.error("Pheew ...! Something unexpected happened. This should be handled more gracefully. " +
                "I am sorry. The culprit is: " + err);
            process.exit(1);
        });
    }

    public startServer() {
        this.application.listen(config.getPort(), this.onServerListening);
        this.onException();
    }
}

export const serverInstance = new App();
serverInstance.init().then(() => {
    serverInstance.startServer();
}).catch((exception) => {
    logger.error(exception);
    logger.error("Not able to start the server, Existing from here.");
    process.exit(1);
});