// import express from "express";
import { Router } from "express";
import { Todo } from "../models/todo";
// const todos: string[] = []; => non-Generics
// const todos: Array<string>[] = []; // Generics
const todos: Todo[] = []; // non-Generics

// const router = express.Router();
const router = Router();

router.get("/", (req, res, next) => {
  //   res.send("<h1>Hallo Babyline!</h1>");
  res.status(200).json({
    todos: todos,
  });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
});

// module.exports = router;
export default router;
