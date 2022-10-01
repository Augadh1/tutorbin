import * as express from 'express';
import * as todoController from "../todo/todoController";

let todoRouter: express.Router = express.Router();

todoRouter.get('/todos', todoController.getAllTodos);

todoRouter.get('/todos/:id', todoController.getTodo);

todoRouter.post('/todos', todoController.addTodo);

todoRouter.put('/todos/:id', todoController.updateTodo);

todoRouter.delete('/todos/:id', todoController.deleteTodo);

export { todoRouter }