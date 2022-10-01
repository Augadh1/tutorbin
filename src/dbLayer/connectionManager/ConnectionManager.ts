import { IConnectionManager } from "./IConnectionManager";
import config from "../../config/Config"

const { MongoClient } = require('mongodb');

export class MongoDbConnectionManager implements IConnectionManager {
    static instance: MongoDbConnectionManager;

    private constructor() { }

    public static getInstance() {
        if (!this.instance) { this.instance = new MongoDbConnectionManager(); }
        return this.instance;
    }

    public async getDbConnection() {
        const client = new MongoClient(this.getDbUrl());
        await client.connect();
        const db = client.db(this.getDbName());
        return db;
    }

    private getDbUrl() {
        return config.getDbUrl();
    }

    private getDbName() {
        return config.getDbName()
    }
}