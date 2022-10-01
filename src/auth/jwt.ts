import * as jwt from 'jsonwebtoken';
import config from "../config/Config";
// import { expressjwt as expressJwt } from "express-jwt";


class Authentication {

    generateToken(data) {
        return jwt.sign(data, config.getSecretKey(), {
            expiresIn: 30 * 24 * 60 * 60
        });
    }

    verify(token) {
        if(token) {
            token = token.split(" ")[1];
        }
        return jwt.verify(token, config.getSecretKey());
    }

}
const authenticate = new Authentication();

export { authenticate as Authentication };