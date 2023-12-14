// import express from "express";
import { Router } from "express";
import { Todo } from "../models/todo";
// const todos: string[] = []; => non-Generics
// const todos: Array<string>[] = []; // Generics
let todos: Todo[] = []; // non-Generics

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
  // res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
  res.status(201).json({ message: "Added Todo", todos: todos }); // show us all created items stored in the array.
});

router.put("/todo/:todoId", (req, res, next) => {
  const tId = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      //   id: new Date().toISOString(),
      id: todos[todoIndex].id, // we keep the old Id and don't edit it!
      text: req.body.text,
    };
    // return res.status(200).json({ message: "Updated todo", todos: todos }); // show us all items
    // including the updated one!
    return res
      .status(200)
      .json({ message: "Updated todo", todos: todos[todoIndex] }); // show us only updated item
  }
  res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const tId = req.params.todoId;
  todos = todos.filter((totoItem) => totoItem.id !== tId);
  return res.status(200).json({ message: "Deleted todo", todos: todos });

  // or in a second way:
  // const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
  // if (todoIndex >= 0) {
  //   todos.splice(todoIndex, 1);
  //   return res.status(200).json({ message: "Deleted todo", todos: todos });
  // }
  // res.status(404).json({ message: "Could not find todo for this id" });
});
// module.exports = router;
export default router;
