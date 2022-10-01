import * as fs from "fs";
import * as path from "path";

class Config {
    private static instance;

    private config: any;

    private constructor() {
        this.read(path.resolve(__dirname, "./config.json"));
    }

    static getInstance() {
        if (!this.instance) { this.instance = new Config(); }
        return this.instance;
    }

    getPort(): string {
        return this.config.port;
    }

    read(path: string) {
        let file = fs.readFileSync(path, "utf-8");
        this.config = JSON.parse(file);
    }

    getSecretKey(): string {
        return this.config["secret-key"];
    }

    getDbUrl(): string {
        return this.config.dbUrl;
    }

    getDbName(): string {
        return this.config.dbName;
    }
}

export default Config.getInstance();