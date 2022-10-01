import { MongoDbConnectionManager } from "./connectionManager/ConnectionManager";

class Database {

    async find(query: object = {}) {
        const db = await MongoDbConnectionManager.getInstance().getDbConnection();
        const collection = db.collection("todo");
        let results = await collection.find(query).toArray();
        return results
    }

    async insert(document: Object) {
        const db = await MongoDbConnectionManager.getInstance().getDbConnection();
        const collection = db.collection("todo");
        return await collection.insertOne(document);
    }

    async update(query: object, options: object) {
        const db = await MongoDbConnectionManager.getInstance().getDbConnection();
        const collection = db.collection("todo");
        return await collection.update(query, { $set: options })
    }

    async delete(query: object) {
        const db = await MongoDbConnectionManager.getInstance().getDbConnection();
        const collection = db.collection("todo");
        return await collection.deleteOne(query);
    }
}

export default new Database()