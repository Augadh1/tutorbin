import * as Express from "express";
import { Authentication as jwt } from "../auth/jwt";
import Logger from "../logger/Logger";
import { todoRouter } from "../routes/todoRouts";

let bodyParser = require("body-parser");

function middleware(application) {
    if (!application) {
        application = Express();
    }
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({
        extended: true
    }));
    application.use((req, res, next) => {
        try {
            jwt.verify(req.headers.authorization);
            next();
        } catch (err) {
            Logger.error("unauthorized" + err);
            res.status(401).end();
        }
    });
    application.use('/api/', todoRouter);
};

export { middleware };