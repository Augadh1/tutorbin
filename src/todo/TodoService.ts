const ObjectId = require("mongodb").ObjectId;
import database from "../dbLayer/Database";

class TodoService {
    async getAll() {
        return await database.find({});
    }

    async get(id) {
        return await database.find({ _id: new ObjectId(id) });
    }

    async update(id, options) {
        return await database.update({ _id: new ObjectId(id) }, options);
    }

    async add(todo) {
        return await database.insert(todo);
    }

    async delete(id) {
        return await database.delete({ _id: new ObjectId(id) });
    }
}

export default new TodoService()