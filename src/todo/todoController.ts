import Logger from "../logger/Logger";
import todoService from "./TodoService";

async function getAllTodos(req, res) {
    try {
        let todos = await todoService.getAll();
        if (todos.length) {
            res.status(200).json(todos);
        } else {
            res.status(204).end();
        }
    } catch (err) {
        Logger.error(err);
        res.status(500).end();
    }
}

async function getTodo(req, res) {
    try {
        let todo = await todoService.get(req.params.id);
        if (todo.length) {
            res.status(200).json(todo);
        } else {
            res.status(404).end();
        }
    } catch (err) {
        Logger.error(err);
        res.status(500).end();
    }
}

async function addTodo(req, res) {
    try {
        let todo = await todoService.add({ data: req.body });
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(400).end();
        }
    } catch (err) {
        Logger.error(err);
        res.status(500).end();
    }
}

async function updateTodo(req, res) {
    try {
        let todo = await todoService.update(req.params.id, { data: req.body });
        if (todo.modifiedCount) {
            res.status(200).json(todo);
        } else {
            res.status(404).end();
        }
    } catch (err) {
        Logger.error(err);
        res.status(500).end();
    }
}

async function deleteTodo(req, res) {
    try {
        let todo = await todoService.delete(req.params.id);
        if (todo.deletedCount) {
            res.status(204).json(todo);
        } else {
            res.status(404).end();
        }
    } catch (err) {
        Logger.error(err);
        res.status(500).end();
    }
}

export { getAllTodos, getTodo, addTodo, updateTodo, deleteTodo }