"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const express_1 = require("express");
let todos = []; // non-Generics
// const router = express.Router();
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    //   res.send("<h1>Hallo Babyline!</h1>");
    res.status(200).json({
        todos: todos,
    });
});
router.post("/todo", (req, res, next) => {
    // const body = req.body
    // const body = req.body as { text: string };
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        // text: req.body.text,
        text: body.text,
    };
    todos.push(newTodo);
    // res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
    res.status(201).json({ message: "Added Todo", todos: todos }); // show us all created items stored in the array.
});
router.put("/todo/:todoId", (req, res, next) => {
    // const tId = req.params.todoId;
    const tId = req.params;
    const body = req.body;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId.todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            //   id: new Date().toISOString(),
            id: todos[todoIndex].id, // we keep the old Id and don't edit it!
            // text: req.body.text,
            text: body.text,
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
    // const tId = req.params.todoId;
    const tId = req.params;
    todos = todos.filter((totoItem) => totoItem.id !== tId.todoId);
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
exports.default = router;
