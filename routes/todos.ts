// import express from "express";
import { Router } from "express";

// const todos: string[] = []; => non-generics
const todos: Array<string>[] = []; // Generics

// const router = express.Router();
const router = Router();

router.get("/", (req, res, next) => {
  //   res.send("<h1>Hallo Babyline!</h1>");
  res.status(200).json({
    todos: todos,
  });
});

// module.exports = router;
export default router;
